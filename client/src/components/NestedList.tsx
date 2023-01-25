import { useState } from "react";
import { DragDropContext as DragAndDrop } from 'react-beautiful-dnd';
import { Drop } from './Drop';
import { Drag } from './Drag';
import { reorder } from "../utils/helpers";

export const NestedList = () => {
  const [categories, setCategories] = useState([
    {
      id: "q101",
      name: "Category 1",
      items: [
        { id: "abc", name: "First" },
        { id: "def", name: "Second" }
      ]
    },
    {
      id: "wkqx",
      name: "Category 2",
      items: [
        { id: "ghi", name: "Third" },
        { id: "jkl", name: "Fourth" }
      ]
    }
  ]);

  const handleDragEnd = (result: any) => {
    const { type, source, destination } = result;
    if (!destination) return;

    const sourceCategoryId = source.droppableId;
    const destinationCategoryId = destination.droppableId;

    // Reordering items
    if (type === "droppable-item") {
      // If drag and dropping within the same category
      if (sourceCategoryId === destinationCategoryId) {
        const updatedOrder = reorder(
          categories.find((category) => category.id === sourceCategoryId)!.items,
          source.index,
          destination.index
        );
        const updatedCategories: any = categories.map((category) =>
          category.id !== sourceCategoryId
            ? category
            : { ...category, items: updatedOrder }
        );

        setCategories(updatedCategories);
      } else {
        const sourceOrder = categories.find(
          (category) => category.id === sourceCategoryId
        )!.items;
        const destinationOrder = categories.find(
          (category) => category.id === destinationCategoryId
        )!.items;

        const [removed]: any = sourceOrder.splice(source.index, 1);
        destinationOrder.splice(destination.index, 0, removed);

        destinationOrder[removed] = sourceOrder[removed];
        delete sourceOrder[removed];

        const updatedCategories = categories.map((category) =>
          category.id === sourceCategoryId
            ? { ...category, items: sourceOrder }
            : category.id === destinationCategoryId
            ? { ...category, items: destinationOrder }
            : category
        );

        setCategories(updatedCategories);
      }
    }

    // Reordering categories
    if (type === "droppable-category") {
      const updatedCategories: any = reorder(
        categories,
        source.index,
        destination.index
      );

      setCategories(updatedCategories);
    }
  };

  return (
    <DragAndDrop onDragEnd={handleDragEnd}>
      <Drop id="droppable" type="droppable-category">
        {categories.map((category, categoryIndex) => {
          return (
            <Drag
              className="draggable-category"
              key={category.id}
              id={category.id}
              index={categoryIndex}
            >
              <div className="category-container">
                <h2 className="item">{category.name}</h2>

                <Drop key={category.id} id={category.id} type="droppable-item">
                  {category.items.map((item, index) => {
                    return (
                      <Drag
                        className="draggable"
                        key={item.id}
                        id={item.id}
                        index={index}
                      >
                        <div className="item">{item.name}</div>
                      </Drag>
                    );
                  })}
                </Drop>
              </div>
            </Drag>
          );
        })}
      </Drop>
    </DragAndDrop>
  );
};

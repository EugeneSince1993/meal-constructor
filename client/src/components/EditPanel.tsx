import { Button } from "./Button";
import deleteIcon from "../assets/img/delete-icon.svg";
import copyIcon from "../assets/img/copy.svg";
import inselectIcon from "../assets/img/inselect.svg";

export const EditPanel = () => {
  return (
    <div className="edit-panel">
      <div className="edit-panel__buttons">
        <Button variant="outlined">
          <img src={deleteIcon} alt="delete-icon" />
          <span>Удалить</span>
        </Button>
        <Button variant="outlined">
          <img src={copyIcon} alt="copy-icon" />
          <span>Копировать</span>
        </Button>
        <Button variant="outlined">
          <img src={inselectIcon} alt="inselect-icon" />
          <span>Снять выделения</span>
        </Button>
      </div>
      <div className="edit-panel__total total">
        <div className="total__selected selected">
          <span className="selected__text">Выбранные ингредиенты:</span>
          <span className="selected__quantity">2</span>
        </div>
        <div className="total__vertical-dash">|</div>
        <div className="total__weight weight">
          <span className="weight__text">Общий вес:</span>
          <span className="weight__quantity">24</span>       
        </div>
      </div>
    </div>
  );
};
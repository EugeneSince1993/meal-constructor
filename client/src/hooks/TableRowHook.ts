interface Props {
  value1: number;
  value2: string;
}

export const TableRowHook = ({
  value1,
  value2
}: Props) => {

  console.log("value1: ", value1, "value2", value2);

  return {
    response: `value1 is ${value1}, value 2 is ${value2}`
  };
};
import Table from "../../../components/Table";
import { headData, tableData } from "./consts";

const ResultSection = (props) => {
  const { onDialog } = props;

  /** table button choose */
  const hanldeClick = (row) => () => {
    onDialog(true, row);
  };

  /** 自定義渲染 */
  const cellRender = (row, field) => {
    switch (field) {
      case "choose":
        return (
          <button type="button" onClick={hanldeClick(row)}>
            choose
          </button>
        );

      default:
        return row[field];
    }
  };

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Table head={headData} data={tableData} cellRender={cellRender} />
      </div>
    </>
  );
};

export default ResultSection;

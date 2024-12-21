import { useState } from "react";
import QuerySection from "./QuerySection";
import ResultSection from "./ResultSection";
import Dialog from "../../components/Dialog";

const Demo = () => {
  const [showTable, setShowTable] = useState(false);
  const [showDailog, setShowDailog] = useState(false);
  const [rowData, setRowData] = useState("");

  /**  table出現 */
  const handleSubmit = (show) => {
    setShowTable(show);
  };

  /** 對話框出現 */
  const handleShowDiaog = (show, row) => {
    setRowData(JSON.stringify(row));
    setShowDailog(show);
  };

  /** 對話框取消 */
  const handleCancel = () => {
    setRowData("");
    setShowDailog(false);
  };

  // const doApi = async () => {
  //   // const apiUrl = "http://api.aaa.com/use";
  //   const response = await fetch(apiUrl).then((res) => res.json());
  //
  // };

  /** 對話框確認 可執行api */
  const handleConfirm = () => {
    // doApi()
    setRowData("");
    setShowDailog(false);
  };

  return (
    <>
      <Dialog
        show={showDailog}
        content={rowData}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
      <div
        style={{
          minHeight: "100vh",
          filter: showDailog ? "blur(5px)" : "unset",
        }}
      >
        <QuerySection onSubmit={handleSubmit} />
        {showTable && <ResultSection onDialog={handleShowDiaog} />}
      </div>
    </>
  );
};

export default Demo;

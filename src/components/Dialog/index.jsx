const Dialog = (props) => {
  const {
    show,
    title = "系統訊息",
    content = " sql內容.....",
    onCancel,
    onConfirm,
  } = props;

  return show ? (
    <div
      className="dialog"
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        margin: "auto",
        background: "rbga(0,0,0,.5)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "500px",
          minHeight: "200px",
          border: "1px solid #000",
          marginBottom: "10px",
        }}
      >
        <div
          className="title"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            borderBottom: "1px solid #000",
          }}
        >
          <p style={{ padding: "0 5px" }}>{title}</p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <p style={{ padding: "0 5px" }}>{content}</p>
        </div>
      </div>
      <div style={{ display: "flex", gap: "15px", justifyContent: "center" }}>
        <button onClick={onCancel}>取消</button>
        <button onClick={onConfirm}>確定</button>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Dialog;

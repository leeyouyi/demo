const Table = (props) => {
  const { head, data, cellRender } = props;
  return (
    <table style={{ width: "800px" }}>
      <thead>
        <tr style={{ height: "50px" }}>
          {Object.keys(head).map((row, idx) => {
            return <th key={"thead-row-th" + idx}>{row}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, idx) => {
          return (
            <tr key={"tbody-row" + idx} style={{ height: "50px" }}>
              {Object.keys(head).map((key, i) => {
                return (
                  <td key={"tbody-row-td" + i}>
                    {cellRender ? cellRender(row, key) : row[key]}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>

      {/* <tr>
    <th>owner</th>
    <th>name</th>
    <th>choose</th>
  </tr>
  <tr>
    <td>user1</td>
    <td>jack</td>
    <td></td>
  </tr> */}
    </table>
  );
};

export default Table;

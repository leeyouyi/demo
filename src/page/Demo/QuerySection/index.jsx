import { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";
import {
  initMaster,
  actionOptions,
  typeOptions,
  isBoolOptions,
  dropdownStyle,
  inputStyle,
} from "./consts";

const QuerySection = (props) => {
  const { onSubmit } = props;
  const [master, setMaster] = useState(initMaster);
  const [showBool, setShowBool] = useState(false);

  /** select onChange 判斷name 更改state */
  const handleDropdownChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // prev為之前的state
    setMaster((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  /** input onChange */
  const handleInputChange = (e) => {
    const value = e.target.value;
    setMaster((prev) => ({
      ...prev,
      dbName: value,
    }));
  };

  // const getApi = async () => {
  //   // const apiUrl = "http://api.aaa.com/use";
  //   const apiUrl = "http://localhost:3000/posts";
  //   const data = await fetch(apiUrl).then((res) => res.json());
  //   return data;
  // };

  /** submut送出 */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, action, dbName } = master;
    if (type === "" && action === "" && dbName === "") {
      return;
    }
    // 下方 call api
    // const data = await getApi();
    // if (data && data.length !== 0) {
    //   onSubmit(true);
    // }
    onSubmit(true);
  };

  /** 重置 */
  const handleReset = () => {
    setMaster(initMaster);
    onSubmit(false);
  };

  /** 監聽action為add, type為snapshot isBool 其餘不顯示 */
  useEffect(() => {
    if (master.type === "snapshot" && master.action === "add") {
      setShowBool(true);
    } else if (showBool) {
      setShowBool(false);
    }
  }, [master, showBool]);

  return (
    <div style={{ margin: "30px 0" }}>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
            height: "50px",
          }}
        >
          <div>
            <span style={{ padding: "0 10px" }}>type</span>
            <Dropdown
              style={dropdownStyle}
              name="type"
              value={master.type}
              options={typeOptions}
              onChange={handleDropdownChange}
            />
          </div>
          <div>
            <span style={{ padding: "0 10px" }}>action</span>
            <Dropdown
              style={dropdownStyle}
              name="action"
              value={master.action}
              options={actionOptions}
              onChange={handleDropdownChange}
            />
          </div>

          {showBool && (
            <>
              <div>
                <span style={{ padding: "0 10px" }}>isBool</span>
                <Dropdown
                  style={dropdownStyle}
                  name="isBool"
                  value={master.isBool}
                  options={isBoolOptions}
                  onChange={handleDropdownChange}
                />
              </div>
            </>
          )}
          <div>
            <span style={{ padding: "0 10px" }}>輸入</span>
            <input
              style={inputStyle}
              type="text"
              name="dbName"
              value={master.dbName}
              onChange={handleInputChange}
            />
          </div>
          <div style={{ display: "flex", gap: "10px", padding: "0 10px" }}>
            <button type="submit">submit</button>
            <button type="button" onClick={handleReset}>
              reset
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default QuerySection;

import React from "react";
import './viewList.css'
function ViewMyList({ data, setData }) {

  function removeData(index) {
    data.splice(index, 1);
    setData([...data]);
  }


  return (
    <div>
      <div className="footer">
        <div className="heading">
          <h1>URL</h1>
          <h1>Unique Key</h1>
          <h1>Remove</h1>
        </div>
      </div>

      {data.map((val, index) => {
        return (
          <div className="field">
            <h3>{val.url}</h3>
            <h3>{val.key}</h3>
            <button className="inpBtn" onClick={() => removeData(index)}>
              Remove
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default ViewMyList;

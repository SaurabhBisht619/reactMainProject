import React, { useState, useEffect } from "react";
import "./form.css";
function Form({ onSubmit }) {
  const [formData, setFormData] = useState({
    url: "",
    key: "",
  });

  function addData(e) {
    e.preventDefault();
    if (formData.url === "" || formData.key === "") {
      alert("Please enter both url and key");
      return;
    }

    onSubmit(formData);
  }


  useEffect(() => {
    const savedData = localStorage.getItem('myData');
    if(savedData)
    setFormData(JSON.parse(savedData));
  }, []);


  useEffect(() => {
    localStorage.setItem('myData', JSON.stringify(formData));
  }, [formData]);

  return (
    <form className="formContainer" onSubmit={addData}>
      <div className="topHeader"></div>
      <div class="nameDiv">
        <div class="name">
          Enter The URL <span class="required">*</span>
        </div>
        <div class="inputDiv">
          <input
            type="text"
            name="Name"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            id="name"
            placeholder="Your Answer"
            required
          />
        </div>
      </div>

      <div class="mobileDiv">
        <div class="name">
          Enter Unique Key <span class="required">*</span>
        </div>
        <div class="inputDiv">
          <input
            type="number"
            name="Mobile No"
            value={formData.key}
            onChange={(e) => setFormData({ ...formData, key: e.target.value })}
            placeholder="Your Answer"
            required
          />
        </div>
      </div>

      <input class="btn" type="Submit" name="Submit" id="" />
    </form>
  );
}

export default Form;

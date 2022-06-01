import React from "react";
import { useState } from "react";
import "../App.css";
import DatePicker from "react-date-picker";
import Select from "react-select";
import Header from "./Header";
import { Validate } from "./Validate";
import { Options } from "./Options";

const Form = () => {
  const [input, setInput] = useState({
    Fname: "",
    Lname: "",
    Dob: "",
    Gender: "",
    Pincode: "",
    Number: "",
    Bgroup: "",
    Allergies: "",
    Comorbidities: "",
  });
  const [value, onChange] = useState();
  const [error, setError] = useState({});
  const [start, setStart] = useState(false);

  const handleSubmit = () => {
    setError(Validate(input));
    console.log(error);
    setStart(true);
  };

  return (
    <div>
      {" "}
      <form>
        <Header />
        <div className="form_main">
          <label>First Name</label>
          <input
            type="text"
            value={input.Fname}
            onChange={(e) => {
              setInput({ ...input, Fname: e.target.value });
            }}
          />{" "}
          <br />
          <span className="span_main">{error.Fname}</span>
          <br />
          <label>Last Name </label>
          <input
            type="text"
            value={input.Lname}
            onChange={(e) => {
              setInput({ ...input, Lname: e.target.value });
            }}
          />
          <br />
          <span className="span_main">{error.Lname}</span>
          <br />
          <label>Date of Birth</label>
          <DatePicker
            onChange={onChange}
            value={value}
            format="dd-MM-yyyy"
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
          />
          <br />
          <label>Gender</label>
          <select
            value={input.Gender}
            onChange={(e) => setInput({ ...input, Gender: e.target.value })}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <br />
          <span className="span_main">{error.Gender}</span>
          <br />
          <label>Pincode</label>
          <input
            type="number"
            name="pincode"
            placeholder="000000"
            value={input.Pincode}
            onChange={(e) => {
              setInput({ ...input, Pincode: e.target.value });
            }}
          />
          <br />
          <span className="span_main">{error.Pincode}</span>
          <br />
          <label>Emergency Contact Number</label>
          <input
            type="number"
            placeholder=" (+91)-00000-00000"

            value={input.Number}
            onChange={(e) => {
              setInput({ ...input, Number: e.target.value });
            }}
          />{" "}
          <br />
          <span className="span_main">{error.Number}</span>
          <br />
          <label>Blood Group</label>
          <select
            value={input.Bgroup}
            onChange={(e) => {
              setInput({ ...input, Bgroup: e.target.value });
            }}
          >
            <option value="">Blood Group</option>
            <option value="A-">A-</option>
            <option value="A+">A+</option>
            <option value="B-">B-</option>
            <option value="B+">B+</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB+">AB-</option>
          </select>
          <br />
          <span className="span_main">{error.Bgroup}</span>
          <br />
          <label htmlFor="name">Allergies</label>
          <div className="select_options"> <Select options={Options} isMulti /> </div>
          <br />
          <label htmlFor="name">Co-morbidities</label>
          <div className="select_options"> <Select options={Options} isMulti /> </div>

          <br />
          <button
            className="Btn"
            type="button"
            onClick={() => {
              handleSubmit();
            }}
          >
            Create Profile
          </button>
          <br />
          {Object.keys(error).length === 0 && start ? (
            <span className="span_main1">Profile Created successfully</span>
          ) : (
            ""
          )}
        </div>
      </form>
    </div>
  );
};

export default Form;

const Validate = (value) => {
  const err = {};

  if (!value.Fname) {
    err.Fname = "First Name is required";
  }
  if (!value.Lname) {
    err.Lname = "Last Name is required";
  }
  if (!value.Gender) {
    err.Gender = "Please Select Gender";
  }
  if (!value.Pincode) {
    err.Pincode = "Please Enter Pincode";
  } else if (value.Pincode.length < 6) {
    err.Pincode = "Please Enter Valid Pincode";
  }

  if (!value.Bgroup) {
    err.Bgroup = "Please Select Blood Group";
  }
  if (!value.Number) {
    err.Number = "Please Enter Contact Number";
  } else if (value.Number.length < 10) {
    err.Number = "Please Enter Valid Contact Number";
  }

  return err;
};
 export {Validate}
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Adddata = ({ addEntry }) => {
  const formik = useFormik({
    initialValues: {
      datetime: "",
      temperature: ""
    },
    validationSchema: Yup.object({
      datetime: Yup.date().max(new Date(), "Date must be in the past").required("Required"),
      temperature: Yup.number().min(-50, "Too cold").max(50, "Too hot").required("Required")
    }),
    onSubmit: (values, { resetForm }) => {
      addEntry(values);
      resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <label>Date and Time:</label>
        <input
          type="datetime-local"
          name="datetime"
          value={formik.values.datetime}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.datetime && formik.errors.datetime ? (
          <div>{formik.errors.datetime}</div>
        ) : null}
      </div>
      <div>
        <label>Temperature (Celsius):</label>
        <input
          type="number"
          name="temperature"
          value={formik.values.temperature}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.temperature && formik.errors.temperature ? (
          <div>{formik.errors.temperature}</div>
        ) : null}
      </div>
      <button type="submit">Add Entry</button>
      <ul>
        {formik.values.entries?.map((entry, index) => (
          <li key={index}>
            {entry.datetime} - {entry.temperature} °C
          </li>
        ))}
      </ul>
    </form>
  );
};

export default Adddata;

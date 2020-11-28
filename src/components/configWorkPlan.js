import React from "react";
import { withFormik } from "formik";

export const Dayes = [
  {
    id: 1,
    name: "Monday",
    isChecked: false,
  },
  {
    id: 2,
    name: "Tuesday",
    isChecked: false,
  },
  {
    id: 3,
    name: "Wednesday",
    isChecked: false,
  },
  {
    id: 4,
    name: "Thursday",
    isChecked: false,
  },
  {
    id: 5,
    name: "Friday",
    isChecked: false,
  },
  {
    id: 6,
    name: "Saturday",
    isChecked: false,
  },
  {
    id: 7,
    name: "Sunday",
    isChecked: false,
  },
];

const formLayout = ({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit} className="config-work-plan-form">
      <h1 className="title">Config Work Plan</h1>
      {Dayes.map((day) => (
        <div key={day.id} className="day-checkbox">
          <label htmlFor={day.name}>{day.name}</label>
          <input
            type="checkbox"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values[day.isChecked]}
            name={day.name}
            id={day.name}
          />
        </div>
      ))}
      <hr />
      <div className={errors.breackTime ? "invalid field" : "field"}>
        <label htmlFor="breackTime">Breack Time</label>
        <input
          type="time"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.breackTime}
          name="breackTime"
          id="breackTime"
        />
      </div>
      <div className={errors.workHours ? "invalid field" : "field"}>
        <label htmlFor="workHours">Work Hours</label>
        <input
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.workHours}
          name="workHours"
          id="workHours"
          min="1"
        />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

const ConfigWorkPlan = withFormik({
  mapPropsToValues: () => ({
    breackTime: "",
    workHours: "",
  }),

  // Custom sync validation
  validate: (values) => {
    const errors = {};
    return errors;
  },

  handleSubmit: (values, { props }) => {
    props.setShowTimeViewer(true);
  },
})(formLayout);

export default ConfigWorkPlan;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
const Container = () => (
    <Formik
        initialValues={{ name: "" }}
        onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
                console.log("Logging in", values);
                setSubmitting(false);
            }, 500);
        }}


        validationSchema={Yup.object().shape({
            name: Yup.string()
                .required("No name provided.")
                .min(2, "Name is too short - should be 3 chars minimum.")
        })}
    >
        {props => {
            const {
                values,
                touched,
                errors,
                handleChange,
                handleBlur,
                handleSubmit
            } = props;
            return (
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        name="name"
                        type="name"
                        placeholder="Enter your name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={errors.name && touched.name && "error"}
                    />
                    {errors.name && touched.name && (
                        <div className="input-feedback">{errors.name}</div>
                    )}
                </form>
            );
        }}
    </Formik>
);

export default Container;
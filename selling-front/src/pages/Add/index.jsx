import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./index.scss";
import { Helmet } from "react-helmet-async";
const Add = () => {
  const [data, setData] = useState([]);
  async function Getfetch() {
    try {
      await fetch("http://localhost:3100/products")
        .then((res) => res.json())
        .then((data) => setData(data));
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    Getfetch();
  }, []);
  async function handleSubmit(values) {
    await fetch("http://localhost:3100/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    });
    await Getfetch()
  }
  async function deleteItem(id) {
    await fetch("http://localhost:3100/products/" + id, { method: "DELETE" });
    await Getfetch();
  }
  return (
    <>
    <Helmet>
        <title>Add</title>
      </Helmet>
      <section id="add">
        <div className="add_container">
          <div className="add_content">
            <h2>Add Products</h2>
            <div className="add_form">
              <Formik
                initialValues={{ img: "", title: "" }}
                validationSchema={Yup.object({
                  img: Yup.string().required("Required"),
                  title: Yup.string().required("Required"),
                })}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                  handleSubmit(values);
                  resetForm();
                  setSubmitting(false);
                }}
              >
                <Form>
                  <h4>
                    <label htmlFor="img">Img Url</label>
                  </h4>
                  <Field name="img" type="text" />
                  <ErrorMessage name="img" />

                  <h4>
                    <label htmlFor="title">Title</label>
                  </h4>
                  <Field name="title" type="text" />
                  <ErrorMessage name="title" />

                  <button type="submit">Submit</button>
                </Form>
              </Formik>
            </div>
            <table>
              <tr>
                <th>Img</th>
                <th>Title</th>
                <th>Delete</th>
              </tr>
              {data &&
                data.map((x) => (
                  <tr>
                    <td className="table_img">
                      <img src={x.img} alt="" />
                    </td>
                    <td>{x.title}</td>
                    <td onClick={() => deleteItem(x._id)}>
                      <i class="fa-solid fa-trash"></i>
                    </td>
                  </tr>
                ))}
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Add;

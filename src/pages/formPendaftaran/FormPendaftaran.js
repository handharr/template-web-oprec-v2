import React, { useContext } from "react";
import styles from "../../scss/formPendaftaran.module.scss";

//import components
import { AuthContext } from "../../config";
import { FieldForm } from "../../assets";
import { Navbar, Footer } from "../../components";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

// fungsi untuk menyeleksi field form
const DisplayForm = (val, i) => {
  switch (val.type) {
    case "area":
      return (
        <Form.Item key={val.name} name={val.name} label={val.label}>
          <Input.TextArea placeholder={val.placeholder} />
        </Form.Item>
      );
    default:
      return (
        <Form.Item key={val.name} name={val.name} label={val.label}>
          <Input disabled={val.disabled} placeholder={val.placeholder} />
        </Form.Item>
      );
  }
};

// menginisialisasi value untuk tiap field dari form
const setInitialValue = (state) => {
  let temp = {};

  FieldForm.forEach((val, i) => {
    if (val.disabled) {
      temp[val.name] = state[val.name];
    } else {
      temp[val.name] = "";
    }
  });

  return temp;
};

const FormPendaftaran = () => {
  const [state] = useContext(AuthContext);
  let history = useHistory();

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <h1>Form Pendaftaran</h1>
        <p>Silahkan isi form pendaftaran berikut</p>
        <div className={styles.formSection}>
          <Form
            layout="vertical"
            initialValues={setInitialValue(state)}
            onFinish={(values) => {
              console.log(values);
              history.push("/result");
            }}
          >
            {FieldForm.map(DisplayForm)}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FormPendaftaran;

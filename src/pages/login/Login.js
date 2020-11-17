import React from "react";
import styles from "../../scss/login.module.scss";

//import components
import { Navbar, Footer } from "../../components";
import { useHistory } from "react-router-dom"; // import react-router-dom components
import { Input, Form, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Judul, Tahun } from "../../assets";

const Login = () => {
  let history = useHistory();
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <h1 className={styles.judulForm}>
          Login {Judul.judul2} {Tahun}
        </h1>
        <div className={styles.formSection}>
          <Form layout="vertical" onFinish={() => history.push("/form")}>
            <Form.Item
              name="nim"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your nim!",
              //   },
              // ]}
            >
              <Input
                className={styles.inputField}
                type="number"
                prefix={<UserOutlined />}
                placeholder="NIM"
              />
            </Form.Item>
            <Form.Item
              name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: "Please input your password!",
              //   },
              // ]}
            >
              <Input.Password
                className={styles.inputField}
                prefix={<LockOutlined />}
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item>
              <Button
                className={styles.inputField}
                type="primary"
                htmlType="submit"
                block
              >
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

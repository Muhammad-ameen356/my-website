"use client";
import { Form, Input, Layout } from "antd";

// import { useDispatch, useSelector } from "react-redux";
// import { adminLogin, userLogin } from "redux/actions";
// import { useEffect } from "react";
// import { userIsLoggedIn } from "redux/reducers";
import styles from "./styles.module.css";
import { CustomIcon, Loading, Button } from "@/components";
import { Suspense } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const { Content } = Layout;

const Login = () => {
  const router = useRouter();
  const onFinish = async (values: { email: string; password: string }) => {
    console.log(values);

    const response = await axios.post("/api/admin/login", values);
    router.push("/admin/dashboard");
    console.log(response);
  };

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Content className={styles.loginContent}>
          <div className={styles.loginForm}>
            <h1>Login</h1>
            <Form
              name="normal_login"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                  {
                    type: "email",
                    message: "Please enter a valid email address!",
                  },
                ]}
              >
                <Input
                  prefix={
                    <CustomIcon
                      name="UserOutlined"
                      classname={styles.siteFormItemIcon}
                    />
                  }
                  placeholder="Email"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  { required: true, message: "Please input your Password!" },
                ]}
              >
                <Input
                  prefix={
                    <CustomIcon
                      name="LockOutlined"
                      classname={styles.siteFormItemIcon}
                    />
                  }
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  text="Login"
                  // isLoading={isLoading}
                />
              </Form.Item>
            </Form>
          </div>
        </Content>
      </Layout>
    </Suspense>
  );
};

export default Login;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import { getUser } from "./services/supabase.js";
import { Grid, Space, Typography } from "antd";
import { useEffect } from "react";
import SignUpForm from "./components/SignUpForm.js";
import AppLayout from "./components/AppLayout.js";
import SignInForm from "./components/SignInForm.js";
function App() {
  useEffect(() => {
    async function user() {
      const username = await getUser();
      console.log(username);
      return username;
    }
    void user().then((res) => console.log(res));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route
            path="signup"
            element={
              <Space className="container" align="center" size="large">
                <SignUpForm />
              </Space>
            }
          />
          <Route
            path="login"
            element={
              <Space className="container" align="center" size="large">
                <SignInForm />
              </Space>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;

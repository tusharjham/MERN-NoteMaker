import React, { useState } from "react";
import Header from "./components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginScreen/LoginPage";
import RegisterPage from "./screens/RegisterScreen/RegisterPage";
import { useSelector } from "react-redux";
import CreateNote from "./screens/CreateNote/CreateNote";
import EditNote from "./screens/EditNote/EditNote";
const App = () => {
  const User = useSelector((state) => state.User);
  const { isLoggedIn } = User;
  const [search, setSearch] = useState("");
  // console.log("SEARCH", search);
  return (
    <div className="main">
      <BrowserRouter>
        <Header setSearch={setSearch} />
        <main style={{ height: "100%" }}>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<LoginPage />} exact />
            <Route path="/register" element={<RegisterPage />} exact />
            <Route
              path="/mynotes"
              element={<MyNotes search={search} />}
              exact
            />
            <Route path="/mynotes/:id" element={<EditNote />} exact />
            <Route path="/mynotes/createnote" element={<CreateNote />} exact />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
};

export default App;

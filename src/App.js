import React, { useContext } from "react";
// import Home from "./Components/Pages/HomePage/Home";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import List from "./Pages/ListPage/List";
import SinglePage from "./Pages/SinglePage/SinglePage";
import NewPage from "./Pages/NewPage/NewPage";
import { ProductInputs, UserInputs } from "./Components/Form/FormSource";
import DarkModeContext from "./Components/Context/ModeContext";
import RequireAuth from "./Components/AuthRoute/RequireAuth";
import "./App.css";
function App() {
  // const { darkMode } = useContext(DarkModeContext);
  const ctx = useContext(DarkModeContext);

  return (
    <div className={ctx.darkMode ? "dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="login"
              element={
                <RequireAuth>
                  <Login />
                </RequireAuth>
              }
            />

            <Route path="list">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":ListUsers"
                element={
                  <RequireAuth>
                    <SinglePage />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewPage inputs={UserInputs} title="Add new user" />
                  </RequireAuth>
                }
              />
            </Route>
            <Route path="products">
              <Route
                index
                element={
                  <RequireAuth>
                    <List />
                  </RequireAuth>
                }
              />
              <Route
                path=":productId"
                element={
                  <RequireAuth>
                    <SinglePage />
                  </RequireAuth>
                }
              />
              <Route
                path="new"
                element={
                  <RequireAuth>
                    <NewPage inputs={ProductInputs} title="Add new product" />{" "}
                  </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

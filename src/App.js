import React from "react";
import Home from "./Components/Pages/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Pages/LoginPage/Login";
import List from "./Components/Pages/ListPage/List";
import SinglePage from "./Components/Pages/SinglePage/SinglePage";
import NewPage from "./Components/Pages/NewPage/NewPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="list">
              <Route index element={<List />} />
              <Route path=":ListUsers" element={<SinglePage />} />
            </Route>
            <Route>
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route path="new" element={<NewPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
// import Home from "./Components/Pages/HomePage/Home";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/LoginPage/Login";
import List from "./Pages/ListPage/List";
import SinglePage from "./Pages/SinglePage/SinglePage";
import NewPage from "./Pages/NewPage/NewPage";
import { ProductInputs, UserInputs } from "./Components/Form/FormSource";
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
              <Route
                path="new"
                element={<NewPage inputs={UserInputs} title="Add new user" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<SinglePage />} />
              <Route
                path="new"
                element={
                  <NewPage inputs={ProductInputs} title="Add new product" />
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

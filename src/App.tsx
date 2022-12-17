import React, { useState } from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { store } from "./store";
import { Provider } from "react-redux";

export interface IAppProps {}
const App: React.FunctionComponent<IAppProps> = (props) => {
  const [isAutheticated, setisAutheticated] = useState(false);

  const login = () => {
    setisAutheticated(true);
    console.log("loggedInUser:" + isAutheticated);
  };

  function logout() {
    setisAutheticated(false);
    console.log("loggedInUser:" + isAutheticated);
  }
  return (
    <>
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Link to Home Page</Link>
            </li>
            <li>
              <Link to="/profile">Link to Profile Page</Link>
            </li>
            <li>
              <Link to="/about">Link to About Page</Link>
            </li>
          </ul>
          <button onClick={logout}>Logout</button>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          {isAutheticated ? (
            <Route
              path="profile"
              element={
                <Provider store={store}>
                  <Profile />
                </Provider>
              }
            />
          ) : (
            <Route path="profile" element={<Login login={login} />} />
          )}
          <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

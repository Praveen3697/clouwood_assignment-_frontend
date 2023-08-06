import React from "react";
import "../src/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Make sure to import Routes
import { Provider } from "react-redux";
import store from "./redux/store";
import User from "./components/User";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/User-1" element={<User user="1" />} />
            <Route path="/User-2" element={<User user="2" />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

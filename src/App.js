import React from "react";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";
import configStore from "./store";

import NavBar from './components/NavBar/NavBar';
import Categories from "./components/Categories/Categories";
import Jokes from "./components/Jokes/Jokes";

const store = configStore();

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HashRouter>
          <NavBar />
          <Route path="/" exact component={Categories} />
          <Route path="/jokes/:category" exact component={Jokes} />
        </HashRouter>
      </div>
    </Provider>
  );
}

export default App;

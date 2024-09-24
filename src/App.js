import logo from './logo.svg';
import './App.css';
import SearchBook from "./SearchBook";
import React from "react";
import {Counter} from "./features/counter/Counter";

function App() {
  return (
      <div className="App">
          <div className="search-form">
              <h1>Это мой первый проект на React, не судим строго.</h1>
              <SearchBook/>
              <hr></hr>
          </div>
      </div>
  );
}

export default App;

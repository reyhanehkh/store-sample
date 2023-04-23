import React from "react";
import Reviews from "./Reviews";
import Header from "./Header";
import {BrowserRouter} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
  <Header/>
    <main>
      <div className="container">
        <div className="title">
          <h2>نظرات همکاران</h2>
        </div>
        <Reviews />
      </div>
    </main>
    </BrowserRouter>
  );
}

export default App;

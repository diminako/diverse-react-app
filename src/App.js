import { useState } from "react";
import Selection from "./components/Selection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Day from "./components/Day";

import './App.css';

const style = {
  page: {
    backgroundColor: "darkGrey",
    padding: "0 5%",
    fontSize: "62.5%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  }
}

const App = () => {
const [day, setDay] = useState("Day000");

  const daySelection = (e) => {
    e.preventDefault();

    setDay(e.target[0].value);
    console.log(day)
  }

  const returnHome = (e) => {
    e.preventDefault();
    setDay(e.target.firstChild.attributes[1].value)
  }

  return (
    <div className="App" style={style.page}>
      <Header 
      returnHome={returnHome}
      />
      <Selection 
      daySelection={daySelection}
      />
      <Day 
      day={day}/>
      <Footer />
    </div>
  );
}

export default App;

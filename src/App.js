import { useState } from "react";
import Selection from "./components/Selection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Day from "./components/Day";

import './App.css';

const style = {
  page: {
    fontSize: "62.5%",
    height: "100vh",
    display: "flex",
    flexDirection: "column"
  }
}

const App = () => {
const [day, setDay] = useState("");

  const daySelection = (e) => {
    e.preventDefault();
    setDay(e.target[0].value);
    console.log(day)
  }

  return (
    <div className="App" style={style.page}>
      <Header />
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

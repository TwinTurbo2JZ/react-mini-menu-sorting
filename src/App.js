import { useState } from "react/cjs/react.development";
import "./App.css";
import Cards from "./Cards";
import Categories from "./Categories";
import dataAll from "./data";

function App() {
  const [data, setData] = useState(dataAll);

  //category button
  const categories = ["all", ...new Set(data.map((d) => d.category))];

  const categorize = (category) => {
    console.log("clicked", category);

    if (category === "all") {
      setData(dataAll);
      return;
    }

    let sortedData = data.filter((data) => data.category === category);
    setData(sortedData);
    console.log(sortedData);
  };
  console.log(categories);

  return (
    <div className="App container">
      <h1>menu sorting</h1>
      <Categories categories={categories} categorize={categorize} />
      <Cards data={data} />
    </div>
  );
}

export default App;

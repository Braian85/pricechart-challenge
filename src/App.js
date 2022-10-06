import "./App.css";
import { useState, useEffect } from "react";
import { getData } from "./service/coingeckoAPI";
import Pricechart from "./components/Pricechart/Pricechart";
import Timeline from "./components/Timeline/Timeline";
import Header from "./components/Header/Header";

function App() {
  const [data, setData] = useState({});
  const [selection, setSelection] = useState("max");
  const [priceAndTime, setPriceAndTime] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData("ethereum", "usd", selection);
      setData(data);
    };
    fetchData();
  }, [selection]);

  return (
    <div className="App">
      <Header price={priceAndTime.price} symbol={"Ethereum"} time={priceAndTime.time}/>
      {data && <Pricechart data={data} setPriceAndTime={setPriceAndTime} />}
      <Timeline setSelection={setSelection}/>
    </div>
  );
}

export default App;

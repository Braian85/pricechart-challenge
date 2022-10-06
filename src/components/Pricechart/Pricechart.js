import React from "react";
import Header from "../Header/Header";
import Linechart from "../Linechart/Linechart";
import Timeline from "../Timeline/Timeline";

function Pricechart({ data, setPriceAndTime, setSelection, priceAndTime }) {
  return (
    <>
      <Header
        price={priceAndTime.price}
        symbol={"Ethereum"}
        time={priceAndTime.time}
      />
      {data && <Linechart data={data} setPriceAndTime={setPriceAndTime} />}
      <Timeline setSelection={setSelection} />
    </>
  );
}

export default Pricechart;

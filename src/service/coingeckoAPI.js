import axios from "axios";

export async function getData (projectId, currency, days){
  const url = `https://api.coingecko.com/api/v3/coins/${projectId}/market_chart?vs_currency=${currency}&days=${days}`;
  const { data } = await axios.get(url);
  return data;
};

//https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11
//https://api.monobank.ua/bank/currency
import axios from "axios";

export async function queryToApi (url){
   let response = await axios.get(url);
   console.log(response)
   return response.data;
}

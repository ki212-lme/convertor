//https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11
//https://api.monobank.ua/bank/currency
export async function queryToApi (url){
  return await fetch(url,{
      method: "POST",
      headers: {
          "Content-Type": 'application/json',
      }
  });
}
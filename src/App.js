import './App.css';
import {useEffect, useState} from "react";
import {queryToApi} from "./api/queryToApi";
import {Header} from "./components/Header";
import {MainConvertor} from "./components/MainConvertor";

function App() {
    const [currency, setCurrency] = useState([]);
    useEffect(() => {
        const data = queryToApi("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11");
        data.then(res => {
            if (res)
                setCurrency(res.concat({
                    ccy: "UAH",
                    buy: 1,
                    sale: 1,
                }).filter(x=>x.ccy!="BTC"))
        });
    }, []);

    return (
        <div className="App">
            <Header currency={currency} />
            <MainConvertor currency={currency}/>
        </div>
    );
}

export default App;

import {useEffect, useState} from "react";
import {queryToApi} from "../api/queryToApi";

export function Header(props) {

    return (
        <header className="main-header">
            <h1>Converter</h1>
            <div className="App-header">
                {props.currency.map(x =>x.ccy==="EUR"||x.ccy==="USD"?
                    <div key={x.ccy}>
                    <p>{x.ccy}</p>
                    <div>{parseFloat(x.buy).toFixed(2)}</div>
                </div>:null)}
            </div>
        </header>
    );
}
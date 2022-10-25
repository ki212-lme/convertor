import {useEffect, useState} from "react";

function OptionsCurrency(props) {
    const {currency} = props;
    return currency.map(x => <option value={x.ccy} key={x.ccy}>{x.ccy}</option>);
}

export function MainConvertor(props) {
    const {currency} = props;
    const [state, setState] = useState({
        userCurr: "",
        userCurrValue: 0,
        buyCurr: "",
        buyCurrValue: 0,
        errInput: null
    });
    const {userCurrValue, buyCurrValue, errInput, buyCurr, userCurr} = state;

    useEffect(() => {
        if (currency.length != 0)
            setState({
                ...state,
                userCurr: currency[0].ccy,
                buyCurr: currency[0].ccy,
            })
    }, [currency])

    return (
        <form onChange={() => {
        }}>
            {errInput ? <p>{errInput}</p> : <></>}
            <div>
                <select value={userCurr} onChange={(e) => setState({...state, userCurr: e.target.value})}>
                    <OptionsCurrency currency={currency}/>
                </select>
                <input value={userCurrValue} onChange={(e) => {
                    let CurrValue = e.target.value;
                    if (isNaN(CurrValue)) {
                        CurrValue = 0;
                    }
                    console.log(CurrValue / (currency.find(x => x.ccy === buyCurr)).buy * (currency.find(x => x.ccy === userCurr)).buy);
                    setState({
                        ...state,
                        userCurrValue: CurrValue,
                        buyCurrValue: CurrValue / currency.find(x => x.ccy === buyCurr).buy * currency.find(x => x.ccy === userCurr).buy
                    });
                }}/>
            </div>
            <div>
                <select value={buyCurr} onChange={(e) => setState({...state, buyCurr: e.target.value})}>
                    <OptionsCurrency currency={currency}/>
                </select>
                <input value={buyCurrValue} onChange={(e) => {
                    let CurrValue = e.target.value;
                    if (isNaN(CurrValue)) {
                        CurrValue = 0;
                    }
                    setState({...state, buyCurrValue: CurrValue})
                }}/>
            </div>
        </form>
    );
}
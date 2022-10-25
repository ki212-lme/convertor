import {useEffect, useState} from "react";

function OptionsCurrency(props) {
    const {currency} = props;
    return currency.map(x => <option value={x.ccy} key={x.ccy}>{x.ccy}</option>);
}


export function MainConvertor(props) {
    const {currency} = props;
    const [state, setState] = useState({
        userCurr: "",
        userCurrValue: 1,
        buyCurr: "",
        buyCurrValue: 1,
        errInput: null
    });
    const {userCurrValue, buyCurrValue, errInput, buyCurr, userCurr} = state;

    useEffect(() => {
        if (currency.length !== 0)
            setState({
                ...state,
                userCurr: currency[0].ccy,
                buyCurr: currency[0].ccy,
            })
    }, [currency])



    return (
        <form onChange={(e) => {

        }}>
            {errInput ? <p>{errInput}</p> : <></>}
            <div>
                <select value={userCurr} onChange={(e) =>{
                    setState({...state,
                        userCurr: e.target.value,
                        userCurrValue: userCurrValue,
                        buyCurrValue: userCurrValue / currency.find(x => x.ccy === buyCurr).buy * currency.find(x => x.ccy === e.target.value).buy
                    })}}>
                    <OptionsCurrency currency={currency}/>
                </select>
                <input value={userCurrValue} onChange={(e) => {
                    setState({
                        ...state,
                        userCurrValue: e.target.value,
                        buyCurrValue:  e.target.value / currency.find(x => x.ccy === buyCurr).buy * currency.find(x => x.ccy === userCurr).buy
                    });
                }}/>
            </div>
            <div>
                <select value={buyCurr} onChange={(e) =>{
                    setState({...state,
                        buyCurr: e.target.value,
                        userCurrValue: userCurrValue,
                        buyCurrValue: userCurrValue /currency.find(x => x.ccy === e.target.value).buy * currency.find(x => x.ccy === userCurr).buy
                    })}}>><OptionsCurrency currency={currency}/>
                </select>
                <input value={buyCurrValue} onChange={(e) => {
                    setState({
                        ...state,
                        buyCurrValue: e.target.value,
                        userCurrValue: e.target.value / currency.find(x => x.ccy === userCurr).buy * currency.find(x => x.ccy === buyCurr).buy
                    });
                }}/>
            </div>
        </form>
    );
}
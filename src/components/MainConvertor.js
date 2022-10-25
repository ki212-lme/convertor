import {useEffect, useState} from "react";

function OptionsCurrency(props) {
    const {currency} = props;
    return currency.map(x => <option value={x.ccy} key={x.ccy}>{x.ccy}</option>);
}

export function MainConvertor(props) {
    const {currency} = props;
    const [state, setState] = useState({
        userCurr: "",
        userCurrValue: "",
        buyCurr: "",
        buyCurrValue: "",
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

    const convertSum=(sum,receiver, sender)=>{
        const buyReceiver = currency.find(x => x.ccy === receiver).buy;
        const buySender =  currency.find(x => x.ccy === sender).buy;
        return sum / buyReceiver * buySender;
    }
    const changeInputValue=(firInValue,senInValue)=>{
        setState({
            ...state,
            userCurrValue: firInValue,
            buyCurrValue: senInValue
        });
    }
    // const changeValueBySelect(){
    //
    // }
    return (
        <form onChange={(e) => {}}>
            {errInput ? <p>{errInput}</p> : <></>}
            <div>
                <select value={userCurr} onChange={(e) =>{
                    setState({...state,
                        userCurr: e.target.value,
                        userCurrValue: userCurrValue,
                        buyCurrValue: convertSum(userCurrValue,buyCurr,e.target.value)
                    })}}>
                    <OptionsCurrency currency={currency}/>
                </select>
                <input value={userCurrValue} onChange={(e) => {
                    changeInputValue(e.target.value, convertSum(e.target.value,buyCurr,userCurr));
                }}/>
            </div>
            <div>
                <select value={buyCurr} onChange={(e) =>{
                    setState({
                        ...state,
                        buyCurr: e.target.value,
                        userCurrValue: userCurrValue,
                        buyCurrValue: convertSum(userCurrValue,e.target.value,userCurr)
                    })}}>>
                    <OptionsCurrency currency={currency}/>
                </select>
                <input value={buyCurrValue} onChange={(e) => {
                    changeInputValue(convertSum(e.target.value,userCurr,buyCurr), e.target.value);
                }}/>
            </div>
        </form>
    );
}
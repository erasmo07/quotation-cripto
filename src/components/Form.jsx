import React, { useState } from 'react';
import useSelect from '../hooks/useSelect';
import { useEffect } from 'react';
import axios from 'axios';

const Form = () => {
    const [exchange, setExchange] = useState([])
    const [criptos, setCriptos] = useState([]);
    const [currency, Currency] = useSelect();
    const [cripto, Cripto] = useSelect();

    useEffect(() => {
        const searchTopCriptos = async () => {
            const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD');
            const options = response.data.Data.map(item => (
                { name: item.CoinInfo.FullName, value: item.CoinInfo.Name}
            ));
            setCriptos(options);
        };

        const searchCurrency = async () => {
            const response = await axios.get('https://openexchangerates.org/api/currencies.json');
            const options = Object.keys(response.data).map(key => (
                {value: key, name: response.data[key]}
            ));
            setExchange(options);
        }
        searchTopCriptos();
        searchCurrency();
    }, []);

    return ( 
        <form action="">
            <div className="card light-blue">
                <div className="card-content white-text">
                    <span className="card-title center-align">Cotiazar criptomoneda</span>
                    <div className="row">
                        <div className="col s12">
                            <Currency defaultValue='Seleccionar la moneda origen' options={exchange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <Cripto defaultValue='Selecciona la cripto moneda a cotizar' options={criptos}/>
                        </div>
                    </div>
                </div>
                <div className="card-action center-align">
                    <button className='btn orange'>Cotizar</button>
                </div>
            </div>
        </form>
     );
}
 
export default Form;
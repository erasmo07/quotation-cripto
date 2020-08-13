import React from 'react';
import useSelect from '../hooks/useSelect';

const Form = () => {
    const [currency, Currency] = useSelect('Selecciona la moneda origen', []);
    const [cripto, Cripto] = useSelect('Selecciona la criptomoneda a cotizar', []);

    return ( 
        <form action="">
            <div className="card light-blue">
                <div class="card-content white-text">
                    <span class="card-title center-align">Cotiazar criptomoneda</span>
                    <div class="row">
                        <div class="col s12">
                            <Currency />
                        </div>
                    </div>
                    <div className="row">
                        <div class="col s12">
                            <Cripto />
                        </div>
                    </div>
                </div>
                <div class="card-action center-align">
                    <button className='btn orange'>Cotizar</button>
                </div>
            </div>
        </form>
     );
}
 
export default Form;
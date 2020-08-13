import React from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Form = () => {

    return ( 
        <form action="">
            <div className="card light-blue">
                <div class="card-content white-text">
                    <span class="card-title center-align">Cotiazar criptomoneda</span>
                    <div class="row">
                        <div class="col s12">
                            <select name="currency" className='browser-default'>
                                <option value="">-- Selecciona la moneda origen --</option>
                                <option value="DOP">Dominican Pesos</option>
                            </select>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div class="col s12">
                            <select name="currency" className='browser-default'>
                                <option value=""> -- Selecciona la criptomoneda a cotizar --</option>
                                <option value="BTC">Bitcoin</option>
                            </select>
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
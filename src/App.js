import React, {Fragment} from 'react';
import criptoImage from './media/cryptomonedas.png';
import styled from '@emotion/styled';
import Form from './components/Form';
import Quotation from './components/Quotation';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';
import Spinner from './components/Spinner';

const Img = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;

const Container = styled.div`
    margin-top: 13rem;
`;

function App() {
  const [data, setData] = useState({ currency: '', cripto: ''});
  const [quotation, setQuotation] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const makeQuotation = async () => {
      if (data.currency === '' || data.cripto === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.cripto}&tsyms=${data.currency}`;
      const resp = await axios.get(url);

      console.log(resp);
      setQuotation(resp.data.DISPLAY[data.cripto][data.currency]);
    }
    
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      makeQuotation();
    }, 3000);

  }, [data]);

  return (
    <Fragment>
      <div className="row">
        <div className="col s4">
          <Img src={criptoImage} alt=""/>
        </div>
        <Container className="col s4">
          <Form setData={setData} />
        </Container>
        <Container className="col s4">
          {loading 
            ? <Spinner /> 
            : <Quotation quotation={quotation} />}
        </Container>
      </div>
    </Fragment>
  );
}

export default App;

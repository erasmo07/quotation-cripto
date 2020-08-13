import React, {Fragment} from 'react';
import criptoImage from './media/cryptomonedas.png';
import styled from '@emotion/styled';
import Form from './components/Form';
import Quotation from './components/Quotation';
import { useState } from 'react';
import { useEffect } from 'react';

import axios from 'axios';

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

  useEffect(() => {
    const makeQuotation = async () => {
      if (data.currency === '' || data.cripto === '') return;

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.cripto}&tsyms=${data.currency}`;
      const resp = await axios.get(url);

      console.log(resp);
      setQuotation(resp.data.DISPLAY[data.cripto][data.currency]);
    }
    
    makeQuotation();
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
          <Quotation quotation={quotation} />
        </Container>
      </div>
    </Fragment>
  );
}

export default App;

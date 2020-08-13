import React, {Fragment} from 'react';
import criptoImage from './media/cryptomonedas.png';
import styled from '@emotion/styled';
import Form from './components/Form';
import Quotation from './components/Quotation';

const Img = styled.img`
    max-width: 100%;
    margin-top: 5rem;
`;


const Container = styled.div`
    margin-top: 13rem;
`;



function App() {
  return (
    <Fragment>
     <div className="row">
       <div className="col s4">
         <Img src={criptoImage} alt=""/>
       </div>
       <Container className="col s4">
        <Form />
       </Container>
       <Container className="col s4">
        <Quotation />
       </Container>
     </div>
    </Fragment>
  );
}

export default App;

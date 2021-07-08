import React from 'react';
import styled from 'styled-components';

const WrapperStyled = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
 
  p {
    font-size: 16px;
  }

  h1 {
    font-size: 45px;
  }

  @media only screen and (max-width: 800px) {
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 14px;
    }
     h1 {
    font-size: 35px;
  }

  }


`;

export default function Wrapper({ children }) {
  return <WrapperStyled>{children}</WrapperStyled>;
}

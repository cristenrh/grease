import React from 'react';
import styled from 'styled-components';

import Wrapper from '../wrapper/wrapper.component';

const Section1Styled = styled.div`
  background-color: white;
  .active {
    border-bottom: 1px solid white;
  }
  h4 {
    margin-top: 0px;
    font-size: 30px;
}

`;

export default function Cover() {
  return (
    <Section1Styled id="cover">
      <Wrapper>
      <h3>Westwood Warriors Theatre <br/>presents</h3>
        <div className="title">Grease</div>
        <h4>The School Edition</h4>
      
        <p>
        Book, Music and Lyrics by<br/>
      Jim Jacobs and Warren Casey
        </p>
        <p>
          Directed by<br/>
          Mr. George Franco & Ms. Robin Harwell
        </p>
      </Wrapper>
    </Section1Styled>
  );
}

import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import styled from 'styled-components';


const AcknowStyled = styled.div`
.container {
    margin: 0 auto;
    width: 60%;
  }

.container ul {
    margin-left: 0;
    padding-left: 0;
}

.container li {
    padding: 6px;
}

.container .sublist li {
    padding-top: 2px;
    padding-bottom: 2px;
}
.container .sublist li:first-of-type {
    padding-top: 6px;
}

@media screen and (max-width: 800px) {
 .container {
    width: 82%;
    }
}
`


function Acknowledge() {
    return (
        <Wrapper>
          <AcknowStyled >
          <div id="acknowledgements"></div>
        <div className="App main container">
                <h1>Acknowledgements</h1>

<p className="tc acknowledgements b">Westwood Theatre would like to express our gratitude to the following for their special assistance during this musical production:</p>
<ul>
<li>Mrs. Jana Japour</li>
<li>Westwood Theatre Booster Executive Board:
    <ul className="sublist">
        <li>Mrs. Robyn Steinhauser</li>
         <li>Mrs. Liz Rodriguez</li>
        <li>Mrs. Cristen Hewett</li>
        <li>Mrs. Annette Hanson</li>
    </ul>
</li>
<li>Mr. Tim Lowke, Mrs. Lisa Roebuck, and RRISD District Fine Arts Administration</li>
<li>Ms. Amanda Andrade</li>
<li>Mr. Thomas Turpin and Mrs. Brittany Dacy</li>
<li>Westwood High School Administration</li>
<li>Mr. Eddie Moreno</li>
<li>A Cut Above Costumes</li>
</ul>
<p>
The Directors would also like to thank their families for their patience and support throughout the rehearsal and production process. We love you!
</p>
        </div>
          </AcknowStyled >
        </Wrapper>
    )
}

export default Acknowledge;
import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import styled from 'styled-components';


const FooterStyled= styled.div`


footer {
    align-items: center;
    background-color: #000;
    color: white;
    display: flex;
    height: 40px;
    justify-content: flex-start;
    margin-top: 25px;
    padding: 25px;
}

footer a {
    color: var(--darkred);
    margin-left: 8px;
}


@media screen and (max-width: 800px) {
 .container {
    width: 82%;
    }


footer {
    padding-left: 12px;
}
}
`


function Footer() {
    return (
           <FooterStyled > 
<footer>Web Design by  <a href="https://www.hewettcentral.com/cristen/">Cristen Hewett</a></footer>
         </FooterStyled >
   
    )
}

export default Footer;
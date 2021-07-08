import React from 'react';
import styled from 'styled-components';
import Logo from './Logo.jsx';
import Wrapper from '../wrapper/wrapper.component';
import { Link } from 'react-scroll';



       




const Section1Styled = styled.div`

#cover {
    margin-top: 75px;
}

  background-color: white;
  .active {
    border-bottom: 1px solid white;
  }
  h4 {
    margin-top: 0px;
    font-size: 30px;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    min-width: 300px;
}

  @media only screen and (max-width:600px) {

}

`;

export default function Cover() {
  return (
    <Section1Styled>
      <Wrapper>
         <div id="cover">
    <Logo></Logo>


    
        <p>
        Book, Music and Lyrics by<br/>
      Jim Jacobs and Warren Casey
        </p>
        <p>
          Directed by<br/>
          Mr. George Franco &amp; Ms. Robin King
        </p>
            <p>
          Choreographed by<br/>
          <Link to='Iliana Sharp' offset={-100}  smooth={true} duration={1000}>Iliana Sharp</Link><span> &amp; </span> 
          <Link to="Lauren Smith"  offset={-100}  smooth={true} key="Lauren Smith"   duration={1000}>Lauren Smith</Link>
        </p>
      <h3>Performance Schedule</h3>
       
                <div className="container">
                  <div>
                  <strong>Rockin' Cast</strong><br/>
                        April 28 @ 7pm<br/>
                        April 30 @ 8pm
                    </div>
                  <div>
                   <strong>Rydell Cast</strong><br/>
                        April 29 @ 7pm<br/>
                        May 1 @ 8pm
                    </div>
                    </div>
      
        </div>
      </Wrapper>
    </Section1Styled>
  );
}

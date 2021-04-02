import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import CrewList from './CrewList.jsx';
import { crew } from './crew';


function Crew() {
    return (
        <div id="crew">
        <Wrapper>
                <h1>
                    Crew
                </h1>
                <CrewList crew ={ crew } />
            </Wrapper>
        </div>    
    )
}

export default Crew;

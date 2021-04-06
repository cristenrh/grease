import React from 'react';
import Wrapper from '../wrapper/wrapper.component';

import CastList from './CastList.jsx';
import { cast } from './cast';

import './cast.css';

export default function Cast() {
  return (
  <Wrapper>
    <div id="cast"></div>
            <div>
        <h1>Cast</h1>
        <CastList cast={ cast } />
        </div>
      </Wrapper>
   
  );
}

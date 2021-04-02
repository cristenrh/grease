import React from 'react';
import styled from 'styled-components';
import SongList from './SongList.jsx';
import { songs1 } from './songs';
import { songs2 } from './songs';

import Wrapper from '../wrapper/wrapper.component';


export default function Songs() {
  return (
    <div id="songs">
      <Wrapper>
        <h1>Songs</h1>

<h3>ACT I  </h3>
<SongList songs={ songs1 } />

<p>
- There will be a 15 minute intermission before Act II  
</p>

<h3>ACT II  </h3> 
<SongList songs={ songs2 } />

     
      </Wrapper>
    </div>
  );
}

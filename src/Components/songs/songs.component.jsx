import React from 'react';
import styled from 'styled-components';
import SongList from './SongList.jsx';
import { songs1 } from './songs';
import { songs2 } from './songs';
// import './songs.css';

import Wrapper from '../wrapper/wrapper.component';

const SongStyled = styled.div`

.song::before {
  content: open-quote;
}
.song::after {
  content: close-quote;
}

.song {
  font-style: italic;
}

section {
  display: flex;
  flex-direction: row;
}




@media screen and (max-width: 800px) {

.songs span {
  display: none;
}

.songs section {
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
}

p.scene {
  font-size: 16px;
  font-weight: bold;
}

p.song {
  font-size: 18px;
  padding: 6px 0;
  color: red;
  font-weight: bold;;
}

}
`;



export default function Songs() {
  return (
    <Wrapper>
    <SongStyled id="songs">
      
        <h1>Songs</h1>

          <h3>ACT I  </h3>
          <SongList songs={ songs1 } />

          <p>
          - There will be a 15 minute intermission before Act II  
          </p>

          <h3>ACT II  </h3> 
          <SongList songs={ songs2 } />
      
      </SongStyled>
       </Wrapper>
  );
}

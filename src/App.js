import React from 'react';
import './App.css';

import Cover from './components/cover/cover.component';
import Songs from './components/songs/songs.component';
import Cast from './components/cast/cast.component';
import Crew from './components/crew/crew.component';
import Navbar from './components/navbar/navbar.component';
import Acknowledge from './components/acknowledgements/acknowledge';
import Profiles from './components/profiles/profiles';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cover />
      <Songs />
      <Cast/>
      <Crew/>
      <Profiles/>
      <Acknowledge />
    </div>
  );
}

export default App;

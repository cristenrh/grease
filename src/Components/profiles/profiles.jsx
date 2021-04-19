//import React, { useState, useEffect } from 'react';
import React, { Component} from 'react';
import Wrapper from '../wrapper/wrapper.component';
import ProfileList from './ProfileList.jsx';
import SearchBox from './SearchBox.js';
import { performer } from './performer';
import './profiles.css';


class Profiles extends Component {
    constructor() {
      super()
      this.state = {
        performer: performer,
        searchfield: '',
        name: '',
        role: '',
        id: '',
      }
    }
  
    onSearchChange = (event) => {
      this.setState({searchfield: event.target.value})
    }

    render() {
      const filteredPerformer = this.state.performer.filter(performer =>{
        return performer.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      });
      if(!this.state.performer.length){
        return <h1>Loading</h1>
      } else {
      return (
        <Wrapper>
                <div id="profiles"></div>
                <div className="App main" >
                     <div className="site-banner-header">
                         <h1>
                             Who's Who
                        </h1>
                    </div>
                      {/* <select>
                              <option value="name">Name</option>
                              <option value="role">Role</option>
                              <option value="cast">Cast</option>
                      </select> */}
                        <SearchBox searchChange={this.onSearchChange}/>
                        <ProfileList performer ={ filteredPerformer} />
                       
                 </div>
                 </Wrapper>
      )
      }
    }
  }
  
  
  export default Profiles;
  
  





// function Profiles() {
//     return (
//         <Wrapper>
//         <div id="profiles"></div>
//         <div className="App main" >
//             <div className="site-banner-header">
//                 <h1>
//                     Who's Who
//                 </h1>
//             </div>
                // <SearchBox searchChange={this.onSearchChange}/>
                // <ProfileList performer ={ filteredPerformer} />
//         </div>
//         </Wrapper>
//     )
// }

// export default Profiles;

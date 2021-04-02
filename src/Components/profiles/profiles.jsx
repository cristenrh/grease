import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import ProfileList from './ProfileList.jsx';
import { performer } from './performer';
import './profiles.css';

function Profiles() {
    return (
        <Wrapper>
        <div className="App main" id="profiles">
            <div className="site-banner-header">
                <h1>
                    Profiles
                </h1>
            </div>
            <ProfileList performer ={ performer} />
        </div>
        </Wrapper>
    )
}

export default Profiles;

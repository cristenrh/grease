import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import PhotoList from './PhotoList.jsx';
import { photo } from './photos';


function Photos() {
    return (
        <div id="photos">
        <Wrapper>
                <h1>
                    Photo Gallery
                </h1>
                <PhotoList photo ={ photo } />
            </Wrapper>
        </div>    
    )
}

export default Photos;

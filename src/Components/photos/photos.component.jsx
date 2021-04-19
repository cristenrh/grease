import React from 'react';
import Wrapper from '../wrapper/wrapper.component';
import PhotoList from './PhotoList.jsx';
import { photo } from './photos';
import 'react-alice-carousel/lib/alice-carousel.css';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt } from '@fortawesome/free-solid-svg-icons'


const PhotoStyled = styled.div`

h1 {
  font-size:45px;
}

.alice-carousel {
    margin-top: 0;
    margin-bottom: 100px;
}

.alice-carousel__wrapper {
    max-height: 800px;
}

.alice-carousel__prev-btn, 
.alice-carousel__next-btn {
  width: auto;
  padding: 10px 5px;
  position: absolute;
  font-size: 70px;
  top: 40%;
}

.alice-carousel__next-btn {
  right: 0;
}
.alice-carousel__prev-btn {
  left: 0;
}

.alice-carousel__prev-btn-item, 
.alice-carousel__next-btn-item {
  color: red;
}

@media only screen and (max-width:600px) {

  .alice-carousel__wrapper {
    max-height: 350px;
}

  .alice-carousel__prev-btn, 
  .alice-carousel__next-btn {
    top: 45px;
}

.alice-carousel__prev-btn-item, 
.alice-carousel__next-btn-item {
  color: #fff;
}

`;

const itemsLength = Array.from({ length: 8 });

const items = itemsLength.map((photo, index) => {
  const style = { height: 200 + index * 10 };
  return <div className="item" loading="lazy" style={style} data-value={index + 1} />;
});

  const Photos = () => {
      
    return (
        <div>
            <PhotoStyled >
            <div id="photos"></div>
            <h1>Photo Gallery</h1>
               <div>
               <PhotoList photo={ photo } />
            </div>   
            </PhotoStyled> 
          </div>
            
      
    )
  }

export default Photos;



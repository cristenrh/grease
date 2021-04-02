

import React from 'react';

const performers= ({photo, name, role, bio}) => {
    return (
<div class="profiles-grid-container">
  <div class="Photo"> <img src ={`${photo}`}  alt = {`${name}`}/></div>
  <div class="Name">{name} </div>
  <div class="Role">{role}</div>
  <div class="Bio">{bio}</div>
</div>
    )
};

export default performers;
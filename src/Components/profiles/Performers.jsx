

import React from 'react';

const performers= ({photo, name, role, bio}) => {
    return (
<div  id={`${name}`} className="profiles-grid-container">
  <div className="Photo"> <img src ={`${photo}`}  alt = {`${name}`}  /> </div>
  <div className="Name">{name} </div>
  <div className="Role">{role}</div>
  <div className="Bio">{bio} </div>
</div>

    )
};

export default performers;
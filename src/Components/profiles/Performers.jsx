

import React from 'react';

const performers= ({photo, name, nickname, role, bio}) => {
    return (
<div  id={`${nickname}`} className="profiles-grid-container">
  <div className="Photo"> <img src ={`${photo}`}  alt = {`${name}`} loading="lazy"  /> </div>
  <div className="Name">{name} </div>
  <div className="Role">{role}</div>
  <div className="Bio">{bio} </div>
</div>

    )
};

export default performers
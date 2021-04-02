

import React from 'react';

const castMember = ({name, name2, role}) => {
    return (
        <section>
        <p>{role}</p>
        <span>..............................................................................................................................................................</span>
        <p>{name}  {name2}</p>
        </section>
    )
};

export default castMember;
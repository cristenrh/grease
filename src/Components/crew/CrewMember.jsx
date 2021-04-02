

import React from 'react';

const crewMember = ({name, role}) => {
    return (
        <section>
        <p>{role}</p>
        <span>..............................................................................................................................................................</span>
        <p>{name}</p>
        </section>
    )
};

export default crewMember;
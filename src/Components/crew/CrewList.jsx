import React from 'react';
import CrewMember  from './CrewMember';

const CrewList = ({ crew }) => {
    return(
        <div className="crewMembers">
            {
            crew.map((user, i) => {
                return (
                <CrewMember
                    key={i} 
                    role={crew[i].role}
                    name={crew[i].name}
                    bio={crew[i].bio}
                />
            );
        })
    }
    </div>
    );
    }

export default CrewList;
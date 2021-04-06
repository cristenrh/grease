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
                    name2={crew[i].name2}  
                    name3={crew[i].name3}  
            
                />
            );
        })
    }
    </div>
    );
    }

export default CrewList;
import React from 'react';
import CastMember  from './CastMember';

const CastList = ({ cast }) => {
    return(
        <div className="castMembers">
            {
            cast.map((user, i) => {
                return (
                <CastMember
                    key={i} 
                    role={cast[i].role}
                    name={cast[i].name}
                />
            );
        })
    }
    </div>
    );
    }

export default CastList;
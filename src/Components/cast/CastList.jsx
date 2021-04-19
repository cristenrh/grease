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
       <div className="key">
                <p>
                😎 : <strong>Rockin' Cast</strong>
                </p>
                <p>
                📣  : <strong>Rydell' Cast</strong><br/>
                </p>
                </div>
    </div>
    );
    }

export default CastList;
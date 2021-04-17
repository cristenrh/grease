import React from 'react';
import Performers  from './Performers.jsx';

const ProfileList = ({ performer}) => {
    return(
        <div className="profiles">
            {
            performer.map((user, i) => {
                return (
                <Performers
                    key={i} 
                    photo={performer[i].photo}
                    name={performer[i].name} 
                    nickname={performer[i].nickname} 
                    role={performer[i].role}
                    bio={performer[i].bio} 
                    
                />
            );
        })
    }
    </div>
    );
    }

export default ProfileList;
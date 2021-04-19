import React from 'react';
import { Link } from 'react-scroll';

const crewMember = ({name, role, bio}) => {
    let biography = bio;
    const linkList = name.map((link) => 
        <Link to={link} offset={-100} smooth={true} duration={1000} key={link} >{link}</Link>      
    );
    if (biography === 'true') {
        return(
            <section>
            <p>{role}</p>
            <span>..............................................................................................................................................................</span>
            <p> 
                { linkList }
            </p>
            </section>
        )
        }else {
             return(
            <section>
            <p>{role}</p>
            <span>..............................................................................................................................................................</span>
            <p> 
                { name }
            </p>
            </section>
        )
        }
        }

export default crewMember;
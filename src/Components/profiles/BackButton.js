import React from 'react';
import { useHistory } from "react-router-dom";

const Backbutton = () => {
    let history = useHistory();
    return (
        <>
          <button onClick={() => history.goBack()}>Back</button>
        </>
    );
};

export default Backbutton;
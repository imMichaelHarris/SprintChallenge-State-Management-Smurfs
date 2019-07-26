import React, {useContext} from 'react';
import {SmurfContext} from '../contexts/SmurfContext'
import Smurf from '../components/Smurf';

const SmurfList = () => {
    const smurfs = useContext(SmurfContext);
    return (
        <div>
            {smurfs.map(smurf => <Smurf key={smurf.id}/>)}
        </div>
    );
};

export default SmurfList;
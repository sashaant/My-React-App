import React, { FunctionComponent } from 'react';

interface Props {
    personName: string,
    personJob: string,  
    infoData: string,
    infoSkills: string,
}

const Card: React.FC<Props> = ({
    personName,
    personJob, 
    infoData,
    infoSkills 

    }) => {
    return (
        <div className="card">
            <h1>Hi everyone, I'm {personName}</h1>
            <h2>I'm {personJob}</h2>
            <p>{infoData}</p>
            <p>{infoSkills}</p>
        </div>
    );
}
export default Card;
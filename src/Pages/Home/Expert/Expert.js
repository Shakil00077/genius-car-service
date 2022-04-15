import React from 'react';

const Expert = ({expert}) => {
    const {name, img} = expert
    return (
        <div>
            <img src={img} alt="" />
            <h3>{name}</h3>
        </div>
    );
};

export default Expert;
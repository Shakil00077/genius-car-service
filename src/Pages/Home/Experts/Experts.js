import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([])

    useEffect(() => {
        fetch('expert.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div>
            <h1>Your Experts {experts.length}</h1>
            {
                experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                ></Expert>)
            }
        </div>
    );
};

export default Experts;
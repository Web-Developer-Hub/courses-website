import React from 'react';
import { useCoustomHooks } from '../../ContextAPI/contextAPI';

const About = () => {
    const [a] = useCoustomHooks();
    console.log(a)
    return (
        <div>
            <h3>this is my about page</h3>
        </div>
    );
};

export default About;
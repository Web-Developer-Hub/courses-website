import React, { useEffect, useState } from 'react';

const Contact = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const API = './Data/data.JSON';
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);
    console.log(courses);

    return (
        <div>
            <h3>This is contact</h3>
        </div>
    );
};

export default Contact;
import React from 'react';
import { useCoustomHooks } from '../../Hooks/hooks';
import Course from './Course';
import './Courses.css'



const Courses = () => {
    const [courses] = useCoustomHooks();

    return (
        <div className='main'>
            <h3 className='cards'>All courses: {courses.length}</h3>
            <div className='cards'>
                {
                    courses.map((item) => <Course item={item}></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;
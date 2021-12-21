import { useEffect, useState } from "react"

const useCoustomHooks = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const API = './Data/data.JSON';
        fetch(API)
            .then((res) => res.json())
            .then((data) => setCourses(data));
    }, []);

    return [courses, setCourses];
}
export { useCoustomHooks }
import { useEffect, useState } from "react"

const useCoustomHooks = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const API = 'https://raw.githubusercontent.com/Web-Developer-Hub/courses-website/master/public/Data/data.JSON';
        fetch(API)
            .then((res) => res.json())
            .then((data) => {
                if (data === null) {
                    return null
                }
                else {
                    setCourses(data)
                }
            });
    }, []);

    return [courses, setCourses];
}
export { useCoustomHooks }
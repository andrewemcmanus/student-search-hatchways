import { useState, useEffect } from 'react';

export default function GetStudentData() {
    const [ studentData, setStudentData ] = useState();
    useEffect(() => {
        const fetchStudentData = async () => {
            const response = await fetch('https://api.hatchways.io/assessment/students');
            const data = await response.json();
            setStudentData(data);
        }
        fetchStudentData();
    }, []);
    
    return studentData;
}
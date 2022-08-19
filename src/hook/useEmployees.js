import { useEffect, useState } from "react";


const useEmployees = () => {
    const [employees, setEmployees] = useState([]);

    const url = "https://opensheet.elk.sh/1gH5Kle-styszcHF2G0H8l1w1nDt1RhO9NHNCpHhKK0M/employees";



    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => setEmployees(data))

    }, [employees])


    return [employees, setEmployees];
}

export default useEmployees;
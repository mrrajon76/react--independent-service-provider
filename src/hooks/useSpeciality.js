import { useEffect, useState } from "react"

const useSpeciality = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('speciality.json')
            .then(res => res.json())
            .then(result => setData(result))
    }, []);

    return [data, setData];
}

export default useSpeciality;
import { useEffect, useState } from "react";

const useManage = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-service.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return [services, setServices];
}
export default useManage;

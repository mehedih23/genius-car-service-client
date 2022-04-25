import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../Hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    /*     const [service, setService] = useState({})
        useEffect(() => {
            const url = `http://localhost:5000/service/${serviceId}`;
            fetch(url)
                .then(response => response.json())
                .then(data => setService(data))
        }, [serviceId]) */
    return (
        <div>
            <h2>Welcome to detail: {service.name}</h2>
            <div className='text-center'>
                <Link to={`/checkout/${serviceId}`}>
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
import React from 'react'
import useManage from '../../Hooks/useManage'

const Manage = () => {
    const [services, setServices] = useManage();

    const handleDelete = (id) => {
        const proceed = window.confirm('Are You Sure to Delete?')
        if (proceed) {
            const url = `https://genius-car-service.herokuapp.com/service/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                })
        }
    }

    return (
        <div className='text-center'>
            <h1>Manage Your Services</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name}
                        <button onClick={() => handleDelete(service._id)}>X</button>
                    </h5>
                </div>)
            }
        </div>
    )
}

export default Manage
import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetail from '../../../Hooks/useServiceDetail';

const Checkout = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth)
    const navigate = useNavigate()

    const handleCheckOut = (e) => {
        e.preventDefault();
        const name = user.displayName;
        const email = user.email;
        const orderName = service.name;
        const address = e.target.address.value;
        const phone = e.target.phone.value;
        const userOrderDetails = {
            name, address, email, orderName, phone
        }
        axios.post('https://genius-car-service.herokuapp.com/order', userOrderDetails)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    toast('Order Places Successfully.', { autoClose: 5000 })
                    navigate('/')

                }
            })

    }

    return (
        <div>

            <h2 className='text-center'>Please order : {service.name}</h2>
            <form className='w-50 mx-auto' onSubmit={handleCheckOut}>
                <input className='w-100 mb-2' type="text" name="name" id="name" placeholder='Your Name' defaultValue={user.displayName} readOnly disabled required />
                <br />
                <input className='w-100 mb-2' type="email" name="email" id="email" placeholder='Your Email' defaultValue={user.email} readOnly disabled required />
                <br />
                <input className='w-100 mb-2' type="text" defaultValue={service.name} name="order-name" id="order-name" placeholder='Order Name' readOnly required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" id="address" placeholder='Your Address' required />
                <br />
                <input className='w-100 mb-2' type="number" name="phone" id="phone" placeholder='Your Phone Number' required />
                <br />
                <input type="submit" defaultValue="Place Order" />
            </form>
        </div >
    );
};

export default Checkout;
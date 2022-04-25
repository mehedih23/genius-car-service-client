import React from 'react'
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const url = 'http://localhost:5000/service';
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                reset();
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h1 className='text-center'>Add Service</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Service Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Service Description' {...register("description")} />
                <input className='mb-2' placeholder='Service Price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Image url' type="text" {...register("img")} />
                <input type="submit" defaultValue='Add' />
            </form>
        </div>
    )
}

export default AddService
import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        const url = `http://localhost:5000/service`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
        toast('Services added to the UI')
    };

    return (
        <div className='add text-center w-50 mx-auto'>
            <h2 className='mb-3'>Add a new service please</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Photo url' type="text" {...register("img")} />
                <input className='mb-2' placeholder='Name' type="text" {...register("name")} />
                <textarea className='mb-2' placeholder='Description' type="text" {...register("description",)} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price",)} />
                <input className='w-50 d-block mx-auto bg-success text-warning mb-4' type="submit" value="Add a new service" />
            </form>
            <ToastContainer />
        </div>
    );
};

export default AddService;
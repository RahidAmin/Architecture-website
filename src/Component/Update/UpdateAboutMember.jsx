import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'
const UpdateAboutMember = () => {
    const member = useLoaderData();
    const { _id, name, designation, image } = member;

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const designation = e.target.designation.value;
        const image = e.target.image.value;

        const updateMember = { name, designation, image };
        fetch(`https://api.simplesymmetry-bd.com/members/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateMember)
        }).then(res => res.json()).then(data => {

            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Work updated sussessfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

            }

        }
        )


    }

    return (
        <div className='mt-12 pb-12 text-black'>
            <h1 className='text-center'>Update Member</h1>
            <form onSubmit={handleUpdate}>
                <div className='px-10'>
                    <div><img src={image} alt="" />
                        <label className='label'> <span className='label-text'>Image:</span></label>
                        <input defaultValue={image} className='h-10 w-1/2 border border-blue-500' type="text" name="image" id="" />
                    </div>
                    <div>
                        <label className='label'><span className='label-text'>Name:</span></label>
                        <input type="text" defaultValue={name} className='h-10 w-1/2 border border-blue-500' name="name" id="" />
                        <label className='label'><span className='label-text'>Designation</span></label>
                        <input type="text" className='h-10 w-1/2 border border-blue-500' defaultValue={designation} name="designation" id="" />
                    </div>
                    <button className='btn btn-accent flex w-56 mt-5 '>Update</button>
                </div>


            </form>

        </div>
    );
};

export default UpdateAboutMember;
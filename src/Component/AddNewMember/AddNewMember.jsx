import React from 'react';
import Swal from 'sweetalert2'
const AddNewMember = () => {

    const handleAdd = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", e.target.name.value);
        formData.append("designation", e.target.designation.value);
        formData.append("description", e.target.description.value);
        if (e.target.image.files[0]) formData.append("image", e.target.image.files[0]);

        fetch('https://api.simplesymmetry-bd.com/members', {
            method: 'POST',

            body: formData
        }).then(res => res.json()).then(data => {

            if (data.insertedId) {
                console.log(data)
                Swal.fire({
                    title: 'Success!',
                    text: 'Added sussessfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

            }

        }
        )


    }




    return (
        <div className='mt-12 pb-12 text-black bg-white'>
            <h1 className='text-center'>Add New Member</h1>
            <form onSubmit={handleAdd}>
                <div className='px-10'>
                    <div>
                        <label className='label'> <span className='label-text'>Image:</span></label>
                        <input className='h-10 w-1/2 border border-blue-500' type='file' name="image" id="" />
                    </div>
                    <div>
                        <label className='label'><span className='label-text'>Name:</span></label>
                        <input type="text" className='h-10 w-1/2 border border-blue-500' name="name" id="" />
                        <label className='label'><span className='label-text'>Designation</span></label>
                        <input type="text" className='h-10 w-1/2 border border-blue-500' name="designation" id="" />
                        <label className='label'><span className='label-text'>Description</span></label>
                        <input type="text" className='h-10 w-1/2 border border-blue-500' name="description" id="" />
                    </div>
                    <button className='btn btn-accent flex w-56 mt-5 '>Add</button>
                </div>


            </form>

        </div>
    );
};

export default AddNewMember;
import React from 'react';
import Swal from 'sweetalert2'
const AddNewWork = () => {

    const handleAdd = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("pName", e.target.name.value);
        formData.append("type", e.target.type.value);
        formData.append("year", e.target.year.value);
        formData.append("location", e.target.location.value);
        formData.append("creativeDirector", e.target.creativeDirector.value);
        formData.append("visualization", e.target.visualization.value);
        formData.append("aboutDescription", e.target.aboutDescription.value);
        formData.append("designDescription", e.target.designDescription.value);

        // Append images (if selected)
        if (e.target.topImage.files[0]) formData.append("topImage", e.target.topImage.files[0]);
        if (e.target.img1.files[0]) formData.append("img1", e.target.img1.files[0]);
        if (e.target.img2.files[0]) formData.append("img2", e.target.img2.files[0]);
        if (e.target.img3.files[0]) formData.append("img3", e.target.img3.files[0]);
        if (e.target.img4.files[0]) formData.append("img4", e.target.img4.files[0]);
        if (e.target.img5.files[0]) formData.append("img5", e.target.img5.files[0]);
        if (e.target.img6.files[0]) formData.append("img6", e.target.img6.files[0]);
        if (e.target.img7.files[0]) formData.append("img7", e.target.img7.files[0]);
        if (e.target.img8.files[0]) formData.append("img8", e.target.img8.files[0]);
        if (e.target.aboutImage.files[0]) formData.append("aboutImage", e.target.aboutImage.files[0]);
        if (e.target.designImage.files[0]) formData.append("designImage", e.target.designImage.files[0]);

        try {
            const response = await fetch("https://api.simplesymmetry-bd.com/works", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Work added successfully",
                    icon: "success",
                    confirmButtonText: "OK",
                });
            }
        } catch (error) {
            console.error("Error uploading:", error);
        }
    };


    // const handleAdd = (e) => {
    //     e.preventDefault();
    //     const pName = e.target.name.value;
    //     const type = e.target.type.value;
    //     const topImage = e.target.topImage.value;
    //     const year = e.target.year.value;
    //     const location = e.target.location.value;
    //     const creativeDirector = e.target.creativeDirector.value;
    //     const visualization = e.target.visualization.value;
    //     const aboutImage = e.target.aboutImage.value;
    //     const designDescription = e.target.designDescription.value;
    //     const designImage = e.target.designImage.value;
    //     const aboutDescription = e.target.aboutDescription.value;
    //     const img1 = e.target.img1.value;
    //     const img2 = e.target.img2.value;
    //     const img3 = e.target.img3.value;
    //     const img4 = e.target.img4.value;
    //     const img5 = e.target.img5.value;
    //     const img6 = e.target.img6.value;
    //     const img7 = e.target.img7.value;
    //     const img8 = e.target.img8.value;

    //     const updateWork = { pName, type, topImage, year, location, creativeDirector, visualization, aboutImage, designDescription, designImage, aboutDescription, img1, img2, img3, img4, img5, img6, img7, img8 }

    //     fetch('https://api.simplesymmetry-bd.com/works', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(updateWork)
    //     }).then(res => res.json()).then(data => {
    //         if (data.insertedId) {
    //             console.log(data)
    //             Swal.fire({
    //                 title: 'Success!',
    //                 text: 'Added sussessfully',
    //                 icon: 'success',
    //                 confirmButtonText: 'OK'
    //             })

    //         }
    //     })


    // }


    return (
        <div className='m-12 text-black bg-white'>
            <h1 className='text-center'>Update Work</h1>
            <form onSubmit={handleAdd}>
                <div className='md:flex mb-8'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Project Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" placeholder='Name' name='name' className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <select placeholder='Type' className='h-10 border border-blue-400 rounded-lg' name='type'><option value="interior">Interior</option>
                                <option value="industrial">Industrial</option>
                                <option value="residential">Residential</option>
                                <option value="masterPlan">Master-Plan</option>
                                <option value="commercial">Commercial</option>
                            </select>
                        </label>
                        <label className="label">
                            <span className="label-text">Top Image</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="topImage" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Year</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='year' className="input input-bordered w-full" />
                        </label>

                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='location' className="input input-bordered w-full" />
                        </label>

                        <label className="label">
                            <span className="label-text">Visualization</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='visualization' className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Creative Director</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='creativeDirector' className="input input-bordered w-full" />
                        </label>

                        <label className="label">
                            <span className="label-text">About Image</span>
                        </label>
                        <label className="input-group">


                            <input type="file" name="aboutImage" className="input input-bordered w-full" accept="image/*" />

                        </label>
                        <label className="label">
                            <span className="label-text">About Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="aboutDescription" className="input input-bordered w-full h-36"></textarea>
                        </label>
                        <label className="label">
                            <span className="label-text">Design Image</span>
                        </label>
                        <label className="input-group">


                            <input type="file" name="designImage" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Design Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="designDescription" className="input input-bordered w-full h-36"></textarea>
                        </label>
                        <label className="label">
                            <span className="label-text">Image 1</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img1" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 2</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img2" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 3</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img3" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 4</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img4" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 5</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img5" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 6</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img6" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 7</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img7" className="input input-bordered w-full" accept="image/*" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 8</span>
                        </label>
                        <label className="input-group">

                            <input type="file" name="img8" className="input input-bordered w-full" accept="image/*" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Submit" className='btn btn-block bg-green-500' />
            </form>


        </div>
    );
};

export default AddNewWork;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'


const UpdateWorksEdit = () => {
    const work = useLoaderData();
    const { _id, pName, type, topImage, year, location, creativeDirector, visualization, aboutDescription, aboutImage, designDescription, designImage, img1, img2, img3, img4, img5, img6, img7, img8 } = work;

    const handleUpdate = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const projectType = e.target.type.value;
        const topimage = e.target.topImage.value;
        const yeaR = e.target.year.value;
        const locatioN = e.target.location.value;
        const creativedirector = e.target.creativeDirector.value;
        const visualizatioN = e.target.visualization.value;
        const aboutimage = e.target.aboutImage.value;
        const designdescription = e.target.designDescription.value;
        const designimage = e.target.designImage.value;
        const aboutdescription = e.target.aboutDescription.value;
        const img11 = e.target.img1.value;
        const img22 = e.target.img2.value;
        const img33 = e.target.img3.value;
        const img44 = e.target.img4.value;
        const img55 = e.target.img5.value;
        const img66 = e.target.img6.value;
        const img77 = e.target.img7.value;
        const img88 = e.target.img8.value;

        const updateWork = { name, projectType, topimage, yeaR, locatioN, creativedirector, visualizatioN, aboutimage, designdescription, designimage, aboutdescription, img11, img22, img33, img44, img55, img66, img77, img88 }

        fetch(`https://api.simplesymmetry-bd.com/works/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateWork)
        }).then(res => res.json()).then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Member updated sussessfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })

            }
        })

        console.log(name)
        console.log(projectType, topimage, yeaR, locatioN, creativedirector, visualizatioN, aboutimage, designdescription, designimage, aboutdescription, img11, img22, img33, img44, img55, img66, img77, img88);

    }
    return (
        <div className='m-12 text-black'>
            <h1 className='text-center'>Update Work</h1>
            <form onSubmit={handleUpdate}>
                <div className='md:flex mb-8'>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Project Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='name' defaultValue={pName} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <label className="input-group">
                            <select className='h-10 border border-blue-400 rounded-lg' name='type' defaultValue={type}><option value="interior">Interior</option>
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

                            <input type="text" name='topImage' defaultValue={topImage} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Year</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='year' defaultValue={year} className="input input-bordered w-full" />
                        </label>

                        <label className="label">
                            <span className="label-text">Location</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='location' defaultValue={location} className="input input-bordered w-full" />
                        </label>

                        <label className="label">
                            <span className="label-text">Visualization</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='visualization' defaultValue={visualization} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Creative Director</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='creativeDirector' defaultValue={creativeDirector} className="input input-bordered w-full" />
                        </label>

                        <label className="label">
                            <span className="label-text">About Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='aboutImage' defaultValue={aboutImage} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">About Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="aboutDescription" defaultValue={aboutDescription} className="input input-bordered w-full h-36"></textarea>
                        </label>
                        <label className="label">
                            <span className="label-text">Design Image</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='designImage' defaultValue={designImage} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Design Description</span>
                        </label>
                        <label className="input-group">
                            <textarea name="designDescription" defaultValue={designDescription} className="input input-bordered w-full h-36"></textarea>
                        </label>
                        <label className="label">
                            <span className="label-text">Image 1</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img1' defaultValue={img1} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 2</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img2' defaultValue={img2} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 3</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img3' defaultValue={img3} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 4</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img4' defaultValue={img4} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 5</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img5' defaultValue={img5} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 6</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img6' defaultValue={img6} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 7</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img7' defaultValue={img7} className="input input-bordered w-full" />
                        </label>
                        <label className="label">
                            <span className="label-text">Image 8</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name='img8' defaultValue={img8} className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                <input type="submit" value="Submit" className='btn btn-block bg-green-500' />
            </form>


        </div>
    );
};

export default UpdateWorksEdit;
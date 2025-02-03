import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const Admin = () => {
    const { logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut();
    }
    return (

        <div className="my-12 mx-5 bg-base-200 min-h-screen ">
            <div className='mb-2 h-12 bg-red-50 text-center font-bold text-lg border border-red-500 roonded rounded-lg'><p className='mt-2'>Admin Pannel</p></div>

            <div className='mb-2 h-[200px] flex flex-wrap flex-col items-center bg-red-50 border border-red-500 rounded-xl w-1/2 md:w-1/4'>
                <div className='flex flex-wrap flex-col items-center mb-2'><p className=''>Works</p>
                    <div className='h-1 bg-blue-400 w-16 rounded-sm flex'></div>
                </div>
                <button className="mb-2 btn btn-outline btn-secondary w-3/4"><Link to='/updateWorks'>Update or Delete</Link></button>
                <button className="btn btn-outline btn-secondary w-3/4"><Link to='/addNewWork'>Add new work</Link></button>
            </div>


            <div className='mb-2 h-[200px] flex flex-wrap flex-col items-center bg-red-50 border border-red-500 rounded-xl w-1/2 md:w-1/4'>
                <div className='flex flex-wrap flex-col items-center mb-2'><p className=''>About</p>
                    <div className='h-1 bg-blue-400 w-16 rounded-sm flex'></div>
                </div>
                <button className="mb-2 btn btn-outline btn-secondary w-3/4"><Link to='/updateAbout'>Update or Delete</Link></button>
                <button className="btn btn-outline btn-secondary w-3/4"><Link to="/addNewMember">Add new Member</Link></button>
            </div>





            <div className=''> <button onClick={handleLogOut} className="btn btn-primary">Log Out</button></div>



        </div>
    );
};

export default Admin;
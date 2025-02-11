import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const UpdateAbout = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch('https://api.simplesymmetry-bd.com/members').then(res => res.json()).then(data => {
            setMembers(data);
        }
        )
    }, [])

    const handleDelete = (id) => {
        const proceed = confirm('Are You sure,you want to delete')
        if (proceed) {
            fetch(`https://api.simplesymmetry-bd.com/members/${id}`, {
                method: 'DELETE'
            }).then(res => {
                return res.json();
            }
            ).then((data) => {
                if (data.deletedCount > 0) {

                    alert('Deleted Successful')
                    const remaining = members.filter(member => member._id !== id);
                    setMembers(remaining);
                }

            }
            )
        }

    }

    return (
        <div className="text-black">
            {
                members.map((member, index) =>
                    <div key={index} className="mt-12 md:text-sm md:w-1/2 h-16 border border-blue-600 rounded-lg flex justify-between">

                        <img className="h-full w-20 object-cover rounded-lg" src={member.image} alt="" />
                        <span className="mt-2"><p>Name</p> <p>{member.name}</p></span>
                        <span className="mt-2"><p>Designation</p><p>{member.designation}</p></span>
                        {/* <button className="btn btn-square mt-2"><Link to={`/updateAboutMember/${member._id}`}>Edit</Link></button> */}
                        <button onClick={() => handleDelete(member._id)} className="btn btn-square mr-2 mt-2">Delete</button>
                    </div>
                )
            }

        </div>
    );
};

export default UpdateAbout;
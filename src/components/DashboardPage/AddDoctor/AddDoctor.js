import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
const AddDoctor = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleAddDoctor = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email);
        formData.append('phone', info.phone);

        fetch('https://whispering-garden-78687.herokuapp.com/AddADoctor', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(success => {
                if(success){
                    alert('Doctor Added!!')
                }
            })
            .catch(error => {
                console.error(error)
            })
    }
    const appointmentListHeading = {
        color: '#10CFE6',
        fontWeight: '700'
    }
    return (
        <section className="bg-light">
            <div className="row w-100">
                <div className="col-md-2">
                    <Sidebar />
                </div>
                <div className="col-md-10">
                    <div>
                        <h3 style={appointmentListHeading}>Add a Doctor</h3>
                        <form className="w-50" onSubmit={handleAddDoctor}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                                <input onBlur={handleBlur} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                                <input onBlur={handleBlur} type="email" className="form-control" id="exampleInputPassword1" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                                <input onBlur={handleBlur} type="text" className="form-control" id="exampleInputPassword1" name="phone" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Upload an Image</label><br />
                                <input onChange={handleFileChange} type="file" name="file" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            </div>
                            <button type="submit" className="buttonStyle">Add</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddDoctor;
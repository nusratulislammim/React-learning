import React,{useState} from "react";

function RegistrationForm(){
    const [formData, setFormData] = useState({
        name: "",
        fatherName: "",
        motherName: "",
        email: "",
        phone: "",
        dob:""
    });
    const [submittedData, setSubmittedData] = useState(null);

    function handleChange(e){
        const {name,value} = e.target;
        setFormData({...formData, [name]:value});
    }

    function handleSubmit(e){
        e.preventDefault();
        setSubmittedData(formData);
    }

    return(
        <div>
            <h2>Registration Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} /><br/>
                <input type="text" name="fatherName" placeholder="Father's Name" value={formData.fatherName} onChange={handleChange}/><br/>
                <input type="text" name="motherName" placeholder="Mother's Name" value={formData.motherName} onChange={handleChange}/><br/>
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} /><br/>
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange}/><br/>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange}/><br/>
                
                <button type="submit">Submit</button>

            </form>

            {submittedData && (
                <div>
                    <h3>Submitted Information</h3>
                    <p>Name: <strong>{submittedData.name}</strong></p>
                    <p>Father's Name: <strong>{submittedData.fatherName}</strong></p>
                    <p>Mother's Name: <strong>{submittedData.motherName}</strong></p>
                    <p>Email: <strong>{submittedData.email}</strong></p>
                    <p>Date of Birth: <strong>{submittedData.dob}</strong></p>
                </div>
            )}

        </div>
    );


}

export default RegistrationForm;
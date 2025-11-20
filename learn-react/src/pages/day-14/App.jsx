import { useEffect, useState } from "react";

function UseEffectUse(){
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res)=>res.json())
            .then((data)=> setUsers(data))
            .catch((err)=> console.log(err));
    },[]);

    return (
        <div>
            <h1>User List</h1>

            {
                users.length===0?(
                    <p>Loading...</p>
                ):(
                    users.map((user)=>(
                        <div>
                            <strong>{user.name}</strong> - {user.email}
                        </div>
                    ))
                )
            }
        </div>
    );

}
export default UseEffectUse;

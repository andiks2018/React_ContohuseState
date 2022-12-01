import React, { useEffect, useState } from "react";
import axios from 'axios'

function Axios() {

    //state
    const [user, setUser]= useState([])
    
    //function ambil data json
    const getUserData = async ()=>{
        try { 
            const respon = await axios.get('https://jsonplaceholder.typicode.com/users')
            return respon
        }
        catch (error) {
            return error
        }
    }

    //didmount
    useEffect(() => {
        getUserData()
            .then((res) => {
                setUser(res.data)
                console.log(res.data)
            })
            .catch((err)=>{ console.error(err) })
    }, [])

    return (
        <div className="w-full text-center flex flex-col justify-center items-center gap-3">
            <h1 className="text-2xl font-bold bg-orange-400 py-2 px-6 max-w-sm rounded-lg text-white">Axios fethc</h1>
            {user.map((e) => (
                <div key={e.id}>
                    <h3>{ e.name}</h3>
                    <p>{ e.email}</p>
                </div>
            )) }
            
        </div>
    )
}

export default Axios
import React, { useState } from "react";

function Datasiswa() {

    //state
    const [data, setData] = useState([])

    //function handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('test click')
       
    }


    return (
        <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-bold text-2xl">Data Siswa</h1>
            <form autoComplete="off" action="" className="gap-3 space-y-3">
                <div className="">
                    <label htmlFor="fullname">Tempat tahun lahir</label>
                    <input type="text" id="fullname" />
                </div>
                <div>
                    <label htmlFor="dob">dob</label>
                    <input type="text" id="dob" />
                </div>
                <div>
                    <label htmlFor="address">address</label>
                    <input type="text" id="address" />
                </div>

                <button
                    className="bg-orange-500 rounded-lg text-white py-1 px-6"
                    type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Datasiswa

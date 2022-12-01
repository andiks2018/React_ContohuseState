import React, { useState } from "react";

function HurufBesar() {
    const [count, setCount] = useState(1)
    const [text, setText] = useState('tulisan default')
    const [fontSize, setFontSize] = useState(16)
    const [color, setColor] = useState('black')
    
    return (
        <div className="flex items-center flex-col gap-3">
            <h1 className="mt-10">Tombol Tambah dan Kurang</h1>
            <h3>jumlah : {count}</h3>
            <button
                onClick={() => {
                    setCount(count+1)
            }}
                className="bg-blue-500 shadow-lg py-1 px-6 rounded-lg">tambah</button>
            
            <button onClick={() => {
                if (count>=1) {
                    setCount(count - 1)
                }
            }}
                className="bg-orange-500 shadow-lg py-1 px-6 rounded-lg">kurang</button>
            
            <div className="text-center space-y-5">
                <p>=========================</p>
                <h3>{text}</h3>
                <input
                    type="text"
                    className="border border-orange-500 shadow-lg text-center rounded text-lime-500 "
                    placeholder="input teks"
                    onChange={(e) => {
                        setText(e.target.value)
                    }}
                />
                    
            </div>

            <div className="space-y-4">
                <p>===================================</p>
                <h1 className="uppercase text-xl font-bold text-lime-500">Ubah ukuran tulisan</h1>
                <h3 style={{ fontSize: fontSize + 'px', }}>{ text }</h3>
                <input type="range" min={1} max={100}
                    onChange={(e) => {
                    setFontSize(e.target.value)
                }}
                />
            </div>

            <div className="space-y-7">
                <p>===================================</p>
                <h3 className="uppercase text-xl font-bold text-emerald-500">pick color</h3>
                <input type="color" onChange={(e) => {
                    setColor (e.target.value)
                }}/>
            </div>

        </div>
    )
}

export default HurufBesar
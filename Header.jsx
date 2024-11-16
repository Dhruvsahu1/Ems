import React from "react";

const Header = ()=>{
    return <div className="flex justify-between items-end p-7">
        <h1 className="text-2xl font-medium"> Hello <br /> <span className="text-3xl font-semibold"> Dhruv</span> 👋</h1>
        <button className="bg-red-500 text-white px-5 py-2 rounded-xl text-base hover:bg-red-600 font-medium">Log out</button>
    </div>
}
export default Header
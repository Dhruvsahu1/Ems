import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";

const AdminDashboard = ()=>{
    return (
        <div className="h-screen  w-full p-7"> 
            <Header></Header>
            <CreateTask></CreateTask>
        </div>
    )
}
export default AdminDashboard
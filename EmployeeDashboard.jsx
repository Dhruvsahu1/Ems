import React from "react";
import Header from "../other/Header";
import ListNumber from "../other/ListNumber";
import TaskList from "../taskList/TaskList";

const EmployeeDashboard = ()=>{
    return <div className="p-10 bg-[#1C1C1C] h-screen">
        <Header></Header>
        <ListNumber></ListNumber>
        <TaskList></TaskList>
    </div>
}
export default EmployeeDashboard
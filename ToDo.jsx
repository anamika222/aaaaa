import { INDEXEDDB } from "localforage";
import { useState } from "react";

function ToDo(){
    const[students, setStudents]=useState([]);
    const[newstudents, setNewStudents]=useState({name: '', age: '', grade:''});
    const[editIndex, setEditIndex]= useState(-1);

    const handleInputChange=(e) =>{
        const{name, value}=e.target;
        setNewStudents({...newstudents, [name]:value});
    }

    const addStudent =() =>{
        if(!newstudents.name || !newstudents.age || !newstudents.grade){
            alert('please fill out all input fields...')
            return;
        }

        setStudents([...students,newstudents]);
        setNewStudents({name:'',age:'',grade:''});

    }

const deleteStudent= (index) =>{
    const updatedStudents = students.filter((_, i) => i == index)
    setStudents(updatedStudents);
}
const editStudent = (index) =>{
    setEditIndex(index);
    setNewStudents(setStudents[index]);

}
const updatedStudents = () => {
    if(!newstudents.name || !newstudents.age || !newstudents.grade){
        alert('please fill out all input fields...')
        return;
    }
    const updatedStudents = students.map((students, index) =>
    index === editIndex ? newstudents : students);

    setStudents(updatedStudents)
    setNewStudents({name: '', age: '',grade:''});
    setEditIndex(-1);

}

console.log(students)
return (
             <div className="p-2 md:p-5">
            <h1 className="p-2 md:p-5">This is ToDo page</h1>
            <div className="flex justify-around">
                <input 
                type="text"
                name="name"
                value={newstudents.name}
                onChange={handleInputChange}
                placeholder="Enter your name...."
                className="input input-bordered"
                />

<input 
                type="number"
                name="age"
                value={newstudents.age}
                onChange={handleInputChange}
                placeholder="Enter your age...."
                className="input input-bordered"
                />

<input 
                type="text"
                name="greade"
                value={newstudents.grade}
                onChange={handleInputChange}
                placeholder="Enter your grade...."
                className="input input-bordered"
                />

                {
                    editIndex === -1 ?(
                        <button 
                    onClick={addStudent}
                    className="btn btn-outline btn-success">Add Student</button>
                    ):
                    <button 
                    onClick={updatedStudents}
                    className="btn btn-outline btn-info">Update Student</button>

                }
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Serial</th>
        <th>Name</th>
        <th>Age</th>
        <th>Grade</th>
        <th>Action</th>
      </tr>
    </thead> 
        {
            students.map((students, index) =>(
                <tr key={index}>
                    <td>{index}</td>
                    <td>{students.name}</td>
                    <td>{students.age}</td>
                    <td>{students.grade}</td>
                    <td>
                        <div className="flex flex-row gap-1">
                        <button 
                    className="btn btn-xs btn-outline btn-error"
                    onClick={() =>deleteStudent(index)}
                    >Delete</button>

                    <button 
                    className="btn btn-xs btn-outline btn-info"
                    onClick={() =>editStudents(index)}
                    >update</button>

                        </div>
                    </td>

                </tr>
            ))

            
        }


    <tbody>

    </tbody>
  </table>
</div>

           {students.length === 0 && <p className="text-red-500 text-xl text-center">No students found</p> }


        </div>
    );
}
export default ToDo;
import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setNewTask({
      ...newTask,
      [e.target.name]: e.target.value
    });
  };

  const addTask = async (e) => {
    e.preventDefault();

    if (!newTask.name || !newTask.email || !newTask.message) return;

    try {
      const response = await axios.post(
        'http://localhost:5000/todos',
        newTask
      );

      setTasks([...tasks, response.data]);

      // Reset form
      setNewTask({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  return (
        <>
        <section id='contact'>
            <div className="container-fluid bg-black text-white text-center py-5">
                <div className="container">
                    <div>
                        <p>Connect with me</p>
                        <h1>Get in touch</h1>
                    </div>

                    <form action="" className='d-flex justify-content-center  '>
                        <div>
                            <div className='py-3 d-inline-flex gap-3' >
                                <input type="text" name="name" value={newTask.name}  onChange={handleChange} placeholder='Enter your name' className='text-white w-50 px-4 py-2 border border-gray bg-transparent' />
                                <input type="email" name="email" value={newTask.email}  onChange={handleChange} placeholder='Enter your email' className='text-white w-50 px-4 py-2 border border-gray bg-transparent' />
                            </div>
                            <div>
                                <textarea name="message" value={newTask.message} id=""  onChange={handleChange} placeholder='Enter your message' className='text-white w-100 px-4 py-5 bg-transparent border border-gray'></textarea>
                            </div>
                            <div className=''>
                                <input type="submit" onClick={addTask} placeholder='submit' className='text-white px-5 py-2 rounded-5 bg-transparent border border-gray mt-3' />
                            </div>
                        </div>

                    </form>
                </div>
            </div></section>
        </>
    )
}

export default Contact
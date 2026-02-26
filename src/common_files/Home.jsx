import React from 'react'
import './Home.css'
import profilePic from '../assets/profile-pic.jpg'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className="container-fluid bg-black text-white" style={{ padding: "150px 0px 60px 0px" }}>
                    <div className="container text-center">
                        <div className='profile-pic'>
                            <img src={profilePic} alt="Profile Picture" width={'150px'} className='rounded-circle' />
                        </div>
                        <div className='py-4'>
                            <h4>Hi! I'm Khushbu Kamariya <img src="https://themewagon.github.io/eliana-nextjs/assets/hand-icon.png" alt="" className='w-6 ' width={'30px'} /> </h4>
                            <p style={{ fontSize: "50px" }}>Front-End Developer</p>
                            <p className=''>I am a Front-End Developer fresher with a strong foundation in modern <br /> web development technologies including HTML, CSS, JavaScript, React.js, and Bootstrap. <br /> I am passionate about building responsive, user-friendly, and visually appealing web applications.</p>
                        </div>
                        <div className='d-flex justify-content-center gap-2'>
                            <button className=' text-light button1 py-1 px-3 fw-bolder border-1 rounded-pill'>Hire Me <i className="bi bi-arrow-right"></i></button>


                            <button className='bg-black py-1 px-3 fw-bolder border border-secondary border-1 rounded-pill '><a href="../public/Resume/Front-End Developer.pdf" target='_blank' className='text-white text-decoration-none fs-5 fw-light'>Download CV <i className="bi bi-download"></i></a></button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home
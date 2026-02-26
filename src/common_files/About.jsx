import React from 'react'
import './About.css'
const About = () => {
    return (
        <>
            <section id='about'>
                <div className="container-fluid bg-black text-white text-center py-5">
                    <div className="container ">
                        {/* <h5>Introduction</h5> */}
                        <h1 className='pb-3'>About me</h1>
                        <p>I am an aspiring Front-End Developer eager to start my professional journey in web development. <br /> I am passionate about learning new technologies, improving my skills, and contributing to building efficient and user-friendly applications.</p>
                        <h4 className='py-3'>My Skills</h4>
                        <div className="d-flex gap-3 flex-wrap justify-content-between align-items-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732212.png" className="icon" title='Html ' /> {/* html  */}
                            <img src="https://cdn-icons-png.flaticon.com/512/732/732190.png" className="icon" title='Css' /> {/* css   */}
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" className="icon" title='Java Script' />{/* JS   */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" className="icon" title='jQuery' />{/* jQuery   */}
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png" className="icon" title='Bootstrap' />{/* Bootstrap  */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" className="icon" title='Tailwind' />{/* tailwind     */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="icon" title='React' width={'50%'} height={'50%'} />{/* React   */}
                            <img src="https://img.icons8.com/color/96/express-js.png"
                                className="icon express-icon " title='Express' />{/* Express   */}
                            <img src="https://img.icons8.com/color/96/nodejs.png" className="icon" title='Node' />{/* Node   */}
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="icon" title='MongoDB' />{/* MongoDB   */}
                            <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" className="icon" title='Figma' />{/* Figma   */}

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
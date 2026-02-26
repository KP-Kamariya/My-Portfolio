import React from 'react'

const Footer = () => {
    return (
        <>
            <div className="container-fluid bg-black text-white py-5 text-center">
                <div className="container">
                    <div>
                        <h2 className='fw-bold'>khushbu<span style={{color:"#b820e6"}}>.</span></h2><p><i className="bi bi-envelope-at-fill pe-2"></i><a href="" className='nav-link headlink text-decoration-none text-white'>kamariyakhushbu@gmail.com</a></p></div>
                    <hr />

                    <div className="row">
                        <div className="col"><p>© 2026. Designed by khushbu. All right reserved. </p></div>
                        <div className="col"><p className='d-inline-flex gap-5'><a href="https://github.com/KP-Kamariya" target='_blank'  className='nav-link headlink text-decoration-none text-white'>Github</a><a href="https://www.linkedin.com/in/khushbu-kamariya-2a969a316/" target='_blank' className='nav-link headlink text-decoration-none text-white'>LinkdIn</a></p></div>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default Footer
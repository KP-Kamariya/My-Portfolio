import React from 'react'

const Resume = () => {
    return (
        <>
        <section id='resume'>
            <div className="container-fluid bg-black text-white py-5">
                <div className="container">
                    <h1 className='text-center pb-3'>Resume</h1>
                    <div className="row">
                        <div className='col'>
                            <h3 className='text-decoration-underline'>Experience</h3>
                            <p>Frontend Developer — Excel PTP June, 2025 - Present</p>
                        </div>
                        <div className='col'>
                            <h3 className='text-decoration-underline l' >Education</h3>
                            <p>2021-2022 Higher Secondry (12 <sup>th</sup> ) - Junagadh Gujarat</p><br />
                            <p> 2022-2025 Bachelor of Computer Application (2025)
                                Bhakta Kavi Narsinh Mehta Universi ty (BKNMU), Junagadh.</p>
                        </div>
                    </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default Resume
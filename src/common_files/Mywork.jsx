import React from 'react'
import './Mywork.css'

const Mywork = () => {
  return (
    <>
      <section id='work'>
        <div className="container-fluid bg-black text-white py-5">
          <div className="container">
            <div className='text-center'>
              <h1 className='pb-3'>My latest work</h1>
              <p>Welcome to my web development portfolio! Explore a collection of projects showcasing my <br />
                expertise in front-end development.</p>
            </div>
            <div className="row d-flex flex-wrap pt-5">
              <div className="col">
                <a href="https://istudio-clone-lkl6.vercel.app/" target='_blank'>
                  <img src="/istudio.png" alt=""
                    className="img-fluid rounded-3" />
                </a>
                <div className="designtext">
                  <h5 className="fw-bold">Istudio</h5>
                  <p className='text-black'>I built a responsive iStudio website clone using HTML, CSS, and Media Queries, focusing on layout structure, clean design, and fully responsive development.</p>

                </div>
              </div>
              <div className="col">
                <a href="https://fofana-portfolio-clone.vercel.app/" target='_blank'>
                  <img src="../public/Project/fofana.png" alt="" height={''}
                    className="img-fluid rounded-3" />
                </a>
                <div className="designtext">
                  <h5 className="">Fofana</h5>
                  <p className='text-black'>I built a responsive Fofana portfolio clone using HTML, Bootstrap, and CSS, focusing on layout structure, reusable components, and responsive design.</p>
                </div>
              </div>
            </div>
            <div className="row d-flex flex-wrap">
              <div className="col">
                <a href="https://fofana-portfolio-clone-33mi.vercel.app/" target='_blank' v>
                  <img src="../public/Project/baikal.png" alt=""
                    className="img-fluid rounded-3" />
                </a>
                <div className="designtext">
                  <h5 className="">Baikal</h5>
                  <p className='text-black'>I developed a Baikal clone website with multiple pages using HTML, CSS, and Bootstrap. It is fully responsive and designed with a clean, structured layout.</p>
                </div>
              </div>
              <div class="col">
                <a href="https://invena-business-git-main-khushbus-projects-05b0696b.vercel.app/" target='_blank'>
                  <img src="../public/Project/invena.png" alt=""
                    class="img-fluid rounded-3" />
                </a>
                <div class="designtext">
                  <h5 className="">Invena</h5>
                  <p className='text-black'>I created an Invena Business clone website using HTML, CSS, Bootstrap, and React. It is responsive and built with reusable React components for a clean design.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Mywork

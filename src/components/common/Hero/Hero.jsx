import React from "react"
// import Heading from "../../common/heading/Heading"
import "./Hero.css"
import MediaCard from "../Card/Card"
import Courses from "../courses/Courses"
import Launch from "../Launch/Launch"
import Home from "../../Pages/Home"
import Footer from "../Fotter/Fotter"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
          <div id='heading'>
        <h3>Are you looking for your dream Internship ?</h3>
        <h1>Join
Internee.pk now..! </h1>
      </div>
            {/* <Heading subtitle='WELCOME TO ACADEMIA' title='Best Online Education Expertise' /> */}
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Home/>
<MediaCard/>
<Courses/>
<Launch/>
    </>

    
  )
}

export default Hero
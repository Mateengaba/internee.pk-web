import React from 'react'
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Hammad from "../../assets/founder.jpg"
import Rayan from "../../assets/rayyan.jpg"
import { Button, CardActions } from '@mui/material';


const Home = () => {
    return (
        <>
            <div className="bodyMain">
                <div className="bodyNested1">
                    <Carousel infiniteLoop autoPlay showThumbs={false}>
                        <div>
                            <img src={Hammad} width='50px' height='560px' alt="My Picture" />
                            <div class="about-info">
                                <h4 class="text-white mb-0 me-2">Hammad Sheikh</h4>
                                <p class="text-white mb-0">Founder</p>
                            </div>
                        </div>
                        <div>
                        <img src={Rayan} width='50px' height='560px' alt="My Picture" />
                            <div class="about-info">
                                <h4 class="text-white mb-0 me-2">Rayyan Zain</h4>
                                <p class="text-white mb-0">CEO</p>
                            </div>
                        </div>
                       
                    </Carousel>
                </div>
                <div className='bodyNested2'>
                    <h1>Welcome to Internee.pk</h1>
                    <p>Our internship program is designed to give students <br/> the opportunity to work on meaningful projects and <br/> tasks, while also receiving mentorship and guidance from <br/> experienced professionals in the field. Our goal is to help interns develop <br/> the skills and knowledge they need to succeed in their careers, <br/> while also building a strong network of talented individuals who <br/> may become valuable members  of our team in the future. If you're looking for <br/> a challenging and  rewarding internship experience, we invite you <br/> to explore our program and  Apply Today

                        Explore Internships</p>
                        <br/><br/><br/><br/>
                        <CardActions>
                <Button sx={{ borderRadius: "20px", textAlign: 'center',alignItems:"center", border:"3px solid white",  color:"white",'&:hover': { backgroundColor: "white" ,color:"green"} }} variant="outlined" size="large">Get to Know us</Button>
              </CardActions>

                </div>
            </div>


        </>
    )
}

export default Home

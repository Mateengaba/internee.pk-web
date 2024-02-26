import React from 'react';
import lounch from "../../../assets/people-working-as-team-company.jpg"
import "./Launch.css"

const Launch = () => {
    return (
        <div>

<div className="Pairentbody">
            

                <div className='body2'>
                    <h1>Launching tech</h1>
                    <h1>careers with</h1>
                    <h1>internships, exposure,</h1>
                    <h1>and networking.</h1>
<p>Internee.pk kickstart student's tech careers with first 
 internships, providing industry exposure, practical 
  skills, and networking opportunities, paving the way 
   for their success in the tech industry.</p>
   <br/><br/><br/><br/><br/>
                </div>

                <div className="body1">
                <div>
                            <img src={lounch} width='650px' height='600px' alt="My Picture" />
                            {/* <div class="about-info">
                                <h4 class="text-white mb-0 me-2">Hammad Sheikh</h4>
                                <p class="text-white mb-0">Founder</p>
                            </div> */}
                        </div>
                      
                </div>


            </div>


      
    </div >
  );
}

export default Launch;

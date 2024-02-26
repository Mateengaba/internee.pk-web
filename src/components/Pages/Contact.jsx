import React from "react"
import "./Contact.css"

const Contact = () => {
  const map = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14472.287121677513!2d67.1129801!3d24.9296245!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33932bc557c5d%3A0x38073c4629dcd4a3!2sNational%20Incubation%20Center%20Karachi!5e0!3m2!1sen!2s!4v1708945267647!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" '
  return (
    <>
      <section className='contacts padding'>
        <div className='container shadow flexSB'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We're open for any suggestion or just to have a chat</p>

            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>National Incubation Center, Karachi, Pakistan</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@internee.pk</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +92 345 3191638</p>
                <p> +92 349 2861021</p>

              </div>
            </div>

            <form action=''>
              <div className='flexSB'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10'>
                Create a message here...
              </textarea>
              <button className='primary-btn'>SEND MESSAGE</button>
            </form>

            <h3>Follow us here</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
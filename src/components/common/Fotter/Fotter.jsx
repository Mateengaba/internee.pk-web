import React from 'react';
import './Fotter.css'
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import SendIcon from '@mui/icons-material/Send';

const Footer = () => {
  return (
    <div className='containers'>
      <div className="footer">
        <div className="contact">
          <img src="https://portal.internee.pk/assets/logo.png" alt="" className="footerImg" />
          <div className="contactMethods">
            <div className="phone">
              <IconButton style={{ color: '#43A724' }}>
                <PhoneIcon />
              </IconButton>
              <ul style={{ listStyle: 'none', marginLeft: '1rem' }}>
                <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0">
                  <li className="">+92 346 789 1234</li>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=%2B923453191638&text&app_absent=0">
                  <li className="">+92 346 789 1234</li>
                </a>
              </ul>
            </div>
            <div className="email">
              <IconButton style={{ color: '#43A724' }}>
                <EmailIcon />
              </IconButton>
              <ul style={{ listStyle: 'none', marginLeft: '1rem' }}>
                <a href="mailto:info@internee.pk">
                  <li className="">info@internee.pk</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div className="links">
          <div className="link1">
            <h3>Contact</h3>
            <ul style={{ listStyle: 'none' }} className="poppins-light">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="/contact">
                <li>Contact</li>
              </a>
              <a href="">
                <li>Internships</li>
              </a>
            </ul>
          </div>
          <div className="link2">
            <h3>Resources</h3>
            <ul style={{ listStyle: 'none' }} className="poppins-light">
              <a href="">
                <li>Discord Server</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>Podcast</li>
              </a>
              <a href="">
                <li>Portal</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="updates">
          <h1>Internship <span className="protest-riot-regular strongWord">Updates</span></h1>
          <div className="update-field" style={{ backgroundColor: '#F0F8FF' }}>
            <div className="form-control">
              <input type="text" required />
              <label>
                <span style={{ transitionDelay: '0ms' }}>E</span>
                <span style={{ transitionDelay: '50ms' }}>m</span>
                <span style={{ transitionDelay: '100ms' }}>a</span>
                <span style={{ transitionDelay: '150ms' }}>i</span>
                <span style={{ transitionDelay: '200ms' }}>l</span>
              </label>
            </div>
            <IconButton style={{ color: '#43A724' }}>
              <SendIcon fontSize="large" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

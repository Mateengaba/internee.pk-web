import React from 'react';
import "./Courses.css"
import { Grid, Typography } from '@mui/material';
import WebDesignIcon from '@mui/icons-material/Web';
import WebDevelopmentIcon from '@mui/icons-material/Code';
import CrmIcon from '@mui/icons-material/Chat';
import GraphicDesignIcon from '@mui/icons-material/Brush';
import MobileAppIcon from '@mui/icons-material/PhoneAndroid';

const Courses = () => {
  return (
    <>
      <Grid container sx={{ display:"flex", justifyContent: 'center', textAlign: 'center', margin: '0 auto', width: '95%', marginTop: "60px", marginRight: "3px" }}>
        <div sx={{ width: '100%' }}>
          <h1>Browse by Categories</h1>
        </div>
      </Grid>

      <div className="mainroundbox">
        <div className="roundbox">
          <div sx={{ display:"flex",justifyContent: 'center', textAlign: 'center' }}>
            <WebDesignIcon style={{ marginLeft: "45px" }} /> {/* Web Designing ka icon */}
            <p>Web Designing</p>
          </div>
        </div>

        <div className="roundbox">
        <div sx={{ display:"flex",justifyContent: 'center', textAlign: 'center' }}>
            <WebDevelopmentIcon style={{ marginLeft: "60px" }} /> {/* Web Development ka icon */}
            <p>Web Development</p>
          </div>
        </div>

        <div className="roundbox">
        <div sx={{ display:"flex",justifyContent: 'center', textAlign: 'center' }}>
            <CrmIcon style={{ marginLeft: "60px" }} /> {/* CRM's and chatbot ka icon */}
            <p>CRM's and chatbot</p>
          </div>
        </div>

        <div className="roundbox">
        <div sx={{ display:"flex",justifyContent: 'center', textAlign: 'center' }}>
            <GraphicDesignIcon style={{ marginLeft: "60px" }}/> {/* Graphic Designing ka icon */}
            <p>Graphic Designing</p>
          </div>
        </div>

        <div className="roundbox">
        <div sx={{ display:"flex",justifyContent: 'center', textAlign: 'center' }}>
            <MobileAppIcon style={{ marginLeft: "30px" }} /> {/* Mobile App ka icon */}
            <p>Mobile App</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses;

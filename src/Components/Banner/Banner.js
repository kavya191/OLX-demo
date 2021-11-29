import React from 'react';
import { Link } from 'react-router-dom';

import './Banner.css';
import Arrow from '../../assets/Arrow'
function Banner() {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
          <Link to='/categories'>ALL CATEGORIES</Link>
            <Arrow></Arrow> 
          </div>
          <div className="otherQuickOptions">
        <Link to="/cars">Cars</Link>
          <Link to ='/motorcy'>Motorcy...</Link>
            <Link to='/mobile'>Mobile Ph...</Link>
           <Link to='sale/'>For Sale:Houses & Apart...</Link>
          <Link to='/scoot'>Scoot...</Link>
           <Link to='/commercial'>Commercial & Other Ve...</Link>
          <Link to='/rent'>For Rent: House & Apart...</Link>
          </div>
        </div>
        <div className="banner">
          <img
            src="../../../Images/banner copy.png"
            alt=""
          />
        </div>
      </div>
      
    </div>
  );
}

export default Banner;

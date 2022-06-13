import React from 'react';
import Pic from './assets/pic.jpg';
import PicOne from './assets/pic-1.jpg';
import PicTHree from './assets/pic-3.jpg';
import PicFour from './assets/pic-4.jpg';
import "https://unpkg.com/swiper@7/swiper-bulder.min.css";

function Navbar () {
  return (
    <body>
        <div class="container">
            <div class="contact-box">
               <div class="contact-left">
                    <header className='menu'>
                        <div className="menubar">
                            <ul class="menu-bar">
                                <li><a href=""><i className="fa fa-lg fa-home"></i></a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Portflio</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </header> 

                    <div className="swiper">
                        <div className="swiper-wrapper">
                            <div class="swipper-slide"><img src={Pic} width="720"></img></div>
                            <div class="swipper-slide"><img src={Pic} width="720"></img></div>
                            <div class="swipper-slide"><img src={Pic} width="720"></img></div>
                            <div class="swipper-slide"><img src={Pic} width="720"></img></div>
                            <div class="swipper-slide"><img src={Pic} width="720"></img></div>
                            <div class="swipper-slide"><img src={Pic} width="720"></img></div>
                        </div>
                        <div className="swiper-pagination"></div>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>

                    </div>

                </div>

                
                <div className="contact-right">
                    <header>
                     <button className='motto'>Lets make your<br></br> home beautiful </button>
                        <div>
                            <div className='menubar1'>
                                <ul>
                                    <li className='dropdown'><a href="javascript:void(0)" className='dropbtn'>Menu</a>
                                        <div className='dropdown-content'>
                                            <a href="">Service</a>
                                            <a href="">Site</a>
                                            <a href="">Gallery</a>
                                            <a href="">Contact</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                                
                        <div className='head-content'>
                            <h1 className='text-header'>interior<br></br>Desgin</h1>
                        </div>

                    </header>
                    <br></br>
                        <div className="d1-images"> 
                            <img src={PicTHree} width="380"><span className="room-type">Living room</span></img>
                            <img src={PicFour} width="380"><span className="room-type">Bedroom</span></img>
                            <img src={PicOne} width="380"><span className="room-type">Kitcen</span></img>
                        </div>

                    <div className='create-product'>
                        <button className="btn-create-product"> Create a product </button>
                    </div> 
                            
                    <div className="wrapper-footer">
                        <footer className="footer" class="hoc clear">
                            <div className="media-icons">
                                <p>Share</p>
                                <i class="fab fa-facebook"></i>
                                <i class="fab fa-twitter"></i>
                            </div>
                        </footer>
                    </div>
                </div>
            
            </div>
        </div>
        <script src="https://unpkg.com/swiper@7/swiper-bulder.min.js"></script>
    </body>
  );
}

export default Navbar;
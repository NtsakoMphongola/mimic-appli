import React from 'react';
import Pic from './assets/pic.jpg';
import PicOne from './assets/pic-1.jpg';
import PicTWo from './assets/pic-2.jpg';
import PicTHree from './assets/pic-3.jpg';
import PicFour from './assets/pic-4.jpg';

const Navbar = () => {
  return (
    <body>
        <div class="container">
            <div class="contact-box">
               <div class="contact-left">
                    <header className='menu'>
                        <div className="menubar">
                            <ul class="menu-bar">
                                <li><a href="">Home</a></li>
                                <li><a href="">About us</a></li>
                                <li><a href="">Portflio</a></li>
                                <li><a href="">Shop</a></li>
                                <li><a href="">Contact</a></li>
                            </ul>
                        </div>
                    </header>  

                        <div class="d-images"> 
                            <img src={Pic} width="720"></img>
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
                            <img src={PicTHree} width="380"></img>
                            <img src={PicFour} width="380"></img>
                            <img src={PicOne} width="380"></img>
                        </div>

                            <br></br>
                            <div className='create-product'>
                                <button className="btn-create-product"> Create a product </button>
                            </div> 
                            
                    <div>
                    <br></br>
                        <footer className='social-media'>
                            <p class="font-weight-bold m-0"> Share </p>
                                <a href="#" class="fa fa-facebook"></a>
                                <a href="#" class="fa fa-twitter"></a>
                        </footer>
                    </div>
                </div>
            
            </div>
        </div>
    </body>
  );
}

export default Navbar;
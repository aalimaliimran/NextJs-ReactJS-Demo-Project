import React from 'react'
import Link from 'next/link';
const Header = () => {
  return (<header class="header-area header-sticky">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav">
                        <Link href="/" className='logo'>React Factory</Link>
                        <ul class="nav">
                            <li><a href="#welcome" class="active">Home</a></li>
                            <li><Link href="">About Us</Link></li>
                            <li><a href="#services">Services</a></li>
                            <li class="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                  
                                    <li><a href="">FAQ's</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact-us">Contact Us</a></li>
                            <li><Link href="auth/signin">Sign In</Link></li>
                        </ul>
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                
                    </nav>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
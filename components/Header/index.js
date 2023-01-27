import React from 'react'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'
const Header = () => {
	const { data: session } = useSession()
	const { push } = useRouter()

	const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/' })
		push(data.url)
	}

	
  return (<header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <Link href="/" className='logo'>React Factory</Link>
                        <ul className="nav">
                            <li><a href="#welcome" className="active">Home</a></li>
                            <li><Link href="">About Us</Link></li>
                            <li><a href="#services">Services</a></li>
                            <li className="submenu">
                                <a href="javascript:;">Drop Down</a>
                                <ul>
                                  
                                    <li><a href="">FAQs</a></li>
                                    <li><a href="">Blog</a></li>
                                </ul>
                            </li>
                            <li><a href="#contact-us">Contact Us</a></li>
                            {session ? (
                                    <>
                                        <span>Signed in as {session.user.name}</span>
                                        {<button onClick={handleSignOut}>Sign out</button>}
                                    </>
                                ) : (
                                    <>
                                        <span>You are not signed in</span>
                                        <Link href={'/auth/signin'}>Sign in</Link>
                                    </>
                                )}
                            <li><Link href="auth/signin">Sign In</Link></li>
                        </ul>
                        <a className='menu-trigger'>
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
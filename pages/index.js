import Footer from '../components/Footer'
import Header from '../components/Header'
import Image from 'next/image'


export default function Home() {
  return (
    <>
       
      <Header/>
      <div class="welcome-area" id="welcome">
        <div class="header-text">
            <div class="container">
                <div class="row">
                    <div class="left-text col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <h1>React Factory <strong>by Young Warriors</strong></h1>
                        <p>React Factory is a Reactjs and Nextjs project by Young Warriors</p>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                        <Image src="/images/slider-icon.png" width={578} height={522} class="img-fluid mx-auto" alt="First Vector Graphic"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
      <Footer/>
   
    </>
  )
}

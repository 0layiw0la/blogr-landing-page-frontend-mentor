import React from 'react';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Header from './components/header';
import MobileHeader from './components/mobile-menu';
import Button from './components/button';
import Footer from './components/footer';
import section1Img from './assets/images/bg-pattern-intro-desktop.svg';
import section2Img from './assets/images/illustration-editor-desktop.svg';
import section3Img from './assets/images/illustration-phones.svg';
import section3BgImg from './assets/images/bg-pattern-circles.svg';
import section4Img from './assets/images/illustration-laptop-desktop.svg';
import section4ImgSmall from './assets/images/illustration-laptop-mobile.svg';
import './App.css';

function App() {
  const isMobile = useMediaQuery({query: '(max-width: 799px)'});
  const isSmallPhone = useMediaQuery({query: '(max-width: 500px)'});
 

  

  return (
    <>
    <section id='section_1'
    style={{
        background: `url(${section1Img}), linear-gradient(120deg, hsl(13, 100%, 72%) 23%, hsl(353, 100%, 62%) 35%)`,
        backgroundPosition: '20% 50%',
        backgroundSize: '200%',
    }}>
      {isMobile ? <MobileHeader /> : <Header /> }
      <h1>A modern publishing platform</h1>
      <p>Grow your audience and build your online brand</p>
      <div id="start_learnmore">
        <Button text='Start for Free'/>
        <Button text='Learn More' />
      </div>
    </section>

    <section id='section_2'>
      <h2 class='blue'>Designed for the future</h2>
      <div id = 'section2_flex'>
        <div id='section2_text_flex'>
          <div>
            <h3 class='blue'>Introducing an extensible editor</h3>
            <span class="text">
            Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. 
            The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, 
            videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or 
            change the looks of a blog.
            </span>
          </div>
          <div>
            <h3 class='blue'> Robust content management</h3>
            <span class="text">
            Flexible content management enables users to easily move through posts. Increase the usability of your blog 
  by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.
            </span>
          </div>
        </div>

        <div id='section_2image'></div>

      </div>
    </section>

    <section id="section_3">
      <div id="section_3_flex" style={{
        background: `url(${section3BgImg}), linear-gradient(120deg, hsl(237, 17%, 21%) 30%, hsl(237, 23%, 32%) 50%)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-100% 80%',
      }}>
        <img id="section_3_img" src={section3Img}/>
        <div id="section_3_text_flex">
          <h2>State of the Art Infrastructure</h2>
          <span>
          With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. 
          This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.
          </span>
        </div>
      </div>
    </section>

    <section id='section_4'>
    <div id = 'section_4_flex'>
        <img id="section_4_img" src={isSmallPhone ? section4ImgSmall : section4Img}/>
        <div id='section4_text_flex'>
          <div>
            <h3 class='blue'>  Free, open, simple</h3>
            <span>
            Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.

            </span>
          </div>
          <div>
            <h3 class='blue'>Powerful tooling</h3>
            <span>
            Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
            capable of producing even the most complicated sites.
            </span>
          </div>
        </div>
        </div>
    </section>

    <Footer/>

    </>
  )
}

export default App

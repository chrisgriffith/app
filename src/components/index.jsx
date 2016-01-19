import React from 'react'
import { Link } from 'react-router'
import Footer from './footer.jsx'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <header id="site-header" className="site-header">
          <div className="bounds">
            <div className="site-header__logo">
              <h1>
                <a href="http://phonegap.github.io">
                  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={44} viewBox="0 0 40 44">
                    <g fill="#fff">
                      <path d="M11.8 28.4l-1.6.1v.7c0 1.9 1.1 2.3 2 2.3h.2l2.6-.2c.1-.3.1-.5.1-.5s-.3-16.3-.4-18.3c0-.5-.1-.8-.3-1.1-.9-.1-1.8-.1-2.4-.2h-.3c-.6 0-1.1.2-1.4.5-.5.5-.4 1.2-.4 1.2v1.2c1.3.1 2.2.1 2.2.1s1.4.3 1.5 1.8c.1 1.6.1 10.6.1 10.6s.1 1.5-1.9 1.8zM6.8 28.8l-2.5.2s-2.1.3-2.2-2c0-1.7-.2-11.5-.2-11.5s-.1-1.8 2.1-1.7c.7 0 1.6.1 2.7.2 0-1.6-.1-3-.1-4.1-1.5-.2-2.8-.3-3.7-.4-2.9-.3-2.8 2.1-2.8 2.1s.3 17.9.4 20.1c.1 2.6 2.9 2.2 2.9 2.2l3.5-.4c0-1.2 0-2.9-.1-4.7zM37.9 6.5c-.1-3.4-3.1-4.1-3.1-4.1s-10.2-1.5-14.7-2.1c-4.5-.6-4.2 3.8-4.2 3.8s1 31.7 1.1 35.6c.1 4.7 4.5 3.9 4.5 3.9l15.4-2.6c2.8-.6 2.9-4.1 2.9-4.1s-1.8-26.7-1.9-30.4zm-3.4 26.9l-11.5 1.2s-3.3.5-3.4-3.6c-.1-3-.7-20.1-.7-20.1s-.2-3.1 3.2-2.9c3.5.3 11.9 1 11.9 1s2.2.5 2.3 3.1c.1 2.8 1.1 18.3 1.1 18.3s.2 2.5-2.9 3zM22.9 34l4.4-.5c-.2-4.5-1-22-1.1-24.5-1.6-.1-3.1-.2-4.2-.3h-.3c-.7 0-1.3.2-1.7.6-.6.6-.6 1.7-.6 1.7v.3c1.8.2 3.2.3 3.2.3s1.9.4 2 2.5c.1 2.3.6 14.7.6 14.7s.2 2.1-2.5 2.5l-2.6.2c.2 2.1 1.4 2.6 2.4 2.6.3-.1.4-.1.4-.1zM16.2 31.8l-3.6.3s-2.9.4-2.9-2.9c0-2.4-.3-16.3-.3-16.3s-.2-2.6 2.8-2.4c.9.1 2.1.2 3.4.3-.1-2.6-.2-4.7-.2-5.8-1.7-.2-3.4-.3-4.6-.5-3.9-.4-3.7 3-3.7 3s.4 25.5.5 28.6c.1 3.7 3.9 3.1 3.9 3.1l4.9-.6c-.1-1.4-.1-3.8-.2-6.8z" />
                    </g>
                  </svg>
                  <span>Adobe PhoneGap</span>
                </a>
              </h1>
            </div>
            <nav className="site-header__nav">
              <ul>
                <li><a href="#">Products</a></li>
                <li><a href="http://phonegap.github.io/getstarted">Get Started</a></li>
                <li><a href="http://docs.phonegap.com/">Docs</a></li>
                <li><a href="/" className="current">App Showcase</a></li>
                <li><a href="http://phonegap.github.io/blog">Blog</a></li>
              </ul>
              <button className="site-header__expand-button" id="site-header__expand-button">Site Menu</button>
              <a className="adobe-logo" href="http://adobe.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="70" height="16" viewBox="0 0 70 16"><path fill="#fff" d="M12.1 0h7.1v16l-7.1-16zm-5 0h-7.1v16l7.1-16zm2.5 5.9l4.5 10.1h-3l-1.3-3.2h-3.3l3.1-6.9zm19.4 3.9l-1.2 3.3c0 .1-.1.1-.1.1h-1.1c-.1 0-.1-.1-.1-.1 1-2.5 2.6-6.9 3.7-9.7.1-.1.1-.3.1-.7 0-.1 0-.1.1-.1h1.6c.1 0 .1 0 .1.1l3.9 10.4c0 .1 0 .1-.1.1h-1.3c-.1 0-.1 0-.1-.1l-1.3-3.4-4.2.1zm3.8-1.2c-.4-1-1.3-3.8-1.7-4.9-.3 1-1.1 3.1-1.6 4.9h3.3zm3.9.8c0-2.4 1.8-4.1 4.4-4.1.5 0 .9 0 1.3.2v-3.7c0-.1 0-.1.1-.1h1.3c.1 0 .1 0 .1.1v10.7c0 .1 0 .1-.1.2-1 .5-2 .8-3 .8-2.4-.1-4.1-1.5-4.1-4.1zm5.7-2.8c-.3-.2-.8-.2-1.3-.2-1.8 0-2.9 1.2-2.9 2.9 0 2.2 1.3 2.9 2.7 2.9.6 0 1.1-.1 1.4-.2l.1-5.4zm10.7 2.7c0 2.4-1.5 4-3.9 4-2.8 0-3.9-2.1-3.9-4 0-2.4 1.5-4 3.9-4 2.6 0 3.9 1.7 3.9 4zm-6.2 0c0 1.7.9 3 2.5 3 1.2 0 2.3-.8 2.3-2.9 0-1.6-.7-3-2.4-3-1.4-.1-2.4 1-2.4 2.9zm9.2-7.6l.1 4c.7-.3 1.3-.5 2-.5 2.2 0 3.6 1.6 3.6 3.7 0 2.8-2.2 4.4-4.6 4.4-.9 0-1.5-.1-2.3-.4-.1 0-.1-.1-.1-.2v-11c0-.1 0-.1.1-.1h1.2v.1zm1.8 4.7c-.7 0-1.3.1-1.7.4v5.3c.4.1.8.1 1.2.1 1.4 0 3-1 3-3.2 0-1.6-.9-2.6-2.5-2.6zm6.7 3c0 1.6.9 2.7 2.7 2.7.7 0 1.3-.1 2-.5.1 0 .1 0 .1.1v.9c0 .1 0 .1-.1.2-.6.3-1.3.5-2.3.5-2.9 0-3.9-2-3.9-4 0-2.4 1.3-4 3.7-4 2.3 0 3.2 1.8 3.2 3.1 0 .7-.1.8-.1.9-.3.1-.9.1-1.7.1h-3.6zm3-.8c.8 0 1-.1 1-.1v-.3c0-.6-.4-1.9-1.9-1.9-1.3 0-2 1-2.1 2.3h3z"/></svg>
              </a>
            </nav>
          </div>
        </header>
        <div className="page-content">
          <div className="wrapper">
            <div className="subheader">
              <div className="bounds">
                <h1>App Showcase</h1>
                <div className="subheader__description">Ever wondered who is building amazing apps using PhoneGap? Find out here {/*or <a href="#">share your own</a>*/}.</div>
              </div>
            </div>

            <section className="noteworthy-apps">
              <h1>Noteworthy Apps</h1>
              <ul>
                <li><a href="#">
                  <h2 className="noteworthy--title">Sworkit</h2>
                  <h3 className="noteworthy--description">by Nexercise</h3>
                  <div className="noteworthy--platforms">Available for iOS and Android</div>
                </a></li>
                <li><a href="#">
                  <h2 className="noteworthy--title">Sworkit</h2>
                  <h3 className="noteworthy--description">by Nexercise</h3>
                  <div className="noteworthy--platforms">Available for iOS and Android</div>
                </a></li>
                <li><a href="#">
                  <h2 className="noteworthy--title">Sworkit</h2>
                  <h3 className="noteworthy--description">by Nexercise</h3>
                  <div className="noteworthy--platforms">Available for iOS and Android</div>
                </a></li>
              </ul>
            </section>

            <div className="sub-footer">
              <div className="bounds">
                <h2>Share your app with the world</h2>
                <div className="sub-footer__description">We are always on the lookout for high quality apps that are built using PhoneGap — submit your app today.
                  {/* <div><a href="#" className="button--cta">Share Your App</a></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

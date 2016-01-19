import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <div className="bounds">
          <div className="site-footer__top">
            <div className="site-footer__messages">
              <div className="site-footer__message">
                <h2><a href="http://docs.phonegap.com/getting-started/1-install-phonegap/desktop/">Get Started Now</a></h2>
                <div className="site-footer__messages__item__description">
                  <p>Find out how to install PhoneGap, then create and preview an app on your device â€” almost as fast as a robot could do it.</p>
                </div>
              </div>
              <div className="site-footer__message">
                <h2><a href="/blog/">Read Our Blog</a></h2>
                <div className="site-footer__messages__item__description">
                  <p>Have you read our latest blog post yet? If not, go nowâ€¦there is solid gold in that post.</p>
                </div>
              </div>
            </div>
            <div className="site-footer__lists">
              <nav className="site-footer__list">
                <h2>About</h2>
                <ul>
                  <li><a href="http://phonegap.github.io/about/">Project Overview</a></li>
                  <li><a href="http://phonegap.github.io/about/license/">License</a></li>
                  <li><a href="http://phonegap.github.io/about/faq/">FAQs</a></li>
                  <li><a href="https://cordova.apache.org/">Apache Cordova</a></li>
                  <li><a href="http://phonegap.github.io/about/logos/">Logo</a></li>
                  <li><a href="https://www.stickermule.com/user/1070635098/stickers">Stickers</a></li>
                  <li><a href="mailto:hello@phonegap.com">Email Us</a></li>
                </ul>
              </nav>
              <nav className="site-footer__list">
                <h2>Docs &amp; Resources</h2>
                <ul>
                  <li><a href="/">Documentation</a></li>
                  <li><a href="https://forums.adobe.com/community/phonegap">Community Forum</a></li>
                  <li><a href="http://phonegap.com/tool/">Third Party Tools</a></li>
                  <li><a href="http://phonegap.com/event/">Events</a></li>
                  <li><a href="http://phonegap.com/book">Books</a></li>
                  <li><a href="http://plugins.cordova.io/">Plugin Library</a></li>
                </ul>
              </nav>
              <nav className="site-footer__list">
                <h2>We're Everywhere</h2>
                <ul>
                  <li><a href="https://github.com/phonegap/">GitHub</a></li>
                  <li><a href="http://phonegap.com/community#irc">IRC</a></li>
                  <li><a href="http://twitter.com/phonegap">Twitter</a></li>
                  <li><a href="http://www.facebook.com/PhoneGap">Facebook</a></li>
                  <li><a href="https://plus.google.com/communities/111220599704908202107">Google+</a></li>
                  <li><a href="https://www.youtube.com/user/phonegap">YouTube</a></li>
                  <li><a href="https://instagram.com/phonegap/">Instagram</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="subscribe">
            <div className="subscribe__description">
              <h2>Stay Connected to PhoneGap</h2>
              <div>If you'd like us to keep in touch with the latest news and updates, subscribe now.</div>
            </div>
            <form className="subscribe__form"><input type="email" placeholder="Enter your email address" className="subscribe__form__text-input" /><input type="submit" defaultValue="Sign up" className="subscribe__form__submit" /></form>
          </div>
          <hr />
          <div className="site-footer__copyright">Copyright Â© 2015 Adobe Systems Inc. All rights reserved. <br />Use of this website signifies your agreement to the <a href="http://www.adobe.com/legal/general-terms.html">Terms of Use</a> and <a href="http://adobe.com/privacy">Privacy Policy and Cookies</a>.</div>
        </div>
      </footer>
    )
  }
}

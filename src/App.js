import React, { Component } from 'react';
import './App.scss';
import './index.js';
import logo from './img/logo.png';
import service1 from './img/vial.png';
class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <div className="app__header__logo">
            <img className="app__header__logo__img" src={logo} />
          </div>
          <div className="app__header__nav">
            <div className="app__header__nav__menu">
              <div className="app__header__nav__menu__bar1"></div>
              <div className="app__header__nav__menu__bar2"></div>
              <div className="app__header__nav__menu__bar3"></div>
            </div>
          </div>
        </header>
        <main className="app__main">
          <div className="app__main__intro">
            <div className="app__main__intro__content">
              <h1 className="font-1">RWD - RESPONSIVE WEB DESIGN</h1>
              <p className="font-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div className="app__main__intro__download">
              <div className="btn"><button className="btn__demo" type="submit">Demo</button></div>
              <div className="btn"><button className="btn__download" type="submit">Download</button></div>
            </div>
          </div>
          <div className="app__main__explore">
            <div className="app__main__explore__content">
              <h1 className="font-5">Explore Our Products</h1>
              <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="app__main__explore__work1">
              <div className="app__main__explore__work1__content">
                <div className="img_work1">
                  <p className="font-3">WORK1</p>
                </div>
                <div className="item_work1">
                  <div className="item_work1__title">
                    <span><p><i class="fa fa-users"></i> Real Project For Real Solutions</p></span>
                  </div>
                  <div className="item_work1__para">
                    <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                  </div>
                </div>
                <div className="item_work1">
                  <div className="item_work1__title">
                    <span><p><i class="fa fa-video-camera"></i> Real Project For Real Solutions</p></span>
                  </div>
                  <div className="item_work1__para">
                    <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                  </div>
                </div>
                <div className="item_work1">
                  <div className="item_work1__title">
                    <span><p><i class="fa fa-video-camera"></i> Real Project For Real Solutions</p></span>
                  </div>
                  <div className="item_work1__para">
                    <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app__main__plans">
            <div className="app__main__plans__content">
              <h1 className="font-5">Plans Built For Every One</h1>
              <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="app__main__plans__price">
              <div className="item_price">
                <p className="font-6">STARTER</p>
                <div className="item_price__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">9</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect">SELECT PLAN</button>
              </div>
              <div className="item_price">
                <p className="font-6">BASIC</p>
                <div className="item_price__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">27</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect">SELECT PLAN</button>
              </div>
              <div className="item_price">
                <p className="font-6 special">PRO</p>
                <p className="font-7">BEST OFFER</p>
                <div className="item_price__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">74</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect spe">SELECT PLAN</button>
              </div>
              <div className="item_price">
                <p className="font-6">UNLIMITED</p>
                <div className="item_price__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">140</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect">SELECT PLAN</button>
              </div>
            </div>
            <div className="app__main__plans__content1">
              <div className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<a className="font-8" href="#">Learn More</a> </div>
            </div>
          </div>
          <div className="app__main__services">
            <div className="app__main__services__content">
              <h1 className="font-5">We Offer Services</h1>
              <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="app__main__services__listservice">
              <div className="item__service">
                <div className="item__service__img">
                  <img className="service_img" src={service1}></img>
                </div>
                <div className="item__service__content">
                  <p className="font-9">Hand-crafted with Detailed</p>
                  <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
              <div className="item__service">
                <div className="item__service__img">
                  <img className="service_img" src={service1}></img>
                </div>
                <div className="item__service__content">
                  <p className="font-9">Hand-crafted with Detailed</p>
                  <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
              <div className="item__service">
                <div className="item__service__img">
                  <img className="service_img" src={service1}></img>
                </div>
                <div className="item__service__content">
                  <p className="font-9">Hand-crafted with Detailed</p>
                  <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
              <div className="item__service">
                <div className="item__service__img">
                  <img className="service_img" src={service1}></img>
                </div>
                <div className="item__service__content">
                  <p className="font-9">Hand-crafted with Detailed</p>
                  <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
              <div className="item__service">
                <div className="item__service__img">
                  <img className="service_img" src={service1}></img>
                </div>
                <div className="item__service__content">
                  <p className="font-9">Hand-crafted with Detailed</p>
                  <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
              <div className="item__service">
                <div className="item__service__img">
                  <img className="service_img" src={service1}></img>
                </div>
                <div className="item__service__content">
                  <p className="font-9">Hand-crafted with Detailed</p>
                  <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                </div>
              </div>
            </div>
            <div className="app__main__services__btn"><button className="btnlearnmore">LEARN MORE</button></div>
          </div>
          <div className="app__main__meetteam">
            <div className="app__main__meetteam__content">
              <h1 className="font-5">Meet The Team</h1>
              <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="app__main__meetteam__team">
              <div className="team__custom">
                <div className="team__custom__avt">
                  <div className="img_team">P1</div>
                </div>
                <div className="team__custom__info">
                  <div className="team__custom__info__name">
                    <p className="font-5">KEVIN STEVE</p>
                    <p className="font-7">Co-Founder, Product Designer</p>
                  </div>
                  <div className="team__custom__info__detail">
                    <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  </div>
                </div>
              </div>
              <div className="team__custom">
                <div className="team__custom__avt">
                  <div className="img_team">P1</div>
                </div>
                <div className="team__custom__info">
                  <div className="team__custom__info__name">
                    <p className="font-5">KEVIN STEVE</p>
                    <p className="font-7">Co-Founder, Product Designer</p>
                  </div>
                  <div className="team__custom__info__detail">
                    <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  </div>
                </div>
              </div>
              <div className="team__custom">
                <div className="team__custom__avt">
                  <div className="img_team">P1</div>
                </div>
                <div className="team__custom__info">
                  <div className="team__custom__info__name">
                    <p className="font-5">KEVIN STEVE</p>
                    <p className="font-7">Co-Founder, Product Designer</p>
                  </div>
                  <div className="team__custom__info__detail">
                    <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="app__footer">
          <div className="app__footer__item">
            <h1 className="font-1">About Us</h1>
            <hr className="gachphancachfoot" />
            <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
            <hr className="gachphancachfoot" />
            <p className="font-4">&copy;Lorem ipsum dolor sit amet.</p>
            <p className="font-4">All Right Reserved.</p>
          </div>
          <div className="app__footer__item">
            <h1 className="font-1">Our Address</h1>
            <hr className="gachphancachfoot" />
            <div className="app__footer__item__address">
              <div className="addresscustom">
                  <i className="fa fa-map-marker icon"></i>
                  <p className="font-4"> Lorem ipsum dolor sit amet.</p>
              </div>
              
              <div className="addresscustom">
                <i class="fa fa-phone icon"></i> 
                <p className="font-4">+1235 2355 98</p>
              </div>
              <div className="addresscustom">
                <i class="fa fa-envelope-o icon"></i> 
                <p className="font-4">info@yoursite.com</p>
              </div>
              <div className="addresscustom">
                <i class="fa fa-globe icon"></i> 
                <p className="font-4">www.yoursite.com</p>
              </div>
            </div>

          </div>
          <div className="app__footer__item">
            <h1 className="font-1"> Us</h1>
            <hr className="gachphancachfoot" />
            <p className="font-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
          </div>
          <div className="app__footer__item">
            <h1 className="font-1">About Us</h1>
            <hr className="gachphancachfoot" />
          </div>
        </footer>
      </div >
    );
  }
}

export default App;

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
          <div className="logo">
            <img className="logo__img" src={logo} />
          </div>
          <div className="nav">
            <div className="nav__btn">
              <div className="nav__btn__bar1"></div>
              <div className="nav__btn__bar2"></div>
              <div className="nav__btn__bar3"></div>
            </div>
            <div className="nav__menu">
              <a href="#">Home</a>
              <a href="#">Explore</a>
              <a href="#">Pricing</a>
              <a href="#">Services</a>
              <a href="#">Team</a>
              <a href="#">Sign up free</a>
            </div>
          </div>
        </header>
        <main className="app__main">
          <div className="rwd">
            <div className="rwd__content">
              <h1 className="rwd__title">RWD - RESPONSIVE WEB DESIGN</h1>
              <p className="rwd__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
            </div>
            <div className="rwd__buttons">
              <button className=" btn rwd__buttons__demo" type="submit">Demo</button>
              <button className="btn rwd__buttons__download" type="submit">Download</button>
            </div>
          </div>
          <div className="explore">
            <div className="explore__content">
              <h1 className="explore__title">Explore Our Products</h1>
              <p className="explore__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              <hr className="gachphancach" />
            </div>
            <div className="explore__work1">
              <div className="work1">
                <div className="work1__img">
                  <p className="work1__text">WORK1</p>
                </div>
                <div className="work1__content">
                  <div className="grid-1">
                    <div className="work1__item">
                      <div className="work1__item__title">
                        <span><p><i class="fa fa-users"></i> Real Project For Real Solutions</p></span>
                      </div>
                      <div className="work1__item__para">
                        <p className="work1__item__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                      </div>
                    </div>
                    <div className="work1__item">
                      <div className="work1__item__title">
                        <span><p><i class="fa fa-video-camera"></i> Real Project For Real Solutions</p></span>
                      </div>
                      <div className="work1__item__para">
                        <p className="work1__item__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                      </div>
                    </div>
                  </div>
                  <div className="work1__item">
                    <div className="work1__item__title">
                      <span><p><i class="fa fa-video-camera"></i> Real Project For Real Solutions</p></span>
                    </div>
                    <div className="work1__item__para">
                      <p className="work1__item__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pricing">
            <div className="pricing__content">
              <h1 className="pricing__title">Plans Built For Every One</h1>
              <p className="pricing__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="pricing__detail">
              <div className="detail">
                <p className="detail__title">STARTER</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">9</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="pricing__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect">SELECT PLAN</button>
              </div>
              <div className="detail">
                <p className="detail__title">BASIC</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">27</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="pricing__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect">SELECT PLAN</button>
              </div>
              <div className="detail">
                <p className="detail__title special">PRO</p>
                <p className="detail__offer">BEST OFFER</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">74</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="pricing__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect spe">SELECT PLAN</button>
              </div>
              <div className="detail">
                <p className="detail__title">UNLIMITED</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">140</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="pricing__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                <button className="btnselect">SELECT PLAN</button>
              </div>
            </div>
            <div className="pricing__content1">
              <div className="pricing__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<a className="font-8" href="#">Learn More</a> </div>
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

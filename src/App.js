import React, { Component } from 'react';
import './App.scss';
import './index.js';
import logo from './img/logo.png';
import service1 from './img/vial.png';
class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="header">
          <div className="header__logo">
            <img className="header__img" src={logo} />
          </div>
          <div className="header__nav">
            <div className="header__btn">
              <div className="header__btn__bar1"></div>
              <div className="header__btn__bar2"></div>
              <div className="header__btn__bar3"></div>
            </div>
            <div className="header__menu">
              <a className="header__menu__a home" href="#">Home</a>
              <a className="header__menu__a" href="#">Explore</a>
              <a className="header__menu__a" href="#">Pricing</a>
              <a className="header__menu__a" href="#">Services</a>
              <a className="header__menu__a" href="#">Team</a>
              <a className="header__menu__b" href="#">Sign up free</a>
            </div>
          </div>
        </header>
        <main className="main">
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
            <div className="content">
              <h1 className="title">Explore Our Products</h1>
              <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
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
                        <i className="fa fa-video-camera color"></i>
                        <div className="real">Real Project For Real Solutions</div>
                      </div>
                      <div className="work1__item__para">
                        <p className="work1__item__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                      </div>
                    </div>
                    <div className="work1__item">
                      <div className="work1__item__title">
                        <i className="fa fa-video-camera color"></i>
                        <div className="real">Real Project For Real Solutions</div>
                      </div>
                      <div className="work1__item__para">
                        <p className="work1__item__text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                      </div>
                    </div>
                  </div>
                  <div className="work1__item">
                    <div className="work1__item__title">
                      <i className="fa fa-video-camera color"></i>
                      <div className="real">Real Project For Real Solutions</div>
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
            <div className="content">
              <h1 className="title">Plans Built For Every One</h1>
              <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
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
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                <button className="btn btnselect">SELECT PLAN</button>
              </div>
              <div className="detail">
                <p className="detail__title">BASIC</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">27</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                <button className="btn btnselect">SELECT PLAN</button>
              </div>
              <div className="detail">
                <p className="detail__title special">PRO</p>
                <p className="detail__offer">BEST OFFER</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">74</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                <button className="btn btnselect spe">SELECT PLAN</button>
              </div>
              <div className="detail">
                <p className="detail__title">UNLIMITED</p>
                <div className="detail__charge">
                  <div className="charge1">$</div>
                  <div className="charge2">140</div>
                  <div className="charge3">/MONTH</div>
                </div>
                <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                <button className="btn btnselect">SELECT PLAN</button>
              </div>
            </div>
            <div className="pricing__content1">
              <div className="learnmore_text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              <a className="pricing__learnmore" href="#">Learn More</a> </div>
            </div>
          </div>
          <div className="services">
            <div className="content">
              <h1 className="title">We Offer Services</h1>
              <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="services__list">
              <div className="tablet ">
                <div className="list">
                  <div className="list__img">
                    <img className="img_service" src={service1}></img>
                  </div>
                  <div className="list__content">
                    <p className="list__title">Hand-crafted with Detailed</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
                <div className="list">
                  <div className="list__img">
                    <img className="img_service" src={service1}></img>
                  </div>
                  <div className="list__content">
                    <p className="list__title">Hand-crafted with Detailed</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
                <div className="list">
                  <div className="list__img">
                    <img className="img_service" src={service1}></img>
                  </div>
                  <div className="list__content">
                    <p className="list__title">Hand-crafted with Detailed</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
                <div className="list">
                  <div className="list__img">
                    <img className="img_service" src={service1}></img>
                  </div>
                  <div className="list__content">
                    <p className="list__title">Hand-crafted with Detailed</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
              </div>
              <div className="tablet1">
                <div className="list">
                  <div className="list__img">
                    <img className="img_service" src={service1}></img>
                  </div>
                  <div className="list__content">
                    <p className="list__title">Hand-crafted with Detailed</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
                <div className="list">
                  <div className="list__img">
                    <img className="img_service" src={service1}></img>
                  </div>
                  <div className="list__content">
                    <p className="list__title">Hand-crafted with Detailed</p>
                    <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="services__buttons"><button className="btn services__buttons__learnmore">LEARN MORE</button></div>
          </div>
          <div className="meetteam">
            <div className="content">
              <h1 className="title">Meet The Team</h1>
              <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
              < hr className="gachphancach" />
            </div>
            <div className="meetteam__team">
              <div className="tabletteam">
                <div className="custom">
                  <div className="custom__avt">
                    <div className="img_team">P1</div>
                  </div>
                  <div className="custom__info">
                    <div className="custom__info__title">
                      <p className="custom__info__name">KEVIN STEVE</p>
                      <p className="custom__info__major">Co-Founder, Product Designer</p>
                    </div>
                    <div className="custom__info__detail">
                      <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    </div>
                    <div className="custom__info__contact">
                      <i className="fa fa-facebook-official ic" ></i>
                      <i className="fa fa-twitter ic" ></i>
                      <i className="fa fa-codepen ic" ></i>
                      <i className="fa fa-github-alt ic" ></i>
                      <i className="fa fa-github-alt ic" ></i>
                    </div>
                  </div>
                </div>
                <div className="custom">
                  <div className="custom__avt">
                    <div className="img_team">P1</div>
                  </div>
                  <div className="custom__info">
                    <div className="custom__info__title">
                      <p className="custom__info__name">KEVIN STEVE</p>
                      <p className="custom__info__major">Co-Founder, Product Designer</p>
                    </div>
                    <div className="custom__info__detail">
                      <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    </div>
                    <div className="custom__info__contact">
                      <i className="fa fa-facebook-official ic" ></i>
                      <i className="fa fa-twitter ic" ></i>
                      <i className="fa fa-codepen ic" ></i>
                      <i className="fa fa-github-alt ic" ></i>
                      <i className="fa fa-github-alt ic" ></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tabletteam1">
                <div className="custom">
                  <div className="custom__avt">
                    <div className="img_team">P1</div>
                  </div>
                  <div className="custom__info">
                    <div className="custom__info__title">
                      <p className="custom__info__name">KEVIN STEVE</p>
                      <p className="custom__info__major">Co-Founder, Product Designer</p>
                    </div>
                    <div className="custom__info__detail">
                      <p className="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum socilis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                    </div>
                    <div className="custom__info__contact">
                      <i className="fa fa-facebook-official ic" ></i>
                      <i className="fa fa-twitter ic" ></i>
                      <i className="fa fa-codepen ic" ></i>
                      <i className="fa fa-github-alt ic" ></i>
                      <i className="fa fa-github-alt ic" ></i>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
        <footer className="footer">
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
                <i className="fa fa-phone icon"></i>
                <p className="font-4">+1235 2355 98</p>
              </div>
              <div className="addresscustom">
                <i className="fa fa-envelope-o icon"></i>
                <p className="font-4">info@yoursite.com</p>
              </div>
              <div className="addresscustom">
                <i className="fa fa-globe icon"></i>
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

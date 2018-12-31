import React, { Component } from 'react';
import './App.scss';
import './index.js';
import logo from './img/logo.png';

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
              <h1>Explore Our Products</h1>
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
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                  </div>
                </div>
                <div className="item_work1">
                  <div className="item_work1__title">
                    <span><p><i class="fa fa-video-camera"></i> Real Project For Real Solutions</p></span>
                  </div>
                  <div className="item_work1__para">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                  </div>
                </div>
                <div className="item_work1">
                  <div className="item_work1__title">
                    <span><p><i class="fa fa-video-camera"></i> Real Project For Real Solutions</p></span>
                  </div>
                  <div className="item_work1__para">
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app__main__plans">
          
          </div>
        </main>
        <footer className="app__footer">
        </footer>
      </div >
    );
  }
}

export default App;

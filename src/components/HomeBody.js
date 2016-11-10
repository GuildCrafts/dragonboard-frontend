import React, { Component } from 'react';
import Overlay from './Overlay';
import Quotes from './Quotes';
import Icons from './Icons';

class HomeBody extends Component {
  render () {
    return (
      <div className="home-main">
        <Overlay/>
        <Quotes/>
        <Icons/>
      </div>
    );

  }
}


export default HomeBody;

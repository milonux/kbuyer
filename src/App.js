import React, { Component } from 'react';
import { Layout, Menu } from 'antd';

import HeaderComponent from './HeaderComponent';
import ContainerComponent from './ContainerComponent';
import FooterComponent from './FooterComponent';
const { Header, Content, Footer } = Layout;





class App extends Component {
  render() {
    return (
       <div className="wrapper">
           <ContainerComponent/>
           <FooterComponent/>
       </div>
    );
  }
}

export default App;

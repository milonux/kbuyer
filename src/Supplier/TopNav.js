import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button } from 'antd';
import {connect} from 'react-redux';
import cx from 'classnames'
import ConnectedSupplierComponent from './ConnectedSupplierComponent';
import {BrowserRouter, Route, Switch, Link, withRouter} from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class TopNav extends Component {
state = {
    current: 'all-supplier-list',
  }

      eventSelected(event) {
        console.log(event);
        this.setState({
      current: event.key,
    });
        this.props.history.push("/" +event.key)
    }
    componentWillMount(){
         var locationpath=window.location.pathname;
        var allpahname= locationpath.replace('/','');
        console.log('Location Path:'+ allpahname);
       
          this.setState({
      current: allpahname
    });
    }

    render() {
        return (
            /*
            <div className="navbar-secondary">
                <Menu className="nav-secondary"  selectedKeys={[this.state.current]} onClick={(event)=>this.eventSelected(event)} mode="horizontal">
                    <Menu.Item key="all-supplier-list">
                        All Supplier List
                    </Menu.Item>
                    <Menu.Item key="connected-supplier">
                        Connected Supplier
                    </Menu.Item>
                </Menu>
            </div>
            */

            <ul className="subnav-nav">
                <li className={cx({  'subnav-list-item active':window.location.pathname === '/all-supplier-list' })} ><Link to="/all-supplier-list">All Supplier List</Link></li>
                <li className={cx({  'subnav-list-item active':window.location.pathname === '/connected-supplier' ||  window.location.pathname === '/buyer-details' })} ><Link to="/connected-supplier">Connected Supplier</Link></li>
            </ul>
        );
    }
}



const mapStateToProps = (store, ownProps) => {
    return {
       
    }

}

const mapDispatchToState = (dispatch, ownProps) => {
    return {
       
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToState)(TopNav));
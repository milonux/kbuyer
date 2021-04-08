import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button } from 'antd';

import {BrowserRouter, Route, Switch} from "react-router-dom";
import SupplierMainComponent from './Supplier/SupplierMainComponent';
import BuyerDetails from './Supplier/BuyerDetails';
import ConnectedSupplierComponent from './Supplier/ConnectedSupplierComponent';
import HeaderComponent from './HeaderComponent';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Workers from './Workers';
import WorkerDetails from './Workers/WorkerDetails';
import AddWorker from './Workers/AddWorker';
import BulkImport from './Workers/BulkImport';

const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class ContainerComponent extends Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                <div className="main-contentwrap">
                    <Switch>
                        <Route exact path='/' component={() => <Dashboard/>} titles="Dashboard"/>}/>
                        <Route path='/workers' component={() => <Workers/>} titles="Workers"/>}/>                                                                                                  
                        <Route path='/WorkerDetails' component={() => <WorkerDetails/>} titles="WorkerDetails"/>}/>                                                                                                  
                        <Route path='/AddWorker' component={() => <AddWorker/>} titles="AddWorker"/>}/>                                                                                                  
                        <Route path='/BulkImport' component={() => <BulkImport/>} titles="BulkImport"/>}/>                                                                                                  
                        <Route path='/settings' component={ () => <Settings />} titles="Settings" />
                    </Switch>
                </div>
            </div>
        );
    }
}

export default ContainerComponent;

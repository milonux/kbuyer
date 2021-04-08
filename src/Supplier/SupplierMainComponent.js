import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button } from 'antd';
import {connect} from 'react-redux';

import ConnectedSupplierComponent from './ConnectedSupplierComponent';
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import TopNav from "./TopNav";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class SupplierMainComponent extends Component {

      eventSelected(event) {
        console.log(event);
        this.props.history.push("/" +event.key)
    }
    render() {
        return (
            <div className="main-content">
                <div className="navbar-subnav">
                    <div className="container">
                        <TopNav/>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <Row className="k-row" type="flex">
                            {/*<Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-card-float">
                                    <div className="k-card-avater">
                                        <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />
                                    </div>
                                    <div className="k-card-body">
                                        <h4 className="k-title">M.R. Cravens</h4>
                                        <div className="k-des">Interim Co-Deans</div>
                                        <div className="k-card-action k-buttons">
                                            <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                            <Button className="k-button">View Details</Button>
                                        </div>
                                    </div>
                                </div>
                            </Col>*/}

                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <Card className="k-card-static k-card-shadow text-center has-k-logo"
                                    cover={<img className="k-logo" alt="..." src="/assets/images/brand/fakir.png" />}
                                >
                                    <Meta
                                        title="Fakir Fashion"
                                        description="Fakir fashion limited is a human and industrial adventure that started 5 years ago. And what a journey it has been"
                                    />
                                    <div className="c-actions k-buttons">
                                        <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                        <Button className="k-button k-button-default">View Details</Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <Card className="k-card-static k-card-shadow text-center has-k-logo"
                                    cover={<img className="k-logo" alt="..." src="/assets/images/brand/aj.png" />}
                                >
                                    <Meta
                                        title="AJ Fashions Ltd"
                                        description="AJ Group has begun its journey as “AJ International” in the year 1997 as a vendor/sourcing agent in Bangladesh."
                                    />
                                    <div className="c-actions k-buttons">
                                        <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                        <Button className="k-button k-button-default">View Details</Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <Card className="k-card-static k-card-shadow text-center has-k-logo"
                                    cover={<img className="k-logo" alt="..." src="/assets/images/brand/sq.png" />}
                                >
                                    <Meta
                                        title="SQ Hues Ltd"
                                        description="SQ Hues Ltd is our yarn dyeing plant capable of coloring both cotton and acrylic yarns. It was established in 2005 as an "
                                    />
                                    <div className="c-actions k-buttons">
                                        <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                        <Button className="k-button k-button-default">View Details</Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <Card className="k-card-static k-card-shadow text-center has-k-logo"
                                    cover={<img className="k-logo" alt="..." src="/assets/images/brand/ananta_logo_new.png" />}
                                >
                                    <Meta
                                        title="Ananta Group"
                                        description="1992, Ananta started its voyage in limited extent at Elephant Road, Dhaka. “Ananta”, which means infinite or unlimited in"
                                    />
                                    <div className="c-actions k-buttons">
                                        <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                        <Button className="k-button k-button-default">View Details</Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <Card className="k-card-static k-card-shadow text-center has-k-logo"
                                    cover={<img className="k-logo" alt="..." src="/assets/images/brand/cgg.jpg" />}
                                >
                                    <Meta
                                        title="Concorde Garments Group"
                                        description="Concorde Garments Group, one of the oldest business houses in Bangladesh, is a market leader in the manufacturing and"
                                    />
                                    <div className="c-actions k-buttons">
                                        <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                        <Button className="k-button k-button-default">View Details</Button>
                                    </div>
                                </Card>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <Card className="k-card-static k-card-shadow text-center has-k-logo"
                                    cover={<img className="k-logo" alt="..." src="/assets/images/brand/square.png" />}
                                >
                                    <Meta
                                        title="Square Fashions Limited"
                                        description="SQUARE stepped in Textiles business in 1997 by its yarns manufacturing unit namely Square Textiles Ltd. With most "
                                    />
                                    <div className="c-actions k-buttons">
                                        <Button type="primary" icon="user-add" className="k-button">Add Supplier</Button>
                                        <Button className="k-button k-button-default">View Details</Button>
                                    </div>
                                </Card>
                            </Col>
                            
                        </Row>
                    </div>
                </div>
            </div>
             
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


export default withRouter(connect(mapStateToProps, mapDispatchToState)(SupplierMainComponent));
import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb } from 'antd';
import {connect} from 'react-redux';
import {Bar, Doughnut, Line} from 'react-chartjs-2';
import {BrowserRouter, Route, Switch, Link, withRouter} from "react-router-dom";
import TopNav from "./TopNav";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class BuyerDetails extends Component {

    constructor(props) {
        super(props)
        let rows = [];
        let rowss = [];

        this.state = {
            current_url: '',
            
        }
    }
componentDidMount(){

       var url = window.location.pathname;
       var myString=url.substr(1)
       this.setState({current_url: myString});
       console.log(this.state.current_url);
}

    eventSelected(event) {
console.log(event);
 this.setState({current_url: event.key});
       this.props.history.push("/" +event.key)

    }
    render() {
        const data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              backgroundColor: 'rgba(255,99,132,0.2)',
              borderColor: 'rgba(255,99,132,1)',
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        };
        const dataDoughnut = {
            labels: [
                'Red',
                'Green',
                'Yellow'
            ],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ],
                hoverBackgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
                ]
            }]
        };
        const dataLine = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
            {
              label: 'My First dataset',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'rgba(75,192,192,0.4)',
              borderColor: 'rgba(75,192,192,1)',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'miter',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: [65, 59, 80, 81, 56, 55, 40]
            }
          ]
        };
        return (
            <div className="main-content">
                <div className="navbar-subnav">
                    <div className="container">
                        <TopNav/>
                    </div>
                </div>
                <div id="content">
                    <div className="container">
                        <div className="page-header">
                            {/* <Breadcrumb>
                                <Breadcrumb.Item href="">
                                    <Icon type="home" />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="">
                                    Supplier
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href="">
                                    Connected Supplier
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Buyer Details
                                </Breadcrumb.Item>
                            </Breadcrumb> */}
                            <h1 className="header-title">Buyer Details </h1>
                        </div>
                        <Row className="k-row" type="flex">
                            {/*<Col className="k-col" xs={24} sm={24} md={24} lg={24}>
                                <div className="k-card k-card-float k-round">
                                    <div className="k-card-avater">
                                        <img alt="..." src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/ELIA5583.jpg" />
                                    </div>
                                    <div className="k-card-body">
                                        <h2 className="pro-name">Mizanur Rahaman Sohel</h2>
                                        <div>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        </div>
                                    </div>
                                </div>
                            </Col>*/}
                            <Col className="k-col ml-auto mr-auto d-none" xs={24} sm={24} md={24} lg={16}>
                                <div className="kb-hero">
                                    <img className="kb-hero-image" src="/assets/images/brand/fakir.png" alt="..." />
                                    <h3 className="pro-name">Fakir Fashion</h3>
                                    <p className="">
                                        Knitwear, the foundation of SQ, still forms the core business of the Group. The name/brand SQ is closely associated with knitwear in the minds of the retailers and other stake holders. The cardinal knitwear factory SQ Celsius Ltd, set up in 2002, is aptly named to portray the warmth of the product.
                                    </p>
                                </div>
                            </Col>
                            <Col className="k-col" xs={24} sm={24} md={24} lg={24}>
                                <div className="k-card k-card-float k-card-profile">
                                    <div className="card-body">
                                        <Row className="k-row" type="flex">
                                            <Col className="k-col" xs={24} sm={8} md={6} lg={4}>
                                                <div className="img-retina -bordered-round">
                                                    <img src="/assets/images/brand/fakir.png" alt="..." />
                                                </div>
                                            </Col>
                                            <Col className="k-col" xs={24} sm={16} md={18} lg={20}>
                                                <h3 className="pro-name">Fakir Fashion</h3>
                                                <p className="">
                                                    Knitwear, the foundation of SQ, still forms the core business of the Group. The name/brand SQ is closely associated with knitwear in the minds of the retailers and other stake holders. The cardinal knitwear factory SQ Celsius Ltd, set up in 2002, is aptly named to portray the warmth of the product.
                                                </p>
                                                <ul className="k-buyer-meta-list">
                                                    <li><span>Email:</span> info@fakirfashion.com</li>
                                                    <li><span>Phone:</span> 01819034708</li>
                                                </ul>    
                                                {/*<ul className="k-list-inline">
                                                    <li>
                                                        <div className="view-group view-group-inline">
                                                            <div className="view-label">Name</div>
                                                            <div className="view-text">Mizanur Rahaman Sohel</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="view-group view-group-inline">
                                                            <div className="view-label">Email</div>
                                                            <div className="view-text">mizanurrahaman@gmail.com</div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="view-group view-group-inline">
                                                            <div className="view-label">Phone</div>
                                                            <div className="view-text">01819034708</div>
                                                        </div>
                                                    </li>
                                                </ul>*/}
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </Col>

                            {/*<Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-round b-card-info">
                                    <div className="card-cover">
                                        <img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/ELIA5583.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <h3 className="pro-name text-center">Mizanur Rahaman Sohel</h3>
                                        <p className="">
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        </p>
                                        <h4 className="card-title mb-5">Basic information</h4>
                                        <div className="view-group">
                                            <div className="view-label">Name</div>
                                            <div className="view-text">Mizanur Rahaman Sohel</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Email</div>
                                            <div className="view-text">mizanurrahaman@gmail.com</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Name</div>
                                            <div className="view-text">Mizanur Rahaman Sohel</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>*/}
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-mh100">
                                    <div className="card-head">
                                        <div className="card-head-block">
                                            <h4 className="card-title">Company information</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="view-group">
                                            <div className="view-label">Company Name</div>
                                            <div className="view-text">SQ Hues Ltd</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Email</div>
                                            <div className="view-text">aminul.hasan@sqgc.com</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Phone</div>
                                            <div className="view-text">01819034708</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Trade Body</div>
                                            <div className="view-text">BGMEA</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Parent Company</div>
                                            <div className="view-text">Alpha Garments Industry</div>
                                        </div>
                                    </div>
                                </div>
                                
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-mh100">
                                    <div className="card-head">
                                        <div className="card-head-block">
                                            <h4 className="card-title">Address</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="view-group">
                                            <div className="view-label">Address line 1</div>
                                            <div className="view-text">4208 Airplane Avenue Stamford</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Address line 2</div>
                                            <div className="view-text">3980 Worthington DrivePlano </div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">City</div>
                                            <div className="view-text">Dhaka</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Postcode</div>
                                            <div className="view-text">1205</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Country</div>
                                            <div className="view-text">Bangladesh</div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-mh100">
                                    <div className="card-head">
                                        <div className="card-head-block">
                                            <h4 className="card-title">Contact Info</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="view-group">
                                            <div className="view-label">Preferred Name</div>
                                            <div className="view-text">Mizanur Rahaman Sohel</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Secondary Phone Number</div>
                                            <div className="view-text">02152 651254</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Personal Email</div>
                                            <div className="view-text">Mizanur@gmail.com</div>
                                        </div>
                                        <div className="view-group">
                                            <div className="view-label">Website</div>
                                            <div className="view-text">www.mizanur.info</div>
                                        </div>
                                    </div>
                                </div>                        
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-mh100">
                                    <div className="card-head">
                                        <div className="card-head-block">
                                            <h4 className="card-title">Statistics</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Bar
                                            data={data}
                                            width={100}
                                            height={50}
                                            options={{
                                                maintainAspectRatio: true
                                            }}
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-mh100">
                                    <div className="card-head">
                                        <div className="card-head-block">
                                            <h4 className="card-title">Statistics</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Doughnut data={dataDoughnut} />
                                    </div>
                                </div>
                            </Col>
                            <Col className="k-col" xs={24} sm={12} md={12} lg={8}>
                                <div className="k-card k-mh100">
                                    <div className="card-head">
                                        <div className="card-head-block">
                                            <h4 className="card-title">Statistics</h4>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <Line data={dataLine} />
                                    </div>
                                </div>
                            </Col>

                            {/*<Col className="k-col" xs={24} sm={12} md={12} lg={18}>
                                <Card title="Card title" className="k-card-static k-round k-card-shadow">
                                    
                                </Card>
                            </Col>*/}
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


export default withRouter(connect(mapStateToProps, mapDispatchToState)(BuyerDetails));
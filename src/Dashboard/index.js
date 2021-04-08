import React, { Component } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb, Dropdown, Popover, List, Carousel  } from 'antd';
import {connect} from 'react-redux';

import { Chart, Axis, Tooltip, Point, Guide, Line, Legend, Bar, Polygon } from 'viser-react';
import  $ from 'jquery';
import  _ from 'lodash';










import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const shareMenu = (
  <Menu>
    <Menu.Item key="1">Email now</Menu.Item>
    <Menu.Item key="2">Create recurring email</Menu.Item>
  </Menu>
);
const FilterDashboardContent = (
  <div style={{maxWidth:'250px'}}>
    <p><Button className="btn-link-primary">Date range</Button></p>
    <p>
      Filters set here will override filters set on individual reports.
    </p>
  </div>
);
const actionContentList = [
  'Rename dashboard',
  'Change owner',
  'Set default dashboard',
  'Delete dashboard',
];
const actionContent = (
  <div style={{maxWidth:'200px'}}>
    <List
      split={false}
      dataSource={actionContentList}
      renderItem={item => (<List.Item>{item}</List.Item>)}
    />
  </div>
);

const DataSet = require('@antv/data-set');

const barData = [
  { year: '1951 year', sales: 38 },
  { year: '1952 year', sales: 52 },
  { year: '1956 year', sales: 61 },
  { year: '1957 year', sales: 145 },
  { year: '1958 year', sales: 48 },
  { year: '1959 year', sales: 38 },
  { year: '1960 year', sales: 38 },
  { year: '1962 year', sales: 38 },
];

const scale = [{
  dataKey: 'sales',
  tickInterval: 20,
}];




class Dashboard extends Component {

      eventSelected(event) {
        console.log(event);
        this.props.history.push("/" +event.key)
    }


     state = {
      data: [],
    };

    componentDidMount() {
      $.getJSON('/assets/data/heatmap-5.json', (sourceData) => {
        const dv = new DataSet.View().source(sourceData);
        dv.transform({
          type: 'bin.rectangle',
          fields: ['carat', 'price'],
        });
        this.setState({ data: dv.rows });
      });
    }



    render() {

        var homeSliderSettings = {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 5,
          slidesToScroll: 1
        };

        const { data } = this.state;
        const seriesOpts = {
          quickType: 'polygon',
          color: ['count', [ '#BAE7FF', '#1890FF', '#0050B3' ]],
          position: 'x*y',
        };
        
        return (
            <div className="main-content">
              <div className="page-header">
                <header className="page-header-header">
                  <div className="container-fluid">
                    <Row gutter={30} type="flex" align="bottom">
                      <Col className="gutter-row" span={8}>
                        <h1 className="heading-title">Dashboard</h1>
                      </Col>
                      <Col className="gutter-row text-right" span={16}>
                        <div className="k-buttons">
                          <Button type="primary" size="large" ghost>Create Dashboard</Button>
                          <Button type="primary" size="large" ghost>Export</Button>
                          <Dropdown overlay={shareMenu}>
                            <Button type="primary" size="large" ghost>
                              Share <Icon type="down" />
                            </Button>
                          </Dropdown>
                          <Button type="primary" size="large">Add Report</Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </header>
              </div>
              <div id="content" className="kutu-content">
                <div className="container-fluid">
                  <div className="k-filters">
                    <Row type="flex" justify="space-between">
                      <Popover placement="bottomLeft" content={FilterDashboardContent} title="Choose filters" trigger="click">
                        <Button className="btn-link-static"><Icon type="filter" theme="outlined" /> Filter dashboard</Button>
                      </Popover>
                      <Popover placement="bottomLeft" content={actionContent} trigger="click">
                        <Button className="btn-link-static">Actions <Icon type="down" theme="outlined" /></Button>
                      </Popover>
                    </Row>
                  </div>
                  <div className="k-card k-card-bordered">
                    <div className="card-head">
                      <div className="card-head-block">
                        <h4 className="card-title">Getting started with Kutumbita</h4>
                      </div>
                    </div>
                    <div className="card-body">
                      <div>
                        <Carousel className="home-onboarding-slider" {...homeSliderSettings}>
                          <div>
                            <div className="home-onboarding-card">
                              <div className="home-onboarding-card-image">
                                <img src="/assets/images/setup-complete.svg" alt="" />
                              </div>
                              <h5 className="home-onboarding-card-title">1. Create an account</h5>
                              <span className="home-onboarding-card-bottom">
                                <Icon type="check-circle" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="home-onboarding-card">
                              <div className="home-onboarding-card-image">
                                <img src="/assets/images/mobile-onboarding-import-contacts.svg" alt="" />
                              </div>
                              <h5 className="home-onboarding-card-title">2. Import your contacts</h5>
                              <span className="home-onboarding-card-bottom">
                                <Icon type="check-circle" />
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="home-onboarding-card">
                              <div className="home-onboarding-card-image">
                                <img src="/assets/images/integrations.svg" alt="" />
                              </div>
                              <h5 className="home-onboarding-card-title">3. Install email extension</h5>
                              <span className="home-onboarding-card-bottom">
                                <Icon type="check-circle" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="home-onboarding-card">
                              <div className="home-onboarding-card-image">
                                <img src="/assets/images/mobile-onboarding-embed-tracking-code.svg" alt="" />
                              </div>
                              <h5 className="home-onboarding-card-title">4. Install tracking code</h5>
                              <span className="home-onboarding-card-bottom">
                                <Icon type="check-circle" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <div className="home-onboarding-card">
                              <div className="home-onboarding-card-image">
                                <img src="/assets/images/team.svg" alt="" />
                              </div>
                              <h5 className="home-onboarding-card-title">5. Invite your team</h5>
                              <span className="home-onboarding-card-bottom">
                                <Icon type="check-circle" />
                              </span>
                            </div>
                          </div>
                        </Carousel>
                      </div>
                    </div>
                  </div>
                  <Row gutter={30} type="flex" align="bottom">
                      <Col className="gutter-row" md={12} lg={12} xl={12}>
                        <div className="k-card k-card-bordered">
                          <div className="card-head">
                            <div className="card-head-block">
                              <h4 className="card-title">Kutumbita user by company</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <Chart forceFit height={400} data={barData} scale={scale}>
                              <Tooltip />
                              <Axis />
                              <Bar position="year*sales" color="#0091ae" />
                            </Chart>
                          </div>
                        </div>
                      </Col>
                      <Col className="gutter-row" md={12} lg={12} xl={12}>
                        <div className="k-card k-card-bordered">
                          <div className="card-head">
                            <div className="card-head-block">
                              <h4 className="card-title">Kutumbita Heatmap</h4>
                            </div>
                          </div>
                          <div className="card-body">
                            <Chart forceFit height={400} data={data}>
                              <Legend offset={40} />
                              <Tooltip showTitle={false} />
                              <Axis />
                              <Polygon {...seriesOpts} />
                            </Chart>
                          </div>
                        </div>
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


export default withRouter(connect(mapStateToProps, mapDispatchToState)(Dashboard));
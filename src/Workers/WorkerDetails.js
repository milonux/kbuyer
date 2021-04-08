import React, { Component, Fragment } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb, Dropdown, Popover, List, Carousel, Form, Input, Radio, Tooltip, Collapse, Table } from 'antd';
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const Panel = Collapse.Panel;

const columns = [{
  title: 'Name',
  dataIndex: 'name',
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}];


class WorkerDetails extends Component {
	// submenu keys of first level
	  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

	  state = {
	    openKeys: ['sub1'],
	  };

	  onOpenChange = (openKeys) => {
	    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
	    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
	      this.setState({ openKeys });
	    } else {
	      this.setState({
	        openKeys: latestOpenKey ? [latestOpenKey] : [],
	      });
	    }
	  }

	  
	render() {
		return (
			<Fragment>
				<div className="main-content">
					<div className="page-header">
		                <header className="page-header-header">
		                  <div className="container-fluid">
		                    <Row gutter={30} type="flex" align="bottom">
		                      <Col className="gutter-row" span={10}>
		                        <h1 className="heading-title">Workers Details</h1>
		                      </Col>
		                      <Col className="gutter-row text-md-right" span={14}>
		                        <div className="k-buttons">
		                          <Button type="primary" size="large" style={{minWidth:"120px"}}>Edit</Button>
		                        </div>
		                      </Col>
		                    </Row>
		                  </div>
		                </header>
		            </div>
		            <div id="content" className="kutu-content">
		                <div className="container">
		                	<Row gutter={30} className="k-user-bio-wrap">
		                		<Col xs={24} sm={5}>
		                			<div className="k-user-bio-image mb-4">
			                			<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                		</div>
		                		</Col>
		                		<Col xs={24} sm={19}>
		                			<div className="k-user-bio-information">		                				
		                				<div className="k-user-bio-header">
		                					<div className="">
		                						<h2 className="k-user-bio-name">Hasan Islam</h2>
		                						<div className="k-user-bio-designation">HR Manager</div>
		                					</div>
		                					<div className="k-user-bio-expriences">
		                						<span>3 Years 05 Days</span>
		                					</div>
		                				</div>
		                				<div className="k-user-bio-section-divider">
		                					<h4 className="divider-title">Employment Information</h4>
		                				</div>
		                				<Row gutter={16}>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Employee ID</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">CATBD1245</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Work Center</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Building 5</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Company</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Cat Bangladesh Ltd</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Work Floor</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">2nd</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Department</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">HR</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Date of Joining</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">20 June, 2014</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Position</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Manager</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Work Line</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">09</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                				</Row>
		                				<div className="k-user-bio-section-divider">
		                					<h4 className="divider-title">Basic Information</h4>
		                				</div>
		                				<Row gutter={16}>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">First Name</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Hasan</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Father Name</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Babul Islam</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Last Name</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Islam</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Mother Name</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Rozina Islam</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Mobile</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">01345 625432</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Emergency C</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">02154 521635</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Email</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">hasan_islam@gmail.com</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Religion</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Islam</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Date of Birth</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">2018-09-12</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Gender</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Male</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Marital Status</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Single</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Blood Group</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">AB+</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">National ID</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">1925DCF52413654</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                					<Col xs={24} sm={12}>
		                						<Row gutter={16} className="k-view-group">
					                				<Col xs={24} sm={9} className="k-view-label">
					                					<div className="k-view-label-title">Passport ID</div>
					                				</Col>
					                				<Col xs={24} sm={15} className="k-view-desc">
					                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">021DE542PE542</span></div>
					                				</Col>
					                			</Row>
		                					</Col>
		                				</Row>
		                			</div>
		                			<div className="k-user-bio-extend-information">
				                		<Collapse bordered={false} accordion>
											<Panel header="Last Login History" key="1">
												<Row gutter={16}>
													<Col xs={24} sm={12}>
				                						<Row gutter={16} className="k-view-group">
							                				<Col xs={24} sm={9} className="k-view-label">
							                					<div className="k-view-label-title">IMEI</div>
							                				</Col>
							                				<Col xs={24} sm={15} className="k-view-desc">
							                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">1925DCF52413654</span></div>
							                				</Col>
							                			</Row>
				                					</Col>
				                					<Col xs={24} sm={12}>
				                						<Row gutter={16} className="k-view-group">
							                				<Col xs={24} sm={9} className="k-view-label">
							                					<div className="k-view-label-title">IP Address</div>
							                				</Col>
							                				<Col xs={24} sm={15} className="k-view-desc">
							                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">103.78.53.11</span></div>
							                				</Col>
							                			</Row>
				                					</Col>
				                					<Col xs={24} sm={12}>
				                						<Row gutter={16} className="k-view-group">
							                				<Col xs={24} sm={9} className="k-view-label">
							                					<div className="k-view-label-title">Device ID</div>
							                				</Col>
							                				<Col xs={24} sm={15} className="k-view-desc">
							                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">DEF2451T</span></div>
							                				</Col>
							                			</Row>
				                					</Col>
				                					<Col xs={24} sm={12}>
				                						<Row gutter={16} className="k-view-group">
							                				<Col xs={24} sm={9} className="k-view-label">
							                					<div className="k-view-label-title">Last Logged in</div>
							                				</Col>
							                				<Col xs={24} sm={15} className="k-view-desc">
							                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">Tuesday, September 25th 2018, 11:28:20 am</span></div>
							                				</Col>
							                			</Row>
				                					</Col>
				                					<Col xs={24} sm={12}>
				                						<Row gutter={16} className="k-view-group">
							                				<Col xs={24} sm={9} className="k-view-label">
							                					<div className="k-view-label-title">Location Latitude</div>
							                				</Col>
							                				<Col xs={24} sm={15} className="k-view-desc">
							                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">21.25462112</span></div>
							                				</Col>
							                			</Row>
				                					</Col>
				                					<Col xs={24} sm={12}>
				                						<Row gutter={16} className="k-view-group">
							                				<Col xs={24} sm={9} className="k-view-label">
							                					<div className="k-view-label-title">Location Longitude</div>
							                				</Col>
							                				<Col xs={24} sm={15} className="k-view-desc">
							                					<div className="k-view-desc-note"><span className="k-view-desc-clone">: </span><span className="k-view-desc-note-text">21.25462112</span></div>
							                				</Col>
							                			</Row>
				                					</Col>
												</Row>
											</Panel>
											<Panel header="Access Groups" key="2">
												Access Groups
											</Panel>
											<Panel header="Escalation Manager" key="3">
												 Escalation Manager
											</Panel>
											<Panel header="Education" key="4">
												 Escalation Manager
											</Panel>
											<Panel header="Skills" key="5">
												 Escalation Manager
											</Panel>
											<Panel header="Address" key="6">
												 Escalation Manager
											</Panel>
										</Collapse>
				                	</div>
		                		</Col>
		                	</Row>
		                	
		                </div>
	                </div>
				</div>				
			</Fragment>
		)
	}
}

export default WorkerDetails
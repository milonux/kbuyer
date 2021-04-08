import React, { Component, Fragment } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb,message, Dropdown, Popover, List, Carousel, Form, Input, Radio, Tooltip } from 'antd';
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const FormItem = Form.Item;


const FilterDashboardContent = (
  <div style={{maxWidth:'250px'}}>
    <p><Button className="btn-link-primary">Date range</Button></p>
    <p>
      Filters set here will override filters set on individual reports.
    </p>
  </div>
);
const baseTitleMenuList = [
  'Kutumbita',
  'Techstars Impact Accelerator',
  'SQ Hues Ltd',
  'TechStars Demo',
  'SQ Birichina Ltd',
  'Urmi Group',
];
const baseTitleMenu = (
	<div className="base-title-menu-pophover">
		<div style={{maxWidth:'360px'}}>
			<div className="base-title-menu-pophover-search">
				<Input />
			</div>
			<div className="base-title-menu-pophover-content">
				<List
			      dataSource={baseTitleMenuList}
			      renderItem={item => (<List.Item>{item}</List.Item>)}
			    />
			</div>
		</div>
	</div>
);





class Workers extends Component {
	  constructor(props) {
       super(props)
       this.state = {
           userActiveStatus: 'Active',

       };
      // this.handleMenuClick= this.handleMenuClick().bind(this);
   };
   DropdownClick(event){
   	console.log(event);
   }
    handleMenuClick(e) {
  //message.info('Click on menu item.');
  console.log('click', e.key);
  this.setState({userActiveStatus: e.key});
}
	render() {

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}



const menu = (
  <Menu onClick={(e)=>this.handleMenuClick(e)}>
    <Menu.Item key="Active"><Icon type="user" />Active</Menu.Item>
    <Menu.Item key="Deactive"><Icon type="user" />Deactive</Menu.Item>
   
  </Menu>
);


		return (
			<Fragment>
				<div className="main-content">
					<div className="page-header">
		                <header className="page-header-header">
		                  <div className="container-fluid">
		                    <Row gutter={30} type="flex" align="bottom">
		                      <Col className="gutter-row" span={10}>
		                      	<div>
		                      		<Popover placement="bottomLeft" content={baseTitleMenu} trigger="click">
										<Button className="btn-link-static heading-title">Workers List <Icon type="down" /></Button>
									</Popover>
		                      	</div>
		                      </Col>
		                      <Col className="gutter-row text-md-right" span={14}>
		                        <div className="k-buttons">
		                          <Button type="primary" size="large" ghost>Add Worker</Button>
		                          <Button type="primary" size="large" ghost>Import</Button>
		                          <Button type="primary" size="large">Add Report</Button>
		                        </div>
		                      </Col>
		                    </Row>
		                  </div>
		                </header>
		            </div>
		            <div id="content" className="kutu-content">
		                <div className="container">
							<div className="k-filters">
								<Row type="flex" justify="space-between">
									<Popover placement="bottomLeft" content={FilterDashboardContent} title="Choose filters" trigger="click">
										<Button className="btn-link-static"><Icon type="filter" theme="outlined" /> Filter dashboard</Button>
									</Popover>									
									<Dropdown.Button onClick={handleButtonClick} overlay={menu}>    	
										{this.state.userActiveStatus} 										
									</Dropdown.Button>
								</Row>
							</div>
		                	<Row gutter={30}>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
		                			</div>
		                		</Col>
		                		<Col md={6}>
		                			<div className="k-user-card text-center">
		                				<div className="k-card-body has-overlay-link">
			                				<div className="k-card-image">
			                					<div className="k-card-image-avater">
			                						<img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
			                					</div>
			                				</div>
		                					<h5 className="k-card-title">Kutumbita Administrator</h5>
		                					<ul className="k-card-info-list text-left">
		                						<li>Admin</li>
		                						<li>Manager</li>
		                						<li>01711081960</li>
		                					</ul>
		                					<Link to='/WorkerDetails' className="overlay-link"></Link>
		                				</div>
		                				<div className="k-card-footer">
		                					<div className="k-buttons">
		                						<Button>Edit</Button>
    											<Button className="k-btn-gray">Deactive</Button>
		                					</div>
		                				</div>
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

export default Workers
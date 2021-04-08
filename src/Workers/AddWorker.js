import React, { Component, Fragment } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb, Dropdown, Popover, List, Carousel, Form, Input, Radio, Tooltip, Collapse, Table } from 'antd';
import {Link} from "react-router-dom";

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;
const ButtonGroup = Button.Group;


class AddWorker extends Component {

	  
	render() {
		const formItemLayout = {
	      labelCol: {
	        xs: { span: 24 },
	        sm: { span: 8 },
	      },
	      wrapperCol: {
	        xs: { span: 24 },
	        sm: { span: 16 },
	      },
	    };
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
		                      	<ButtonGroup>
							      <Button>English</Button>
							      <Button>Bangla</Button>
							    </ButtonGroup>
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
		                				{/*<div className="k-user-bio-header">
		                					<div className="">
		                						<h2 className="k-user-bio-name">Hasan Islam</h2>
		                						<div className="k-user-bio-designation">HR Manager</div>
		                					</div>
		                					<div className="k-user-bio-expriences">
		                						<span>3 Years 05 Days</span>
		                					</div>
		                				</div>*/}
		                				
		                				<div>
		                					<Form layout="horizontal" className="k-form-label-align-left">
		                						<div className="k-user-bio-section-divider mt-0">
				                					<h4 className="divider-title">Employment Information</h4>
				                				</div>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Employee ID">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Company">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Work Center">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Department">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Position">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Work Floor">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Job Type">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Pay Type">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Date of Joining">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Work Section">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Work Line">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<div className="k-user-bio-section-divider">
				                					<h4 className="divider-title">Basic Information</h4>
				                				</div>
				                				<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="First Name">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Last Name">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Gender">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Blood Group">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Date of birth">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Father name">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Mother name">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Marital Status">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Religion">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="National ID">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
			                					<Row gutter={30}>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Passport ID">
															<Input />
														</FormItem>
			                						</Col>
			                						<Col xs={24} sm={12}>
														<FormItem {...formItemLayout} label="Emergency C">
															<Input />
														</FormItem>
			                						</Col>
			                					</Row>
									          <FormItem className="text-right">
									            <Button type="primary">Save & Continue</Button>
									          </FormItem>
									        </Form>
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

export default AddWorker
import React, { Component, Fragment } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb, Dropdown, Popover, List, Carousel, Form, Input, Radio, Tooltip } from 'antd';

const SubMenu = Menu.SubMenu;
const FormItem = Form.Item;


class Settings extends Component {
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
		                  <div className="container">
		                    <Row gutter={30} type="flex" align="bottom">
		                      <Col className="gutter-row" span={24}>
		                        <h1 className="heading-title">Settings</h1>
		                      </Col>
		                    </Row>
		                  </div>
		                </header>
		            </div>
		            <div id="content" className="kutu-content">
		                <div className="container">
		                	<Row gutter={30}>
		                		<Col md={6}>
		                			<Menu
								        mode="inline"
								        openKeys={this.state.openKeys}
								        onOpenChange={this.onOpenChange} 
								        className="k-sidebar-nav"
								    >
									      <Menu.Item key="default1">
								            Account Defaults
								          </Menu.Item>
								        <SubMenu key="sub1" title={<span><span>Contacts & Companies</span></span>}>
								          <Menu.Item key="1">Option 1</Menu.Item>
								          <Menu.Item key="2">Option 2</Menu.Item>
								          <Menu.Item key="3">Option 3</Menu.Item>
								          <Menu.Item key="4">Option 4</Menu.Item>
								        </SubMenu>
								        <SubMenu key="sub2" title={<span><span>Conversations</span></span>}>
								          <Menu.Item key="5">Option 5</Menu.Item>
								          <Menu.Item key="6">Option 6</Menu.Item>
								          <SubMenu key="sub3" title="Submenu">
								            <Menu.Item key="7">Option 7</Menu.Item>
								            <Menu.Item key="8">Option 8</Menu.Item>
								          </SubMenu>
								        </SubMenu>
								        <SubMenu key="sub4" title={<span><span>Domains & URLs</span></span>}>
								          <Menu.Item key="9">Option 9</Menu.Item>
								          <Menu.Item key="10">Option 10</Menu.Item>
								          <Menu.Item key="11">Option 11</Menu.Item>
								          <Menu.Item key="12">Option 12</Menu.Item>
								        </SubMenu>
								    </Menu>
		                		</Col>
		                		<Col md={18}>
		                			<div>
		                				<Form layout="vertical">
		                					<Row gutter={30}>
		                						<Col md={12}>
		                							<FormItem>
		                								<label className="ant-form-item-label k-label-has-tooltip">
		                									Account name 
			                								<Tooltip title="Set a name for your account. For example, you could enter your company name or domain.">
																<Icon type="info-circle" theme="outlined" />
															</Tooltip>	
		                								</label>
		                								<Input placeholder="input placeholder" />
		                							</FormItem>
		                						</Col>
		                						<Col md={12}>
		                							<FormItem>
		                								<label className="ant-form-item-label k-label-has-tooltip">
		                									Time zone
			                								<Tooltip title="Set a name for your account. For example, you could enter your company name or domain.">
																<Icon type="info-circle" theme="outlined" />
															</Tooltip>	
		                								</label>
		                								<Input placeholder="input placeholder" />
		                							</FormItem>
		                						</Col>
		                					</Row>
								          
								          <FormItem
								            label="Field A"
								          >
								            <Input placeholder="input placeholder" />
								          </FormItem>
								          <FormItem
								            label="Field B"
								          >
								            <Input placeholder="input placeholder" />
								          </FormItem>
								          <FormItem>
								            <Button type="primary">Submit</Button>
								          </FormItem>
								        </Form>
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

export default Settings
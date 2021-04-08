import React, { Component, Fragment } from 'react';
import { Layout, Menu, Row, Col, Card, Icon, Avatar, Button, Breadcrumb, Dropdown, Popover, List, Carousel, Form, Input, Radio, Tooltip, Collapse, Table } from 'antd';
import {Link} from "react-router-dom";



class BulkImport extends Component {

	  
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
		                      	
		                      </Col>
		                    </Row>
		                  </div>
		                </header>
		            </div>
		            <div id="content" className="kutu-content">
		                <div className="container">
		                	<Row gutter={30}>
		                		<Col xs={24} sm={24}>
		                			
		                		</Col>
		                	</Row>
		                	
		                </div>
	                </div>
				</div>				
			</Fragment>
		)
	}
}

export default BulkImport
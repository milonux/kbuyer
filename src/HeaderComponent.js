import React, { Component } from 'react';
import { Layout, Menu, Icon, Carousel, Drawer, Tabs, List, Avatar } from 'antd';
import {Link} from "react-router-dom";
import TopNav from "./Supplier/TopNav";
import cx from 'classname';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const { Header, Content, Footer } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const TabPane = Tabs.TabPane;

const notificationList = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];







class HeaderComponent extends Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
          visible: true,
        });
    };

    onClose = () => {
        this.setState({
          visible: false,
        });
    };


    render() {
        return (
            
            <div className="header">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <Link className="navbar-brand" to="/">
                        <img src="assets/images/logo-icon-white.svg" alt="Kutumbita"/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <Menu className="navbar-nav" mode="horizontal">
                            <SubMenu title={<span className="submenu-title-wrapper">Workers</span>}>
                              <Menu.Item key="workers-1"><Link to='/workers'>List</Link></Menu.Item>
                              <Menu.Item key="workers-2"><Link to='/AddWorker'>Add Workers</Link></Menu.Item>
                              <Menu.Item key="workers-3"><Link to='/BulkImport'>Import</Link></Menu.Item>
                              <Menu.Item key="workers-4">App Password Reset</Menu.Item>
                              <Menu.Item key="workers-5">Administrators</Menu.Item>
                              <Menu.Item key="workers-6">Kiosk Management</Menu.Item>
                            </SubMenu>
                            <SubMenu title={<span className="submenu-title-wrapper">Engagement</span>}>
                              <MenuItemGroup title="Item 1">
                                <Menu.Item key="engagement-1">Option 1</Menu.Item>
                                <Menu.Item key="engagement-2">Option 2</Menu.Item>
                              </MenuItemGroup>
                              <MenuItemGroup title="Item 2">
                                <Menu.Item key="engagement-3">Option 3</Menu.Item>
                                <Menu.Item key="engagement-4">Option 4</Menu.Item>
                              </MenuItemGroup>
                            </SubMenu>
                            <SubMenu title={<span className="submenu-title-wrapper">HR</span>}>
                              <MenuItemGroup title="Item 1">
                                <Menu.Item key="hr-1">Option 1</Menu.Item>
                                <Menu.Item key="hr-2">Option 2</Menu.Item>
                              </MenuItemGroup>
                              <MenuItemGroup title="Item 2">
                                <Menu.Item key="hr-3">Option 3</Menu.Item>
                                <Menu.Item key="hr-4">Option 4</Menu.Item>
                              </MenuItemGroup>
                            </SubMenu>
                            <SubMenu title={<span className="submenu-title-wrapper">Training</span>}>
                              <MenuItemGroup title="Item 1">
                                <Menu.Item key="training:1">Option 1</Menu.Item>
                                <Menu.Item key="training:2">Option 2</Menu.Item>
                              </MenuItemGroup>
                              <MenuItemGroup title="Item 2">
                                <Menu.Item key="training:3">Option 3</Menu.Item>
                                <Menu.Item key="training:4">Option 4</Menu.Item>
                              </MenuItemGroup>
                            </SubMenu>
                            <SubMenu title={<span className="submenu-title-wrapper">Analytics</span>}>
                              <MenuItemGroup title="Item 1">
                                <Menu.Item key="analytics:1">Option 1</Menu.Item>
                                <Menu.Item key="analytics:2">Option 2</Menu.Item>
                              </MenuItemGroup>
                              <MenuItemGroup title="Item 2">
                                <Menu.Item key="analytics:3">Option 3</Menu.Item>
                                <Menu.Item key="analytics:4">Option 4</Menu.Item>
                              </MenuItemGroup>
                            </SubMenu>
                        </Menu>
                        <Menu className="navbar-nav ml-auto kutu-nav-admin" mode="horizontal">
                            <Menu.Item key="10" className="kutu-navitem-only-icon"><Icon type="search" /></Menu.Item>
                            <Menu.Item key="K11" className="kutu-navitem-only-icon"><Link to='/settings'><Icon type="setting" /></Link></Menu.Item>
                            <Menu.Item key="12" className="kutu-navitem-only-icon">
                                <Icon type="bell" onClick={this.showDrawer}/>
                                <Drawer
                                  title="Notifications"
                                  width={400}
                                  placement="right"
                                  closable={false}
                                  onClose={this.onClose}
                                  visible={this.state.visible} 
                                  className="drawer-notifications"
                                >
                                  <div>
                                      <Tabs defaultActiveKey="1">
                                        <TabPane tab="Your notifications" key="1">
                                            <div className="n-tab-inside">
                                                <List
                                                    itemLayout="horizontal"
                                                    dataSource={notificationList}
                                                    renderItem={item => (
                                                      <List.Item>
                                                        <List.Item.Meta
                                                          avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                                          title={<a href="https://ant.design">{item.title}</a>}
                                                          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                                        />
                                                      </List.Item>
                                                    )}
                                                />
                                            </div>
                                        </TabPane>
                                        <TabPane tab="What's new" key="2">
                                            <div className="n-tab-inside">sdfasdfasdf</div>
                                        </TabPane>
                                      </Tabs>
                                  </div>
                                </Drawer>
                            </Menu.Item>
                            <SubMenu className="has-avater k-navuser" title={<span> <img src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" /> Kutumbita</span>}>
                                <Menu.Item key="logout" className="nav-item">
                                    <div className="user-navwrap">
                                        <div className="user-nav-meta">
                                            <div className="user-nav-meta-avater">
                                                <Avatar size={48} src="https://kutumbita-try.s3.amazonaws.com/user/profileimage/e86cffdd-5738-4428-9564-c1f78f41784dFacebook-pic-1.jpg" />
                                            </div>
                                            <div className="user-nav-meta-content">
                                                <h6 className="user-nav-meta-name">Alvi Awwal</h6>
                                                <div className="user-nav-meta-email">alvi@kutumbita.com</div>
                                                <div className="user-nav-meta-preferences">Profile & Preferences</div>
                                            </div>
                                        </div>
                                        <div className="user-nav-accounts">
                                            <div className="user-nav-accounts-account">Kutumbita</div>
                                            <div className="user-nav-accounts-id">4669463</div>
                                        </div>
                                        <ul className="user-nav-accounts-extra">
                                            <li><a href="#">Account & Billing</a></li>
                                            <li><a href="#">Integrations</a></li>
                                            <li><a href="#">Learning Center</a></li>
                                            <li><a href="#">Products & Add-ons</a></li>
                                        </ul>
                                        <div className="user-nav-bottom">
                                            <div className="user-nav-signout">
                                                <a href="">Sign out</a>
                                            </div>
                                            <div className="user-nav-privacy">
                                                <a href="">Privacy policy</a>
                                            </div>
                                        </div>
                                    </div>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>

                    </div>
                </nav>
            </div>
        );
    }
}

export default HeaderComponent;

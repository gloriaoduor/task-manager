import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
    CDBSidebarFooter
  } from 'cdbreact';


function SideBar (){
  const navigate = useNavigate();

    return (
    <div className="border-end sidenav" id="sidebar-wrapper">
      
      {/* Static Sidebar */}
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="black">

          <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
            <a href="/" className="text-decoration-none" style={{ color: 'inherit' }}>Task Dashboard</a>
          </CDBSidebarHeader>
          
          {/* Sidebar Content */}
          <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
              <Link exact to="#" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Profile</CDBSidebarMenuItem>
              </Link>
              <Link exact to="/home" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">All Tasks</CDBSidebarMenuItem>
              </Link>
              <Link exact to="#" activeClassName="activeClicked">
                <CDBSidebarMenuItem icon="table">Add New Task</CDBSidebarMenuItem>
              </Link>
            </CDBSidebarMenu>
          </CDBSidebarContent>

          <CDBSidebarFooter style={{ textAlign: 'center' }}>
            <div className="sidebar-btn-wrapper" style={{padding: '20px 5px', }}>
              <button className="btn btn-primary" onClick={()=>{navigate("/login")}} >Logout</button>
            </div>
          </CDBSidebarFooter>

        </CDBSidebar>
      </div>
      
    </div>
                
       
        
    );
}

export default SideBar;

import React, { Component } from "react";
import axios from 'axios';
import {
  MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse,
  MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem,
} from "mdbreact";
//import { BrowserRouter as Link } from 'react-router-dom';



class NavBarPage extends Component {
  state = {
    isOpen: false,
    categories:[]
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  getCategory = () => {
    axios.get('https://free-source-api.herokuapp.com/category/')
        .then((response) => {
            const data = response.data
            this.setState({ categories: data });
            console.log('Data has been Recived !');
        })
        .catch((e) => { alert('Error Reciving Data !!', e); });
  };
  componentDidMount=()=>{
    this.getCategory();
  }

  render() {
    return (
      
        <MDBNavbar color="aqua-gradient" dark expand="md">
         <MDBNavLink to="/home">
          <MDBNavbarBrand> 
            <strong className="white-text"><h1>Freesource</h1></strong>
          </MDBNavbarBrand>
          </MDBNavLink>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavLink to="/">
                
                <MDBNavItem >
                <strong ><h5 >Home</h5></strong>
                </MDBNavItem>
              </MDBNavLink>
              <MDBNavLink to="/cards">
                <MDBNavItem>
                <strong ><h5 >Featured</h5></strong>
                </MDBNavItem>
              </MDBNavLink>
              
              <MDBNavItem>
                <MDBDropdown>
                <strong ><h5 >
                  <MDBDropdownToggle nav caret>
                    <span className="mr-2">Categories</span>
                  </MDBDropdownToggle></h5></strong>
                  <MDBDropdownMenu>
                    {this.state.categories.map(category => (
                      <MDBNavLink to={category.pathlist}> <MDBDropdownItem href="#!"><strong >{category.categorylist}</strong></MDBDropdownItem></MDBNavLink>

                    ))}
                   

                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavLink to="/addpost">
                <MDBNavItem>
                  <strong ><h5 >Add Your Own</h5></strong>
                </MDBNavItem>
              </MDBNavLink>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              {/* <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem> */}
              <MDBNavLink to="/aboutus">
                <MDBNavItem>
                <h6 >About Us and Legals</h6>
                </MDBNavItem>
              </MDBNavLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      
    );
  }
}

export default NavBarPage;
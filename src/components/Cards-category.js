import React, { useEffect, useState,prevProps,useRef } from "react";
import axios from 'axios';

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Col,Row,
  CardTitle,
  CardText,

} from "reactstrap";

class CardsCategory extends React.Component {


  state = {
    posts: [],
    cat: ""
  };
  //
  
  getPosts = (propcat) => {
    console.log("propcat: ",propcat);
    
    axios.get('http://localhost:5000/posts/category?category='+propcat)
        .then((response) => {
        const data = response.data;
        this.setState({ posts: data });
        console.log('Data has been Recived !',data," ::: propcat : ",propcat  );

      })
      .catch((e) => { alert('Error Reciving Data !!',e); });
    
  };
  componentDidMount () {
    console.log("componentWillReceiveProps=()=> ",this.props.category);
    {this.state.cat=this.props.category}
    this.getPosts(this.props.category);
    
  }
  
   componentWillReceiveProps=()=>{
    
    console.log("componentWillReceiveProps=()=> ",this.props.category);
    {this.state.cat=this.props.category}
    this.getPosts(this.props.category);
   // const prevCat = this.usePrevious(this.state.cat)
     //if(this.props.category!==this.state.cat){}
      //this.getPosts();
  
    };

  render() {
    return (
      <Row style={{marginTop:"1rem"}}>
      {this.state.posts.map(post=>(  <Col lg="4" xl="3" md="6" key={post._id}>
      <Card style={{ borderRadius: "5%", marginBottom: "1rem" ,marginLeft:"0.5rem" ,marginRight:"0.5rem" }} key={post._id} >
        
        <CardBody>
          <CardTitle><h1 className="display-4">{post.title}</h1></CardTitle>
          <CardText>
          {post.body}
          </CardText>
          <Button
            color="primary"
            href="#pablo"
            onClick={e => e.preventDefault()}
          >
            See full Post
            </Button>
        </CardBody>
      </Card></Col>
      ))}</Row>
    );
  }
}


export default CardsCategory;
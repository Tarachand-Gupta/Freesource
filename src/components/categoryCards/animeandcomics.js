import React, { useEffect, useState } from "react";
import axios from 'axios';
import Linkify from 'react-linkify';


// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Col,Row,
  CardTitle,
  CardText,

} from "reactstrap";

class AnimeandComics extends React.Component {

  state = {
    posts: [],
    
  };
  //
  getPosts = () => {
    axios.get('http://localhost:5000/posts/category?category=Anime and Comics')
        .then((response) => {
        const data = response.data
        this.setState({ posts: data });
        console.log('Data has been Recived !',data);

      })
      .catch((e) => { alert('Error Reciving Data !!',e); });
    
  };
  
  

  componentDidMount = () => {
    this.getPosts();
  };
  

  render() {
    return (
      <Row style={{marginTop:"1rem"}}>
      {this.state.posts.map(post=>(  <Col lg="4" xl="3" md="6">
      <Card style={{ borderRadius: "5%", marginBottom: "1rem" ,marginLeft:"0.5rem" ,marginRight:"0.5rem" ,CaretPosition:"relative"}} > 
        <CardBody>
          <CardTitle class="CardTitle" ><h4 class="h1-responsive" className="display-4">{post.title}</h4></CardTitle>
          <Linkify target="_blank" ><CardText>
          {post.body}
          </CardText>
          
          </Linkify>
          
          
          <a href={post.resource} target="_blank">
          <Button color="primary" >
            Go to resource
            </Button>
          
        </a>
        </CardBody>
      </Card>
      </Col>
      ))}
      </Row>
    );
  }
}


export default AnimeandComics;
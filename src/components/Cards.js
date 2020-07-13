import React from "react";
import axios from 'axios';
import Linkify from 'react-linkify';
import './card.css';
import Skeleton from 'react-loading-skeleton';

import {
  Button,
  Card,
  CardBody,
  Col, Row,
  CardTitle,
  CardText,
} from "reactstrap";



class Cards extends React.Component {

  state = {
    posts: [1,2,3,4,5,6,7,8,9,10,11,12],
    
  };

  //
  getPosts = () => {

    axios.get('https://free-source-api.herokuapp.com/posts/')
      .then((response) => {
        const data = response.data
        this.setState({ posts: data });
        console.log('Data has been Recived !');
      })
      .catch((e) => { alert('Error Reciving Data !!', e); });
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
          <CardTitle class="CardTitle" ><h4 class="h1-responsive" className="display-4">{post.title||<Skeleton />}</h4></CardTitle>
          <Linkify target="_blank" ><CardText>
          {post.body||<Skeleton />}
          </CardText>
          
          </Linkify>
          
          
          <a href={post.resource||<Skeleton />} target="_blank" rel="noopener noreferrer">
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


export default Cards;
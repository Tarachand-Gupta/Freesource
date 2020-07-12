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
    posts: [],
    category: (''),
    url: "https://github.com",
  skeletonArray : [1, 2, 3, 4, 5]

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
    if (this.state.posts.length > 0) {
      return (
        <Row style={{ marginTop: "1rem" }}>
          {
            this.state.posts.map(post =>
              (<Col lg="4" xl="3" md="6">
                <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                  <CardBody>
                    <CardTitle class="CardTitle" ><h4 class="h1-responsive" className="display-4">{post.title}</h4></CardTitle>
                    <Linkify target="_blank" ><CardText>
                      {post.body}
                    </CardText>

                    </Linkify>


                    <a href={post.resource} target="_blank" rel="noopener noreferrer">
                      <Button color="primary" >
                        Go to resource
            </Button>

                    </a>
                  </CardBody>
                </Card>
              </Col>
              ))
          }
        </Row>
      );
    }
    else {
      return (
        <Row style={{ marginTop: "1rem" }}>
          {(
            this.state.skeletonArray.map(dgs =>
              <Col lg="4" xl="3" md="6">
                <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                  <CardBody>
                    <CardTitle class="CardTitle" >
                      <h4 class="h1-responsive" className="display-4">
                        <Skeleton />
                      </h4>
                    </CardTitle>
                    <CardText>
                      <Skeleton />
                    </CardText>
                    <Skeleton />
                    <Skeleton />


                  </CardBody>
                </Card>
              </Col>
            )
          )}
        </Row>
      )
    }
  }
}


export default Cards;
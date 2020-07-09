import React from 'react';
import axios from 'axios';
import Checkbox from './Checkbox';
import checkboxes from './checkboxes';
import { MDBContainer, MDBAlert } from 'mdbreact';
import {
    Button, Input, Col,
    Card,
    CardBody,
    Row,
    CardTitle,
    CardText,
    Label,
} from "reactstrap";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          checkedItems: new Map(),
          title: '',
          body: '',
          isChecked: false,
          status: "",
          resource: '',
          categories: [],
          category: [],
          checkedItems: new Map(),
        }
        // this.handleChange=this.handleChange.bind(this);
    
        this.handleCheckChange = this.handleCheckChange.bind(this);
      }

    

    getCategory = () => {
        axios.get('http://localhost:5000/category/')
            .then((response) => {
                const data = response.data
                this.setState({ categories: data });
                console.log('Data has been Recived !');
            })
            .catch((e) => { alert('Error Reciving Data !!', e); });

    };

    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        
        this.setState({
            [name]: value
        }); 
     };
     
    handleCheckChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
      }


    

    submit = (event) => {
        event.preventDefault();
        
        
        let checkArray = [];
        this.state.checkedItems.forEach((value, key)=> {
            debugger
            // console.log("Items" + Item);
            
            if (value) {
                checkArray.push(key);
            }
        });
        
        console.log("checkArray : ",checkArray );
        
       const payload = {
            title: this.state.title,
            body: this.state.body,
            resource: this.state.resource,
            category: checkArray
        }

        axios({
            url: 'http://localhost:5000/posts/add',
            method: 'POST',
            data: payload
        })
            .then(() => {
                console.log('data has sent to server !');

            })
            .catch((e) => {
                console.log('internal server error :' + e);
            });
        this.setState({
            title: "",
            body: "",
            status: "Post added for review ! It will be added soon..",
            resource:""

        });
        //checkArray=[];




    };
    componentDidMount = () => {
        this.getCategory();
    };

    render() {
        console.log('State :', this.state);

        return (
            <><form onSubmit={this.submit} >
                <Row style={{ marginTop: "1rem" }}>
                    <Col sm={8} lg="10" xl="8" md="10">
                        <Card style={{ borderRadius: "5%", marginBottom: "1rem",  marginLeft: "1rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                            <CardBody>
                                <CardTitle> <h2>Have a Freesource ? Share with everyone !!</h2></CardTitle>

                                <div className="form-input">
                                    <Col  sm={8} lg="10" xl="12" md="10">
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            
                                            <Input
                                                maxLength="30"
                                                type="text"
                                                name="title"
                                                placeholder="Title"
                                                value={this.state.title}
                                                onChange={this.handleChange}
                                                style={{borderWidth:"2px" ,borderColor:"#36454f"}}

                                            />
                                        </Card>
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            <Input
                                                maxLength="200"
                                                type="text"
                                                name="resource"
                                                pattern="https://.*"
                                                placeholder="Resource Link (Shuld start from https://) "
                                                value={this.state.resource}
                                                onChange={this.handleChange}
                                                style={{borderWidth:"2px" ,borderColor:"#36454f"}}
                                            />
                                        </Card>
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            <Input type="textarea"
                                                maxLength="400"
                                                name="body"
                                                rows="10" cols="30"
                                                placeholder="Enter your Freesource discription here .."
                                                value={this.state.body}
                                                onChange={this.handleChange}
                                                style={{borderWidth:"2px" ,borderColor:"#36454f"}}
                                            /></Card>
                                    </Col>
                                    <Col  sm={8} lg="10" xl="12" md="10">
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            <CardBody>
                                                {/* {this.state.categories.map(category => (
                                                    <div class="custom-control custom-checkbox custom-control-inline">
                                                        
                                                        < input type="checkbox" class="custom-control-input"
                                                            
                                                            name={category.categorylist} 
                                                            value={category.categorylist}
                                                            
                                                            onChange={this.onChangeCheckbox} />

                                                        <label class="custom-control-label"
                                                            for={category.categorylist}>{category.categorylist}</label>
                                                    </div>
                                                ))} */}
                                            <CardTitle> <h4>Select categories </h4></CardTitle>
                                        {this.state.categories.map(category => (
                                            
                                            <label >&nbsp;&nbsp;
                                            <Checkbox name={category.categorylist} checked={this.state.checkedItems.get(category.categorylist)} onChange={this.handleCheckChange} />
                                            
                                             &nbsp;&nbsp;       
                                                    
                                                     {category.categorylist}
                                                    </label>    
                                                ))}

                                               
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </div>
                                <Button style={{ marginLeft: "2rem" }} color="primary" size="lg">Submit</Button>
                                
                                     
                                
                                <h5 style={{ textAlign: "center" }}>{this.state.status}</h5>

                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </form>
            </>
        );
    }
};

export default AddPost;
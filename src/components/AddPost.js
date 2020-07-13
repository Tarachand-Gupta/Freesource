import React from 'react';
import axios from 'axios';
import Checkbox from './Checkbox';
import {
    Button, Input, Col,
    Card,
    CardBody,
    Row,
    CardTitle,
    
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
          username:'',
          
        }
        // this.handleChange=this.handleChange.bind(this);
    
        this.handleCheckChange = this.handleCheckChange.bind(this);
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
            category: checkArray,
            username:this.state.username
        }

        axios({
            url: 'https://free-source-api.herokuapp.com/posts/add',
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
    };//closes Submit function


    componentDidMount = () => {
        this.getCategory();
    };

    render() {
        console.log('State :', this.state);

        return (
            <><form onSubmit={this.submit} >
                <Row style={{ marginTop: "1rem" }}>
                    <Col sm={12} lg="10" xl="10" md="10">
                        <Card style={{ borderRadius: "5%", marginBottom: "1rem",  marginLeft: "1rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                            <CardBody>
                                <CardTitle> <h2>Have a Freesource ? Share with everyone !!</h2></CardTitle>

                                <div className="form-input">
                                    <Col >
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            
                                            <Input
                                                maxLength="30"
                                                type="text"
                                                name="title"
                                                placeholder="Title"
                                                value={this.state.title}
                                                onChange={this.handleChange}
                                                style={{borderWidth:"1px" ,borderColor:"#36454f"}}
                                                required
                                            />
                                        </Card>
                                       
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            <Input
                                                maxLength="200"
                                                type="text"
                                                name="resource"
                                                pattern="https://.*"
                                                oninvalid="this.setCustomValidity('Please add https:// before the link ')"
                                                placeholder="Resource Link (Shuld start from https://) "
                                                value={this.state.resource}
                                                onChange={this.handleChange}
                                                style={{borderWidth:"1px" ,borderColor:"#36454f"}}
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
                                                style={{borderWidth:"1px" ,borderColor:"#36454f"}}
                                            /></Card>
                                    </Col>
                                    <Col  >
                                        <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
                                            <CardBody>
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
                                    <Col>
                                    <Card style={{ borderRadius: "5%", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >       
                                         
                                        <Input
                                            maxLength="30"
                                            type="text"
                                            name="username"
                                            placeholder="Pick a Username"
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            style={{borderWidth:"1px" ,borderColor:"#36454f"}}
                                            required
                                        />
                                    </Card>
                                    </Col>
                                    
                                    
                                    
                                    
                                    <Button style={{ marginLeft: "2rem" }} color="primary" size="lg">Submit</Button>
                                    
                                    

                                </div>
                                
                                
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
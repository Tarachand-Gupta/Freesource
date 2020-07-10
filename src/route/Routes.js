// import React,{useState, useEffect} from 'react';
// import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
// import axios from 'axios';
// import AddPost from '../components/AddPost';
// import Cards from '../components/Cards';

// class Routes extends React.Component{

//     state={
//         categories: [],

//     }

//     getCategory = () => {
//         axios.get('https://free-source-api.herokuapp.com/category/')
//             .then((response) => {
//                 const data = response.data
//                 this.setState({ categories: data });
//                 console.log('Data has been Recived !');
//             })
//             .catch((e) => { alert('Error Reciving Data !!', e); });

//     };
//     componentDidMount=()=>{
//         this.getCategory();
//       }

//       render(){
//         return(
        
        
//             <Switch>
//             <Route exact path="/">
//               <Home />
//             </Route>
    
//             <Route path="/cards">
//               <Cards />
//             </Route>
    
//             <Route path="/addpost">
//               <AddPost />
//             </Route>
//             <Routes/>
//             {this.state.categories.map(category => (
//                 <Route exact path={category.path} component={category.categorylist}>
                    
//                 </Route>      
//             ))}
            
//         </Switch>

      
//       );
//     }
// }
// const Home=()=>(
 
//     <div>
//       <h1>This is HOMEPAGE </h1>
//     </div> 
// )


// export default Routes;



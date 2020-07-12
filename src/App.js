import React,{Suspense} from 'react';
import AddPost from './components/AddPost';
import AnimeandComics from './components/categoryCards/animeandcomics';
import Application from './components/categoryCards/application';
import Art from './components/categoryCards/art';
import BookandRefs from './components/categoryCards/bookandrefs';
import CodesandProgramming from './components/categoryCards/codesandprogramming';
import Education from './components/categoryCards/education';
import Entertainment from './components/categoryCards/entertainment';
import MoviesandSeries from './components/categoryCards/moviesandseries';
import Personalization from './components/categoryCards/personalization';
import Shopping from './components/categoryCards/shopping';
import Tools from './components/categoryCards/tools';
import TravelandLocals from './components/categoryCards/travelandlocals';
import NavBarPage from './components/NavBarPage';
import './App.css';
import {BrowserRouter as Router,Route, Redirect} from "react-router-dom";
import {
  
  Card,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";
import Linkify from 'react-linkify';
//import Linkify from 'react-linkify';

const Cards =React.lazy(()=>import('./components/Cards') )

const App=() =>{
 
  return (
    
    <Router > 
      <NavBarPage />

          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          {/* <Route  path="/">
            <Redirect to="/home" />
          </Route> */}

          <Route  path="/home">
            <Home />
          </Route>

          <Route exact path="/cards">
            <Suspense fallback={<div>Loading.....</div>}>
          <Cards />
            </Suspense>
          </Route>
    
          <Route exact path="/addpost">
            <AddPost />
          </Route>

          <Route exact path="/aboutus">
            <AboutUs />
          </Route>

          <Route exact path="/animeandcomics">
            <AnimeandComics />
          </Route>

          <Route exact path="/application">
            <Application />
          </Route>

          <Route exact path="/art">
            <Art />
          </Route>

          <Route exact path="/bookandrefs">
            <BookandRefs />
          </Route>

          <Route exact path="/codesandprogramming">
            <CodesandProgramming />
          </Route>

          <Route exact path="/education">
            <Education />
          </Route>
        
          <Route exact path="/entertainment">
            <Entertainment />
          </Route>
        
          <Route exact path="/moviesandseries">
            <MoviesandSeries />
          </Route>

          <Route exact path="/personalization">
            <Personalization />
          </Route>

          <Route exact path="/shopping">
            <Shopping />
          </Route>
        
          <Route exact path="/tools">
            <Tools />
          </Route>
        
          <Route exact path="/travelandlocals">
            <TravelandLocals />
          </Route>
      
    </Router>
  );
};

const Home=()=>(
      
      <div>
        <div style={{marginLeft:"1rem",marginTop:"1rem"}}><h4>Top Grossing : </h4></div> 
        <Suspense fallback={<div>Loading.....</div>}>
          <Cards />
        </Suspense>
      </div> 
)

const AboutUs=()=>(
  
  <Card style={{ borderRadius: "20px", marginBottom: "1rem", marginLeft: "0.5rem", marginRight: "0.5rem", CaretPosition: "relative" }} >
    <CardBody>
      <CardTitle class="CardTitle" >
        <h2>Freesource - Know, how free the Internet is ! </h2>
      </CardTitle>
      <CardText>
       <h6> I am an Enginnering Geek , and crated this <strong>Platform</strong>  to <strong>share</strong> your favorite <strong>resources with Everyone !</strong></h6>
      </CardText>
      <CardText>

        <Linkify>For any <strong>Queries , complaint</strong> and <strong>Bug Report</strong> mail us on support@freesource.co.in</Linkify>
      </CardText>
    </CardBody>
  </Card>
  
)

export default App;

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
        <h1>Latest : </h1>
        <Suspense fallback={<div>Loading.....</div>}>
          <Cards />
        </Suspense>
      </div> 
)



export default App;

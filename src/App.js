import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./app.css"
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {Documentaries, HorrorMovies, RomanceMovies, action,comedyMovies,originals, trending} from './url'
function App() {
  return (
    <div className="App">

      <Navbar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={trending} title='Trending' isSmall/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedyMovies} title='Comedy' isSmall/>
      <RowPost url={HorrorMovies} title='Horror' isSmall/>
      <RowPost url={RomanceMovies} title='Romance' isSmall/>
      <RowPost url={Documentaries} title='Documentaries' isSmall/>





    </div>
  );
}

export default App;

import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import { useState } from 'react';


const Browse = () => {

  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  //Lifting state here
  const [selectedMovieId, setSelectedMovieId] = useState(null);



  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) :
          (
            <>
              <MainContainer movieId={selectedMovieId}/>
              <SecondaryContainer onMovieClick={setSelectedMovieId}/>
            </>
          )
      }
    </div>
  )
}

export default Browse
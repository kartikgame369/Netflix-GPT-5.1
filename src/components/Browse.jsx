import Header from './Header'
import { API_OPTIONS } from '../utils/Constents'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'


const Browse = () => {
  useNowPlayingMovies();
  return (
    <div className='w-20'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse
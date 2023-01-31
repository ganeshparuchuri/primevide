// Write your code here

import './index.css'
import MoviesSlider from '../MoviesSlider'

const PrimeVideo = props => {
  const {moviesList} = props

  const ActionMovies = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const ComedyMovies = moviesList.filter(
    eachComedy => eachComedy.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        className="prime-video-image"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />

      <div className="slides-container">
        <h1 className="action-movies-heading">Action Movies</h1>
        <MoviesSlider movies={ActionMovies} />
        <h1 className="action-movies-heading">Comedy Movies</h1>
        <MoviesSlider movies={ComedyMovies} />
      </div>
    </div>
  )
}
export default PrimeVideo

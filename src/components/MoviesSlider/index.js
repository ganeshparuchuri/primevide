// Write your code here
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Movieitem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <Slider {...settings}>
      {movies.map(eachMovie => (
        <Movieitem Movies={eachMovie} key={eachMovie.id} />
      ))}
    </Slider>
  )
}

export default MoviesSlider

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieList} = props
  const settings = {dots: false, slidesToShow: 4, slidesToScroll: 4}

  return (
    <Slider {...settings}>
      {movieList.map(eachMovieItem => (
        <MovieItem key={eachMovieItem.id} movieObject={eachMovieItem} />
      ))}
    </Slider>
  )
}

export default MoviesSlider

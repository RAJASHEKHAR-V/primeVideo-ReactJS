import MoviesSlider from '../MoviesSlider'

import './index.css'

const FilterMovieConstants = {actionId: 'ACTION', comedyId: 'COMEDY'}

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    eachCategoryItem =>
      eachCategoryItem.categoryId === FilterMovieConstants.actionId,
  )
  const comedyMovieList = moviesList.filter(
    eachCategoryItem =>
      eachCategoryItem.categoryId === FilterMovieConstants.comedyId,
  )

  return (
    <div className="prime-video-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        className="prime-image"
        alt="prime video"
      />
      <div className="movie-container">
        <h1 className="action-movie-heading">Action Movies</h1>
        <MoviesSlider movieList={actionMovieList} />
        <h1 className="comedy-movie-heading">Comedy Movies</h1>
        <MoviesSlider movieList={comedyMovieList} />
      </div>
    </div>
  )
}

export default PrimeVideo

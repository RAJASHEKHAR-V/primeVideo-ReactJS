import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import 'reactjs-popup/dist/index.css'

import './index.css'

const MovieItem = props => {
  const {movieObject} = props
  const {thumbnailUrl, videoUrl} = movieObject

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail-image" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="pop-up-container">
            <div className="close-button-card">
              <button
                className="close-button"
                type="submit"
                data-testid="closeButton"
                onClick={() => close()}
              >
                <IoMdClose className="close-icon" />
              </button>
            </div>
            <div className="video-card">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem

// Write your code here
import Popup from 'reactjs-popup'

import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const Movieitem = props => {
  const {Movies} = props
  const {thumbnailUrl, videoUrl} = Movies

  return (
    <div className="popup-container">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thubnail-url" />
        }
        className="popup-content"
      >
        {close => (
          <>
            <div className="modal-container1">
              <button
                className="close-button"
                type="button"
                onClick={() => close()}
              >
                <IoMdClose size={20} color="#231f20" />
              </button>
              <div className="movie-player-container">
                <ReactPlayer url={videoUrl} controls />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}
export default Movieitem

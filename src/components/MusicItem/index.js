import {IoMdTrash} from 'react-icons/io'

import './index.css'

const MusicItem = props => {
  const {musicData, onClickDelete} = props
  const {imageUrl, name, genre, duration} = musicData
  const onDeleteBtn = () => {
    onClickDelete(name)
  }
  return (
    <li className="list-item">
      <div className="left-box">
        <img src={imageUrl} className="list-item-img" alt="track" />
        <div className="list-column">
          <p className="list-p">{name}</p>
          <p className="list-p color">{genre}</p>
        </div>
      </div>
      <div className="list-row">
        <p className="list-p">{duration}</p>
        <button
          aria-label="delete button"
          className="delete-btn"
          onClick={onDeleteBtn}
          type="button"
          data-testid="delete"
        >
          <IoMdTrash className="delete-icon" />
        </button>
      </div>
    </li>
  )
}

export default MusicItem

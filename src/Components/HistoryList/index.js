import {Component} from 'react'

import './index.css'

class HistoryList extends Component {
  render() {
    const {historyList, deleteHistory} = this.props
    const {timeAccessed, logoUrl, title, domainUrl, id} = historyList
    const onDelete = () => {
      deleteHistory(id)
    }

    return (
      <li className="list-container">
        <p className="time">{timeAccessed}</p>
        <div className="domain-container">
          <img className="domain-logo" src={logoUrl} alt="domain logo" />
          <div className="details-container">
            <p className="domain-name">{title}</p>
            <p className="domain-link">{domainUrl}</p>
          </div>
          <button
            onClick={onDelete}
            type="button"
            className="button"
            testid="delete"
          >
            <img
              className="delete-icon"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default HistoryList

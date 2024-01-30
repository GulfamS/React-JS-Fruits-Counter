import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  onMangoIncreament = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  onBananaIncreament = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state
    return (
      <div className="container">
        <div className="fruits-card">
          <h1 className="fruits-heading-count">
            Bob ate <span className="count">{mangoCount}</span> mangoes
            <span className="count">{bananaCount}</span> bananas
          </h1>
          <div className="image-container">
            <div className="mango-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
                className="mango-img"
              />
              <button
                className="button"
                type="button"
                onClick={this.onMangoIncreament}
              >
                Eat Mango
              </button>
            </div>
            <div className="banana-image">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
                alt="banana"
                className="banana-img"
              />
              <button
                className="button"
                type="button"
                onClick={this.onBananaIncreament}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

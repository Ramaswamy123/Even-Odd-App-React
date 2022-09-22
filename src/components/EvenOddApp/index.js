import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onClickButton = () => {
    const randomNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const status = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="count-container">
          <h1 className="count-heading">Count {count}</h1>
          <p>Count is {status}</p>
          <button type="button" onClick={this.onClickButton} className="button">
            Increment
          </button>
          <p>*Increase by Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp

import React, {Component} from 'react'
import Shoe from './shoe'
import './App.css'

class App extends Component {
  render() {
    const {
      shoes,
    } = this.props

    return (
      <div>
        <div className="App-header">
          <h2>Shoes</h2>
        </div>
        <div className="Table">
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Brand</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {shoes.map((shoe, index) => {
                return <Shoe shoe={shoe} key={index} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App


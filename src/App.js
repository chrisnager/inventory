import React, {Component} from 'react'
import Shoe from './shoe'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      brand: '',
      category: '',
      color: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(value, event) {
    console.log([value], event.target.value)

    this.setState({
      [value]: event.target.value
    })
  }

  handleSubmit(data, event) {
    const {
      addItem,
    } = this.props

    addItem(data)

    this.setState({
      category: '',
      brand: '',
      color: '',
    })

    event.preventDefault()
  }

  render() {
    console.log('snapshot', this.props, JSON.stringify(shoes))

    const {
      brand,
      category,
      color,
    } = this.state

    const {
      shoes,
    } = this.props

    return (
      <div>
        <div className="App-header">
          <h2>Shoes</h2>
          <form
            onSubmit={this.handleSubmit.bind(this, {
              brand,
              category,
              color,
            })}
          >
            <label htmlFor="category">
              <span style={{display: 'block'}}>Category</span>
              <input
                type="text"
                value={this.state.category}
                onChange={this.handleChange.bind(this, 'category')}
                id="category"
                placeholder="Dress"
              />
            </label>
            <label htmlFor="brand">
              <span style={{display: 'block'}}>Brand</span>
              <input
                type="text"
                value={this.state.brand}
                onChange={this.handleChange.bind(this, 'brand')}
                id="brand"
                placeholder="Cole Haan"
              />
            </label>
            <label htmlFor="color">
              <span style={{display: 'block'}}>Color</span>
              <input
                type="text"
                value={this.state.color}
                onChange={this.handleChange.bind(this, 'color')}
                id="color"
                placeholder="Silver"
              />
            </label>
            <input
              style={{display: 'block'}}
              type="submit"
              value="Add shoe"
            />
          </form>
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
              {Object.keys(shoes).map(index => {
                return <Shoe key={index} shoe={shoes[index]} />
              })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default App


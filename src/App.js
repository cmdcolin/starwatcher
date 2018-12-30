import React, { Component } from 'react'
import './App.css'

class NameForm extends Component {
  constructor(props) {
    super(props)
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
    console.log('here',this.state.value)
    this.props.handleSubmit(this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter your GitHub username{' '}
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

class StarList extends Component {
  constructor(props) {
    super(props)

    this.state = {
      hits: [],
      isLoading: false,
      error: null,
    }
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    console.log('props name', this.props.name)
    fetch(`https://api.github.com/users/${this.props.name}/starred`)
          .then(res => res.json())
          .then((starred) => starred.map((s) => ({
              owner:       s.owner.login
            , repo:        s.name
            , description: s.description
            , language:    s.language
            , isFork:      false
            , stargazers:  s.stargazers_count
            , watchers:    s.watchers_count
          })))
          .then(data => this.setState({ hits: data, isLoading: false }))
          .catch(error => this.setState({ error, isLoading: false }));
  }
  render() {
    const { hits, isLoading } = this.state

    if (isLoading) {
      return <p>Loading ...</p>
    }
    console.log(hits)
    return (
      <ul>
        {hits.map(hit => (
          <li key={hit.objectID}>
            <a href={hit.url}>{hit.title}</a>
          </li>
        ))}
      </ul>
    )
  }
}

class App extends Component {
  constructor() {
    super()
    this.state = {name: null}
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(name) {
    this.setState(state => ({ name }))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">starwatcher</header>
        <NameForm handleSubmit={this.handleSubmit} />
        <StarList name={this.state.name} />
      </div>
    )
  }
}

export default App

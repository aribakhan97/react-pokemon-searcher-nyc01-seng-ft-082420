import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  state = {stashPokemon: [],
  searchValue: ""
  }

submitHandler = (object) => {
  console.log(object)
  let newArray=[...this.state.stashPokemon,object]
  this.setState({stashPokemon:newArray})
  let options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(object),
}
  fetch('http://localhost:3000/pokemon/', options)
  .then(response => response.json())

}


  componentDidMount(){
    fetch('http://localhost:3000/pokemon/')
    .then(response => response.json())
    .then(data => this.setState({stashPokemon:data}))
  }
  


  searchHandler = (e) => {
    
    this.setState({searchValue:e.target.value})
  }

filterPokemon = () => {
      let newArray = this.state.stashPokemon.filter(p=>{
      return p.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
    })
    return newArray
}

  render() {
    let temp = this.filterPokemon()
    console.log(temp)
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm submitHandler={this.submitHandler}/>
        <br />
        <Search searchHandler={this.searchHandler} searchValue={this.state.searchValue}/>
        <br />
        <PokemonCollection stashPokemon={this.filterPokemon()}/>
      </Container>
    )
  }
}

export default PokemonPage

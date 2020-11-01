import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  state= {
    showBackPic:false
  }

  clickHandler = () => {
    let newBackPic = !this.state.showBackPic
    this.setState({showBackPic:newBackPic})
  }

  render() {
    let imageUrl = (this.state.showBackPic) ? this.props.pokemon.sprites.back : this.props.pokemon.sprites.front
    return (
      <Card onClick={this.clickHandler}>
        <div>
          <div className="image">
            <img src={imageUrl} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard

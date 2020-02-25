import React, { Component } from 'react';
import { addCharacterById } from '../actions';
import { connect } from 'react-redux';

class SquadStats extends Component {
  
  render () {
    let strength = 0;
    let intelligence = 0;
    let speed = 0;

    this.props.heroes.forEach(hero => {
      strength +=hero.strength;
      intelligence += hero.intelligence;
      speed += hero.speed;
    })

    return (
      <div>
        <h4>
          Stats
        </h4>
        <ul className='list-group'>
          <li className='list-group-item'>
            <div className='list-item'>
              Overall strength: {strength}
            </div>
          </li>
          <li className='list-group-item'>
            <div className='list-item'>
              Overall intelligence: {intelligence}
            </div>
          </li>
          <li className='list-group-item'>
            <div className='list-item'>
              Overall speed: {speed}
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, { addCharacterById })(SquadStats)
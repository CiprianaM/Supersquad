import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeHeroById } from '../actions';

class HeroesList extends Component {
  render () {
    return (
      <div>
        <h4>
          Heroes
        </h4>
        <div>
          <ul className='list-group'>
            {this.props.heroes.map(hero => {
              return (
                <li
                key={hero.id}
                className='list-group-item'
                >
                  <div className='list-item'>
                    {hero.name}
                  </div>
                  <div className='list-item right-button' onClick={()=>this.props.removeHeroById(hero.id)}>
                    -
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    heroes: state.heroes
  }
}

export default connect(mapStateToProps, { removeHeroById })(HeroesList);
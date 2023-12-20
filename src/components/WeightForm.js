import React from 'react';

export default class WeightForm extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <div>
          <label>Peso: </label>
          <input type='text' value={this.props.weight} onChange={(e)=>this.props.setWeight(e.target.value)}/>
      </div>
    )
  }
}
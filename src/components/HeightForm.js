import React from 'react';

export default class HeightForm extends React.Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return(
      <div>
        <label>Altura: </label>
        <input type='text' value={this.props.height} onChange={(e)=>this.props.setHeight(e.target.value)}/>
      </div>
    )
  }
}
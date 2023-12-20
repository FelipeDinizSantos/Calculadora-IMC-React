import React from 'react';

export default class ShowResult extends React.Component
{
  constructor(props)
  {
    super(props);
  }

  render()
  {
    return(
      <div>
        <p>Resultado: {this.props.result.toFixed(2)}</p>
      </div>
    )
  }
}
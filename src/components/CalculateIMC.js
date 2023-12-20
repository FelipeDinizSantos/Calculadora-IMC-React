import React from 'react';

export default class CalculateIMC extends React.Component
{
  constructor(props)
  {
    super(props);

    this.calc = this.calc.bind(this);
  }
  
  calc()
  {
    this.props.setResult(this.props.weight/(this.props.height ** 2));
  }

  render()
  {
    return(
      <div>
        <button onClick={this.calc}>Calcular</button>
      </div>
    )
  }
}
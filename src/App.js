import React from "react";
import WeightForm from './components/WeightForm';
import HeightForm from './components/HeightForm';
import CalculateIMC from './components/CalculateIMC';
import ShowResult from './components/ShowResult';
import TableView from './components/TableView';

export default class App extends React.Component
{
  constructor()
  {
    super();

    this.state=
    {
      weight: 0,
      height: 0,
      result: 0
    }

    this.setWeight = this.setWeight.bind(this);
    this.setHeight = this.setHeight.bind(this);
    this.setResult = this.setResult.bind(this); 
  }

  setWeight(newState)
  {
    this.setState({weight: newState});
  }

  setHeight(newState)
  {
    this.setState({height: newState});
  }

  setResult(newState)
  {
    this.setState({result: newState});
  }

  render()
  {
    return (
      <>
        <WeightForm weight={this.state.weight} setWeight={this.setWeight} />
        <HeightForm height={this.state.height} setHeight={this.setHeight} />
        <CalculateIMC weight={this.state.weight} height={this.state.height} setResult={this.setResult} />
        <ShowResult result={this.state.result} />
        <TableView />
      </>
    );
  }
}
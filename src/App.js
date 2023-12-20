import { useState } from "react";
import WeightForm from './components/WeightForm';
import HeightForm from './components/HeightForm';
import CalculateIMC from './components/CalculateIMC';
import ShowResult from './components/ShowResult';
import TableView from './components/TableView';

function App() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [result, setResult] = useState(0);

  return (
    <>
      <WeightForm weight={weight} setWeight={setWeight} />
      <HeightForm height={height} setHeight={setHeight} />
      <CalculateIMC weight={weight} height={height} setResult={setResult} />
      <ShowResult result={result} />
      <TableView />
    </>
  );
}

export default App;
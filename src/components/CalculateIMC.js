const CalculateIMC = (weight, height, setResult)=>
{
  const calc = ()=>
  {
    setResult(weight/(height ** 2));
  } 

  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

export default CalculateIMC;
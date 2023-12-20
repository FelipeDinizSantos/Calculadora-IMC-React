const CalculateIMC = (props)=>
{
  const calc = ()=>
  {
    props.setResult(props.weight/(props.height ** 2));
  } 

  return(
    <div>
      <button onClick={calc}>Calcular</button>
    </div>
  )
}

export default CalculateIMC;
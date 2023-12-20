const ShowResult = (props)=>
{
  return(
    <div>
      <p>Resultado: {props.result.toFixed(2)}</p>
    </div>
  )
}

export default ShowResult;
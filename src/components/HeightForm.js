const HeightForm = (props)=>
{
  return(
    <div>
      <label>Altura: </label>
      <input type='text' value={props.height} onChange={(e)=>props.setHeight(e.target.value)}/>
    </div>
  )
}

export default HeightForm;
const HeightForm = (height, setHeight)=>
{
  return(
    <div>
      <label>Altura: </label>
      <input type='text' value={height} onChange={(e)=>setHeight(e.target.value)}/>
    </div>
  )
}

export default HeightForm;
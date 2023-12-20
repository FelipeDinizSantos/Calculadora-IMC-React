const WeightForm = (props)=>
{
    return(
        <div>
          <label>Peso: </label>
          <input type='text' value={props.weight} onChange={(e)=>props.setWeight(e.target.value)}/>
        </div>
      )
}

export default WeightForm;
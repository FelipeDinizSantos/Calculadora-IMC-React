const WeightForm = (weight, setWeight)=>
{
    return(
        <div>
          <label>Peso: </label>
          <input type='text' value={weight} onChange={(e)=>setWeight(e.target.value)}/>
        </div>
      )
}

export default WeightForm;
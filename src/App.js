import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [Breakfast, setBreakfast] = useState([{meal : '', calories : 0}]);
  const [Lunch, setLunch] = useState([{meal: '', calories: 0}]);
  const [Dinner, setDinner] = useState([{meal: '', calories: 0}]);
  const [total, setTotal] = useState(0);
  
const addMeal = (n)=>{
  if (n===1){
    setBreakfast([...Breakfast,{meal : '' , calories: 0}]);
  }else if (n===2){
    setLunch([...Lunch,{meal : '' , calories: 0}]);
  }
  else{
    setDinner([...Dinner,{meal : '' , calories: 0}]);
  }
};

const changeMeal = (i, e, n) =>{
  if (n ===1){
    let meals = [...Breakfast];
    meals[i][e.target.name] = e.target.value;
    setBreakfast(meals);
  }else if(n===2){
    let meals2 = [...Breakfast];
    meals2[i][e.target.name] = e.target.value;
    setLunch(meals2);
  }else{
    let meals3 = [...Dinner];
    meals3[i][e.target.name] = e.target.value;
    setDinner(meals3);
  }
}

var [readOnlyy, setReadOnlyy] = useState(false)
const changeStyle = () => {
  setReadOnlyy(true);

}

const deleteMeal = (i, n)=>{
  console.log(i);
  if (n ===1){
    Breakfast.splice(i,1);
  }else if(n ===2){
    Lunch.splice(i,1);
  }else{
    Dinner.splice(i,1);
  }
}

const caloriesCount = ()=>{
  var totalCalories = 0;
  Breakfast.forEach((element)=> totalCalories+=(Number(element.calories)));
  Lunch.forEach((element)=> totalCalories+=(Number(element.calories)));
  Dinner.forEach((element)=> totalCalories+=(Number(element.calories)));
  setTotal(totalCalories)
}


  return (
    <div className="App">
      <h1>Calories Counter</h1>
      <div>
        <fieldset>
          <legend>Breakfast</legend>
          {Breakfast.map((element, index) =>(
              <div key={index}>
              <label>Meal Name</label>
              <input type='text' name='meal' onChange={e =>changeMeal(index, e, 1)} readOnly = {readOnlyy}/>
              <label>Calories</label>
              <input type='number' name='calories' min='0' onChange={e =>changeMeal(index, e, 1)} readOnly = {readOnlyy}/>
              <button onClick={()=>deleteMeal(index, 1)}>
                <svg className='trash-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                  <button onClick={()=>changeStyle()}>
                  <svg className='plus-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
                  </div>
          ))}
          <button onClick={() => addMeal(1)}>Add Meal</button>
        </fieldset>
        <fieldset>
          <legend>Lunch</legend>
          {Lunch.map((element, index) =>(
            <div>
              <label>Meal Name</label>
              <input type='text' name='meal' onChange={e =>changeMeal(index, e, 2)} readOnly = {readOnlyy}/>
              <label>Calories</label>
              <input type='number' min='0' name='calories' onChange={e =>changeMeal(index, e, 2)} readOnly = {readOnlyy}/><button>
                <svg className='trash-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                  <button onClick={()=>changeStyle()}>
                  <svg className='plus-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
                  </div>
          ))}
          <button onClick={() => addMeal(2)}>Add Meal</button>
        </fieldset>
        <fieldset>
          <legend>Dinner</legend>
          {Dinner.map((element, index) =>(
            <div>
              <label>Meal Name</label>
              <input type='text' name='meal' onChange={e =>changeMeal(index, e, 3)} readOnly = {readOnlyy}/>
              <label>Calories</label>
              <input type='number' min='0' name='calories' onChange={e =>changeMeal(index, e, 3)} readOnly = {readOnlyy}/>
              <button>
                <svg className='trash-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg></button>
                  <button onClick={()=>changeStyle()}>
                  <svg className='plus-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg></button>
          </div>
          ))}
          <button onClick={() => addMeal(3)}>Add Meal</button>
        </fieldset>
        <button onClick={() => caloriesCount()}>Total Calories</button>
        <h3>{total}</h3>
      </div>
     

    </div>
  );
}

export default App;

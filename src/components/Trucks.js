import Truck from './Truck'





const Trucks = ({trucks}) => {
   const bookHandler = () =>{
      alert('Truck booked successfully')
   }
  
    return (
        <div>
         {trucks.map((truck) => (<Truck truck={truck} userBook={bookHandler}/>))}
         
        </div>
    )
}

export default Trucks;
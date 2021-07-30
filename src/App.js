import Buttons from "./components/Buttons";
import Trucks from "./components/Trucks";
import Trucksduty from "./components/Trucksduty";
import {useState} from 'react';


function App() {
  

  const [showTrucks,setShowTrucks] = useState(false)
  const [showDutyTruck,setShowDutyTruck] = useState(false)

   const trucksAvailable = [

    {
     registration : 'KDC 456J',
     driver : 'Maina Kingangi',
     status : 'available'
     
  },
  
  {
     registration : 'KCX 367J',
     driver : 'Stella Opoya',
     status : 'available'
     
  },
  
  {
     registration : 'KBY 123P',
     driver : 'Iano Ranking',
     status : 'available'
     
  },
  
  {
     registration : 'KDD 430J',
     driver : 'Collins Omondi',
     status : 'available'
     
  },
  
  {
     registration : 'KCZ 321A',
     driver : 'Andy Omondi',
     status : 'available'
     
  },
  
  ]

  const  trucksOnDuty = [
     

    {
      registration:'KDA 213S',
      driver:'Millitan Govana',
      status:'On Duty'
    },

    {
      registration:'KCZ 105J',
      driver:'Maxmillan Wambui',
      status:'On Duty'
    },

    {
      registration:'KDB 258S',
      driver:'Peter Wahome',
      status:'On Duty'
    },

    {
      registration:'KCY 800B',
      driver:'Smady Tings',
      status:'On Duty'
    },

    {
      registration:'KCC 254M',
      driver:'Guzu Emji',
      status:'On Duty'
    },

]


  
  return (
    <>
      <div className = 'container-fluid'>
        <div className = 'app-header'>Truck Booker</div>
        <Buttons showAvailable = {() => setShowTrucks(!showTrucks)} showOnDuty = {()=> setShowDutyTruck(!showDutyTruck)}/>
        {showTrucks ?<Trucks trucks = {trucksAvailable} />: 'Please click on the available button to see the trucks available and book '}
        {showDutyTruck ?<Trucksduty  dutyTruck = {trucksOnDuty}/> : 'Please click on the On Duty button to see the trucks on duty'}
      </div>  
    </>
  )
}
    
  


export default App;

import Dutytruck from "./Dutytruck";

const Trucksduty = ({dutyTruck})=> {
    return (
        <div>
            {dutyTruck.map((truck) =>(<Dutytruck dutytruck = {truck}/>))} 
        </div>
    )
}

export default Trucksduty;
const Truck = ({truck,userBook}) => {

    return(
        <div className = 'truck-details' onClick = {userBook} >
            <h2>{truck.registration}</h2>
            <p>{truck.driver}</p>
            <p>{truck.status}</p>
        </div>
    )

}
export default Truck;






const Buttons = ({showAvailable,showOnDuty}) => {
    return(
        <div className = 'buttons-section'>
            <button className = 'on-duty' onClick = {showOnDuty} >On Duty</button>
            <button  className = 'available' onClick = {showAvailable}>Available</button>
        </div>
    )
}

export default Buttons
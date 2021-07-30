

const Dutytruck = ({dutytruck}) => {

    return (
        <div className = 'truck-details'>
        <h3>{dutytruck.registration}</h3>
        <p>{dutytruck.driver}</p>
        <p>{dutytruck.status}</p>
    </div>
    )
}

export default Dutytruck;
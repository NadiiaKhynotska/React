const Simsons = (props)=>{
    return(
        <>
        <div className="image">
            <img src = {props.image} alt = ""/>
        </div>
            <div className="desription">
                <h2>id: {props.id}</h2>
                <h2>name: {props.name}</h2>
                <h2>special: {props.special}</h2>
                <h2>status: {props.status}</h2>
                <h2>gender: {props.id}</h2>
            </div>
        </>
    );

}

export default Simsons
function Card ({title, description}){
    return(
        <div style={{border:"1px solid gray",padding:"10px",margin:"5px",backgroundColor:"pink"}}>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}

export default Card;
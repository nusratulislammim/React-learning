function UnoCard({number,color}){
    return(
        <div style={{color:"black", backgroundColor: color, border:"1px solid grey", margin:"50px", padding:"10px"}}>
            <h1 style={{textAlign:"center"}}>{number}</h1>
        </div>
    );
};

export default UnoCard;
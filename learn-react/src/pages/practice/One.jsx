
function RandomNum(){
    let num = Math.floor(Math.random()*100);
    return(
        <div>
            <h2>random number: {num}</h2>
        </div>
    );
};

export default RandomNum;
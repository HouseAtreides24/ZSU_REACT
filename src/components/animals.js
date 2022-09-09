import img1 from "../images/images.jpg";
// import img2 from "../images/images (1).jpg";

function Animals({name,pic,styleClass}){

    return(
        <div className={styleClass}>
            <div className='App'>
                <h1>{name}</h1>
            </div>
            <div >
                <img src={pic} alt="Animals1" className="App-img"/>
            </div>
        </div>


    )
}

    export default Animals;
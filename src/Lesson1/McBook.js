import './styles.css'

function McBook({name,id,photo,information}){
    return(
        <div >
            <h1> {name} </h1>
            <h3> {id} </h3>
            <img src={photo} alt="" className="images"/>
            <div>{information}</div>
        </div>
    )
}


export default McBook
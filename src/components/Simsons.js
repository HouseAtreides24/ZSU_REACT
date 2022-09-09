function Simsons({name,surname,age,info,photo,styleClass}){

    return(
            <div className={styleClass}>
                <h1>{name} {surname}</h1>
                <h3>{age} years old</h3>
                <img src={photo} alt=""/>
                <div>{info}</div>
            </div>
    )
}

export default Simsons
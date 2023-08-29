
function Idolos (props) {
    return (
    <div>
        <p>Nombre: {props.nombre}</p>
        <p>Seleccion: {props.pais}</p>
        <p>Club: {props.club}</p>
        
  </div>
    )
}

function valores () {
    return(
    <div>
        <Idolos nombre= 'Paulo Silas' pais='Brasil' club='Barcelona' color='blue'/>
        <Idolos nombre= 'Leandro Romagnoli' pais='Argentina' club='San Lorenzo' color='red'/>
        <Idolos nombre= 'Jose Sanfilipo' pais='Argentina' club='San Lorenzo' color='blue'/>
    </div>
    )
}


export default Idolos;

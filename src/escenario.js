
import './App.css';
import { useState } from 'react'
import { data } from './Noticias';



 export default function Escenario1 (props)  {
   
  //state = {value: 1};
  //const [value, setValue] = useState(1);

  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: " ", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
  
 
  const  precios = () => {
     props.nine(number.nine)
  }

  const noticias = data[0]

// mirar ultimos 2 favoritos como pasar data entre siblings components mirar ultimo favorito
// 

  return (
    <div>
      <section className='noticias'>
                <h2>INFORMACIÓN ACTUAL </h2>
                <h3><span>Fase del ciclo económico:</span><br></br></h3>
                <h3 className='general'>{"-" + " " + noticias.general}</h3>
                <h4><span>Noticia general:</span><br></br></h4>
                <h4 className='general'>{"-" + " " + noticias.grupales}</h4>
                <h4 className='empresa'>Noticias empresariales:</h4>
                <p>{"-" + " " + noticias.eco}</p>
                <p>{"-" + " " + noticias.banco}</p>
                <p>{"-" + " " + noticias.cemargos}</p>
                <p>{"-" + " " + noticias.nutresa}</p>
        </section>
        <h3 className='preacci'>PRECIOS ACCIONES</h3>
        <section className='pprecios'>
              <div className='preciosa'>
                <p>Ecopetrol : </p>
                 <input value={number.nine}  name="nine" ></input>
              </div>
              <div className='preciosa'>
                <p>Bancolombia : </p>
                <input  value={number.ten} name="ten" readOnly></input>
              </div>
              <div className='preciosa'>
                 <p>Cementos Argos : </p>
                 <input  name="eleven" value={number.eleven} ></input>
              </div>
              <div className='preciosa'>
                  <p>Grupo Nutresa : </p>
                  <input  name="twelve" value={number.twelve} readOnly></input>
              </div>
        </section> 
    </div>
  );

}


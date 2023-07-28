import React, { useState, useEffect, useRef } from 'react';


export default function Canti5(props ) {

   
  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: " ", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
  const [cantiEco5 , setEco] = useState(0)
  const [cantiBan5 , setBan] = useState(0) 
  const [cantiCem5 , setCem] = useState(0) 
  const [cantiNut5 , setNut] = useState(0) 



    useEffect(()=>{

      const { one, two, three, four, five, six, seven, eigth, nine, ten, eleven, twelve, thirteen, catorce , quince, dieciseis, diecisiete , dieciocho, diecinueve, veinte, veinteuno, veintedos} = number

      setEco( (Number(one) - Number(five)) )
     setBan( (Number(two) - Number(six)) )
     setCem( (Number(three) - Number(seven)) )
     setNut( (Number(four) - Number(eigth)) )
      
     },[number, props])

  
  
 const ecanti = useRef(null)
 const banti = useRef(null)
 const cemanti = useRef(null)
 const nutanti = useRef(null)
 
 const ecantis = useRef(null)
 const bantis = useRef(null)
 const cemantis = useRef(null)
 const nutantis = useRef(null)

 const  cantidadesAcci5 = () => {
   props.Eco5(cantiEco5) 
   props.Ban5(cantiBan5) 
   props.Cem5(cantiCem5) 
   props.Nut5(cantiNut5) 
  
} // aqui envio la prop de hijo a padre... cuando el jsx hace onchange.

const handleInput = (event) => {
   const { name, value } = event.target
   setNumber({...number, [name]: value  })

   //el campo name es el atributo name de los inputs.  lo que hago es decirle que va a seguir teniendo el mismo valor con un simple ...number
  
}  // function controla los input mediante el event.target, destructurando el campo "name" y el campo "value". lo que hago es actualizar el valor del hook number




 return (
   <div>
   <div className='aviso'>
       <h3> <span>IMPORTANTE:</span><br></br>Agrega un punto después de cada cantidad y no coloques decimales</h3>
   </div>
     <div onChange={cantidadesAcci5} className='cantidadesAcci'>
            <div className='cantidadesAccidiv'>
              <h4>CANTIDADES (COMPRAS)</h4>
              <div >
                 <p>Ecopetrol</p>
                 <input  onChange={handleInput} ref={ecanti} value={number.one} name="one"  className='inputs' ></input> {/* readony no deja escribir sobre el input */}
              </div>
              <div>
                 <p>Bancolombia</p>
                 <input onChange={handleInput} ref={banti} value={number.two} name="two" className='inputs' id='banIn' ></input>
              </div>
              <div>
                 <p>Cementos Argos</p>
                 <input onChange={handleInput} ref={cemanti} value={number.three} name="three"  className='inputs' id='cemarIn'></input>
              </div>
              <div>
                 <p>Grupo Nutresa</p>
                 <input onChange={handleInput} ref={nutanti} value={number.four} name="four"  className='inputs' id='nutreIn'></input>
              </div>
             </div>
           <div className='cantidadesAccidiv'>
              <h4>CANTIDADES (VENTAS)</h4>
              <div >
                 <p>Ecopetrol</p>
                 <input  onChange={handleInput}  ref={ecantis} value={number.five}  name="five"  className='inputs' ></input> {/* readony no deja escribir sobre el input */}
              </div>
              <div>
                 <p>Bancolombia</p>
                 <input  onChange={handleInput}  ref={bantis}  value={number.six} name="six" className='inputs' id='banIn' ></input>
              </div>
              <div>
                 <p>Cementos Argos</p>
                 <input  onChange={handleInput}  ref={cemantis} value={number.seven} name="seven"  className='inputs' id='cemarIn'></input>
              </div>
              <div>
                 <p>Grupo Nutresa</p>
                 <input  onChange={handleInput}  ref={nutantis} value={number.eigth} name="eigth"  className='inputs' id='nutreIn'></input>
              </div>
             </div>
             </div>
</div>
)}
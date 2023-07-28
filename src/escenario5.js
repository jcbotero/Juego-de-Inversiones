import './App.css';
import { useState, useEffect } from 'react'
import { data, grupalNews, ecopetrol, bancolombia, cemargos, gNutresa } from './Noticias';
import React from 'react';



export const grupall = [
   "El fondo internacional ZKAPITAL ha decidido aumentar su exposición al mercado accionario colombiano, por lo cual, en los próximos meses comprará acciones.",
   "El estado en una política por impulsar el AHORRO en el país, impulsa un proyecto de ley para que los recursos pensionales, sean invertidos en mayor medida en renta variable nacional (acciones).",
   "El banco de inversión internacional JP MORGAN ha decidido ajustar su estrategia de inversión internacional, por lo cual, recomienda a sus clientes destinar mayor porcentaje de su number de inversión a economías emergentes latinoamericanas.",
   "Según los últimos sondeos previos a elecciones presidenciales en la región, se prevé un fuerte giro hacia políticas de izquierda en Sudamérica.",
   "Colombia como país, logra adjudicarse una importante patente para el desarrollo industrial en la nación que impulsará considerablemente el crecimiento económico.",
   "¡Hay acuerdo!.  Las bolsas de Colombia, México y Brasil, han decidido unirse, buscando ser un foco de mayor atracción de capitales foráneos. ",
   "Oleada de inversionistas. En las últimas semanas, ha crecido el apetito por los ETF ICOLCAP y HCOLSEL, fondos que invierten de forma diversificada en el mercado accionario colombiano",
   "¡Finalmente se declara en quiebra!. El gigante banco norteamericano US BANK no logra llegar a acuerdos con acreedores, por lo cual, cierra sus puertas, generando incertidumbre sobre el estado de la economía.",
   "¡Estalla la guerra!. El intenso conflicto geopolítico entre Suecia y Noruega, no lograr resolverse por la vía diplomática. Hay temor en la región.",
   
   "El fondo internacional ABUDABI en un repentino cambio de estrategia, ha decidido reducir su exposición al mercado accionario colombiano, por lo cual, en los próximos meses venderá acciones.",
   "El estado en una política por impulsar el GASTO SOCIAL en el país, impulsa un proyecto de ley para que los recursos pensionales, sean invertidos en menor medida en renta variable nacional (acciones).",
   "Ajustando su estrategia de inversión internacional, el reconocido banco CITY GROUP ha hecho cambios, por lo cual, recomienda a sus clientes destinar menor porcentaje de sus inversiones a economías emergentes latinoamericanas.",
   "Según los últimos sondeos previos a elecciones presidenciales en la región, se prevé un fuerte giro hacia políticas de derecha en Sudamérica.",
   "Un fuerte terremoto en el sur-este nacional, deja centenares de muertos y grandes afectaciones a la economía del país.",
   "Ante algunos desacuerdos finales, la integración prevista entre las bolsas de Colombia, México y Brasil queda momentáneamente postergada.",
   "¡El último que cierre la puerta!. En las últimas semanas, se ha reducido el apetito por los ETF ICOLCAP y HCOLSEL, fondos que invierten de forma diversificada en el mercado accionario colombiano.",
   "Después de 3 días de reuniones a puerta cerrada, los representantes de los máximos organismos económicos europeos, logran llegar a un acuerdo para recatar la economía francesa de su crisis actual.",
   "¡Se firma la Paz! Después de varios meses de conflictos bélicos, se logra un acuerdo de cese de hostilidades entre Rusia y Ucrania."
]


const ecoo = [
  
   "La OPEP (Organización de países exportadores de petróleo), prevé que los próximos meses algunos de sus miembros reduzcan fuertemente la producción de crudo.",
   "Recién salido del horno, el informe de reservas de petróleo de Ecopetrol, muestra un incremento sobresaliente del valor y cantidad de las mismas.",
   "Éxito exploratorio. Ecopetrol acaba de informar, el descubrimiento de un yacimiento de petróleo con grandes perspectivas en el mar del Caribe colombiano.",

   "Se espera una fuerte contracción de la economía China, que reducirá en gran medida la demanda de petróleo a nivel mundial.",
   "Debido a problemas operativos, cae el valor y cantidad de las reservas de petróleo de Ecopetrol.",
   "Atentado a Oleoducto. En horas de la mañana, grupos insurgentes atentaron con explosivos oleoducto de Ecopetrol, afectando el transporte por algunas semanas."
 
]


const bcoll = [
 
   "Crece fuertemente el número de créditos de libre inversión en los hogares, debido a una mayor predisposición de las familias a endeudarse.",
   "Bancolombia es incluida en índice internacional, lo cual le dará mayor visibilidad a inversionistas extranjeros.",
   "Tasas de captación bancarias se esperan fuertemente reducidas, lo cual permitirás pagar menores tasas de interés a los ahorradores.",
  
   "Se espera una reducción en la colocación de créditos por parte de las entidades bancarias.",
   "Bancolombia sale de índice internacional, lo cual le dará menor visibilidad a inversionistas extranjeros.",
   "Para apalancar su estrategia de internacionalización, Bancolombia planea una emisión de acciones, aumentando las que se encuentran actualmente en circulación."
 
]

const cargoss = [
 
   "Grandes expectativas para el sector construcción se tienen luego de aumentar considerablemente las compras de vivienda sobre planos en el país.",
   "Cementos Argos planea listar sus acciones en el mercado norteamericano para captar una mayor atención internacional.",
   "Lanzamiento de programa de obras de infraestructura 6G, proyecta aumentar la demanda de cemento en el país.",
 
   "Cementos argos informa retraso de un año para la entrada en operación de su nueva plata de cemento.",
   "El sector constructor colombiano espera una reducción en la demanda de obras civiles para los próximos meses.",
   "Cementos Argos pierde demanda contra municipio de Antioquía, por lo cual deberá pagar una fuerte indemnización."
 
]


const nutresaa = [
 
   "Grupo Nutresa se toma Europa. En los próximos años espera abrir 20 tiendas de Juan Valdez en el viejo continente.",
   "Junta directiva de Grupo Nutresa ve subvalorada su acción, y, por tanto, lanza programa de recompra de acciones.",
   "Grupo Nutresa inaugura nva planta de producción de alimentos, con una tecnología que le permitirá reducir costos sustancialmente.",
 
   "Precio internacional del café sube 50% en los últimos meses, por lo que se cree, afectara a las empresas que lo usen como materia prima.",
   "El Grupo ASIAN COFFEE , aliado de Nutresa en los países asiáticos, se declara en bancarrota, por lo cual, se desconoce el futuro de sus negocios.",
   "3.	Tiendas Tostao, presenta pretenciosa demanda multimillonaria contra Grupo Nutresa y su subsidiaria Juan Valdez, por presunta competencia desleal.",
 
]





 export default function Escenario5({setPortaec5,setPortaBan5, setPortaCem5,setPortaNut5, setEcova, setBanva,setCemva,setNutva, cantiEco,cantiBan,cantiCem,cantiNut,  setEcova2,setBanva2,setCemva2,setNutva2, cantiEco2, cantiBan2,cantiCem2,cantiNut2, setEcova3,setBanva3,setCemva3,setNutva3, cantiEco3, cantiBan3,cantiCem3,cantiNut3,setEcova4,setBanva4,setCemva4,setNutva4, cantiEco4, cantiBan4,cantiCem4,cantiNut4, setEcova5,setBanva5,setCemva5,setNutva5, cantiEco5, cantiBan5,cantiCem5,cantiNut5    } ) { // aqui estoy recibiendo las props enviadas desde el parent App
  


  const [number, setNumber] = useState({one: "", two: "", three: "", four: "", five: "", six: "", seven: "", eigth: "", nine: "2000", ten: "30000", eleven: "4000", twelve: "40000", thirteen: "100000000", catorce: " ", quince: " ", dieciseis: " ", diecisiete: "" , dieciocho:"", diecinueve: "", veinte:"", veinteuno: "", veintedos: " " }) // el hook es suma ... y lo que hay dentro de usestate es el objeto que contiene ese hook
 

  // Noti ciclo economico
  const [Ecoprice , setEcop] = useState() 
  const [Banprice , setBanp] = useState() 
  const [Cemprice , setCemp] = useState() 
  const [Nutreprice , setNutp] = useState() 

  //Noti grupal
  
  const [Ecopriceg , setEcog] = useState() 
  const [Banpriceg , setBang] = useState() 
  const [Cempriceg , setCemg] = useState() 
  const [Nutrepriceg , setNutg] = useState() 

  // noti de cada empresa

  const [Ecopricei , setEcoi] = useState() 
  const [Banpricei , setBani] = useState() 
  const [Cempricei , setCemi] = useState() 
  const [Nutrepricei , setNuti] = useState() 

  

  useEffect(()=>{

    // cuadarar cantidades a comprar y vender más el dinero en el disponible 

    const { one, two, three, four, five, six, seven, eigth, nine, ten, eleven, twelve, thirteen, catorce , quince, dieciseis, diecisiete , dieciocho, diecinueve, veinte, veinteuno, veintedos} = number
   


    // aqui si el ciclo economico del escenario afecta de una los precios... y no como en las noticias donde se afectan por las noticias del escenario anterior
    switch (noticias.general) { // casos para poder saber el escenario economico y asi darle valor a las acciones
       case "Crecmiento temprano: Precios bajos, inflación creciendo moderadamente, tasas de interés altas, pero con algunos meses empezando a bajar" :
         setEcop( Number(nine) * 1.07 );
         setBanp( Number(ten) * 1.07 );
         setCemp( Number(eleven) * 1.07 );
         setNutp( Number(twelve) * 1.07 );
       break;
       case "Expansión: Precios han crecido algo, inflación creciendo con consistencia, reducción de tasas de interés finalizada." :
         setEcop( Number(nine) * 1.1 );
         setBanp( Number(ten) * 1.1 );
         setCemp( Number(eleven) * 1.1 );
         setNutp( Number(twelve) * 1.1 );
       break;
       case "Auge: Precios han venido crecimiento prolongadamente, inflación alta, inicio de alza de tasas de interés." :
         setEcop( Number(nine) * 1.15 );
         setBanp( Number(ten) * 1.15 );
         setCemp( Number(eleven) * 1.15 );
         setNutp( Number(twelve) * 1.15 );
       break;
       case "Contracción: Corrección moderada en los precios, inflación alta empezando a estabilizar su crecimiento, alza de tasas de interés próxima a terminar." :
         setEcop( Number(nine) * 0.9 );
         setBanp( Number(ten) * 0.9 );
         setCemp( Number(eleven) * 0.9 );
         setNutp( Number(twelve) * 0.9 );
       break;
       case "Recesión: Precios enfrentan amplias caídas, inflación camino hacia su piso, próximo inicio de reducción de tasas." :
         setEcop( Number(nine) * 0.85 );
         setBanp( Number(ten) * 0.85 );
         setCemp( Number(eleven) * 0.85 );
         setNutp( Number(twelve) * 0.85 );
       break;
    }// los set para sacar el valor del hook deben ir dentro de los condiconales if o switch

   
  // cuadrar las afectaciones de las noticias grupales en los precios de las acciones

    if ( grutt <= 8) {
      setEcog( Number(nine) * 1.05  );
      setBang( Number(ten) * 1.05  );
      setCemg( Number(eleven) * 1.05  );
      setNutg(Number(twelve) * 1.05);
    } else {
      setEcog( Number(nine) * 0.95  );
      setBang( Number(ten) * 0.95  );
      setCemg( Number(eleven) * 0.95  );
      setNutg(Number(twelve) * 0.95);
    } 
   
   // cuadrar las afectaciones para las noticias de cada empresa
   
   if (ecott <= 2 ) {
      setEcoi( Number(nine) * 1.1 )
   } else {
      setEcoi( Number(nine) * 0.9 ) }
   
   if ( bancott <= 2 ) {
      setBani( Number(ten) * 1.1 )
   } else {
      setBani( Number(ten) * 0.9 )}

   if ( cematt <= 2 ) {
         setCemi( Number(eleven) * 1.1 )
      } else {
         setCemi( Number(eleven) * 0.9 )}
   
   if ( nutett <= 2 ) {
            setNuti( Number(twelve) * 1.1 )
    } else {
            setNuti( Number(twelve) * 0.9 )}
   

   },[number])//hago uso del useEffect para actualizar el hook suma, cantieco, valueco y demas,  cada vez que el hook number cambie, destructuro el hook number
     // no poner hooks en las operaciones del useEffect... no actualilza despues bien los valores




   // constantes para calcular cambios en precios, para saber el index dentro de la array original 

    const grutt =  grupall.indexOf(grupalNews[0]); // aqui estoy encontrando el index de la noticia grupal en la array original para poder dar un valor y alterar el precio de la accion de eco
    // estas constantes van con el index [0] por que el precio depende de la noticia del escenario anterior
   
    const ecott =  ecoo.indexOf(ecopetrol[0]);   
    const bancott =  bcoll.indexOf(bancolombia[0]);
    const cematt =  cargoss.indexOf(cemargos[0]);
    const nutett =  nutresaa.indexOf(gNutresa[0]);

 
  // sumatoria de hooks para sacar valores totales de todas las afectaciones de precios
  
 const precioEco = ((Ecoprice) + (Ecopriceg) + (Ecopricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 const precioBan = ((Banprice ) + (Banpriceg) + (Banpricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 const precioCem = ((Cemprice) + (Cempriceg) + (Cempricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 const precioNut = ((Nutreprice) + (Nutrepriceg) + (Nutrepricei)) / 3  ; // mirar si puedo mandar asi al otro componente
 

  //actualizacion de los valores del portafolio al cambiar de precio las acciones por nuevo escenario

  //actualizacion de los valores del portafolio al cambiar de precio las acciones por nuevo escenario

  setEcova(precioEco * cantiEco ) // aqui estyo actualizando setEcova..que es el nuevo valor del portafolio de Eco (precio por cantidad)
  setEcova2(precioEco * cantiEco2)
  setEcova3(precioEco * cantiEco3)
  setEcova4(precioEco * cantiEco4)
  setEcova5(precioEco * cantiEco5)
  setPortaec5(precioEco) // aqui estoy dandole valor a este hook para que tome el valor para el dinero disponible
  

  setBanva( precioBan * cantiBan)
  setBanva2( precioBan * cantiBan2)
  setBanva3( precioBan * cantiBan3)
  setBanva4( precioBan * cantiBan4)
  setBanva5( precioBan * cantiBan5)
  setPortaBan5( precioBan)


  setCemva( precioCem * cantiCem)
  setCemva2( precioCem * cantiCem2)
  setCemva3( precioCem * cantiCem3)
  setCemva4( precioCem * cantiCem4)
  setCemva5( precioCem * cantiCem5)
  setPortaCem5( precioCem)


  setNutva( precioNut * cantiNut)
  setNutva2( precioNut * cantiNut2)
  setNutva3( precioNut * cantiNut3)
  setNutva4( precioNut * cantiNut4)
  setNutva5( precioNut * cantiNut5)
  setPortaNut5( precioNut)




  const previo = data[3];
  const noticias = data[4] 

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
              <div className='esce2precios'>
               <div >
                  <p>Ecopetrol : </p>
                  <input type="number"   value={precioEco.toFixed(0)}  name="nine"  min="1" step="1"   readOnly></input>
               </div>
               <div>
                  <p>Bancolombia : </p>
                  <input type="number"   value={precioBan.toFixed(0)} name="ten"  min="1" step="1"  readOnly></input>
               </div>
               <div>
                  <p>Cementos Argos : </p>
                  <input  type="number"  name="eleven" value={precioCem.toFixed(0)}  min="1" step="1"  readOnly></input>
               </div>
               <div>
                     <p>Grupo Nutresa : </p>
                     <input type="number"   name="twelve" value={precioNut.toFixed(0)} min="1" step="1"  readOnly></input>
               </div>
               </div>
        </section>
    </div>
  );
}


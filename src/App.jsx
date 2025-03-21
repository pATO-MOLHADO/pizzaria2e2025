import { useState } from "react"

function app(){
const [nome, Setnome] = useState('macaco')
const Formulario =()=> {
  return (
    <div>
       <input
      class name = "nome"
      onChange={(e)=>{setNome(e.target.value)}}
      type="text" />

      <button
      class name = "botao"
      onClick={()=>{alert(nome)}}
      >
        clique aqui batoré
      </button>
      </div>
  )
}

return(
    <div>
      <h3>Pizzaria 2e</h3>

     <Formulario />
     <Formulario />
    </div>
  )
 }
 export default app
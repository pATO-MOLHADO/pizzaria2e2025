import { useState } from "react"

function app(){
const [nome, Setnome] = useState('macaco')
  return(
    <div>
      <h3>Pizzaria 2e</h3>

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
 export default app
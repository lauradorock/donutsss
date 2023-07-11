import Home from "./Page/Home/Home.js";
import StyledGlobal, { CorFundo } from "../src/styledGlobal";
import { useState } from "react";
import Detalhes from "./Page/Detalhes/Detalhes.js";

function App() {
  const [trocardePagina, setTrocardePagina] = useState("0")

  const changePage = (change) =>{
    setTrocardePagina(change)

  }

  return (
   <>
    <CorFundo>
    <StyledGlobal/> 
    
    {trocardePagina === "0"?(
      <Home pagina={()=> changePage("0")}/>
    ) :(
      <Detalhes pagina={()=> changePage("1")}/>
    )}



    </CorFundo>
   </>
  );
}

export default App;

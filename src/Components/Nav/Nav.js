import filtro from "../../assets/filtro.png"
import { ContainerNav } from "./styled.jsx" 
import Botao from "../Botao/Botao"

function Nav(){
    return(
        <ContainerNav>
            <Botao titulo={"Donuts"}/>
            <Botao titulo={"Ice Cream"}/>
            <Botao titulo={"Bomboloni"}/>
            <img src={filtro} alt=""/>

        </ContainerNav>

    )
}

export default Nav
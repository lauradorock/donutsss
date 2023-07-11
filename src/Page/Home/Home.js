import Card from "../../Components/Card/Card.js"
import Header from "../../Components/Header/Header"
import Nav from "../../Components/Nav/Nav"
import TituloHeader from "../../Components/TituloHeader/TituloHeader.js"
import { SectionCard } from "./styled.jsx"
import menu from "../../assets/menu.png"
import lupa from "../../assets/search.png"

function Home(props){
    return(
        <>
        <Header
        pagina={props.pagina}
        imgPrimeira={menu}
        imgSegunda={lupa}
        />
        <TituloHeader />

        <Nav/>
        <SectionCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SectionCard>
        
        </>
    )
}

export default Home
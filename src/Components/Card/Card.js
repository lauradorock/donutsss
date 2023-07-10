import { CardContainer, TituloCard, ImagemCard, TextCard, DivCard } from "./styled.jsx"

function Card(){
    return(
        <CardContainer>
            <ImagemCard src=""/>
            <TituloCard>
                Unicorn Sprinkles...
            </TituloCard>
            <TextCard>
                Strawberry Creamy...
            </TextCard>
            <DivCard>
                <p>7.8000</p>
                <p>Mais</p>
            </DivCard>
        </CardContainer>
    )
}

export default Card
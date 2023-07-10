import Header from "../../Components/Header/Header"
import seta from "../../assets/seta.png"
import ponto from "../../assets/ponto.png"
import group from "../../assets/group.png"
import donutGrande from "../../assets/Frame 9.png"
import { BotaoCard, ContainerDetalhes, ContainerDiv, ImagemGrande, MaisProdutos, TextMore, TextDonuts, TextNumber, TituloDonuts } from "./styled"

function Detalhes(){
    return(
        <>
        <Header 
        pagina={props.pagina}
        imgPrimeira={seta}
        imgSegunda={ponto}
        />

        <ContainerDetalhes>
            <ImagemGrande src={donutGrande}/>
            <ContainerDiv>

                <TituloDonuts>
                    Unicorn Sprinkles
                </TituloDonuts>

                <TextDonuts>
                    pipipipopopo
                </TextDonuts>

                <MaisProdutos>
                    <img src={group}/>
                    <TextNumber>700</TextNumber>
                </MaisProdutos>

                <MaisProdutos>
                    <TextMore>Read More?</TextMore>
                    <BotaoMore>Add TextMore</BotaoMore>
                </MaisProdutos>

                <BotaoCard> Add to Cart</BotaoCard>
            </ContainerDiv>
        </ContainerDetalhes>
        </>
    )
}

export default Detalhes
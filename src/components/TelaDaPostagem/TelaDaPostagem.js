import React from "react";
import { TitleHeader } from "../Header/styled";
import { ContainerPostagem, Image, Description } from "./styles";


const TelaDaPostagem = ({dados}) => {



  return (
    <ContainerPostagem>
      <TitleHeader>{dados.titulo ? dados.titulo : "Um Titulo"}
     </TitleHeader>
     
      <Image  src={dados.imagem ? dados.imagem : "https://66.media.tumblr.com/3e18142303f7401bae7a71d0ac52e5a3/tumblr_p8ipojaS6Y1vsss7oo1_250.png"} />
    
      
     
      <Description>{dados.descricao ? dados.descricao : "Uma descrição"}</Description>
    </ContainerPostagem>
  );
};

export default TelaDaPostagem;

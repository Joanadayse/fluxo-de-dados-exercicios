import {TitleHeader, Imagem , Paragrafo } from './styled'

export const Header = ({usuario}) => {

    return(
        <>
        <TitleHeader>Insta4</TitleHeader>
        <Paragrafo>{usuario.nome}</Paragrafo>
        <Imagem src={usuario.fotoPerfil}></Imagem>
      </>
    )
}
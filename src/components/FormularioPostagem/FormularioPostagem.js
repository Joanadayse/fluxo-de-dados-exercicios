
import { FormContainer, Form, Input, StyledLabel, SendButton } from "./styled";

export const FormularioCadastro = ({titulo,
  setTitulo,
  imagem,
  setImagem,
  descricao,
  setDescricao,
  setDados}) => {

  const trocaTitulo = (event) => {
    setTitulo(event.target.value);
  };
  const trocaImagem = (event) => {
    setImagem(event.target.value);
  };

  const trocaDescricao = (event) => {
    setDescricao(event.target.value);
  };

  // para novos objetos
  const botao =()=>{
    setDados({imagem:imagem , descricao: descricao , titulo:titulo})

  }

  
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={titulo} onChange={trocaTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="foto"
       
        >
          Imagem:
          <Input id="foto"  value={imagem} onChange={trocaImagem}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao"
       
        >
          Descrição:
          <Input id="descricao"  value={descricao} onChange={trocaDescricao} />
        </StyledLabel>

        <SendButton onClick={() => botao()}>Postar</SendButton>

      </Form>
    </FormContainer>
  );
};

export default FormularioCadastro;

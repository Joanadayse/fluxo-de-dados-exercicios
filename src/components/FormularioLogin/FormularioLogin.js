import React from "react";
import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
} from "../FormularioPostagem/styled";

const FormularioLogin = ({setPageFlow,nome,setNome,fotoPerfil,setFotoPerfil,setUsuario}) => {
 
 
  const login = () => {
    
    setUsuario({nome:nome , fotoPerfil:fotoPerfil})
    setPageFlow(2);

    
  };

  const mudaNome = (event) => {
    setNome(event.target.value)
    
  };

  const mudaPerfil = (event) => {
    setFotoPerfil(event.target.value)
    
  };
 
 
  return (
    <FormContainer>
      <Form>
        <StyledLabel>
          Nome:
          <Input type={"text"} value={nome} onChange={mudaNome}/>
        </StyledLabel>
        <StyledLabel>
          Foto de Perfil
          <Input type={"text"} value={fotoPerfil} onChange={mudaPerfil} />
        </StyledLabel>
        <SendButton onClick={() => login()} >Fazer Login</SendButton>
      </Form>
    </FormContainer>
  );
};

export default FormularioLogin;

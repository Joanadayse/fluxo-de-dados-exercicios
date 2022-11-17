import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";


const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {

  
  //  formulario Login
  const [nome,setNome]=useState("")
  const[fotoPerfil,setFotoPerfil]=useState("")
  const [usuario, setUsuario] = useState({});
  
  // formulario Post
  const [titulo, setTitulo]=useState("")
  const [imagem,setImagem]= useState("")
  const [descricao, setDescricao]=useState("")
  const [dados,setDados]= useState({})

  const [pageFlow, setPageFlow] = useState(1);
 
  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
           usuario={usuario}
            />
          {
          pageFlow=== 1 ?
           (
            <FormularioLogin
            setPageFlow={setPageFlow}
            nome={nome}
            setNome={setNome}
            fotoPerfil={fotoPerfil}
            setFotoPerfil={setFotoPerfil}
            setUsuario={setUsuario}
             />
          ) : (
            <FormularioPostagem  
            setDados={setDados}
            descricao={descricao}
            setDescricao={setDescricao}
            imagem={imagem}
            setImagem={setImagem}
            titulo={titulo}
            setTitulo={setTitulo}
          
            />
          )}
        </aside>
        <TelaDaPostagem dados={dados}
        />
      </Container>
    </>
  )
}

export default App;

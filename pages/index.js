import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '100px' }} />
      <hr />
      
      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`} target="_blank" >
          @{propriedades.githubUser}
         
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

function ProfileRelationsBox(propriedades) {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {propriedades.title} ({propriedades.items.length})
      </h2>
      <ul>
        {/* {seguidores.map((itemAtual) => {
          return (
            <li key={itemAtual}>
              <a href={`https://github.com/${itemAtual}.png`}>
                <img src={itemAtual.image} />
                <span>{itemAtual.title}</span>
              </a>
            </li>
          )
        })} */}
      </ul>
    </ProfileRelationsBoxWrapper>
  )
}

export default function Home() {

  
  const usuarioGithub = 'rafaelschwantes';
  console.log('teste1:', usuarioGithub);
  console.log('teste2:', `https://api.github.com/users/${usuarioGithub}`);
  




  const [comunidades, setComunidades] = React.useState([]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    
  ]
  const [seguidores, setSeguidores] = React.useState([]);
  // 0 - Pegar o array de dados do github 
  React.useEffect(function() {
    // GET
    fetch('https://api.github.com/users/rafaelschwantes/followers')
    .then(function (respostaDoServidor) {
      return respostaDoServidor.json();
    })
    .then(function(respostaCompleta) {
      setSeguidores(respostaCompleta);
    })



    // API GraphQL
    fetch('https://graphql.datocms.com/', {
      method: 'POST',
      headers: {
        'Authorization': '2fd75aada8cd9c023063811bb6ef6c',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({ "query": `query {
        allCommunities {
          id 
          title
          imageUrl
          creatorSlug
        }
      }` })
    })
    .then((response) => response.json()) // Pega o retorno do response.json() e já retorna
    .then((respostaCompleta) => {
      const comunidadesVindasDoDato = respostaCompleta.data.allCommunities;
      console.log(comunidadesVindasDoDato)
      setComunidades(comunidadesVindasDoDato)
    })
    // .then(function (response) {
    //   return response.json()
    // })

  }, [])

  const [myinfo, setMyinfo] = React.useState([]);
  // 0 - Pegar o array de dados do github 
  React.useEffect(function() {
    // GET
    fetch('https://api.github.com/users/rafaelschwantes')
    .then(function (respostaDoServidorMyinfo) {
      return respostaDoServidorMyinfo.json();
    })
    .then(function(respostaCompletaMyinfo) {
      setMyinfo(respostaCompletaMyinfo);
    })

    // .then(function (response) {
    //   return response.json()
    // })

  }, [])
  console.log('Informações antes do return', myinfo);

  // 1 - Criar um box que vai ter um map, baseado nos items do array
  // que pegamos do GitHub
  
  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioGithub} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title subPageTitle">
            {myinfo.name} 
            </h1>
            <p>{myinfo.bio}</p>
            <hr />
            <div className="inConstruction">
              IT professional for 20 years, with a degree in Systems Analysis and Development. My professional life includes several branches of computer science, beginning with the degree, parallel to the area of technical support, and consolidating in the area of development, area in which I found my true professional passion. I am currently focused on web development, working with the PHP language, JavaScript, Python and feeling comfortable to work with any other language, depending on the need and structure of the project.
            </div>
            <hr />
            <p className="inConstruction">Blog: <a href="https://www.programadorxpto.com" target="_blank" >programadorxpto.com</a></p>
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h1 className="title subPageTitle">
            Projects
            </h1>
            <hr />
            <p>Site Digita Rio Informática</p>
            <div className="regular">
              Link: <a href='https://www.digitarioinformatica.com/' target="_blank">digitarioinformatica</a>
            </div>
            <div className="regular">
            Uma agência Web para criação de Sites e soluções digitais, com 23 anos de experiência na entrega de soluções tecnológica, ajudando outras empresas e profissionais liberais a aumentarem seus faturamentos e visibilidade na internet.
            </div>
            <hr />
            <p>Site Programador XPTO</p>
            <div className="regular">
              Link: <a href='https://www.programadorxpto.com/' target="_blank">programadorxpto</a>
            </div>
            <div className="regular">
            O objetivo deste projeto é entregar conteúdo sobre programação de forma didática, clara e objetiva.
            </div>
            <hr />
          </Box>
          {/*<Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  title: dadosDoForm.get('title'),
                  image_url: dadosDoForm.get('image'),
                  creator_slug: usuarioGithub,
                  //imageUrl: dadosDoForm.get('image'),
                  //creatorSlug: usuarioGithub,
                }
                
                fetch('/api/comunidades', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(comunidade)
                })
                .then(async (response) => {
                  const dados = await response.json();
                  console.log(dados.registroCriado);
                  const comunidade = dados.registroCriado;
                  const comunidadesAtualizadas = [...comunidades, comunidade];
                  setComunidades(comunidadesAtualizadas)
                })
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>*/}
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          {/*<ProfileRelationsBox title="Seguidores" items={seguidores} />*/}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Last articles ({comunidades.length})
            </h2>
            <span className="inConstruction">... under construction</span>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Last projects ({comunidades.length})
            </h2>
            <span className="inConstruction">... under construction</span>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Programming language ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/communities/${itemAtual.id}`}>
                      <img src={itemAtual.imageUrl} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          {/*<ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
            </ProfileRelationsBoxWrapper>*/}
        </div>
      </MainGrid>
    </>
  )
}
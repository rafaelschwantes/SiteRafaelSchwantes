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
        allCommunities (
          orderBy: [rank_ASC]
        ){
          id
          title
          imageUrl
          creatorSlug
          rank
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
            <div className="regular">

            {/* <p>Profissional de TI com 28 anos de experiência, formado em Análise e Desenvolvimento de Sistemas e Licenciado em Matemática. Atuei como gestor de equipes técnicas, desenvolvedor web, analista de suporte, analista de sistemas, coordenador de cursos e professor de informática. Tenho trajetória consolidada em ambientes corporativos e instituições públicas, com destaque para liderança técnica, implantação de sistemas, suporte em larga escala, docência e gestão estratégica.</p> */}

            <p>IT professional with 28 years of experience, holding a degree in Systems Analysis and Development and a teaching degree in Mathematics. I have worked as a technical team manager, web developer, support analyst, systems analyst, course coordinator, and IT instructor. I have a solid track record in both corporate environments and public institutions, with a focus on technical leadership, system implementation, large-scale support, education, and strategic management.</p><br/>

            {/* <p>Atualmente, atuo como líder técnico de times de desenvolvimento e suporte web, com foco em eficiência operacional, melhoria contínua de processos e entrega de valor ao cliente. Tenho forte experiência com PHP e JavaScript, mas minha abordagem generalista me permite adaptar a novas tecnologias conforme as necessidades dos projetos. Busco expandir minha atuação em posições de liderança técnica, aplicando minha vivência em estruturação de equipes, definição de padrões, consolidação de cultura DevOps e integração entre áreas técnicas e de negócio.</p> */}

            <p>Currently, I serve as a technical lead for web development and support teams, focusing on operational efficiency, continuous process improvement, and value delivery to clients. I have strong experience with PHP and JavaScript, but my generalist approach allows me to easily adapt to new technologies according to project needs. I aim to further expand my role in technical leadership, applying my background in team structuring, standardization, DevOps culture building, and integration between technical and business areas.</p>

            </div>
            <hr />
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h1 className="title subPageTitle">
            My personal project
            </h1>
            <hr />
            <p>Programador XPTO</p>
            <div className="icon">
            <a href='https://www.programadorxpto.com' target="_blank">
              <img src="/icon/domain.png"/> | www.programadorxpto.com
              </a>
            </div>
            <div className="description">
            The goal of this project is to deliver content about programming in a didactic, clear and objective way.
            </div>
            <div className="icon">
              <a href='https://www.instagram.com/programadorxpto' target="_blank">
              <img src="/icon/2048px-Instagram_icon.png"/>
              </a><a href='https://www.facebook.com/programadorxpto' target="_blank">
              <img src="/icon/Facebook_icon_2013.svg.png"/></a><a href='https://www.twitter.com/rafaelschwantes' target="_blank">
              <img src="/icon/twitter-squared.png"/></a>
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
          {/* <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Last articles ({comunidades.length})
            </h2>
            <ul>

            </ul>
            <span className="inConstruction">... under construction</span>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Last projects ({comunidades.length})
            </h2>
            <span className="inConstruction">... under construction</span>
          </ProfileRelationsBoxWrapper> */}
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
            Skills {/*({comunidades.length})*/}
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    {/*<a href={`/communities/${itemAtual.id}`}>*/}
                    <a href="">
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

import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/50/50?p',
        fotoPost: 'https://picsum.photos/200/150?82'
      },
      
      {
        nomeUsuario: 'adriano',
        fotoUsuario: 'https://scontent.fpoa6-1.fna.fbcdn.net/v/t39.30808-6/244023319_4354625424621128_6175371634302462100_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeHMvKfercPR0t2VbclSCSaGcFC4oVFfFchwULihUV8VyPtNFKG0uLUpx6NEWm5VPCvI-i_-EznTpH6cjkXugpy9&_nc_ohc=DTKLBh3X2fQAX8SK2Ew&_nc_ht=scontent.fpoa6-1.fna&oh=a40bd30e8bbeb4242d25e8cc1eef1ba1&oe=6199860A',
        fotoPost: 'https://picsum.photos/200/150?30'
      },

      {
        nomeUsuario: 'keianne',
        fotoUsuario: 'https://scontent.fpoa6-1.fna.fbcdn.net/v/t39.30808-6/248408265_4296466223795017_954500115779743590_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFib21bt2Zf54TTgWS2hgREJxfJ3isAslknF8neKwCyWSvDOMV1YhaWYSgfid7XkUG1c7sxFF4mL1cK390FsBxd&_nc_ohc=TlNRbivlFuYAX9PX9rZ&_nc_ht=scontent.fpoa6-1.fna&oh=53feba8b9d9658df97fc1b7ecdbe607e&oe=619C2F37',
        fotoPost: 'https://picsum.photos/200/150?55'
      }
    ]
  }


  render() {
    const novoPost = this.state.post.map((post)=>{
      return (
       <Post 
        nomeUsuario = {post.nomeUsuario}
        fotoUsuario = {post.fotoUsuario}
        fotoPost = {post.fotoPost}
       />
      )
    })

    return (
      <MainContainer>
        {novoPost}
      </MainContainer>
    );
  }
}

export default App;

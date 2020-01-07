import React, { Component } from 'react';
import Main from '../templates/main';

class UserCrud extends Component {
  render() {
    return (
     <Main  icon='user' title='Usuários' subtitle='Cadastro de usuários: Incluir, listar, editar e deletar' >
       Cadastro de úsuario
     </Main>
    );
  }
};

export default UserCrud;

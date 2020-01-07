import React, { Component } from 'react';
import Main from '../templates/main';
import axios from 'axios';

const baseUrl = 'http://localhost:3001/users'
const initialState = {
  user: { name: '', email: ''},
  list: []
}

class UserCrud extends Component {

  state = {...initialState}

  componentWillMount(){
    axios(baseUrl).then(resp => {
      this.setState({ list: resp.data })
    })
  }

  clear() {
    this.setState({ user: initialState.user })
  }

  save() {
    const user = this.state.user
    const method = user.id ? 'put' : 'post'
    const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
    
    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ user: initialState.user, list })
      })
  }

  getUpdatedList(user, add = true) {
    const list = this.state.list.filter(u => u.id !== user.id)
    if(add) list.unshift(user)
    return list
  }

  updateField(e) {
     const user = { ...this.state.user }
     user[e.target.name] = e.target.value
     this.setState({ user })
  }

  load(user) {
    this.setState({ user })
  }

  remove(user) {
    axios.delete(`${baseUrl}/${user.id}`).then(resp => {
      const list = this.getUpdatedList(user, false)
      this.setState({ list })
    })
  }

  renderTable() {
    return (
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Açōes</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    )
  }

  renderRows() {
    return this.state.list.map(user => {
      return (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>
            <button className="btn btn-warning"
            onClick={() => this.load(user)}>
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn btn-danger ml-2"
            onClick={() => this.remove(user)}>
              <i className="fa fa-trash"></i>
            </button>
          </td>
        </tr>
      )
    })
  }

  renderForm() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> NOME </label>
              <input type="text" className="form-control" name="name" 
              value={this.state.user.name} 
              onChange={e => this.updateField(e)}
              placeholder="Digite o nome..." />
            </div>
          </div>
        
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label> EMAIL </label>
              <input type="text" className="form-control" name="email" 
              value={this.state.user.email} 
              onChange={e => this.updateField(e)}
              placeholder="Digite o email..." />
            </div>
          </div>
      </div>
        <hr/>
        <div className="row">
          <div className="col-12 d-flex justify-content-end">
            <button className="btn btn-primary"
            onClick={e => this.save(e)}>
               SALVAR 
            </button>
            <button className="btn btn-secondary ml-2"
            onClick={e => this.clear(e)}> 
              CANCELAR 
            </button>
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
     <Main  icon='user' title='Usuários' subtitle='Cadastro de usuários: Incluir, listar, editar e deletar' >
       {this.renderForm()}
       {this.renderTable()}
     </Main>
    );
  }
};

export default UserCrud;

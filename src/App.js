import React from 'react'
import './App.css';
import Show from './components/displaybooks'
import Form from './components/form'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      books: [
        {title:"Money Galore", author:"Amu Djoleto", description:"Novel"},
        {title:"Things Fall apart", author:"Chnie Achebie", description:"Novel"},
      ]
    };
  }
  addBook = (newBook) =>{
    this.setState({books: [...this.state.books, newBook]})
  }
  render(){
    return(<React.Fragment>
      <div className="container">
      <div className="row">
      <div className="col-sm-6 col-lg-4">
      <img src="pexels-cottonbro-4861373.jpg" alt="..." class="img-fluid"/>
      </div>
      <div className="col-sm-6 col-lg-4">
      <Show books= {this.state.books} />
      <Form addBook= {this.addBook}/>
      </div>
      </div>
      </div>
    </React.Fragment>)
  }
}

export default App;

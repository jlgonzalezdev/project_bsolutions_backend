import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { TodoList } from './componets/TodoList/TodoList'
import TaskService from "./services/taskService";
class App extends Component {

  constructor(props) {
    super(props);
    this.lstInput = {};
    this.state = {
      lstStr: '',
      lists: []
    };
    
  }

  componentDidMount() {
    TaskService.getAll().then((response) => {
      var items = response.data.tasks
      if(!items)
        items = [];
      this.setState({
        lists: [{
          key: 'lst01', name: 'Todo List',
          items: items
        }]
      });
    });
  }
  

  render() {
    var listsJSX = this.state.lists.map((lst) => {
      return <div className="col-3"><TodoList key={lst.key} lst={lst}></TodoList></div>;
    });
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BSolutions Todo List</h1>
        </header>
        <div className="row">
         <h3  style={{display:listsJSX.length>0?'none':'block',textAlign:'center',width:'100%'}}>Loading List...</h3>
          {listsJSX}
        </div>
      </div>
    );
  }
}

export default App;

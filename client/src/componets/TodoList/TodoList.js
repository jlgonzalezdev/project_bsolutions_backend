import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './TodoList.css';
import TodoItems from '../TodoItems/TodoItems'
import TaskService from "../../services/taskService";

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = { taskStr: '', items: props.lst.items, name: props.lst.name };
        this.addItem = this.addItem.bind(this);
        this.setTaskStr = this.setTaskStr.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
    }

    addItem(e) {
        if (this.state.taskStr !== '' && this.state.taskStr !== undefined) {
            var item = {
                taskStr: this.state.taskStr,
                itemText: this.state.taskStr,
                key: Date.now() + this.state.taskStr,
                isDone: false
            };
            TaskService.insert(item).then((response) => {
                item = response.data.task;
                this.setState((prev => {
                    return { items: prev.items.concat(item), taskStr: '' };
                }), () => {
                    console.log(this.state.items)

                });
            });
        }
        this.taskInput.focus();
        e.preventDefault();
    }

    deleteItem(item) {
        var filtered = this.state.items.filter((aux) => {
            return aux._id !== item._id;
        });
        this.setState({ items: filtered }, () => {
            TaskService.delete(item);
        });
        TaskService.delete(item).then(()=>{});


        this.taskInput.focus();
        //actualizamos a backend
    }

    updateItem(item, value, isDone) {
        //actualizamos a backend
        item.taskStr = value;
        item.isDone = isDone;
        TaskService.update(item);
    }

    setTaskStr(evt) {
        this.setState({ taskStr: evt.target.value });
    }

    render() {
        var cardS = { padding: 10, "width": "100%" };
        var formS = { padding: 10 };
        return (
            <div className="card list" style={cardS}>
                <div className="card-body" style={{ padding: 1 }}>
                    <h5 className="card-title">{this.state.name}</h5>
                    <form style={formS} onSubmit={this.addItem} onChange={this.setTaskStr}>
                        <input type="text" ref={(ref) => { this.taskInput = ref }} value={this.state.taskStr} placeholder="Enter Task.."></input>
                        <button className={this.state.taskStr !== '' && this.state.taskStr !== undefined ? 'btnCustom bgBlue' : 'btnCustom bgGray'} type="submit">Ok</button>
                    </form>
                    <TodoItems items={this.state.items} deleteItem={this.deleteItem} updateItem={this.updateItem}></TodoItems>
                </div>
            </div>
        );
    }

    componentDidMount() {
        this.taskInput.focus();
    }

}


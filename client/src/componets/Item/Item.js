import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './Item.css';
export default class Item extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isEditing: false, itemText: props.item.taskStr, itemTextOriginal: props.item.taskStr, isDone: props.item.isDone };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.cancelEdit = this.cancelEdit.bind(this);
        this.saveEdit = this.saveEdit.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
    }

    toggleEdit(e) {
        this.setState({ isEditing: !this.state.isEditing });
    }

    toggleDone(e) {

        this.setState({ isDone: !this.state.isDone }, () => {
            this.props.updateItem(this.props.item, this.state.itemText, this.state.isDone);
        });
    }

    cancelEdit(e) {
        this.toggleEdit();
        this.setState({ itemText: this.state.itemTextOriginal });
    }

    saveEdit(e) {
        this.setState({ itemTextOriginal: this.state.itemText }, () => {
            this.props.updateItem(this.props.item, this.state.itemText, this.state.isDone);
        });
        this.toggleEdit();
    }

    updateItem(e) {
        this.setState({ itemText: e.target.value })
    }

    render() {
        return (<div className={this.state.isDone ? 'Item itemDone' : 'Item'}>
            <div className="row">
                <div className="col-8">
                    <div className={this.state.isEditing ? 'hidden' : ''} onClick={this.toggleEdit}>
                        <span className="fas fa-edit" style={{ padding: 5,fontSize:'small' }} ></span>
                        {this.state.itemText}
                    </div>
                    <div className={this.state.isEditing ? '' : 'hidden'}>
                        <input type="text" style={{ width: '100%' }} value={this.state.itemText} onChange={this.updateItem}></input>
                        <div className="row" style={{ padding: 20 }}>
                            <button style={{ margin: 5, fontSize: 'small' }} onClick={this.saveEdit}>Ok</button>
                            <button style={{ margin: 5, fontSize: 'small' }} onClick={this.cancelEdit}>Cancelar</button>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <span className="fas fa-check" style={{ padding: 5 }} onClick={this.toggleDone}></span>
                    <span className="fas fa-times" style={{ padding: 5 }} onClick={() => { this.props.deleteItem(this.props.item) }}></span>
                </div>
            </div>
        </div>);
    }

}


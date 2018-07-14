import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './TodoItems.css';
import Item from '../Item/Item';
import FlipMove from "react-flip-move";
export default class TodoItems extends React.Component {

    render() {
        var itemsProp = this.props.items;
        var itemsJSX = itemsProp.map((item) => {
            return <Item key={item._id} item={item} deleteItem={this.props.deleteItem} updateItem={this.props.updateItem}></Item>
        });
        return (<div>
            <FlipMove duration={250} easing="ease-out">
                {itemsJSX}
            </FlipMove>
        </div>);
    }

}


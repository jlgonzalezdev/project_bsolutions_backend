import React from 'react';
import Item from './Item';
import renderer from 'react-test-renderer';
import Enzyme,{shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('Testing UI', () => {
    test('has to set class itemDone when task is done', () => { 
        const component = renderer.create(
            <Item item={{ taskStr:'Task 01', isDone:true }}></Item>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    test('has to remove class itemDone when task is uncompleted', () => { 
        const component = renderer.create(
            <Item item={{ taskStr:'Task 01', isDone:false }}></Item>,
        );
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });    

    test('toggle  Edit Mode', () => { 
        const component = shallow(<Item item={{ taskStr:'Task 01', isDone:false }}></Item>);        
        component.find('#itemText').simulate('click');
        expect(component.state('isEditing')).toBe(true);

        component.find('#cancelBtn').simulate('click');
        expect(component.state('isEditing')).toBe(false);

    });    

    

});
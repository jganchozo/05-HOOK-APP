import React from 'react';
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../ficxtures/demoTodos";
import '@testing-library/jest-dom';

describe('Pruebas en TodoList', () => { 

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();
    
    const wrapper = shallow(<TodoList
        todos={demoTodos}
        handleDelete={handleDelete}
        handleToggle={handleToggle} 
    />);

    test('should de mostarr el componente correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should de tener 2 <TodoListItem />', () => {

        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);

        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual( expect.any(Function));
    });

 });
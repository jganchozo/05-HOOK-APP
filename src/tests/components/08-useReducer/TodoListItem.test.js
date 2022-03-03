import React from 'react';
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../ficxtures/demoTodos";
import '@testing-library/jest-dom'

describe('Pruebas en TodoListItem', () => {

    const handleDelete = jest.fn();    
    const handleToggle = jest.fn();

    const wrapper = shallow(<TodoListItem 
                                todo={demoTodos[0]} 
                                handleDelete={handleDelete} 
                                handleToggle={handleToggle} 
                                index={0} 
                            />);
    
    test('should de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should de llamar la funcion handleDelete', () => {

        wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should de llamar la funcion handleToggle', () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

    test('should de mostrar el texto correctamente', () => {
        const text = wrapper.find('p').text();
        expect(text.trim()).toBe(`${0 + 1}. ${demoTodos[0].desc}`);
    });

    test('should de tener la clase complete si el done esta en true', () => { 
        
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow(<TodoListItem 
            todo={todo}
        />);

        expect(wrapper.find('p').hasClass('complete')).toBe(true);

    });

 });
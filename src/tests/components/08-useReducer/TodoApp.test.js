import { act } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import React from 'react';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../ficxtures/demoTodos';
import '@testing-library/jest-dom';

describe('Pruebas en <TodoApp />', () => { 
    
    const wrapper = shallow(<TodoApp />);

    Storage.prototype.setItem = jest.fn(() => {});

    
    test('should de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
    });

    test('should de agregar un todo', () => { 

        const wrapper = mount(<TodoApp />);
        act(() => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( ${demoTodos.length} )`);
        expect(localStorage.setItem).toHaveBeenCalledTimes(2);
        //expect(localStorage.setItem).toHaveBeenCalledWith({});

    });

    test('should de eliminar un todo', () => { 
       
        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);

        expect(wrapper.find('h1').text().trim()).toBe(`TodoApp ( ${0} )`);
    });

 });
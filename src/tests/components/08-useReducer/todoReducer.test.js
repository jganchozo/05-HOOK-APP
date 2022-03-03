import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../ficxtures/demoTodos";

describe('Pruebas en todoReducer', () => {

    test('should de retornar el estado por defecto', () => {

        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('should de agregar un TODO', () => {

        const newTodo = {
            id: 3,
            desc: 'Aprender Python',
            done: false,
        }

        const state = todoReducer(demoTodos, { type: 'add', payload: newTodo });
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('should de borrar un TODO', () => {

        const state = todoReducer(demoTodos, { type: 'delete', payload: 1 });
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);

    });

    test('should de hacer el toggle del un TODO', () => {

        const state = todoReducer(demoTodos, { type: 'toggle', payload: 1 });
        expect(state[0].done).toBe(true);
        expect(state[1]).toEqual(demoTodos[1]);

    });

});
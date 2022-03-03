import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm'

describe('Pruebas en el componente useForm', () => { 

    const initialForm = {
        name: 'Jose',
        email: 'jganchozo@outlook.com'
    }

    test('should regresar un formulario por defecto', () => {

        const { result } = renderHook( () => useForm(initialForm));
        const [data, inputChange, reset] = result.current;

        expect(data).toEqual(initialForm);
        expect(typeof inputChange).toBe('function');
        expect(typeof reset).toBe('function');
    });

    test('should cambiar el valor del formulario (cambiar name)', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [,inputChange,] = result.current;

        act(() => {
            inputChange({ target: { name: 'name', value: 'Heizel Hanae' } });
        });

        const [changedData] = result.current;
        expect(changedData).toEqual({ ...initialForm, name: 'Heizel Hanae' });

    });

    test('should reestablecer el formulario con reset', () => {
        const { result } = renderHook( () => useForm(initialForm));
        const [,inputChange,reset] = result.current;

        act(() => {
            inputChange({ target: { name: 'name', value: 'Heizel Hanae' } });
            reset();
        });

        const [changedData] = result.current;
        expect(changedData).toEqual(initialForm);
    });
 });
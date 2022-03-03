import { renderHook, act } from '@testing-library/react-hooks';
import { useCouter } from '../../hooks/useCouter'

describe('Pruebas en useCouter', () => { 

    test('should de retornar valores por defecto', () => { 

        const { result } = renderHook(() => useCouter());
        
        expect(result.current.counter).toBe(10);
        expect(typeof result.current.increment).toBe('function');
        expect(typeof result.current.decrement).toBe('function');
        expect(typeof result.current.reset).toBe('function');
     });


     test('should de tener el counter en 100', () => { 

        const { result } = renderHook(() => useCouter(100));
        
        expect(result.current.counter).toBe(100);
        
     });

     test('should de incrementar el counter en 1', () => { 

        const { result } = renderHook(() => useCouter(100));
        const { increment } = result.current;

        act( () => {
            increment();
            //increment();
        });

        const { counter } = result.current;
        expect(counter).toBe(101);

      });

      test('should decrementar el valor en 1', () => { 

        const { result } = renderHook(() => useCouter(100));
        const { decrement } = result.current;

        act( () => {
            decrement();
        });

        const { counter } = result.current;

        expect(counter).toBe(99);

       });

       test('should decrementar and reset el valor inicial 100', () => { 

        const { result } = renderHook(() => useCouter(100));
        const { decrement, reset } = result.current;

        act( () => {
            decrement();
            reset();
        });

        const { counter } = result.current;

        expect(counter).toBe(100);

       });


 });
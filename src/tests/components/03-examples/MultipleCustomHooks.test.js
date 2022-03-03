import React from 'react';
import { shallow } from "enzyme";
import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useFetch } from '../../../hooks/useFetch';
import { useCouter } from '../../../hooks/useCouter';
jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCouter');

describe('Pruebas en MultipleCustomHooks', () => { 

    useCouter.mockReturnValue({
        counter: 1,
        increment: () => {},
    });
    
    test('should de mostrarse correctamente', () => {

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        expect(wrapper).toMatchSnapshot();

    });

    test('should mostrar la informacion', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Jose Manuel',
                quote: 'Hello World',            }],
            loading: false,
            error: null,
        });

        const wrapper = shallow(<MultipleCustomHooks />);
        //console.log(wrapper.html());
        expect(wrapper.find('.alert').exists()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hello World');
        expect(wrapper.find('footer').text().trim()).toBe('Jose Manuel');

    });

 });
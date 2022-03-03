import React from 'react';
import { shallow } from "enzyme";
import { RealExampleRef } from '../../../components/04-useRef/RealExampleRef';

describe('Pruebas en RealExampleRef', () => { 

    const wrapper = shallow(<RealExampleRef />);

    test('should de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });

    // test('Debe mostrar el componente <MultipleCustomHooks/>', () => {
    //     wrapper.find('button').simulate('click');
    //     expect(wrapper).toMatchSnapshot();
    //     console.log(wrapper.html());
    //     expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);    
        
    // });

    test('should de mostar el componente <MultipleCustomHooks />', () => {
        
        wrapper.find('button').simulate('click');
        expect(wrapper.find('MultipleCustomHooks').exists()).toBe(true);

        // wrapper.find('button').simulate('click');
        // expect(wrapper.find('MultipleCustomHooks').exists()).toBe(false);
    });
    
 });
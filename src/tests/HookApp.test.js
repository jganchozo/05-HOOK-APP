import React from 'react';
import { shallow } from "enzyme";
import { HookApp } from "../HookApp";

describe('Pruebas en el componente HookApp', () => { 


    test('should Mostrar el componente correcto', () => { 
        
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
        
     });

 });
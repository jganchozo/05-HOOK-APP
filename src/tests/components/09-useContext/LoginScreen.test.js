import { mount } from 'enzyme';
import React from 'react';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en LoginScreen', () => { 
    
    const setUser = jest.fn();

    const wrapper = mount(
        <UserContext.Provider value={{
            setUser
        }}>
            <LoginScreen /> );
        </UserContext.Provider>
    );

    test('should devolver el componente correcto', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('should llamar el setUser con el click', () => {

        //wrapper.find('button').simulate('click');
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: 12345,
            name: 'Jose Ganchozo'
        });
    });

});
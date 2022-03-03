import { mount } from 'enzyme';
import React from 'react';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en HomeScreen', () => { 

    const user = {
        name: 'Jose',
        email: 'jganchozo@outlook.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <HomeScreen /> );
        </UserContext.Provider>
    )

    test('should devolver el componente correcte', () => {
        expect(wrapper).toMatchSnapshot();
    });

 });
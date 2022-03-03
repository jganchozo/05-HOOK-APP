import { mount } from 'enzyme';
import React from 'react';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas en AppRouter', () => {

    const user = {
        name: 'Jose',
        email: 'jganchozo@outlook.com'
    }

    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }}>
            <AppRouter />
        </UserContext.Provider>
    );

    test('should de omostrarse correctamente', () => {
     expect(wrapper).toMatchSnapshot();   
    });

});
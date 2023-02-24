import React from 'react';
import { mount } from 'enzyme';
import LoadingScreen from './index';

describe('LoadingScreen', () => {
    it('displays loading spinner when isLoading is true', () => {
        const wrapper = mount(
            <LoadingScreen isLoading={true}>
                <div>Loaded content</div>
            </LoadingScreen>
        );

        expect(wrapper.find('img').prop('src')).toEqual('load-spinner.png');
    });
});

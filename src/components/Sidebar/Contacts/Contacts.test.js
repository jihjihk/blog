
// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Contacts from './Contacts';

describe('Contacts', () => {
  const props = {
    contacts: {
      email: '#',
      twitter: 'jihjihk',
      vkontakte: '#',
      github: 'jihjihk',
      rss: '#',
      linkedin: 'kimjihyun'
    }
  };

  it('renders correctly', () => {
    const tree = renderer.create(<Contacts {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
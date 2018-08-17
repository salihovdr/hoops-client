import React from 'react';
import { shallow, mount } from 'enzyme';

import { EventList } from '../components/event-list';
import { fetchEvents, setPage } from '../actions/events';

describe('<EventList />', () => {
  it('Renders without crashing', () => {
    const events = [{
      '_id': '222222222222222222222200',
      'title': 'Let\'s shoot some hoops!',
      'description': 'No experience is Awesome--lets just have fun',
      'courtId': '000000000000000000000000',
      'userId': '333333333333333333333302',
      'time': '2018-08-05T04:59:00.000Z',
      'attending': 10
    },
    {
      '_id': '222222222222222222222201',
      'title': 'The Biggest Game Night in Cherrydale!',
      'description': 'Who\'s up to get up and get out meet some new people and just enjoy the day. Weather says it is going to be nice out before the rain starts so I thought it would be fun to shoot a few hoops. I am not great at basketball but I do like to shoot the ball occasionally. We can play a quick (or not so quick if everyone is like me) game of horse, around the world or other simple games that involve shooting the basketball in the hoop.',
      'courtId': '000000000000000000000001',
      'userId': '333333333333333333333300',
      'time': '2018-08-05T04:59:00.000Z',
      'attending': 10
    },
    {
      '_id': '222222222222222222222201',
      'title': 'The Biggest Game Night in Cherrydale!',
      'description': 'Who\'s up to get up and get out meet some new people and just enjoy the day. Weather says it is going to be nice out before the rain starts so I thought it would be fun to shoot a few hoops. I am not great at basketball but I do like to shoot the ball occasionally. We can play a quick (or not so quick if everyone is like me) game of horse, around the world or other simple games that involve shooting the basketball in the hoop.',
      'courtId': '000000000000000000000001',
      'userId': '333333333333333333333300',
      'time': '2018-08-05T04:59:00.000Z',
      'attending': 10
    }, {
      '_id': '222222222222222222222201',
      'title': 'The Biggest Game Night in Cherrydale!',
      'description': 'Who\'s up to get up and get out meet some new people and just enjoy the day. Weather says it is going to be nice out before the rain starts so I thought it would be fun to shoot a few hoops. I am not great at basketball but I do like to shoot the ball occasionally. We can play a quick (or not so quick if everyone is like me) game of horse, around the world or other simple games that involve shooting the basketball in the hoop.',
      'courtId': '000000000000000000000001',
      'userId': '333333333333333333333300',
      'time': '2018-08-05T04:59:00.000Z',
      'attending': 10
    },
    {
      '_id': '222222222222222222222201',
      'title': 'The Biggest Game Night in Cherrydale!',
      'description': 'Who\'s up to get up and get out meet some new people and just enjoy the day. Weather says it is going to be nice out before the rain starts so I thought it would be fun to shoot a few hoops. I am not great at basketball but I do like to shoot the ball occasionally. We can play a quick (or not so quick if everyone is like me) game of horse, around the world or other simple games that involve shooting the basketball in the hoop.',
      'courtId': '000000000000000000000001',
      'userId': '333333333333333333333300',
      'time': '2018-08-05T04:59:00.000Z',
      'attending': 10
    },
    {
      '_id': '222222222222222222222201',
      'title': 'The Biggest Game Night in Cherrydale!',
      'description': 'Who\'s up to get up and get out meet some new people and just enjoy the day. Weather says it is going to be nice out before the rain starts so I thought it would be fun to shoot a few hoops. I am not great at basketball but I do like to shoot the ball occasionally. We can play a quick (or not so quick if everyone is like me) game of horse, around the world or other simple games that involve shooting the basketball in the hoop.',
      'courtId': '000000000000000000000001',
      'userId': '333333333333333333333300',
      'time': '2018-08-05T04:59:00.000Z',
      'attending': 10
    }];
    const dispatch = jest.fn();

    const wrapper = shallow(<EventList page={0} events={events} dispatch={dispatch}/>);

    const button = wrapper.find('#nextButton');
    button.at(0).simulate('click');
    expect(dispatch).toHaveBeenCalledWith([setPage(1), fetchEvents(1), fetchEvents()]);
  });
});
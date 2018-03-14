import chai from 'chai';
import sinon from 'sinon';
import { mount, shallow } from 'enzyme';
import React from 'react';
import AllUserComponent from '../../../../../src/apps/components/allUserComponent';

const expect = chai.expect; // eslint-disable-line no-unused-vars
const should = chai.should(); // eslint-disable-line no-unused-vars

const userData = [{
  name: 'Deepika',
  email: 'deepika@gmail.com'
}, {
  name: 'suzy',
  email: 'suzy@gmail.com'
}, {
  name: 'Bobby',
  email: 'bobby@gmail.com'
}, {
  name: 'Eddy',
  email: 'eddy@gmail.com'
}, {
  name: 'John',
  email: 'john@gmail.com'
}];

describe('AllUserComponent', () => {
  const sandbox = sinon.sandbox.create();
  let wrapper;

  beforeEach(() => {
  });

  afterEach(() => {
    sandbox.restore();
    wrapper.unmount();
  });

  it('component mounts', () => {
    wrapper = mount('<AllUserComponent />');
    expect(wrapper.find('ul')).to.have.length(1);
  });

  it('verify handleChange called', () => {
    const spy = sandbox.spy();
    wrapper = mount(<AllUserComponent userDetails={userData} handleChange={spy} />);
    spy.calledOnce;
  });

  it('verify handleChange works', () => {
    const spy1 = sandbox.spy(AllUserComponent.prototype.handleChange);
    wrapper = shallow(<AllUserComponent userDetails={userData} />);
    const mockEvent = { target: { id: "0" }, preventDefault() { } };
    wrapper.instance().handleChange(mockEvent);
    expect(spy1.called);
  });

});

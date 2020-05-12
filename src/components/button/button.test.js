'use strict'

import React from 'react'
import Button from './index'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

it('Should Button default to matcg snapshot',() => {
  const tree = renderer.create(
    <Button onClick={() => null}>
      Click me
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button success to matcg snapshot',() => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='success'>
      Click me success
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button danger to matcg snapshot',() => {
  const tree = renderer.create(
    <Button onClick={() => null} kind='danger'>
      Click me danger
    </Button>
  ).toJSON()
  expect(tree).toMatchSnapshot()
})

it('Should Button with prop Kind="success" should has class "-success"',() => {
  const wrapper = shallow( <Button onClick={() => null} kind='success'>
  Click me success
</Button>)

  expect(wrapper.hasClass('-success')).toBe(true)
})

it('Should Button with prop Kind="danger" should has class "-danger"',() => {
  const wrapper = shallow( <Button onClick={() => null} kind='danger'>
  Click me success
</Button>)

  expect(wrapper.hasClass('-danger')).toBe(true)
})

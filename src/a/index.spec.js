import test from 'node:test'
import assert from 'node:assert/strict'
import { addition, substraction } from './index.js'

test('Calculator', async t => {
  await t.test('Addition', () => {
    assert.equal(addition(1, 2), 3)
  })

  await t.test('Substraction', () => {
    assert.equal(substraction(3, 1), 2)
  })
})

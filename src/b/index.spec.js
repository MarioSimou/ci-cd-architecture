import test from 'node:test'
import assert from 'node:assert/strict'
import { multiplication, division } from './index.js'

test('Calculator', async t => {
  await t.test('Multiplication', () => {
    assert.equal(multiplication(1, 2), 2)
  })

  await t.test('Division', () => {
    assert.equal(division(4, 2), 2)
  })
})

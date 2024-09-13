import test from 'ava'

import { sum, fibonacci, difference } from '../index.js'

test('sum from native', (t) => {
    t.is(sum(1, 2), 3)
})

test('difference', (t) => {
    t.is(difference(5, 2), 3)
})

test('fibonacci', (t) => {
    t.is(fibonacci(5), 5)
})

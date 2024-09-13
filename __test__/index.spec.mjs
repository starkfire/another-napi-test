import test from 'ava'

import { sum, fibonacci } from '../index.js'

test('sum from native', (t) => {
    t.is(sum(1, 2), 3)
})

test('fibonacci', (t) => {
    t.is(fibonacci(5), 5)
})

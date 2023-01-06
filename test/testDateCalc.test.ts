import { test, expect } from 'vitest'

import { DateSub } from '../src/ts/dateCalc'

test('Test DateSub', () => {
  expect(DateSub({ month: 1, day: 20 }, { month: 1, day: 21 })).toBe(0)
  expect(DateSub({ month: 3, day: 20 }, { month: 5, day: 10 })).toBe(50)
  expect(DateSub({ month: 11, day: 20 }, { month: 1, day: 10 })).toBe(50)
})

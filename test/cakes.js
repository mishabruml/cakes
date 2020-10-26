import { cakes } from '../cakes'

describe('cakes', () => {
  for (const { recipe, available, expected } of [
    {
      recipe: { flour: 500, sugar: 200, eggs: 1 },
      available: { flour: 1200, sugar: 1200, eggs: 5, milk: 200 },
      expected: 2
    },
    {
      recipe: { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
      available: { sugar: 500, flour: 2000, milk: 2000 },
      expected: 0
    },
    {
      recipe: { flour: 500.2387, sugar: 205.834, eggs: 1 },
      available: { flour: 1100.239, sugar: 504.8234, eggs: 5, milk: 200 },
      expected: 2
    },
    {
      recipe: { courgette: 1 },
      available: {},
      expected: 0
    },
    {
      recipe: { },
      available: { courgette: 1 },
      expected: 0
    },
    {
      recipe: { flour: 100 },
      available: { flour: 'foo' },
      expected: 0
    },
    {
      recipe: { flour: 'foo' },
      available: { flour: 100 },
      expected: 0
    }
  ]) {
    test(`GIVEN ${JSON.stringify(recipe)} recipe AND ${JSON.stringify(available)} available
    THEN expect ${expected} cakes`, () => {
      expect(cakes(recipe, available)).toBe(expected)
    })
  }
})

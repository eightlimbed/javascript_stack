import Dog from './dog'

test('Dog.bark', () => {
  const testDog = new Dog('Test')
  expect(testDog.bark()).toBe('Roof! Roof! I am Test')
})

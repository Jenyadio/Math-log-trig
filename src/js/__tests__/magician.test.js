import Magician from '../magician';

test('should attack concerning the distance', () => {
  const magician = new Magician('Oleg', 'Magician');
  magician.attack = 100;
  magician.distance = 2;
  const received = magician.attack;

  expect(received).toBe(90);
});

test('should attack while stoned', () => {
  const magician = new Magician('Oleg', 'Magician');
  magician.attack = 100;
  magician.distance = 2;
  magician.stoned = true;
  const received = magician.attack;

  expect(received).toBe(85);
});

test('should be stoned', () => {
  const magician = new Magician('Oleg', 'Magician');
  magician.stoned = true;
  const received = magician.stoned;

  expect(received).toBe(true);
});

import Daemon from '../daemon';

test('should attack concerning the distance', () => {
  const daemon = new Daemon('Oleg', 'Daemon');
  daemon.attack = 100;
  daemon.distance = 4;
  const received = daemon.attack;

  expect(received).toBe(70);
});

test('should attack while stoned', () => {
  const daemon = new Daemon('Oleg', 'Daemon');
  daemon.attack = 100;
  daemon.distance = 4;
  daemon.stoned = true;
  const received = daemon.attack;

  expect(received).toBe(60);
});

test('should be stoned', () => {
  const daemon = new Daemon('Oleg', 'Daemon');
  daemon.stoned = true;
  const received = daemon.stoned;

  expect(received).toBe(true);
});

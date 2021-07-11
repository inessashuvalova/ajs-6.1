import orderByProps from "../App";

const objTest = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };

test('Функция будет работать, если не передать пропсы', () => {
    expect(() => orderByProps(objTest)).not.toThrow();
  });

test('orderByProps() returns incorrect result', () => {
    const expectedObject = [
        { key: 'name', value: 'мечник' },
        { key: 'level', value: 2 },
        { key: 'attack', value: 80 },
        { key: 'defence', value: 40 },
        { key: 'health', value: 10 },
      ];
      expect(orderByProps(objTest, ['name', 'level'])).toEqual(expectedObject);
})
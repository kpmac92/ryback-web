import { addItem, deleteItem, updateItem } from './listUtils';

describe('List Utils', () => {
  const input = [
    { someId: 2, someField: 'some value' },
    { someId: 4, someField: 'some other value' },
  ];
  describe('delete item', () => {
    it('returns list without specified item', () => {
      const result = deleteItem(input, 'someId', 4);

      expect(result).toEqual([{ someId: 2, someField: 'some value' }]);
    });

    it('returns same list when item does not exist', () => {
      const result = deleteItem(input, 'someId', 3);

      expect(result).toEqual(input);
    });
  });

  describe('update item', () => {
    it('returns list with updated item', () => {
      const expectedResult = [
        { someId: 2, someField: 'some updated value' },
        { someId: 4, someField: 'some other value' },
      ];

      const result = updateItem(
        input,
        'someId',
        2,
        'someField',
        'some updated value'
      );

      expect(result).toEqual(expectedResult);
    });
  });

  describe('add item', () => {
    it('adds item with new id', () => {
      const expectedResult = [
        { someId: 2, someField: 'some value' },
        { someId: 4, someField: 'some other value' },
        { someId: 5 },
      ];

      expect(addItem(input, 'someId')).toEqual(expectedResult);
    });
  });
});

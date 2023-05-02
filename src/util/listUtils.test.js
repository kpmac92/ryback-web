import { deleteItem } from './listUtils';

describe('List Utils', () => {
  describe('delete item', () => {
    const input = [
      { someId: 2, someField: 'some value' },
      { someId: 4, someField: 'some other value' },
    ];

    it('returns list without specified item', () => {
      const result = deleteItem(input, 'someId', 4);

      expect(result).toEqual([{ someId: 2, someField: 'some value' }]);
    });

    it('returns same list when item does not exist', () => {
      const result = deleteItem(input, 'someId', 3);

      expect(result).toEqual(input);
    });
  });
});

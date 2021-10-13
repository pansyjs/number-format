import { numberFormat } from '@/index';

describe('numberFormat', () => {
  describe('format', () => {
    it('直接使用', () => {
      const result = numberFormat().format(123456);
      expect(result).toEqual('123,456');
    });

    it('不使用千分符', () => {
      const result = numberFormat({ thousandSeparator: false }).format(123456);
      expect(result).toEqual('123456');
    });

    it(`千分符设置为 '*'`, () => {
      const result = numberFormat({ thousandSeparator: '*' }).format(123456);
      expect(result).toEqual('123*456');
    });
  });
});

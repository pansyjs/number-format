import {
  getSeparators,
  validateOptions,
  splitDecimal,
  applyThousandSeparator,
} from '@/utils';

describe('getSeparators', () => {
  it('默认', () => {
    expect(getSeparators()).toEqual({
      decimalSeparator: '.',
      thousandSeparator: ',',
    });
  });

  it('设置 thousandSeparator 为 false', () => {
    expect(getSeparators({ thousandSeparator: false })).toEqual({
      decimalSeparator: '.',
    });
  });

  it('设置 thousandSeparator 为其他字符', () => {
    expect(getSeparators({ thousandSeparator: '+' })).toEqual({
      decimalSeparator: '.',
      thousandSeparator: '+',
    });
  });

  it('设置 decimalSeparator 为其他字符', () => {
    expect(getSeparators({ decimalSeparator: '*' })).toEqual({
      decimalSeparator: '*',
      thousandSeparator: ',',
    });
  });
});

describe('validateOptions', () => {
  it('默认参数', () => {
    expect(validateOptions()).toEqual(undefined);
  });

  it('decimalSeparator 与 thousandSeparator 相同', () => {
    expect(() => {
      validateOptions({
        thousandSeparator: '.',
      })
    }).toThrow();

    expect(() => {
      validateOptions({
        thousandSeparator: '*',
        decimalSeparator: '*',
      })
    }).toThrow();
  });
});

describe('splitDecimal', () => {
  it('整数', () => {
    expect(splitDecimal('100')).toEqual({
      beforeDecimal: '100',
      afterDecimal: '',
      hasNagation: false,
      addNegation: false,
    });
  });

  it('浮点数', () => {
    expect(splitDecimal('100.11')).toEqual({
      beforeDecimal: '100',
      afterDecimal: '11',
      hasNagation: false,
      addNegation: false,
    });
  });

  it('负数', () => {
    expect(splitDecimal('-100')).toEqual({
      beforeDecimal: '100',
      afterDecimal: '',
      hasNagation: true,
      addNegation: true,
    });
  });

  it('负数 - 不允许负数', () => {
    expect(splitDecimal('-100', false)).toEqual({
      beforeDecimal: '100',
      afterDecimal: '',
      hasNagation: true,
      addNegation: false,
    });
  });
});

describe('applyThousandSeparator', () => {
  it(`千分位分隔符为 ',' `, () => {
    expect(applyThousandSeparator('123456789', ',')).toEqual('123,456,789');
  });

  it(`千分位分隔符为空字符`, () => {
    expect(applyThousandSeparator('123456789', '')).toEqual('123456789');
  });
});

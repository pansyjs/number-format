import type { Options } from './types';
import {
  getSeparators,
  validateOptions,
  splitDecimal,
  applyThousandSeparator,
} from '@/utils';

const defaultOptions: Options = {
  allowNegative: true,
  decimalSeparator: '.',
  thousandSeparator: true,
}

export function numberFormat(options: Options = {}) {
  const opts = Object.assign({}, defaultOptions, options);
  validateOptions(opts);

  const { thousandSeparator, decimalSeparator } = getSeparators(opts);

  opts.thousandSeparator = thousandSeparator;


  const format = (value: number) => {
    let { beforeDecimal, afterDecimal, addNegation } = splitDecimal(value + '', opts.allowNegative);

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator);
    }


    return beforeDecimal + afterDecimal;
  }

  return {
    format
  }
}

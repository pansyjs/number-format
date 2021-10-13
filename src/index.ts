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

  const { prefix, suffix, template } = opts;
  const { thousandSeparator, decimalSeparator } = getSeparators(opts);

  const formatAsNumber = (numStr: string) => {
    let { beforeDecimal, afterDecimal, addNegation } = splitDecimal(numStr + '', opts.allowNegative);

    if (thousandSeparator) {
      beforeDecimal = applyThousandSeparator(beforeDecimal, thousandSeparator);
    }

    /** add prefix and suffix */
    if (prefix) beforeDecimal = prefix + beforeDecimal;
    if (suffix) afterDecimal = afterDecimal + suffix;

    /** restore negation sign */
    if (addNegation) beforeDecimal = '-' + beforeDecimal;

    return beforeDecimal + afterDecimal;
  }

  const formatNumString = (numStr: string = '') => {
    let formattedValue = numStr;

    if (numStr === '') {
      formattedValue = '';
    } else {
      formattedValue = formatAsNumber(formattedValue);
    }

    return formattedValue;
  }

  const format = (val: number) => {
    if (!template) {
      return formatNumString(val + '');
    }

    return ''
  }

  return {
    format,
  }
}

export default numberFormat;

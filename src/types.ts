interface Options {
  /**
   * 设置数值的前缀
   */
  prefix?: string;
  /**
   * 设置数值的后缀
   */
  suffix?: string;
  /**
   * 设置千分位标识符
   * @default ','
   */
  groupSeparator?: string;
  /** 
   * 格式化的模板 
   * */
  format?: string ;
}
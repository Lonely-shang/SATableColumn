import type { AsTableColumnConfig, AsTableColumnFontRate } from "packages/types";

const asTableColumnConfig: AsTableColumnConfig = {
  // 字体大小默认14
  fontSize: 14,
  // 计算字体比率
  fontRate: {
    CHAR_RATE: 1.1, // 汉字比率
    NUM_RATE: 0.65, // 数字
    OTHER_RATE: 0.5 // 除汉字和数字以外的字符的比率
  }
}

const transChar = (char: string): string => encodeURIComponent(char).replace(/[^a-zA-z]/g, 'eUC')

const getColumnContentLength = (data: any[], fontRate: AsTableColumnFontRate): number => {
  return data.reduce((max: number, item) => {
    if (!item) return max;
    const itemStr = item.toString();
    const charLength = getStringCharLength(itemStr);
    const numberLength = getStrNumLength(itemStr);
    const otherLength = itemStr.length - charLength - numberLength;
    let newLength = charLength * fontRate.CHAR_RATE + numberLength * fontRate.NUM_RATE + otherLength * fontRate.OTHER_RATE;
    if (itemStr.includes('\n')) newLength = getColumnContentLength(itemStr.split('\n'), fontRate);
    if (newLength > max) return newLength;
    return max;
  }, 0)
}

const getStringCharLength = (str: string): number => str.match(/[\u2E80-\u9FFF]/g)?.length || 0

const getStrNumLength = (str: string): number => str.match(/\d/g)?.length || 0

export { asTableColumnConfig, getColumnContentLength, transChar }

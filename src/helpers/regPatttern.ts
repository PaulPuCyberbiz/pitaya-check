export const urlPattern =
  /^(https?:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?%#[\]@!\$&'\(\)\*\+,;=.]+$/;

export const sslUrlPattern =
  /^(https:\/\/)[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?%#[\]@!\$&'\(\)\*\+,;=.]+$/;

const emailDomainStr = '[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z]+$';
const emailRegexStr = `^\\w+((-\\w+)|(\\.\\w+))*\\@${emailDomainStr}`;
const emailDomainRegexStr = `^${emailDomainStr}`;
export const emailPattern = new RegExp(emailRegexStr);
export const emailDomainPattern = new RegExp(emailDomainRegexStr);

export const decimalPattern = /^[0-9]*\.?[0-9]*$/;
export const getDecimalPattern = (scale: number) => {
  const regexStr = String.raw`^([1-9]\d*|0)?(\.\d{0,${scale}})?$`;
  return new RegExp(regexStr);
};

export const integerPattern = /^-?[0-9]*$/;

export const positiveIntegerPattern = /^\+?[1-9][0-9]*$/;

export const nonNegativeIntegerPattern = /^\d+$/;

export const letterAndIntegerPattern = /^[A-Za-z0-9]+$/;

export const telephoneInTaiwanPattern = /^((?=(0[1-8]))[0-9]{9,10})$/;

export const mobilePhoneInTaiwanPattern = /^((?=(09))[0-9]{10})$/;

export const isdCodePattern = /^\+([1-9][0-9\s]*)?$/;

export const asciiPattern = /^[\x00-\x7F]*$/;

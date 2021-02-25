/**
 * Created by pro on 2020/3/24.
 * name: yhzzy
 * describe: 移动端公共表单验证方法
 */

const regs = {
  cellPhone: /^(13[0-9]|14[5,7,9]|15[0-9]|17[0-9]|18[0-9]|199|198|166)[0-9]{8}$/, // /^1([1-9][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/,
  phone: /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/,
  url: /^([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.([0-9]|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])$/,
  fax: /^(\d{3,4}-)?\d{7,8}$/,
  email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  idCard: /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/,
  password: /^[a-zA-Z0-9_]{4,16}$/,
  captcha: /[0-9]{4}/,
};

/**
 * 手机端公共表单验证规则
 * @method  validator
 */
/* eslint import/prefer-default-export: 0 */
function required(value) {
  return value !== '' && value !== null && value !== undefined;
}

function validator(value, rule) {
  const re = regs[rule.reg];
  return re.test(value);
}

function validatePattern(value, rule) {
  const { pattern } = rule;
  return pattern.test(value);
}

const validateMethods = {
  required,
  validator,
  validatePattern,
};

export function validate(params, rules) {
  return new Promise(resolve => {
    for (const obj in params) {
      if (rules[obj]) {
        const ruleObj = rules[obj];
        for (let i = 0, len = ruleObj.length; i < len; i += 1) {
          const flag = validateMethods[ruleObj[i].type](params[obj], ruleObj[i]);
          if (!flag) {
            wx.showToast({
              title: ruleObj[i].message,
              icon: 'none',
            });
            return resolve(false);
          }
        }
      }
    }
    return resolve(true);
  });
}

export const regForm = regs;

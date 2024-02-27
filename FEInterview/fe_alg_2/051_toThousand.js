// 如何用原生JS实现数字的货币格式化，例如数字 6123456789 格式化后为 6,123,456,789，不低于两种方法。

// 方法一： 整数、小数部分分别正则
function toThousand3(s) {
  const parts = s.split('.');
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  // parts[0] = parts[0].split('').reverse().join('').replace(/\d{3}/g, ($1) => $1 + ',').split('').reverse().join(''); // 需要处理符号
  if (parts.length > 1) {
    parts[1] = parts[1].replace(/\d{3}/g, ($1) => $1 + ',');
  }
  return parts.join('.');
}

// 方法二: 遍历，每三位加个符号
function toThousand4(s) {
  if (!s) return;
  if (s[0] === '-') return '-' + toThousand4(s.slice(1));

  const [strInt, strDecimal] = s.split(".");
  const arrRes = [];

  // dispose strInt
  for (let i = strInt.length - 1, count = 0; i >= 0; --i) {
    arrRes.unshift(strInt[i]);
    ++count;
    if (count % 3 === 0 && i > 0) {
      arrRes.unshift(',')
    }
  }

  // dispose strDecimal
  if (strDecimal) {
    arrRes.push('.');
    for (let i = 0, count = 0; i < strDecimal.length; ++i) {
      arrRes.push(strDecimal[i]);
      ++count;
      if (count % 3 === 0 && i < strDecimal.length - 1) {
        arrRes.push(',');
      }
    }
  }
  return arrRes.join('');
}


// ---- test case ----
console.log(toThousand3('-16123456789.12345'));
console.log(toThousand3('-116123456789.12345'));
console.log(toThousand4('-16123456789.12345'));
console.log(toThousand4('-116123456789.12345'));

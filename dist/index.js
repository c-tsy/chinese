"use strict";
exports.__esModule = true;
var map = {
    '零': 0,
    '一': 1,
    '壹': 1,
    '二': 2,
    '贰': 2,
    '三': 3,
    '叁': 3,
    '四': 4,
    '肆': 4,
    '五': 5,
    '伍': 5,
    '六': 6,
    '陆': 6,
    '七': 7,
    '柒': 7,
    '八': 8,
    '捌': 8,
    '九': 9,
    '玖': 9
};
var jmap = {
    '十': 10,
    '拾': 10,
    '百': 100,
    '佰': 100,
    '千': 1000,
    '仟': 1000,
    '万': 10000,
    '萬': 10000
};
var k = Object.keys(map);
var jk = Object.keys(jmap);
function chinese2number(chinese) {
    var n = 0;
    for (var i = 0; i < chinese.length; i++) {
        var t = chinese.substr(i, 1);
        var mi = -1;
        if ((mi = k.indexOf(t)) > -1) {
            n += map[k[mi]];
        }
        else if ((mi = jk.indexOf(t)) > -1) {
            if (n > 0) {
                n *= jmap[jk[mi]];
            }
            else {
                n = jmap[jk[mi]];
            }
            if (mi > 1) {
                n += chinese2number(chinese.substr(i + 1));
                break;
            }
        }
    }
    return n;
}
exports.chinese2number = chinese2number;
function number2chinese(n, simple) {
    if (simple === void 0) { simple = false; }
    var s = "";
    var oi = -1;
    while (true) {
        var t = n % 10;
        n = Math.floor(n / 10);
        s = (t == 0 ? '零' : k[t * 2 + (simple ? -1 : -0)]) + s;
        if (n >= 1) {
            oi++;
            if (oi >= 4) {
                oi = 0;
            }
            s = jk[oi * 2 + (simple ? 0 : 1)] + s;
        }
        else {
            return s.replace(/零{2,}/g, '零');
        }
    }
}
exports.number2chinese = number2chinese;
//# sourceMappingURL=index.js.map
(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[645],{727:function(e,t,n){!function(e){"use strict";function t(e){for(var t={},n=e.split(" "),r=0;r<n.length;++r)t[n[r]]=!0;return t}e.defineMode("modelica",(function(t,n){var r=t.indentUnit,i=n.keywords||{},o=n.builtin||{},a=n.atoms||{},l=/[;=\(:\),{}.*<>+\-\/^\[\]]/,u=/(:=|<=|>=|==|<>|\.\+|\.\-|\.\*|\.\/|\.\^)/,s=/[0-9]/,c=/[_a-zA-Z]/;function f(e,t){return e.skipToEnd(),t.tokenize=null,"comment"}function p(e,t){for(var n,r=!1;n=e.next();){if(r&&"/"==n){t.tokenize=null;break}r="*"==n}return"comment"}function m(e,t){for(var n,r=!1;null!=(n=e.next());){if('"'==n&&!r){t.tokenize=null,t.sol=!1;break}r=!r&&"\\"==n}return"string"}function k(e,t){for(e.eatWhile(s);e.eat(s)||e.eat(c););var n=e.current();return!t.sol||"package"!=n&&"model"!=n&&"when"!=n&&"connector"!=n?t.sol&&"end"==n&&t.level>0&&t.level--:t.level++,t.tokenize=null,t.sol=!1,i.propertyIsEnumerable(n)?"keyword":o.propertyIsEnumerable(n)?"builtin":a.propertyIsEnumerable(n)?"atom":"variable"}function d(e,t){for(;e.eat(/[^']/););return t.tokenize=null,t.sol=!1,e.eat("'")?"variable":"error"}function h(e,t){return e.eatWhile(s),e.eat(".")&&e.eatWhile(s),(e.eat("e")||e.eat("E"))&&(e.eat("-")||e.eat("+"),e.eatWhile(s)),t.tokenize=null,t.sol=!1,"number"}return{startState:function(){return{tokenize:null,level:0,sol:!0}},token:function(e,t){if(null!=t.tokenize)return t.tokenize(e,t);if(e.sol()&&(t.sol=!0),e.eatSpace())return t.tokenize=null,null;var n=e.next();if("/"==n&&e.eat("/"))t.tokenize=f;else if("/"==n&&e.eat("*"))t.tokenize=p;else{if(u.test(n+e.peek()))return e.next(),t.tokenize=null,"operator";if(l.test(n))return t.tokenize=null,"operator";if(c.test(n))t.tokenize=k;else if("'"==n&&e.peek()&&"'"!=e.peek())t.tokenize=d;else if('"'==n)t.tokenize=m;else{if(!s.test(n))return t.tokenize=null,"error";t.tokenize=h}}return t.tokenize(e,t)},indent:function(t,n){if(null!=t.tokenize)return e.Pass;var i=t.level;return/(algorithm)/.test(n)&&i--,/(equation)/.test(n)&&i--,/(initial algorithm)/.test(n)&&i--,/(initial equation)/.test(n)&&i--,/(end)/.test(n)&&i--,i>0?r*i:0},blockCommentStart:"/*",blockCommentEnd:"*/",lineComment:"//"}}));var n="abs acos actualStream asin atan atan2 cardinality ceil cos cosh delay div edge exp floor getInstanceName homotopy inStream integer log log10 mod pre reinit rem semiLinear sign sin sinh spatialDistribution sqrt tan tanh",r="Real Boolean Integer String";function i(t,n){"string"==typeof t&&(t=[t]);var r=[];function i(e){if(e)for(var t in e)e.hasOwnProperty(t)&&r.push(t)}i(n.keywords),i(n.builtin),i(n.atoms),r.length&&(n.helperType=t[0],e.registerHelper("hintWords",t[0],r));for(var o=0;o<t.length;++o)e.defineMIME(t[o],n)}i(["text/x-modelica"],{name:"modelica",keywords:t("algorithm and annotation assert block break class connect connector constant constrainedby der discrete each else elseif elsewhen encapsulated end enumeration equation expandable extends external false final flow for function if import impure in initial inner input loop model not operator or outer output package parameter partial protected public pure record redeclare replaceable return stream then true type when while within"),builtin:t(n),atoms:t(r)})}(n(8))}}]);
//# sourceMappingURL=645.1285c4a0.chunk.js.map
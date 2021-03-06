##  eslint config for my project
### Usage
<p>扩展Standard标准，<a href="https://www.npmjs.com/package/eslint-config-standard">eslint-config-standard</a></p>
<p>使用之前必须安装：</p>
<pre>
  <code>npm install --save-dev eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import   eslint-plugin-node</code></pre>
<p></p>
<p>使用方法：</p>
<ol>
<li>在项目根目录下新建文件：<code>.eslintrc</code></li>
<li>写入以下文件：</li>
</ol>
<pre>
<code>{</code>
<code>"extends": "eslint-config-mine"</code>
<code>}</code>
</pre>
<p>基于Standard标准，补充的规则的涵义</p>
<pre>
"rules": {
     <em>//禁止使用console</em>
     "no-console": 2,
     <em>//函数内最多有几个声明</em>
     "max-statements": [2, 50],
     <em>//嵌套块深度</em>
     "max-depth": [2, 5],
     <em>//回调嵌套深度</em>
     "max-nested-callbacks": [2, 3],
     <em>//函数最多只有5个参数</em>
     "max-params": [2, 5],
     <em>//循环复杂度</em>
     "complexity": [2, 10],
     <em>//字符串最大长度</em>
     "max-len": [2, 120, 4],
     <em>//函数定义时括号前面要不要有空格</em>
     "space-before-function-paren": ["error", {
        "anonymous": "never",
        "named": "never",
        "asyncArrow": "ignore"
     }],
    <em>//首选const</em>
     "prefer-const": ["error", {
        "destructuring": "all",
        "ignoreReadBeforeAssign": false
     }]
  }
</pre>

### 参考文章
<ol>
  <li>
    <a href="https://mp.weixin.qq.com/s/vn5BH51CK9F1EDq7gIDODQ">代码重构之道</a>
  </li>
  <li>
    <a href="http://morning.work/page/maintainable-nodejs/getting-started-with-eslint.html">利用 ESLint 检查代码质量</a>
  </li>
</ol>


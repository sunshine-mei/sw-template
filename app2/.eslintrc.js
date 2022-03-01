module.exports = {
    'root': true,
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        'indent': ['error', 2], // 强制使用一致的缩进
        'eqeqeq': ['warn', 'always'], // 要求使用 === 和 !==
        'semi': ['error', 'never'], // 无分号
        'camelcase': 0, // 变量可以用下划线
        'import/extensions': 0, // import不需要写文件扩展名
        'quotes': ['error', 'single'], // 强制使用一致的反勾号、双引号或单引号
    },
    "globals": {
        'uni': true
    }
};

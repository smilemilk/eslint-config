module.exports = {
    "extends": "standard",
    "rules": {
        "no-console": 2,
        "max-statements": [2, 50],
        "max-depth": [2, 5],
        "max-nested-callbacks": [2, 3],
        "max-params": [2, 5],
        "complexity": [2, 10],
        "max-len": [2, 120, 4],
        "space-before-function-paren": ["error", {
            "anonymous": "never",
            "named": "never",
            "asyncArrow": "ignore"
        }],
        "prefer-const": ["error", {
            "destructuring": "all",
            "ignoreReadBeforeAssign": false
        }]
    }
}

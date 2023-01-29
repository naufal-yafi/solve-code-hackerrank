![contributor](https://img.shields.io/github/contributors/naufal-yafi/solve-code-hackerrank?color=red) ![size](https://img.shields.io/github/repo-size/naufal-yafi/solve-code-hackerrank) ![commit](https://img.shields.io/github/last-commit/naufal-yafi/solve-code-hackerrank)

<h2>🧑‍💻HackerRank</h2>

<p>This repo I use to store the code - the code I've already completed. Not only learning the algorithms that <strong><a href="https://www.hackerrank.com/">HackerRank</a></strong> has provided but also learning to use <strong><a href="https://www.geeksforgeeks.org/unit-testing-software-testing/">unit testing</a></strong> from the javascript library, namely <strong><a href="https://jestjs.io/">Jest</a></strong>. And I'm also using the <strong><a href="https://babeljs.io/">Babel</a></strong> library because <strong><a href="https://jestjs.io/">Jest</a></strong> doesn't support <i><a href="https://robertmarshall.dev/blog/es6-modules-a-beginners-guide/#:~:text=ES6%20modules%20are%20JavaScript%20modules%20that%20are%20used,or%20primitive%20values%20from%20one%20file%20to%20another.">ES6 Modules</a></i> yet so it should be compiled into <i><a href="https://medium.com/@cgcrutch18/commonjs-what-why-and-how-64ed9f31aa46">CommonJS</a></i>.</p>

<h5>⚠️ Previously installed the required dependesy by using the command ⚠️</h5>

```sh
npm i
```

<h5>How to Use: </h5>

You can run the `npm test` command to run all tests. If you want to run a specific test, you can use `npm run test-nameFile`. I've written it in <strong><a href="https://github.com/naufal-yafi/solve-code-hackerrank/blob/main/package.json">package.json</a></strong>.

```json
"scripts": {
    "test": "jest",
    "test-solved-me-first": "npx jest --runTestsByPath .solved-codesolved-me-first/solve-me-first.test.js",
    "test-simple-array-sum": "npx jest --runTestsByPath .solved-codesimple-array-sum/simple-array-sum.test.js",
    "test-compare-the-triplets": "npx jest --runTestsByPath .solved-codecompare-the-triplets/compare-the-triplets.test.js",
    ......
```

<h5>Example:</h5>

```sh
$ npm run test-diagonal-difference
```

<h5>Output:</h5>

```sh
$ npm run test-diagonal-difference

> solve-code-hackerrank@1.0.0 test-diagonal-difference
> npx jest --runTestsByPath ./solved-code/diagonal-difference/diagonal-difference.test.js

 PASS  solved-code/diagonal-difference/diagonal-difference.test.js
  √ test case 0 (2 ms)
  √ test case 1 (1 ms)
  √ test case 2 (1 ms)
  √ test case 3 (1 ms)
  √ test case 4
  √ test case 5 (1 ms)
  √ test case 6 (1 ms)
  √ test case 7 (7 ms)
  √ test case 8 (5 ms)
  √ test case 9 (9 ms)
  √ test case 10 (18 ms)

Test Suites: 1 passed, 1 total
Tests:       11 passed, 11 total
Snapshots:   0 total
Time:        0.886 s, estimated 4 s
Ran all test suites within paths "./solved-code/diagonal-difference/diagonal-difference.test.js".
```

<h5>Output Run All Tests: </h5>

```sh
$ npm test

> solve-code-hackerrank@1.0.0 test
> jest

 PASS  solved-code/solved-me-first/solve-me-first.test.js
  √ test case 0 (21 ms)
  √ test case 1 (1 ms)

 PASS  solved-code/a-very-big-sum/a-very-big-sum.test.js
  √ test case 0 (22 ms)

 PASS  test/test-index.test.js
  √ testing (7 ms)

 PASS  solved-code/simple-array-sum/simple-array-sum.test.js
  √ test case 0 (17 ms)

 PASS  solved-code/compare-the-triplets/compare-the-triplets.test.js
  √ test case 0 (4 ms)
  √ test case 1 (1 ms)

 PASS  solved-code/diagonal-difference/diagonal-difference.test.js
  √ test case 0 (8 ms)
  √ test case 1 (1 ms)
  √ test case 2
  √ test case 3
  √ test case 4
  √ test case 5 (1 ms)
  √ test case 6 (2 ms)
  √ test case 7 (9 ms)
  √ test case 8 (3 ms)
  √ test case 9 (10 ms)
  √ test case 10 (8 ms)

Test Suites: 6 passed, 6 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        3.715 s, estimated 4 s
Ran all test suites.
```

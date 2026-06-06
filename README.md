# JavaScript Codes

A personal collection of JavaScript practice code, exercises, and small browser projects built while learning core language and web APIs.

## Overview

This repository is a working log of JavaScript study material rather than a single application. It contains:

- Standalone scripts demonstrating individual language features (strings, arrays, numbers, objects, loops, operators, BigInt, `NaN` handling, type conversion).
- Browser-based exercises for the DOM and event handling.
- `async`/`await` and `fetch` examples run under Node.js against public APIs (GitHub API, JSONPlaceholder).
- A handful of small, self-contained front-end mini-projects (calculator, theme switcher, gradient background).
- Lab-style exercises (prime checks, Armstrong numbers, Fibonacci, LCM, factorial, form validation) that read like coursework assignments.
- A third-party Sudoku game (`javascript-sudoku`) kept in the repo for reference, not written as part of this project.

## Features

- Array method demos: `map`, `filter`, `reduce`, `splice`, `push`/`pop`, `shift`/`unshift`, `flat`, `concat`, and method chaining.
- String method demos: case conversion, trimming, padding, `charAt`, `replace`/`replaceAll`, template literals, and search methods (`includes`, `indexOf`, `search`, `match`, `matchAll`).
- Number method demos: `toFixed`, `toPrecision`, `toExponential`, `toString`, `valueOf`.
- Loop constructs: `for`, `while`, `do...while`, `forEach`, `for...in`, `for...of`.
- DOM practice: creating and editing elements, CSS selector examples (class/universal selectors).
- Event handling: keyboard events, a random background-color changer using `setInterval`, and general event-listener basics.
- Promise-based HTTP calls with `node-fetch` (a GET request against the GitHub Users API and a POST request against JSONPlaceholder).
- Mini-projects: a button-driven calculator, a click-based theme switcher (grey/blue/black/red), and a CSS gradient background example.

## Tech Stack

| Category | Technology |
|---|---|
| Frontend | HTML, CSS, vanilla JavaScript |
| Other | Node.js (ES modules), `node-fetch` |

## Architecture

There is no single entry point or build pipeline. The repository is a flat set of topic folders, each holding independent files:

- Files under `Arrays/`, `strings/`, `Loops/`, and `numberMethods/` are single-concept scripts meant to be run individually (mostly `console.log` output).
- Folders such as `calculator/`, `basicProjects/themeSwitcher/`, and `bg/` each hold a self-contained HTML + CSS + JS trio.
- `Promise/` scripts use `import` (enabled by `"type": "module"` in `package.json`) and the `node-fetch` dependency to run in Node rather than a browser.

## Project Structure

```
javascript-codes/
├── Arrays/                  Array methods and chaining exercises
│   └── ArrayMethods/        One file per method (push, pop, splice, flat, ...)
├── strings/
│   ├── StringMethods/       case, trim, pad, charAt, replace, concat, substring
│   ├── StringSearch/        includes, indexOf, search, match, matchAll, ...
│   └── StringTemplate/      Template literal / variable substitution examples
├── Loops/                   for, while, do-while, forEach
├── numberMethods/           toFixed, toPrecision, toExponential, toString, valueOf
├── DOM/                     DOM manipulation practice page
├── events/                  Event listener exercises (keyboard, async, bg-color)
├── Promise/                 fetch/async examples using node-fetch (GitHub API, JSONPlaceholder)
├── Random/                  Loop and setTimeout scratch examples
├── Lecture/                 Follow-along files from class lectures (arrays, functions, forms)
├── LAB/                     Lab/coursework exercises (primes, Armstrong, Fibonacci, LCM,
│                            factorial, compound interest, palindrome check, form validation,
│                            popup boxes) plus unrelated course documents (PDFs, a .docx)
├── basicProjects/
│   └── themeSwitcher/       Click-based theme switcher (HTML/CSS/JS)
├── calculator/              Basic calculator app (HTML/CSS/JS)
├── bg/                      CSS gradient background example
├── sudoku/, htsudokus/sudoku/   Third-party "javascript-sudoku" game clone, kept twice for reference
├── package.json             "type": "module", single dependency: node-fetch
└── *.js (repo root)         One file per JavaScript language feature (BigInt, NaN, IIFE,
                              rest operator, escape sequences, conversions, objects, ...),
                              including duplicate "copy" variants of several string-method files
```

Note: `sudoku/javascript-sudoku-main` and `htsudokus/sudoku/javascript-sudoku-main` are a downloaded tutorial project (its own README credits a YouTube walkthrough); it is not original code from this repository and is duplicated in two locations.

## Getting Started

### Prerequisites

- Node.js, to run the plain `.js` files and the `Promise/` fetch examples.
- A modern web browser, to open the `.html` pages directly.

### Environment variables

None. No script in this repository reads `process.env` or any `.env` file.

### Run locally

Install the one declared dependency (`node-fetch`, used only by the `Promise/` examples):

```bash
npm install
```

Run an individual concept script with Node:

```bash
node Arrays/reduce.js
node strings/StringMethods/trim.js
```

Run the fetch examples (requires internet access; these call `https://api.github.com` and `https://jsonplaceholder.typicode.com`):

```bash
node Promise/Fetch.js
node Promise/post.js
```

Open a browser-based file or mini-project directly in a browser, for example:

```
calculator/calculator.html
basicProjects/themeSwitcher/theme.html
events/04_keyboard.html
```

### Build

There is no build step, bundler, or framework configuration in this repository.

## Usage

Each folder is meant to be browsed by topic. Open a `.js` file to read the concept it demonstrates, or run it with `node <path>` to see the console output. Open an `.html` file in a browser for the DOM/event/mini-project examples.

## Design Decisions

- `package.json` sets `"type": "module"`, which is what allows `Promise/Fetch.js` and `Promise/post.js` to use `import fetch from "node-fetch"` instead of `require`.
- `calculator/calculatorScript.js` builds up the pressed-button characters into a string and evaluates it with `eval()` when `=` is pressed, rather than parsing the expression manually.

## Future Improvements

- Remove the duplicate "copy" files that mirror existing scripts (for example `access copy.js` / `access.js`, `case copy.js` / `case.js`) to reduce clutter.
- Consolidate the two duplicated Sudoku directories (`sudoku/` and `htsudokus/sudoku/`) into a single copy.
- Replace the `eval()`-based expression evaluation in the calculator with a small expression parser.
- Separate the unrelated coursework documents (PDFs, `.docx`) in `LAB/` from the JavaScript exercises, so the repository stays focused on code.

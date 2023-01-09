// Configuration, used by `rollup -c` during `npm run build`.

import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';

export default [
{
    input: 'src/module/script.js',
    output: [
        {
            format: 'es',
            file: 'build/es/script.js',
        },
        {
            format: 'es',
            file: 'build/es-min/script.js',
            plugins: [terser()],
        },
        {
            format: 'iife',
            file: 'build/iife/script.js',
        },
        {
            format: 'iife',
            file: 'build/iife-min/script.js',
            plugins: [terser()],
        },
    ],
    plugins: [
      copy({
        targets: [
          {
            src: 'src/module/index.html',
            dest: 'build/es',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'ES6 Module, Unminified')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/es-min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'ES6 Module, Terser Minified')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/iife',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'Immediately Invoked Function Expression, Unminified')
                .replace(' type="module"', '')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/iife-min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'Immediately Invoked Function Expression, Terser Minified')
                .replace(' type="module"', '')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/iife-3min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'Immediately Invoked Function Expression, THREE Minifier')
                .replace(' type="module"', '')
          },
        ]
      })
    ],
},

// Use three-minifier-rollup
{
    input: 'src/module/script.js',
    output: [
        {
            format: 'es',
            file: 'build/es-3min/script.js',
            plugins: [],
        },
        {
            format: 'es',
            file: 'build/es-min-3min/script.js',
            plugins: [terser()],
        },
        {
            format: 'iife',
            file: 'build/iife-3min/script.js',
            plugins: [],
        },
        {
            format: 'iife',
            file: 'build/iife-min-3min/script.js',
            plugins: [terser()],
        },
    ],
    plugins: [
      threeMinifier(), // plugin must be on the FIRST line
      copy({
        targets: [
          {
            src: 'src/module/index.html',
            dest: 'build/es-3min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'ES6 Module, just the special THREE Minifier, no Terser')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/es-min-3min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'ES6 Module, Terser Minified AND the special THREE Minifier')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/iife-3min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'IIFE, just the special THREE Minifier, no Terser')
                .replace(' type="module"', '')
          },
          {
            src: 'src/module/index.html',
            dest: 'build/iife-min-3min',
            transform: (html) => html
                .toString().replace(
                    'Source, ES6 Modules',
                    'IIFE, Terser Minified AND the special THREE Minifier')
                .replace(' type="module"', '')
          },
        ]
      })
    ],
},

];

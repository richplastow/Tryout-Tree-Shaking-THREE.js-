// Configuration, used by `rollup -c` during `npm run build`.

import copy from 'rollup-plugin-copy'
import terser from '@rollup/plugin-terser';

export default {
    input: 'src/module/script.js',
    output: [
        {
            format: 'iife',
            file: 'build/iife/script.js',
        },
        {
            format: 'iife',
            file: 'build/iife-min/script.js',
            plugins: [terser()],
        },
        {
            format: 'es',
            file: 'build/es/script.js',
        },
        {
            format: 'es',
            file: 'build/es-min/script.js',
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
                'ES6 Module, Minified')
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
                'Immediately Invoked Function Expression, Minified')
              .replace(' type="module"', '')
          },
        ]
      })  
    ],
};

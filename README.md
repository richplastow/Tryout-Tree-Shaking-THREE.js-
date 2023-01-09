# Tryout Tree Shaking THREE.js 🌳

__Work on THREE in 2022 made it more tree-shakable... let's try that out.__

## Setup

Assuming you have `static-server` installed globally:

```sh
git clone git@github.com:richplastow/tryout-tree-shaking-threejs.git
cd tryout-tree-shaking-threejs
npm i
npm run build
static-server
```

Then open http://localhost:9080/src/module/index.html in a browser.

If that’s working, `npm run publish` to populate docs/ ready for GitHub Pages.

## Builds:

<ul>
    <li>
        <b>src/module/index.html</b><br>
        <span>src/module/script.js 900 bytes</span><br>
        <span>....../build/three.module.js 1,172,800 bytes</span>
    </li>
    <li>
        <b>src/legacy/index.html</b> (can use file:///)<br>
        <span>src/legacy/script.js 741 bytes</span><br>
        <span>....../build/three.js 1,170,793 bytes</span><br>
        <span>....../build/three.min.js 608,313 bytes</span>
    </li>
    <li>
        <b>build/es/index.html</b><br>
        <span>build/es/index.js 735,980 bytes</span>
    </li>
    <li>
        <b>build/es-3min/index.html</b><br>
        <span>build/es-3min/index.js 717,076 bytes</span>
    </li>
    <li>
        <b>build/es-min/index.html</b><br>
        <span>build/es-min/index.js 405,236 bytes (339,738 mangled (broken), 331,153 and compress.drop_console, 330,967 and compress.unsafe)</span>
    </li>
    <li>
        <b>build/es-min-3min/index.html</b><br>
        <span>build/es-min-3min/index.js 386,354 bytes (312,176 mangled (broken) and compress.drop_console/unsafe)</span>
    </li>
    <li>
        <b>build/iife/index.html</b> (can use file:///)<br>
        <span>build/iife/index.js 753,044 bytes</span>
    </li>
    <li>
        <b>build/iife-3min/index.html</b> (can use file:///)<br>
        <span>build/iife-3min/index.js 734,121 bytes</span>
    </li>
    <li>
        <b>build/iife-min/index.html</b> (can use file:///)<br>
        <span>build/iife-min/index.js 405,272 bytes (331,003 mangled (broken) and compress.drop_console/unsafe)</span>
    </li>
    <li>
        <b>build/iife-min-3min/index.html</b> (can use file:///)<br>
        <span>build/iife-min-3min/index.js 386,385 bytes (386,385 mangled (broken) and compress.drop_console/unsafe)</span>
    </li>
</ul>
<hr>

<h4>Dependencies:</h4>
<ul>
    <li>Rollup 3.9.1</li>
    <li>rollup-plugin-copy 3.4.0</li>
    <li>@rollup/plugin-terser 0.3.0</li>
    <li>@yushijinhun/three-minifier-rollup 0.4.0</li>
    <li>THREE 0.148.0</li>
</ul>

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


## Builds:

<ul>
    <li>
        <b>src/module/index.html</b><br>
        src/module/script.js 900 bytes<br>
        ....../build/three.module.js 1,172,800 bytes
    </li>
    <li>
        <b>src/legacy/index.html</b> (can use file:///)<br>
        src/legacy/script.js 741 bytes<br>
        ....../build/three.js 1,170,793 bytes
    </li>
    <li>
        <b>build/es/index.html</b><br>
        build/es/index.js 736,009 bytes
    </li>
    <li>
        <b>build/es-min/index.html</b><br>
        build/es-min/index.js 405,237 bytes
    </li>
    <li>
        <b>build/iife/index.html</b> (can use file:///)<br>
        build/iife/index.js 753,038 bytes
    </li>
    <li>
        <b>build/iife-min/index.html</b> (can use file:///)<br>
        build/iife-min/index.js 405,272 bytes
    </li>
</ul>
<hr>
<h4>Dependencies:</h4>
<ul>
    <li>Rollup 3.9.1</li>
    <li>rollup-plugin-copy 3.4.0</li>
    <li>@rollup/plugin-terser 0.3.0</li>
    <li>THREE 0.148.0</li>
</ul>

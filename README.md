# tachyons-color-palette-generator

This generator will take a set of colors and generate shades and tints for color, border-color and background-color in a tachyons style syntax.

## Install
* Install node
* Install all node dependencies using:

```bash
npm install
```

## Use
Use the following to run the tool.

```bash
npm run gulp
```

It will watch for changes and automatically generate css.

Edit config.less with the colors you wish to use.

CSS can be found in bin/style.css

## Future Plans:
* Generate more complex palettes that chagne HSL instead of just calculating shades and tints
* Automatically generate palettes using triads, quadrads, etc.

## License
MIT License

Copyright (c) 2017 Arun Venkatesan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

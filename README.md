# NgxInputTrimmer

Very easy to use and trim anything in any input or textarea in angular 2+ version. 

## Installation

Add in your app.module.ts file.

```javascript
import { NgxInputTrimmer } from './input-trimmer.pipe';

# add in your declaration array under NgModule directory:-

declarations: [
    AppComponent,
    NgxInputTrimmer
  ],

```

## Usage

```html
# for trimming right side of spaces-
<input type="text" InputTrimmer removeSpaces="right"\>

# for trimming left side of spaces
<input type="text" InputTrimmer removeSpaces="left"\>

# for trimming both left and side of spaces 
<input type="text" InputTrimmer removeSpaces="both"\>

# By default if you dont define naything then it will use both and trim left and right side spaces
<input type="text" InputTrimmer removeSpaces>

```

## Options

It supports three options:-

1.) **both** :- which is a default option as it trim left and right spaces.\
2.) **left** :- which trim left spaces.\
3.) **right** :- which trim right side of the spaces.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Eww, Boring Legal Stuff!!
MIT License

Copyright (c) [year] [fullname]

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
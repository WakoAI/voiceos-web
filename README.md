# VoiceOS Web SDK

This package lets you use VoiceOS Web SDK

## Installation

You can install the package via npm:

```bash
npm install voiceos
```

## Usage

Import the VoiceOS class from the package:

```javascript
import VoiceOS from 'voiceos';
```

Create a new instance of the VoiceOS class by passing your Api Key as a parameter to the constructor:

```javascript
const voiceos = new VoiceOS('your-api-key');
```

You can start using the VoiceOS Web SDK:

```javascript
const agents = voiceos.agents.listAgents().then((response) => {
    console.log(response);
});

const calls = voiceos.calls.listCalls().then((response) => {
    console.log(response);
});

const phoneNumbers = voiceos.phoneNumbers.listPhoneNumbers().then((response) => {
    console.log(response);
});
```

## License

```
MIT License

Copyright (c) 2024 WakoAI Inc.

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
```
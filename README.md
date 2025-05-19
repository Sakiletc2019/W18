# W18 TypeScript Execution Engine

**W18** is a TypeScript execution engine that runs TypeScript code directly inside a web browser, similar to how the V8 JavaScript engine executes JavaScript. It allows developers to embed TypeScript in HTML files using the `<script>` tag, with the code being executed under the hood. W18 leverages **TypeScript** for development and **Deno 2.0** as the runtime environment.

---

## Features

- Execute TypeScript code directly in the browser using `<script type="ts">` or `<script type="typescript">` tags.
- Fully compatible with modern TypeScript syntax.
- Parse and execute TypeScript code in a browser environment.
- Aims to replicate the behavior of JavaScript engines like V8 for TypeScript.
- Written in TypeScript and tested with **Deno 2.0** runtime.
- Initial integration with Chromium for seamless browser support.

---

## Chromium Integration

We are excited to announce that the W18 engine is being integrated with Chromium to support TypeScript code directly in browsers. Developers will soon be able to:
- Use `<script type="ts">` and `<script type="typescript">` tags to run TypeScript code seamlessly.
- Automatically detect and execute TypeScript code using the W18 engine.

### Current Progress:
- The W18 engine, rewritten in **C++**, has been tested in its primary stage with Chromium and works properly.
- The HTML parser for Chromium is under development to auto-detect TypeScript code and execute it using the W18 engine.

This integration will solve challenges for developers who prefer working with TypeScript, making it easier to run TypeScript code directly in browsers without additional tools.

---

## Installation

To get started with the **W18 TypeScript Execution Engine**, clone the repository and install the necessary dependencies.

### Step 1: Clone the Repository
```bash
git clone https://github.com/Sakiletc2019/W18
cd W18
```

### Step 2: Run the Engine
Follow the documentation to set up the W18 engine in your environment and execute TypeScript code.

---

## Development Status

- **Current Stage**: Under development.
- **Next Milestone**: Chromium-integrated W18 engine launch on GitHub for developers.

---

## Updates

- **Last Updated**: May 18, 2025, at 2 PM (Standard Time).
- **Developed By**: Sakil Akhtar.

---

## Future Plans

- Full integration with Chromium for seamless TypeScript execution in browsers.
- Enhanced developer tools for debugging TypeScript in browsers.
- Comprehensive documentation and tutorials for developers.

Stay tuned for more updates as we continue development!

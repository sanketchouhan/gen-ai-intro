# Gen AI Intro

A small JavaScript project with introductory examples for calling Google's Gemini API and experimenting with prompt styles.

## Requirements

- Node.js 20.6 or later (for Node's `--env-file` option)
- A Gemini API key from [Google AI Studio](https://aistudio.google.com/apikey)

## Setup

Install dependencies:

```sh
npm install --legacy-peer-deps
```

The `--legacy-peer-deps` option is needed for the current dependency tree: `@langchain/community` brings in a peer dependency that expects `dotenv` 16, while this project declares `dotenv` 17.

Create a local environment file from the example:

```powershell
Copy-Item .env.example .env
```

Then edit `.env` and set your key:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Keep the real key private. `.env` is excluded from Git; do not put API keys in source files or commit them.

## Run an example

From the project root, run an example with Node's environment-file option:

```sh
node --env-file=.env src/hello.js
```

Other examples:

```sh
node --env-file=.env src/prompting/01_zero.js
node --env-file=.env src/prompting/02_few_shot.js
node --env-file=.env src/prompting/03_cot.js
```

The examples use the `gemini-3.5-flash-lite` model through the `@google/genai` SDK. Model availability and rate limits depend on your Google AI Studio project; see the [Gemini models](https://ai.google.dev/gemini-api/docs/models) and [rate limits](https://ai.google.dev/gemini-api/docs/rate-limits) documentation.

`03_cot.js` is an experimental multi-step example that asks the model for successive response steps. Its current error handling retries by continuing the conversation, so stop the process if it gets stuck after an API error.

## Project layout

```text
src/
  hello.js                 Basic Gemini interaction
  prompting/
    01_zero.js             Zero-shot prompt example
    02_few_shot.js         Few-shot prompt example
    03_cot.js              Experimental multi-step prompting example
```

## Tests

There are no tests configured yet. The current `npm test` script is a placeholder and exits with an error.

"use strict";

const resultProcessor = require('./resultProcessor');
const sarifLoader = require('../sarifLoader');

test('resultProcessor should load test001 and add contextual micro-learning material', async () => {
  const sarifs = await sarifLoader.load('./fixtures/test001.sarif');
  for (const sarif of sarifs) {
    const processed = await resultProcessor.process(sarif.runs[0]);
    expect(processed.tool.driver.name).toEqual('Tool Name 3');
  }
});

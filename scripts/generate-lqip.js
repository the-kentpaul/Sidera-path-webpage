#!/usr/bin/env node
const path = require('path');
const Jimp = require('jimp');

(async () => {
  const input = path.join(__dirname, '..', 'assets', 'images', 'cover-art.png');
  const output = path.join(__dirname, '..', 'assets', 'images', 'cover-art-lqip.jpg');
  try {
    const image = await Jimp.read(input);
    const targetWidth = 40;
    await image
      .resize(targetWidth, Jimp.AUTO)
      .quality(60)
      .blur(8)
      .writeAsync(output);
    console.log('Generated LQIP:', output);
  } catch (err) {
    console.error('LQIP generation failed:', err);
    process.exit(1);
  }
})();

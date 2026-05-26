(async function(){
  try{
    const m = await import('jimp');
    console.log('module keys:', Object.keys(m));
    console.log('default type:', typeof m.default);
    console.log('default keys:', m.default ? Object.keys(m.default) : null);
    console.log('has read on module:', !!m.read);
    console.log('has read on default:', !!(m.default && m.default.read));
    if (m.Jimp) console.log('Jimp keys:', Object.keys(m.Jimp));
  }catch(e){
    console.error('inspect failed', e);
    process.exit(1);
  }
})();

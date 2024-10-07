const zlib = require('zlib');
const input = 'Hello World!';

zlib.gzip(input, (err, compressedData) => {
    if (err) {
        console.log('Error compressing data:', err);
        return;
    }
    console.log(compressedData);

    zlib.gunzip(compressedData, (err, decompressedData) => {
        if (err) {
            console.error('Error decompressing data', err);
            return;
        }
        console.log('Decompressed Data:', decompressedData.toString());
    });
});

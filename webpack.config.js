var path = require('path')
 
module.exports = {
    mode: 'development',
    entry:'./src/index2.js',
    output: {
        filename: 'main.[hash].js',
        path: path.resolve(__dirname,'dist')
    }
}

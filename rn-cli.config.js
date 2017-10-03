const path = require('path');
module.exports = {
    getTransformModulePath() {
        return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
        return ['ts', 'tsx'];
    },
    getProjectRoots(){
        return [__dirname,path.resolve(__dirname,"src")]
    }
};
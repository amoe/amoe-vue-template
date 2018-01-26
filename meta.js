// meta.js

module.exports = {
    skipInterpolation: 'src/components/**/*.vue',
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        port: {
            type: 'number',
            message: 'Dev server port'
        }
    }
};

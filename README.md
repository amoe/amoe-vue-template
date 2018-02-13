# amoe-vue-template

## Usage

    vue init amoe/amoe-vue-template my-project

## Stack

Vue, Vuex, Webpack, Typescript, Karma, Mocha, Sinon, Chai, Axios

## Caveats

Although vue-template-compiler ideally should be sucked in as a dpependency of
vue-loader, it's currently not because it's listed as a `peerDependency`.  See
vue-loader issue #560 for more information.

This template only support Unix-based systems as it uses make & shell scripts
for some purposes.

We are waiting on a release of >3.0.8 `karma-typescript`, to resolve a warning
during `yarn install`.

https://github.com/monounity/karma-typescript/commit/2088ce3dfe0a001fa208c5d534a54e475d23c8de

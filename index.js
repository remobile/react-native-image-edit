'use strict';

const ReactNative = require('react-native');
const {
    NativeModules,
} = ReactNative;

const RCTImageEdit = NativeModules.ImageEdit;

export async function edit(uri, actions = [], { format = 'jpeg', ...rest } = {}) {
    return await RCTImageEdit.edit(uri, actions, { format, ...rest });
}

module.exports = {
    edit,
};

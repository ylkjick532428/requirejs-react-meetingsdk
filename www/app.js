// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: 'lib',
    paths: {
        app: '../app',
        react: 'https://source.zoom.us/3.6.0/lib/vendor/react.min',
        'react-dom': 'https://source.zoom.us/3.6.0/lib/vendor/react-dom.min',
        redux: 'https://source.zoom.us/3.6.0/lib/vendor/redux.min',
        'redux-thunk': 'https://source.zoom.us/3.6.0/lib/vendor/redux-thunk.min',
        lodash: "https://source.zoom.us/3.6.0/lib/vendor/lodash.min",
        '@zoom/meetingsdk': "zoomus-websdk.umd.min",
        'JsMediaSDK_Instance': 'https://source.zoom.us/3.6.0/lib/av/js_media.min',
        'webIM': 'https://source.zoom.us/3.6.0/lib/webim.min',
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['react', 'react-dom', 'redux', 'redux-thunk', 'lodash', '@zoom/meetingsdk', 'JsMediaSDK_Instance', 'webIM', 'app/main']);

define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var messages = require('./messages');
    var devConfig = require('./config').getConfig();

    // Load library/vendor modules using
    // full IDs, like:
    var print = require('print');
    var React = require('react');
    var ReactDOM = require('react-dom');
    var ZoomMtg = require('@zoom/meetingsdk').ZoomMtg;
    var JsMediaSDK_Instance = require('JsMediaSDK_Instance');
    window.webIM = require('webIM')
    window.JsMediaSDK_Instance = JsMediaSDK_Instance;
    // ZoomMtg
    
    print(devConfig, JsMediaSDK_Instance.version, ZoomMtg, messages.getHello());

    ZoomMtg.prepareWebSDK('', '', '');
    ZoomMtg.init({
        debug: true, // optional,
        // defaultView: 'gallery', // speaker || gallery
        leaveUrl: '/', // window.location.href, // required
    });
    devConfig.signature = ZoomMtg.generateSDKSignature({
        sdkKey: devConfig.sdkKey,
        sdkSecret: devConfig.sdkSecret,
        meetingNumber: devConfig.meetingNumber,
        role: devConfig.role || 0,
      });
    ZoomMtg.join({
        meetingNumber: devConfig.meetingNumber,
        userName: devConfig.userName,
        signature: devConfig.signature,
        sdkKey: devConfig.sdkKey,
        userEmail: devConfig.userEmail,
        passWord: devConfig.passWord,
    });
    // ReactDOM.render(
    //     React.createElement('p', {}, 'Hello, AMD!'),
    //     document.getElementById('root')
    //   );
    
    // console.log(react)
});

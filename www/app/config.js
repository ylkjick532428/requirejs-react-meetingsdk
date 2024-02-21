
  
  define(function () {
    function getExploreName() {
        const { userAgent } = navigator;
        if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
          return 'Opera';
        }
        if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1) {
          return 'IE';
        }
        if (userAgent.indexOf('Edge') > -1) {
          return 'Edge';
        }
        if (userAgent.indexOf('Firefox') > -1) {
          return 'Firefox';
        }
        if (userAgent.indexOf('Safari') > -1 && userAgent.indexOf('Chrome') === -1) {
          return 'Safari';
        }
        if (userAgent.indexOf('Chrome') > -1 && userAgent.indexOf('Safari') > -1) {
          return 'Chrome';
        }
        if (!!(window).ActiveXObject || 'ActiveXObject' in window) {
          return 'IE>=11';
        }
        return 'Unkonwn';
    }
      
    return {
        getConfig: function () {
            return {
                "sdkKey": "",
                "sdkSecret": "",
                "webEndpoint": "zoom.us",
                "meetingNumber": "",
                userName: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
                userEmail: `${getExploreName()}-${Math.floor(Math.random() * 1000)}@zoom.us`,
                passWord: 'zoom',
                role: 1,
                zak: '',
                type: 'sdk'
              };
        }
    };
});

  
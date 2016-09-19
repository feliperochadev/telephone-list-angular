angular.module("telephoneList").factory("timeStampInterceptor", function()
{
    return {
        request: function(config)
        {
            var url = config.url;
            if(url.indexOf('view') > -1) return config;
            config.url = url + "?timestap=" + new Date().getTime();
            console.log(config.url);
            return config;
        }
    }
});
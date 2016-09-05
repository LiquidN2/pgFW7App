var api_url = 'https://www.scdlab.com/_apps/bdm/';
var api_key = 'WKRe8PyITn6bRGfeSmDK';
var localDB;
if(typeof(Storage)!=="undefined")
{
    localDB = true;
}
else
{
    localDB = false;
}

function api_error(jqXHR, textStatus, errorThrown) {
    alert('error '+ textStatus);
    console.log("error " + textStatus);
    console.log("incoming Text " + jqXHR.responseText);
}

var app = {};
app.postJSON = function(url,params,callback){
    var options = {              //set the defaults
        success: function(data){  //hijack the success handler
            callback(data);   //if pass, call the callback
        }
        ,data:params
        ,method:'post'
        ,dataType:'json'
        ,headers:{'apikey':api_key}
        ,url: api_url+ url

};
    userToken = Lockr.get('token');
    if (typeof(userToken) != 'undefined' && typeof(userToken.token) != 'undefined'){
        options.data.token = userToken.token;
    }

    return $$.ajax(options);             //send request
}
var vpsApp = {
    'lookup': function(){
        console.log(myApp.formToJSON('#frm-search-customer'));
        app.postJSON('customers/list',myApp.formToJSON('#frm-search-customer')
            ,function(data){
                if ('error' in data){
                    appPasscode.notify = myApp.addNotification({
                        title: 'Error Login',
                        message:data.msg
                    });
                    return false;
                }

                console.log(data);
            }
        );
    }
}
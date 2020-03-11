var OneSignal =  require('onesignal-node');
var App_Id = process.env.APP_ID
var Api_Key = process.env.API_KEY
var USER_KEY = process.env.USER_KEY

var myClient = new OneSignal.Client({
    userAuthKey: USER_KEY,
    app: { appAuthKey: Api_Key, appId: App_Id }
});

module.exports = {

    sendNotice(userid) {
        var firstNotification = new OneSignal.Notification({
            app_id: APP_ID,
            contents: {
                en: "Testing",
            },
            include_player_ids: userid
        });
        myClient.sendNotification(firstNotification)
            .then(response => {
                return true
            })
            .catch(err => {
                return false
            });
    }
}

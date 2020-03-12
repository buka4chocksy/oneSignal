var OneSignal =  require('onesignal-node');
var App_Id = process.env.APP_ID
var Api_Key = process.env.API_KEY
var USER_KEY = process.env.USER_KEY

var myClient = new OneSignal.Client({
    userAuthKey: USER_KEY,
    app: { appAuthKey: Api_Key, appId: App_Id }
});

module.exports = {
    sendNotice: (userid)=>{
        return new Promise((resolve , reject)=>{
            var firstNotification = {
                app_id: App_Id,
                contents: {
                    en: "Testing should be done with the method of doing things and we will do all within our our will to make sure we achieve the best of all within a short period of time",
                },
                include_player_ids: [userid]
            }

        myClient.createNotification(firstNotification)
            .then(response => {
                resolve(true)
            })
            .catch(err => {
                reject(err)
            });
        })
    }
}

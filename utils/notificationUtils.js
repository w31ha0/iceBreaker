const notify = require("react-notify-toast").notify;
const config = require("../constants/config");

console.log("Notify is "+JSON.stringify(notify))

module.exports = {

    showNotification(message){
        notify.show(
            message,
            config.NOTIFICATION_TYPE,
            config.NOTIFICATION_TIMEOUT,
            {
                background: config.NOTIFICATION_BACKGROUND_COLOR,
                text: config.NOTIFICATION_TEXT_COLOR
            });
    }
}
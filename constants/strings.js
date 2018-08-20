const PUSHER_CHANNEL = 'iceBreaker'
const PUSHER_USER_LIST_UPDATE_EVENT = 'update-user-list'
const PUSHER_GAME_START_EVENT = 'game-start'
const PUSHER_NEW_EXCHANGE_REQUEST_EVENT = 'new-exchange-request'
const PUSHER_NEW_EXCHANGE_RESPONSE_EVENT = 'new-exchange-response'
const EXCHANGE_COMPLETED_EVENT = 'exchange-completed'
const PUSHER_GAME_STOP_EVENT = 'game-stop'
const PUSHER_EXCHANGE_CANCELLED_EVENT = 'cancel-exchange'

const NOTIFICATION_GAME_BEGUN = 'Game has begun!'
const NOTIFICATION_WRONG_DETAILS = 'You have entered the wrong details! Please try again!'
const NOTIFICATION_EXCHANGE_SUCCESSFUL = 'Exchange of letters successful!'
const NOTIFICATION_DUPLICATE_NAME = 'Name has already been taken! Please choose another one!'
const NOTIFICATION_INCOMPLETE_DETAILS = 'Please fill in all details!'
const NOTIFICATION_SAME_NAME_SELECTED = 'You are not allowed to exchange with yourself!'
const NOTIFICATION_GAME_ALREADY_IN_PROGRESS = 'Game already in progress! Please wait to join the next session!'
const NOTIFICATION_CANCEL_EXCHANGE = 'Exchange has been cancelled by the other party!'
const NOTIFICATION_GAME_STARTED_SUCCESSFUL = 'Game has been started successfully!'
const NOTIFICATION_GAME_STARTED_FAILED = 'Failed to start Game!'
const NOTIFICATION_GAME_STOP_SUCCESSFUL = 'Game has been stopped successfully!'
const NOTIFICATION_GAME_STOP_FAILED = 'Failed to stop Game!'

module.exports = {
    PUSHER_CHANNEL,PUSHER_USER_LIST_UPDATE_EVENT,PUSHER_NEW_EXCHANGE_REQUEST_EVENT,PUSHER_NEW_EXCHANGE_RESPONSE_EVENT,EXCHANGE_COMPLETED_EVENT,PUSHER_GAME_START_EVENT,
    NOTIFICATION_GAME_BEGUN,NOTIFICATION_WRONG_DETAILS,NOTIFICATION_EXCHANGE_SUCCESSFUL,NOTIFICATION_DUPLICATE_NAME,NOTIFICATION_INCOMPLETE_DETAILS,
    NOTIFICATION_SAME_NAME_SELECTED,PUSHER_GAME_STOP_EVENT,NOTIFICATION_GAME_ALREADY_IN_PROGRESS,PUSHER_EXCHANGE_CANCELLED_EVENT,NOTIFICATION_CANCEL_EXCHANGE,
    NOTIFICATION_GAME_STARTED_SUCCESSFUL,NOTIFICATION_GAME_STARTED_FAILED,NOTIFICATION_GAME_STOP_SUCCESSFUL,NOTIFICATION_GAME_STOP_FAILED
}
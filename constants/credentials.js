const PUSHER_APP_ID = process.env.APP_ID
const PUSHER_APP_KEY = "bb408fe5bb6058c10dbc"
const PUSHER_APP_SECRET = process.env.APP_SECRET
const PUSHER_APP_CLUSTER = "ap1"

console.log(PUSHER_APP_ID)
console.log(PUSHER_APP_KEY)
console.log(PUSHER_APP_SECRET)
console.log(PUSHER_APP_CLUSTER)

module.exports = {
    PUSHER_APP_ID,PUSHER_APP_KEY,PUSHER_APP_SECRET,PUSHER_APP_CLUSTER
}
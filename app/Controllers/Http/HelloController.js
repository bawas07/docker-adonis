'use strict'

const Logger = use('Logger')

class HelloController {
    ping ({request, response}) {
        Logger.info('You are pinging to this app')
        response.json({
            "you-said": "ping",
            "i-said": "pong"
        })
    }
}

module.exports = HelloController

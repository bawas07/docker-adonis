"use strict";

const Logger = use("Logger");

class HelloController {
    ping ({response}) {
        Logger.info("You are pinging to this app");
        console.log("aha");
        console.log("aha");
        response.json({
            "you-said": "ping",
            "i-said": "pong"
        });
    }
}

module.exports = HelloController;

angular.module("angularExercises")
    .factory("pubsub", function () {
        var pubsub = {};
        var topics = {};
        var subId = 0;

        pubsub.subscribe = function (topic, func) {
            if (!topics[topic]) {
                topics[topic] = [];
            }
            var token = (subId++).toString();
            topics[topic].push({
                token: token,
                func: func
            });
            return token;
        };

        pubsub.publish = function (topic, args) {
            if (!topics[topic]) {
                return false;
            }
            var subscribers = topics[topic],
                length = subscribers ? subscribers.length : 0;

            while (length--) {
                subscribers[length].func(topic, args);
            }
                
            return true;

        };

        pubsub.unsubscribe = function (topic, token) {
            var subscribers = topics[topic];
                if (subscribers) {
                    for (var i = 0; i < subscribers.length; i++) {
                        if (subscribers[i].token === token) {
                            subscribers.splice(i, 1);
                            return true;
                        }
                    }
                }
            return false;
        };

        return pubsub;

    });
var obj = new Proxy({},{
    get: function (target, key, reveiver) {
        console.log(`getting ${key}`)
    },
    set: function (target, key, varlue, reveiver) {
        console.log(`setting ${key}`)
        return Reflect.set(target, key, varlue, reveiver)
    }
})
JsMacros.on("Death",JavaWrapper.methodToJava(event => {
    Client.waitTick(10)
    event.respawn()
}))
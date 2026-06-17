JsMacros.on("Death",JavaWrapper.methodToJava(event => {
    Client.waitTick(5)
    event.respawn()
}))
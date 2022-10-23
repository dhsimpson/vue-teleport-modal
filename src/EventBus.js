import emitter from 'tiny-emitter/instance';

export default {
    install(app) {
        app.config.globalProperties.$eventBus = {$on: (...args) => emitter.on(...args),
        $once: (...args) => emitter.once(...args),
        $off: (...args) => emitter.off(...args),
        $emit: (...args) => emitter.emit(...args),}
    }

}
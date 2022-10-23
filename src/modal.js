const modals = [];

export default {
    install(app) {
        app.config.globalProperties.$modal = {
            show(modalName) {
                console.log(app)
                app.config.globalProperties.$eventBus.$emit('toggle-modal', modalName, true);
            },
            hide(modalName) {
                app.config.globalProperties.$eventBus.$emit('toggle-modal', modalName, false);
            },
            hideAll() {
                modals.forEach(modal => {
                    this.hide(modal)
                })
            },
            regist(modalName) {
                modals.push(modalName);
            }
        }
    }

}
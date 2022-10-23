import Modal from './components/Modal';

const modals = [];
const defaultComponentName = 'modal'

export default {
    install(app, options= {}) {

        app.config.globalProperties.$modal = {
            show(modalName) {
                app.config.globalProperties.$eventBus.$emit('toggle-modal', modalName, true);
            },
            hide(modalName) {
                app.config.globalProperties.$eventBus.$emit('toggle-modal', modalName, false);
            },
            hideAll() {
                modals.forEach(modal => {this.hide(modal)})
            },
            regist(modalName) {
                modals.push(modalName);
            }
        }

        this.componentName = options.componentName || defaultComponentName
        app.component(this.componentName, Modal)
    }

}
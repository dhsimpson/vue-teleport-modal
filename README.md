# vue-teleport-modal

## Before use 'vue-teleport-modal', you have to install and apply 'EventBus'

check [eventBus](/src/EventBus.js)
and [main.js](/src/main.js)      

**Note that** you have to regist name of EventBus as '$eventBus'.   
('vue-teleport-modal' call eventBus API through '$eventBus')

```
ex) below is what happened inside method 'this.$modal.show'
this.$eventBus.$emit('toggle-modal', 'modalName', true)
```
   
Vue3 doesn't support EventBus API, so you have to install [tiny-emitter](https://www.npmjs.com/package/tiny-emitter) or [mitt](https://www.npmjs.com/package/mitt)   
<hr/>

      
# Usage 
## Install
```
npm install --save vue-teleport-modal
```

## Regist Plugin
```
import modal from 'vue-teleport-modal'

app.use(modal)
```
   

## Use Modal component
c.f.) I set teleport's disabled option as 'false' but you can pass 'disabled' parameter
c.f.) **"'parentNode' and 'modalName'" is required args**
```
// Modal component registered globally
<template>
    <div id="modal-parent">

    </div>
    <modal parentNode="#modal-parent" :modalName="modalName">
        <div class="green-box"></div>
    </modal>
    <button @click="showModal">Open Modal!</button>
    <button @click="hideModal">Hide Modal!</button>
    <button @click="hideAllModal">Hide All Modal!</button>
</template>

<script>

export default {
    name: 'App',
    data() {
        return {
            modalName: 'sampleModal'
        }
    },
    created() {
    },
    methods: {
        showModal() {
            this.$modal.show(this.modalName);
        },
        hideModal() {
            this.$modal.hide(this.modalName);
        },
        hideAllModal() {
            this.$modal.hideAll();
        }
    }
}
</script>

<style scoped>
.green-box {
    background-color: green;
    width: 100px;
    height: 100px;
}
</style>

```

## You can use @before-open and @before-close
```
<modal @before-open="beforeOpen" @before-close="beforeClose" parentNode="#modal-parent" :modalName="modalName">
    <Your Html>
</modal>
```


<hr/>

## Version
ex) 0.1.3-2 (first.second.third-fourth)
 - first : When 'second' exceed 9 or Big usage change, increase 'first'   
 - second :  When 'third' exceed 9, increase 'second'   
 - third : When add methods or refactor code, increase 'third'   
 - fourth : When correct typo or change of comment

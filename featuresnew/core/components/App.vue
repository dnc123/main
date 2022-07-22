<template>
    <div class='application'>
        <slot></slot>
        <component v-if='componentModal' :is='componentModal' />
        <component v-if='componentToast' :is='componentToast' />
    </div>
</template>

<script>
    import {useEventBus} from '../composables/useEventBus';
    import {eventBusKeyModalOpen, eventButKeyToastCreate} from '../constants';
    import {onBeforeMount} from 'vue';

    export default {
        setup () {
            console.log('setup');
            const {busOnce} = useEventBus();

            onBeforeMount(() => {
                console.log('hehe', process.server);
                if (process.client) {
                    this.lazyLoadComponent(eventBusKeyModalOpen, 'componentModal', 'Modal');
                    this.lazyLoadComponent(eventButKeyToastCreate, 'componentToast', 'Toast');
                }
            });

            return {
                busOnce,
            };
        },

        created () {
            // if (process.client) {
            //     this.lazyLoadComponent(eventBusKeyModalOpen, 'componentModal', 'Modal');
            //     this.lazyLoadComponent(eventButKeyToastCreate, 'componentToast', 'Toast');
            // }
        },

        data () {
            return {
                componentModal: null,
                componentToast: null,
            };
        },

        methods: {
            lazyLoadComponent (eventBusKey, dataKey, componentName) {
                console.log(this.busOnce);
                this.busOnce(eventBusKey, async (_, __, ___) => {
                    this[dataKey] = (await import(`./${componentName}.vue`)).default;

                    // setTimeout(() => {
                    //     this.busEmit(eventBusKey, _, __, ___);
                    // });
                });
            },
        },
    };
</script>

<style lang='scss'>
    @import '../../../styles/global';
</style>

<style lang='scss' scoped>
    .application {
        height: 100vh;
        width:  100vw;
    }
</style>

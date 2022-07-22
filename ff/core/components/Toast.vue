<template>
    <transition-group tag='ul' name='slide-in-fade-out' class='toast'>
        <li
            v-for='toast in toasts'
            :key='toast.ID'
            class='toast__item'
            :class='`toast__item--${toast.type}`'
            @click='removeItemByID(toast.ID)'
        >
            <Icon class='toast__item__icon' :name='toast.icon' />
            <span class='toast__item__text'>{{ toast.message }}</span>
        </li>
    </transition-group>
</template>

<script>
    import Icon from './Icon';
    import removeFromArrayByKey from '../../../helpers/array/removeFromArrayByKey';
    import {useEventBus} from '../../../features/core/composables/useEventBus';
    import {eventButKeyToastCreate, eventBusKeyToastRemove} from '../constants';

    export default {
        setup () {
            const {busOn} = useEventBus();

            return {
                busOn,
            };
        },

        created () {
            this.busOn(eventButKeyToastCreate, (payload) => {
                this.toasts.unshift(payload);
            });

            this.busOn(eventBusKeyToastRemove, this.removeItemByID);
        },

        data () {
            return {
                toasts: [],
            };
        },

        methods: {
            removeItemByID (targetItemID) {
                removeFromArrayByKey(this.toasts, 'ID', targetItemID);
            },
        },

        components: {
            Icon,
        },
    };
</script>

<style lang='scss' scoped>
    @import '../../../styles/colors';
    @import '../../../styles/constants';

    .slide-in-fade-out-enter-active, .slide-in-fade-out-leave-active {
        transition: 0.3s;
    }

    .slide-in-fade-out-enter-to, .slide-in-fade-out-leave {
        transform: translateX(0);
    }

    .slide-in-fade-out-enter, .slide-in-fade-out-leave-to {
        transform: translateX(100%);
    }

    .slide-in-fade-out-leave-to {
        overflow: hidden;
        opacity:  0;
    }

    .toast {
        position: fixed;
        top:      $headerHeight + 2rem;
        right:    2rem;
        z-index:  10000;

        &__item {
            margin-bottom: 1rem;
            padding:       0.7rem;
            display:       flex;
            align-items:   center;
            cursor:        pointer;
            font-size:     1.6rem;
            box-shadow:    rgba(0, 0, 0, 0.2) 0 0.1rem 0.2rem 0;

            &--danger {
                background-color: $color__danger;
                color:            $color__light;

                .toast__item__icon {
                    fill: $color__light;
                }
            }

            &--success {
                background-color: $color__success;
                color:            $color__light;
                fill:             $color__light;
            }

            &--neutral {
                background-color: $color__neutral;
                color:            $color__light;
                fill:             $color__light;
            }

            &__icon {
                margin-right: 0.5rem;
            }

            &__text {
                font-weight: 400;
            }
        }
    }
</style>

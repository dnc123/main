<template>
    <div
        class='modal'
        :class='{
            "modal--opened": isOpened,
        }'
    >
        <div class='modal__backdrop' @click='close()' />

        <div class='modal__content'>
            <div class='modal__content__header'>
                {{ title }}

                <Icon
                    class='modal__content__header__closeIcon'
                    name='close'
                    :size-rem='2.6'
                    @click='close()'
                />
            </div>

            <div class='modal__content__body'>
                <div v-if='isContentLoading' class='modal__content__body__spinnerContainer'>
                    <Spinner :size-rem='5' />
                </div>

                <component v-else-if='modalContent' :is='modalContent' :key='contentUniqueKey' :given-data='givenData'>
                    <slot />
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon';
    import {useEventBus} from '../../../features/core/composables/useEventBus';
    import {eventBusKeyModalClose, eventBusKeyModalOpen} from '../constants';
    import Spinner from './Spinner';

    export default {
        setup() {
            const {busOn} = useEventBus();

            return {
                busOn,
            };
        },

        created () {
            this.busOn(eventBusKeyModalOpen, async (contentComponentName, title, data) => {
                this.isContentLoading = true;
                this.title = title;
                this.givenData = data;
                this.isOpened = true;
                this.contentUniqueKey = +new Date();

                try {
                    this.modalContent = (await import(`/features/core/components/modals/${contentComponentName}`)).default;
                } catch (error) {
                }

                this.isContentLoading = false;
            });

            this.busOn(eventBusKeyModalClose, this.close);
        },

        mounted () {
            document.addEventListener('keyup', this.handleEscapeClick);
        },

        beforeDestroy () {
            document.removeEventListener('keyup', this.handleEscapeClick);
        },

        data () {
            return {
                isOpened: false,
                title: null,
                givenData: null,
                modalContent: null,
                contentUniqueKey: null,
                isContentLoading: false,
            };
        },

        methods: {
            handleEscapeClick (event) {
                if (event.code === 'Escape') {
                    this.close();
                }
            },

            close () {
                this.isOpened = false;
            },
        },

        components: {
            Icon,
            Spinner,
        },
    };
</script>

<style lang='scss' scoped>
    @import '../../../styles/colors';
    @import '../../../styles/responsive';

    $animationDuration:   0.3s;
    $scrollbarWidth:      1.2rem;
    $horizontalPadding:   1.5rem;
    $contentBorderRadius: 1.5rem;

    .modal {
        position:       fixed;
        top:            0;
        left:           0;
        width:          100%;
        height:         100%;
        padding:        2rem 0;
        z-index:        10000;
        opacity:        0;
        pointer-events: none;
        overflow-y:     auto;
        transition:     opacity $animationDuration;
        display:        flex;
        align-items:    center;

        &.modal::-webkit-scrollbar {
            width: $scrollbarWidth;

            @include isMobile {
                width:  0;
                height: 0;
            }
        }

        &.modal::-webkit-scrollbar-thumb {
            background-color: darken($color__light, 15);
            border-radius:    #{$scrollbarWidth / 2};
            border:           3px solid transparent;

            &:hover {
                background-color: $color__light;
            }
        }

        &.modal--opened {
            opacity:        1;
            pointer-events: auto;

            .modal__content {
                transform: unset;
            }
        }

        &__content {
            width:         90%;
            margin:        auto;
            max-width:     46rem;
            border-radius: 1rem;
            z-index:       100;
            position:      relative;
            transform:     scale(0);
            transition:    transform $animationDuration;
            box-shadow:    rgba(0, 0, 0, 0.2) 0 0.4rem 0.4rem 0;

            &__header {
                background-color:        $color__dark;
                color:                   $color__light;
                font-size:               2.6rem;
                padding:                 1rem;
                font-weight:             400;
                text-align:              center;
                position:                relative;
                border-top-left-radius:  $contentBorderRadius;
                border-top-right-radius: $contentBorderRadius;
                user-select:             none;

                &__closeIcon {
                    background-color: $color__light;
                    cursor:           pointer;
                    position:         absolute;
                    right:            $horizontalPadding;
                    top:              50%;
                    padding:          0.3rem;
                    transform:        translateY(-50%);
                    border-radius:    50%;
                    fill:             $color__dark;
                }
            }

            &__body {
                background-color:           $color__light;
                padding:                    2rem $horizontalPadding;
                border-bottom-left-radius:  $contentBorderRadius;
                border-bottom-right-radius: $contentBorderRadius;

                &__spinnerContainer {
                    display:         flex;
                    justify-content: center;
                }
            }
        }

        &__backdrop {
            background-color: rgba(0, 0, 0, 0.4);
            width:            100%;
            height:           100%;
            position:         fixed;
            top:              0;
            left:             0;
        }
    }
</style>

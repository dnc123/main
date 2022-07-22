<template>
    <div
        class="page scrollBar"
        :class='{
            "page--verticalCentered": isVerticalCentered,
            "page--horizontalCentered": isHorizontalCentered,
        }'
    >
        <div class="page__contentContainer pageContainer">
            <div class="page__contentContainer__heading">
                <Button v-if="addItemHandler" @click="addItemHandler()">
                    Create new {{ createItemName }}
                </Button>
            </div>

            <slot />
        </div>
    </div>
</template>

<script>
    import Button from './Button';

    export default {
        props: {
            isVerticalCentered: {
                type: Boolean,
                default: false,
            },

            isHorizontalCentered: {
                type: Boolean,
                default: false,
            },

            addItemHandler: {
                type: Function,
                default: null,
            },

            createItemName: {
                type: String,
                default: null,
            },
        },

        components: {
            Button,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/constants';
    @import '../../../styles/colors';
    @import '../../../styles/responsive';

    $actionMarginFromEdgeMobile: 2rem;

    .page {
        height:         100%;
        display:        flex;
        flex-direction: column;
        padding:        1rem 2rem;

        &.page--verticalCentered {
            .page__contentContainer {
                margin: auto;
                height: auto;
            }
        }

        &--horizontalCentered {
            justify-content: center;
            margin:          auto;
        }

        &__contentContainer {
            position: relative;
            height:   100%;

            &__heading {
                display:         flex;
                justify-content: center;
                margin-bottom:   2rem;
            }
        }
    }
</style>

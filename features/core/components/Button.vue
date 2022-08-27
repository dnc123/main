<template>
    <button
        class='button'
        :class='{
            "button--small": isSmall,
        }'
    >
        <slot />
    </button>
</template>

<script setup>
    const {isSmall} = defineProps({
        isSmall: {
            type: Boolean,
            default: false,
        },
    });
</script>

<style lang='scss' scoped>
    .button {
        backface-visibility: hidden;
        background:          #332cf2;
        border:              0;
        border-radius:       8px;
        color:               #fff;
        cursor:              pointer;
        display:             inline-block;
        font-family:         Circular, Helvetica, sans-serif;
        font-size:           17px;
        font-weight:         700;
        padding:             12px 20px;
        transform:           translateZ(0) scale(1);
        transition:          transform 0.2s;
        user-select:         none;
        -webkit-user-select: none;
        touch-action:        manipulation;

        &:disabled {
            color:            #787878;
            background-color: #afacfd;
            cursor:           auto;
        }

        &:not(:disabled):hover {
            transform: scale(1.05);

            &:active {
                transform: scale(1.05) translateY(.125rem);
            }
        }

        &:focus {
            outline: 0 solid transparent;
        }

        &--small {
            padding:     8px 14px;
            line-height: 1;
            font-size:   14px;
        }
    }
</style>

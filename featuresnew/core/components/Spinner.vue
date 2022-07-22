<template>
    <div class='spinnerContainer'>
        <div class='spinnerContainer__spinner' :style='styles'></div>
    </div>
</template>

<script>
    import colors from '../../../styles/colors';

    export default {
        props: {
            sizeRem: {
                type: Number,
                default: 2,
            },

            isLight: {
                type: Boolean,
                default: false,
            },

            color: {
                type: String,
                default: null,
            },
        },

        computed: {
            styles () {
                const borderColor = this.color !== null
                    ? this.color
                    : this.isLight ? colors.light : colors.dark;

                return {
                    width: `${this.sizeRem}rem`,
                    height: `${this.sizeRem}rem`,
                    borderWidth: `${this.sizeRem / 9}rem`,
                    borderColor: `${borderColor} transparent ${borderColor} transparent`,
                };
            },
        },
    };
</script>

<style lang='scss' scoped>
    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .spinnerContainer {
        .spinnerContainer__spinner {
            border-radius: 50%;
            border-style:  solid;
            animation:     rotate 0.8s linear infinite;
        }
    }
</style>

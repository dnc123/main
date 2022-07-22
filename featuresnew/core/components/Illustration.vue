<template>
    <Pic
        :alt='alt'
        :width-px='widthPx'
        :height-px='heightPx'
        :max-width='maxWidth'
        :max-height='maxHeight'
        :src='src'
    />
</template>

<script>
    import Pic from './Pic';

    export default {
        components: {
            Pic,
        },

        props: {
            illustrationName: {
                type: String,
                required: true,
            },

            alt: {
                type: String,
                required: true,
            },

            heightPx: {
                type: Number,
                required: true,
            },

            widthPx: {
                type: Number,
                required: true,
            },

            maxHeight: {
                type: String,
                default: null,
            },

            maxWidth: {
                type: String,
                default: null,
            },
        },

        computed: {
            src () {
                return require(`../svg/illustrations/${this.illustrationName}.svg`);
            },
        },
    };
</script>

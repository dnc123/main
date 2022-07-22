<template>
    <component
        :is='src'
        class='icon'
        :style='{
            width: iconSizeRem,
            height: iconSizeRem,
            minWidth: iconSizeRem,
            maxWidth: iconSizeRem,
            minHeight: iconSizeRem,
            maxHeight: iconSizeRem,
        }'
        @click='$emit("click")'
    />
</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true,
            },

            sizeRem: {
                type: Number,
                default: 2,
            },
        },

        computed: {
            src () {
                return require(`../svg/icons/${this.name}.svg?inline`);
            },

            iconSizeRem () {
                return `${this.sizeRem}rem`;
            },
        },
    };
</script>

<template>
    <div class="note" contenteditable="true">
        {{ value }}
    </div>
</template>

<script>
    export default {
        props: {
            value: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/colors';
    
    .note {
        background-color: $color__light;
        padding:          1rem;
        word-wrap:        break-word;
        font-size:        1.6rem;
        box-shadow:       rgba(0, 0, 0, 0.2) 0 0.1rem 0.2rem 0;
        outline:          none;
    }
</style>

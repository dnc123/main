<template>
    <button
        :type="type"
        class="button"
        :class='{
            "button--loading": isLoading,
        }'
        @click='$emit("click")'
    >
        <Spinner class="button__spinner" is-light />
        <slot></slot>
    </button>
</template>

<script>
    import Spinner from './Spinner';
    
    export default {
        props: {
            type: {
                type: String,
                default: 'button',
            },
            
            paddingModifier: {
                type: Number,
                default: 1,
            },
            
            fontSizeRem: {
                type: Number,
                default: 1.6,
            },
            
            isLoading: {
                type: Boolean,
                default: false,
            },
        },
        
        components: {
            Spinner,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/colors';
    @import '../../../styles/responsive';
    
    $height: 5rem;
    
    .button {
        border:           none;
        background-color: $color__dark;
        color:            $color__light;
        fill:             $color__light;
        border-radius:    $height / 2;
        padding:          0 2rem;
        cursor:           pointer;
        font-size:        2rem;
        transition:       background-color 0.2s;
        position:         relative;
        display:          inline-flex;
        align-items:      center;
        justify-content:  center;
        height:           $height;
        user-select:      none;
        
        @include isDesktop {
            &.button:hover {
                background-color: lighten($color__dark, 8);
            }
        }
        
        &.button--loading {
            color: transparent;
            
            .button__spinner {
                display: block;
            }
        }
        
        .button__spinner {
            position:  absolute;
            top:       50%;
            left:      50%;
            transform: translate(-50%, -50%);
            display:   none;
        }
    }
</style>

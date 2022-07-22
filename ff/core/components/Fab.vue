<template>
    <button
        :type="type"
        class="fab"
        :class='{
            "fab--disabled": isDisabled,
        }'
        :style="styles"
        @click='$emit("click")'
    >
        <Spinner v-if="isLoading" class="fab__spinner" is-light :size-rem="sizeRem * 0.7" />
        <Icon v-else class="fab__icon" :name="icon" :size-rem="sizeRem * 0.7" />
    </button>
</template>

<script>
    import Icon from './Icon';
    import Spinner from './Spinner';
    
    export default {
        props: {
            type: {
                type: String,
                default: 'button',
            },
            
            sizeRem: {
                type: Number,
                default: 4,
            },
            
            icon: {
                type: String,
                required: true,
            },
            
            isLoading: {
                type: Boolean,
                default: false,
            },
            
            isDisabled: {
                type: Boolean,
                default: false,
            },
            
            backgroundColor: {
                type: String,
                default: null,
            },
        },
        
        computed: {
            styles() {
                const fabSizeRem = `${this.sizeRem}rem`;
                
                const styles = {
                    width: fabSizeRem,
                    height: fabSizeRem,
                };
                
                if (this.backgroundColor) {
                    styles['background-color'] = this.backgroundColor;
                }
                
                return styles;
            },
        },
        
        components: {
            Spinner,
            Icon,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/colors';
    @import '../../../styles/responsive';
    
    .fab {
        border-radius:    50%;
        padding:          0;
        background-color: $color__dark;
        border:           0;
        cursor:           pointer;
        position:         relative;
        transition:       background-color 0.3s;
        box-shadow:       rgba(0, 0, 0, 0.2) 0 0.2rem 0.2rem 0;
        outline:          none;
        display:          inline-flex;
        align-items:      center;
        justify-content:  center;
        
        @include isDesktop {
            &.fab:hover {
                background-color: lighten($color__dark, 10);
            }
        }
        
        &.fab--disabled {
            background-color: lighten($color__neutral, 40);
        }
        
        .fab__icon {
            fill: $color__light;
        }
        
        .fab__spinner {
            position:  absolute;
            top:       50%;
            left:      50%;
            transform: translate(-50%, -50%);
        }
    }
</style>

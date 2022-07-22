<template>
    <label
        class="checkbox"
        :class="{
            'checkbox--checked': value,
            'checkbox--loading': isLoading,
        }"
        :style="{
            '--circleColor': this.circleColor,
        }"
    >
        <span
            class="checkbox__box"
            :style='{
                borderRadius: isRounded ? "50%" : "0.5rem",
            }'
        >
            <Spinner
                v-if="isLoading"
                class="checkbox__box__spinner"
                :size-rem="2.6"
            />

            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 76.887 55.552"
                xml:space="preserve"
                class="checkbox__box__check"
            >
                <g id="Layer_15">
                    <polygon points="34.373,49.541 76.887,5.889 70.739,0 28.426,43.458 6.078,20.632 0,26.585 22.488,49.557 22.488,49.557 28.517,55.552 28.426,55.467 28.517,55.552 34.373,49.541" />
                </g>
            </svg>
        </span>
        
        <input
            type="checkbox"
            class="checkbox__input"
            :value="value"
            @input="click()"
        />
        
        <span class="checkbox__text">
            <slot />
        </span>
    </label>
</template>

<script>
    import Spinner from './Spinner';
    import colors from '../../../styles/colors';
    
    export default {
        props: {
            value: {
                type: Boolean,
                required: true,
            },
            
            circleColor: {
                type: String,
                default: colors.dark,
            },
            
            isRounded: {
                type: Boolean,
                default: false,
            },
            
            isLoading: {
                type: Boolean,
                default: false,
            },
        },
        
        methods: {
            click() {
                if (this.isLoading) {
                    return;
                }
                
                this.$emit('input', !this.value);
            },
        },
        
        components: {
            Spinner,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/colors';
    
    $size:                 2.6rem;
    $borderSize:           0.2rem;
    $transitionDuration:   0.3s;
    $neutralCheckboxColor: lighten(gray, 40);
    
    .checkbox {
        display:     inline-flex;
        align-items: center;
        cursor:      pointer;
        flex-shrink: 0;
        
        &--checked {
            .checkbox__box {
                border-color: var(--circleColor);
                
                &__check {
                    opacity: 1;
                }
            }
        }
        
        &--loading {
            .checkbox__box {
                border-color: $neutralCheckboxColor;
            }
        }
        
        &__box {
            height:           $size;
            width:            $size;
            border:           0.2rem solid $neutralCheckboxColor;
            position:         relative;
            transition:       border-color $transitionDuration;
            flex-shrink:      0;
            margin-right:     0.6rem;
            background-color: $color__light;
            
            &__spinner {
                position:  absolute;
                top:       50%;
                left:      50%;
                transform: translate(-50%, -50%);
            }
            
            &__check {
                fill:       var(--circleColor);
                opacity:    0;
                transition: opacity $transitionDuration;
                position:   absolute;
                top:        50%;
                left:       50%;
                transform:  translate(-50%, -50%);
                width:      70%;
                height:     70%;
            }
        }
        
        &__input {
            display: none;
        }
        
        &__text {
            font-size:   1.6rem;
            user-select: none;
            position:    relative;
            top:         0.1rem;
            width:       100%;
        }
    }
</style>

<template>
    <label
        class='input input--active'
        :class='{
            "input--withIcon": icon,
        }'
    >
        <input
            class='input__input'
            :value='value'
            :type='type'
            placeholder=' '
            :step='step'
            @input='emitNewValue($event)'
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        />

        <Icon v-if='icon' class='input__icon' :name='icon' />
        <span class='input__label'>{{ label }}</span>
        <span class='input__activeUnderline'></span>
    </label>
</template>

<script>
    import Icon from './Icon';

    export default {
        props: {
            value: {
                required: true,
            },

            label: {
                type: String,
                default: '',
            },

            icon: {
                type: String,
                default: null,
            },

            type: {
                type: String,
                default: 'text',
            },

            step: {
                type: Number,
                default: 0.001,
            },
        },

        methods: {
            emitNewValue (event) {
                let valueToEmit = event.target.value;

                if (this.type === 'number') {
                    if (event.data === 'e') {
                        valueToEmit = this.value;
                        this.$emit('input', valueToEmit + 1);
                    } else {
                        valueToEmit = Number(event.target.value);
                    }
                }

                setTimeout(() => {
                    this.$emit('input', valueToEmit);
                });

            },
        },

        components: {
            Icon,
        },
    };
</script>

<style lang='scss' scoped>
    @import '../../../styles/colors';

    $inputInactivePaddingHorizontal: 0.5rem;
    $inputInactiveFontSize:          1.6rem;
    $animationDuration:              0.3s;
    $iconSizeRem:                    2rem;
    $iconMarginLeft:                 0.4rem;
    $iconMarginRight:                0.3rem;
    $iconFullWidth:                  $iconSizeRem + $iconMarginLeft + $iconMarginRight;

    .input {
        position:    relative;
        padding-top: 1rem;
        width:       100%;
        display:     block;
        overflow:    hidden;

        &.input--withIcon {
            .input__input {
                padding-left: $iconFullWidth;
            }

            .input__label {
                left: $iconFullWidth;
            }
        }

        .input__icon {
            position: absolute;
            top:      1.7rem;
            left:     $iconMarginLeft;
        }

        .input__label {
            white-space: nowrap;
            cursor:      text;
            font-size:   $inputInactiveFontSize;
            position:    absolute;
            top:         1.8rem;
            left:        $inputInactivePaddingHorizontal;
            user-select: none;
            transition:  top $animationDuration, font-size $animationDuration, left $animationDuration;
        }

        .input__input {
            border:        0;
            border-bottom: 1px solid $color__dark;
            outline:       none;
            font-size:     $inputInactiveFontSize;
            width:         100%;
            padding:       0.8rem $inputInactivePaddingHorizontal 0.5rem 0.8rem;

            &:focus,
            &:active {
                ~ .input__icon {
                    fill: $color__dark;
                }

                ~ .input__activeUnderline {
                    width: 100%;
                }

                ~ .input__label {
                    color: $color__dark;
                }
            }

            &:focus,
            &:active,
            &.input__input:not(:placeholder-shown) {
                ~ .input__label {
                    top:       0;
                    font-size: 1.3rem;
                    left:      0;
                }
            }
        }

        .input__activeUnderline {
            display:          block;
            height:           0.1rem;
            background-color: $color__dark;
            width:            0;
            transition:       width $animationDuration;
        }
    }
</style>

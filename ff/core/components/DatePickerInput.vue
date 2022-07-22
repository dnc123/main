<template>
    <div
        class='datePickerInput'
        :class='{
            "datePickerInput--opened": isOpened,
        }'
    >
        <span class='datePickerInput__label' @click='isOpened = true'>
            <Icon name='event' class='datePickerInput__label__icon' />

            <template v-if='isRange'>
                {{ value.from && value.to ? `${formatDate(value.from)} to ${formatDate(value.to)}` : label }}
            </template>

            <template v-else>
                {{ value ? formatDate(value) : label }}
            </template>
        </span>

        <div
            class='datePickerInput__backdrop'
            @click.self='isOpened = false'
        >
            <DatePicker
                v-if='isOpened'
                v-on='$listeners'
                v-bind='$attrs'
                :value='value'
                class='datePickerInput__backdrop__datePicker'
                :is-range='isRange'
                @input='handleDateSelected($event)'
                @done='isOpened = false'
            />
        </div>
    </div>
</template>

<script>
    import Input from './Input';
    import DatePicker from './DatePicker';
    import Icon from './Icon';
    import formatDate from '../../../helpers/date/formatDate';

    export default {
        inheritAttrs: false,

        props: {
            value: {
                type: [Date, Object],
                default: null,
            },

            isRange: {
                type: Boolean,
                default: false,
            },

            label: {
                type: String,
                required: true,
            },
        },

        data () {
            return {
                isOpened: false,
            };
        },

        methods: {
            formatDate,

            handleDateSelected (newValue) {
                if (!this.isRange) {
                    this.isOpened = false;
                }

                this.$emit('input', newValue);
            },
        },

        components: {
            Icon,
            Input,
            DatePicker,
        },
    };
</script>

<style lang='scss' scoped>
    @import '../../../styles/colors';

    .datePickerInput {
        &--opened {
            .datePickerInput__backdrop {
                opacity:        1 !important;
                pointer-events: unset !important;
            }
        }

        &__label {
            border-bottom: 1px solid $color__dark;
            display:       flex;
            font-size:     1.6rem;
            padding:       0.4rem;
            align-items:   center;
            cursor:        pointer;

            &__icon {
                margin-right: 0.4rem;
            }
        }

        &__backdrop {
            position:         fixed;
            z-index:          1000;
            top:              0;
            left:             0;
            background-color: transparentize(black, 0.3);
            display:          flex;
            align-items:      center;
            justify-content:  center;
            width:            100%;
            height:           100%;
            opacity:          0;
            pointer-events:   none;
            transition:       opacity 0.3s;

            &__datePicker {
                background-color: $color__light;
                box-shadow:       0 0 0.3rem 0 rgba(0, 0, 0, 0.2)
            }
        }
    }
</style>

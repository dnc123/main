<template>
    <select @input='handleValueInput($event)'>
        <option
            v-for='option in options'
            :key='option[valueKey]'
            :value='option[valueKey]'
            :selected='option[valueKey] === value[valueKey]'
        >
            {{ option[textKey] }}
        </option>
    </select>
</template>

<script>
    export default {
        methods: {
            handleValueInput (event) {
                const selectedOption = this.options.find((option) => {
                    return option[this.valueKey] === event.target.value;
                });

                this.$emit('input', selectedOption);
            },
        },

        props: {
            options: {
                type: Array,
                required: true,
            },

            value: {
                type: Object,
                default: null,
            },

            textKey: {
                type: String,
                default: 'text',
            },

            valueKey: {
                type: String,
                default: 'value',
            },
        },
    };
</script>

<template>
    <form
        class='form'
        @submit.prevent='submitForm()'
    >
        <slot />

        <div class='form__actions'>
            <Fab
                :is-disabled='isDisabled'
                icon='done'
                :is-loading='isLoading'
                type='submit'
                :background-color='isOfflineAndCantSubmitOffline ? $options.colors.neutral : null'
            />
        </div>
    </form>
</template>

<script>
    import toast from '../methods/toast';
    import modalClose from '../methods/modalClose';
    import Icon from '../components/Icon';
    import Fab from '../components/Fab';
    import colors from '../../../styles/colors';

    export default {
        colors,

        props: {
            submitFunction: {
                type: Function,
                required: true,
            },

            messageDisabled: {
                type: String,
                default: null,
            },

            isOfflineSubmissionEnabled: {
                type: Boolean,
                default: false,
            },
        },

        data () {
            return {
                isLoading: false,
            };
        },

        computed: {
            isDisabled () {
                return !!this.messageDisabled;
            },

            isOfflineAndCantSubmitOffline () {
                return $nuxt.isOffline && !this.isOfflineSubmissionEnabled;
            },
        },

        methods: {
            modalClose,

            async submitForm () {
                if (this.isOfflineAndCantSubmitOffline) {
                    toast({
                        type: 'neutral',
                        message: 'This form can only be submitted being online',
                        icon: 'wifi_off',
                    });

                    return;
                }

                if (this.isDisabled) {
                    toast({
                        type: 'danger',
                        message: this.messageDisabled,
                        icon: 'warning',
                    });

                    return;
                }

                this.isLoading = true;
                await this.submitFunction();
                this.isLoading = false;
            },
        },

        components: {
            Icon,
            Fab,
        },
    };
</script>

<style lang='scss' scoped>
    @import '../../../styles/colors';

    .form {
        &__actions {
            margin-top:      1.5rem;
            display:         flex;
            justify-content: flex-end;
            align-items:     center;
        }
    }
</style>

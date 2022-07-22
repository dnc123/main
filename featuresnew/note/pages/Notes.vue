<template>
    <Page class="notes" :heading="heading">
        <div class="notes__container">
            <Note
                v-for="note in notes"
                :key="note.ID"
                class="notes__container__note"
                :value="note.message"
            />
        </div>
        <!--        <div v-if="checklists.length" class="checklists__container">-->
        <!--            <Checklist-->
        <!--                class="checklists__container__checklist"-->
        <!--                v-for="checklist in checklists"-->
        <!--                :key="checklist.ID"-->
        <!--                :checklist="checklist"-->
        <!--            />-->
        <!--        </div>-->

        <!--        <NoItemsFound v-else item-name="checklist" :button-click-handler="modalOpenCreateChecklist" />-->

        <!--        <template slot="actions">-->
        <!--            <Fab icon="add" @click="modalOpenCreateChecklist()" />-->
        <!--        </template>-->
    </Page>
</template>

<script>
    // import Fab from '../../../featuresnew/core/components/Fab';
    import Page from '../../../featuresnew/core/components/Page';
    // import Checklist from '../components/Checklist';
    // import { checklistNamespace, checklistStateAll } from '../vuex/constants';
    // import Illustration from '../../core/components/Illustration';
    // import modalOpen from '../../core/methods/modalOpen';
    // import Button from '../../../featuresnew/core/components/Button';
    // import NoItemsFound from '../../core/components/NoItemsFound';
    import Note from '../components/Note';

    export default {
        props: {
            heading: {
                type: String,
                required: true,
            },

            notesVuexModule: {
                type: Object,
                required: true,
            },
        },

        created() {
            this.$store.registerModule(checklistNamespace, this.notesVuexModule);
        },

        destroyed() {
            this.$store.unregisterModule(checklistNamespace);
        },

        methods: {
            // modalOpen,
            //
            // modalOpenCreateChecklist() {
            //     modalOpen('CreateChecklist', 'Create a checklist');
            // },
        },

        computed: {
            notes() {
                return [
                    {
                        ID: 1,
                        message: 'adfagfd gsdfgsdfgsdfgds',
                    },
                    {
                        ID: 2,
                        message: 'adffdgsdgs dsfgsdf',
                    },
                    {
                        ID: 3,
                        message: 'sdfgsdfgsf',
                    },
                ];
            },
            // checklists() {
            //     return this.$store.state[checklistNamespace][checklistStateAll];
            // },
        },

        components: {
            Note,
            // NoItemsFound,
            // Button,
            Page,
            // Illustration,
            // Checklist,
            // Fab,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/responsive';

    .notes {
        .notes__container {
            column-count: 1;
            column-gap:   2rem;
            padding:      2rem;

            @media (min-width: 600px) {
                column-count: 2;
            }

            @include isDesktop {
                column-count: 1;
            }

            @media (min-width: 870px) {
                column-count: 2;
            }

            .notes__container__note {
                display:       inline-block;
                width:         100%;
                margin-bottom: 2.5rem;
            }
        }
    }
</style>

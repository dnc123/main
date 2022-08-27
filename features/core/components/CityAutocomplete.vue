<template>
    <div
        ref='citiesAutocomplete'
        class='citiesAutocomplete'
        :class='{
            "citiesAutocomplete--opened": isOpened,
        }'
    >
        <input
            :value='capitalizeFirstLetterOfAllWordsInString(props.targetCity)'
            class='citiesAutocomplete__input'
            type='search'
            placeholder='City name...'
            @focus='isOpened = true'
            @input='handleCityInput($event)'
        />

        <ul class='citiesAutocomplete__items'>
            <li
                v-for='city in cities'
                :key='city._id'
                class='citiesAutocomplete__items__item'
            >
                {{ city.name }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import get__core__citiesAutocomplete from '@endpoints/get__core__citiesAutocomplete';
    import {ref, watch} from 'vue';
    import filterRemoveObjectDuplicates from '@main/helpers/array/filterRemoveObjectDuplicates';
    import debounce from '@main/helpers/other/debounce';
    import {onClickOutside} from '@vueuse/core';
    import capitalizeFirstLetterOfAllWordsInString from '@main/helpers/string/capitalizeFirstLetterOfAllWordsInString';

    const citiesAutocomplete = ref(null);
    const cities = ref([]);
    const isOpened = ref(false);

    const emit = defineEmits([
        'update:target-city',
    ]);

    const props = defineProps({
        targetCity: {
            type: String,
            default: '',
        },
    });

    onClickOutside(citiesAutocomplete, () => {
        isOpened.value = false;
    });

    watch(() => props.targetCity, fetchCities);

    function handleCityInput (event) {
        emit('update:target-city', event.target.value);
    }

    async function fetchCities () {
        debounce('citiesAutocomplete', 800, async () => {
            console.log('a', props.targetCity);
            if (props.targetCity === '') {
                console.log('b');
                cities.value = [];

                return;
            }

            console.log('c');

            cities.value = await get__core__citiesAutocomplete({
                cityName: props.targetCity,
            });
        });
    }
</script>

<style lang='scss' scoped>
    .citiesAutocomplete {
        position: relative;

        &--opened {
            .citiesAutocomplete {
                &__input {
                    border-bottom-left-radius:  0;
                    border-bottom-right-radius: 0;
                }

                &__items {
                    opacity:     1;
                    user-select: auto;
                }
            }
        }

        &__input {
            outline:            none;
            -webkit-appearance: none;
            border:             0;
            border-radius:      20px;
            padding:            0 16px;
            box-shadow:         0 3px 4px rgba(0, 0, 0, 0.15);
            width:              100%;
            height:             40px;
            transition:         border-radius 0.15s;
            font-family:        Circular, Helvetica, sans-serif;
        }

        &__items {
            opacity:                    0;
            user-select:                none;
            padding:                    0;
            list-style:                 none;
            margin:                     0;
            position:                   absolute;
            top:                        100%;
            width:                      100%;
            transition:                 opacity 0.15s;
            box-shadow:                 0 3px 4px rgba(0, 0, 0, 0.15);
            border-bottom-left-radius:  20px;
            border-bottom-right-radius: 20px;

            &__item {
                padding:          8px 12px;
                cursor:           pointer;
                background-color: white;
                font-family:      Circular, Helvetica, sans-serif;

                &:last-child {
                    border-bottom-left-radius:  20px;
                    border-bottom-right-radius: 20px;
                }
            }
        }
    }
</style>

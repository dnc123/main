<template>
    <span />
</template>

<script setup>
    import {useMap} from '../composables/useMap';
    import {getClient} from '../../../api/leaflet';
    import {onBeforeMount, ref} from 'vue';
    import {MAP_ITEM_TYPE_MARKER} from '../constants/mapItemTypes';

    const props = defineProps({
        lat: Number,
        lng: Number,

        title: {
            type: String,
            default: null,
        },

        popups: {
            type: Array,
            default: () => [],
        },
    });

    const {map} = useMap();
    const activePopupIndex = ref(0);

    function getActivePopupHTML () {
        let popupHTML = props.popups[activePopupIndex.value];

        if (props.popups.length > 1) {
            popupHTML += '<hr />';
            popupHTML += '<div style="display: flex; justify-content: center; align-items: center;">';
            popupHTML += `    <button id='prev' class='popupButton'> < </button>`;
            popupHTML += `    <span style='display: inline-block; margin: 0 8px;'>${activePopupIndex.value + 1} / ${props.popups.length}</span>`;
            popupHTML += `    <button id='next' class='popupButton'> > </button>`;
            popupHTML += '</div>';
        }

        return popupHTML;
    }

    function addPopupButtonsEventListeners (marker) {
        const buttonPrev = document.getElementById('prev');
        const buttonNext = document.getElementById('next');

        if (buttonPrev) {
            buttonPrev.addEventListener('click', () => {
                activePopupIndex.value = activePopupIndex.value === 0
                    ? props.popups.length - 1
                    : activePopupIndex.value - 1;

                marker.setPopupContent(getActivePopupHTML());
                addPopupButtonsEventListeners(marker);
            });
        }

        if (buttonNext) {
            buttonNext.addEventListener('click', () => {
                activePopupIndex.value = activePopupIndex.value === props.popups.length - 1
                    ? 0
                    : activePopupIndex.value + 1;

                marker.setPopupContent(getActivePopupHTML());
                addPopupButtonsEventListeners(marker);
            });
        }
    }

    onBeforeMount(async () => {
        const leaflet = await getClient();

        const newMarker = leaflet.marker([props.lat, props.lng], {
            type: MAP_ITEM_TYPE_MARKER,
            title: props.title,
            riseOnHover: true,
        });

        if (props.popups.length) {
            newMarker
                .addEventListener('popupopen', () => addPopupButtonsEventListeners(newMarker))
                .bindPopup(getActivePopupHTML(), {
                    closeButton: false,
                });
        }

        newMarker.addTo(map.value);
    });
</script>

<style lang='scss'>
    .popupButton {
        height:        24px;
        width:         24px;
        border-radius: 12px;
        border:        0;
        cursor:        pointer;
        user-select:   none;
    }
</style>

<template>
    <!--    <div class='map__map' :style='mapStyles' @transitionend='invalidateMapSize()'>-->

    <div class='map' :id='id' />


    <!--        <div v-if='map' class='map__map__controls'>-->
    <!--            <slot></slot>-->
    <!--        </div>-->
    <!--    </div>-->

    <!--    <div class="map position&#45;&#45;relative height&#45;&#45;100">-->
    <!--            <div class="map__map" :style="mapStyles" @transitionend="invalidateMapSize()">-->
    <!--                <div :id="mapID" class="height&#45;&#45;100"></div>-->

    <!--                <span v-if="infoBoxSizePercentage < 100" class="map__map__attribution">-->
    <!--    				&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-->
    <!--    				contributors-->
    <!--    			</span>-->

    <!--                <div v-if="map" class="map__map__controls">-->
    <!--                    <slot></slot>-->
    <!--                </div>-->
    <!--            </div>-->

    <!--        <div-->
    <!--            v-if="!isInfoBoxDisabled"-->
    <!--            class="map__infoBox shadow&#45;&#45;even left&#45;&#45;0 width&#45;&#45;100"-->
    <!--            :style="infoBoxStyles"-->
    <!--        >-->
    <!--            <div class="height&#45;&#45;100 overflow&#45;&#45;hidden" :style="infoBoxBorderCutterStyles">-->
    <!--                <slot name="infoBox"></slot>-->
    <!--            </div>-->
    <!--        </div>-->
    <!--    </div>-->
</template>

<script setup>
    import {onMounted, onBeforeMount, ref} from 'vue';
    import {useEventBus} from '../../../features/core/composables/useEventBus.ts';
    import {getClient} from '../../../api/leaflet.ts';

    let mapCount = 0;

    const props = defineProps({
        id: String,
    });

    const {busEmit, busOn} = useEventBus();
    const map = ref(null);

    onBeforeMount(async () => {
        mapCount++;

        // Starts loading leaflet client
        await getClient();
    });

    onMounted(mountMap);

    async function mountMap () {
        const leaflet = await getClient();
        //await require(`leaflet-routing-machine`);

        map.value = leaflet.map(props.id, {
            zoomControl: false,
            attributionControl: false,

            maxBounds: [
                [-90, -180],
                [90, 180],
            ],
        });

        // const emittableEventListeners = [
        //     `click`,
        //     `moveend`,
        //     `move`,
        //     `movestart`,
        //     `unload`,
        //     `zoomstart`,
        //     `zoomlevelschange`,
        //     `zoom`,
        //     `zoomend`,
        //     `viewreset`,
        //     `resize`,
        //     `mousemove`,
        // ];

        // map.value.on(`load`, () => {
        //     map.value.invalidateSize();
        //     // this.invalidateMapSize();
        //     // this.$emit(`created-map-id`, mapID);
        //     // this.$emit(`created`, map);
        // });

        // emittableEventListeners.forEach((emmitableEventListener) => {
        //     if (this.$listeners[emmitableEventListener]) {
        //         this.map
        //             .on(emmitableEventListener, (event) => {
        //                 this.$emit(emmitableEventListener, event);
        //             });
        //     }
        // });
        //
        map.value.setView([
            10,
            10,
        ], 10);
        //
        // const mapTilesCache = await caches.open(indexedDBMapTilesDBName);
        // const self = this;
        //
        // const OfflineTilesLayer = L.TileLayer.extend({
        //     createTile(coords, done) {
        //         const tileURL = getMapTileURL(coords.z, coords.x, coords.y);
        //         const tileImage = document.createElement(`img`);
        //
        //         tileImage.style.visibility = `visible`;
        //
        //         if (self.base__isOnline) {
        //             tileImage.src = tileURL;
        //         } else {
        //             mapTilesCache
        //                 .match(tileURL)
        //                 .then(async (tileInCache) => {
        //                     if (tileInCache) {
        //                         const imageBlob = await tileInCache.blob();
        //
        //                         tileImage.src = await fromBlobToBase64(imageBlob);
        //                         done(null, tileImage);
        //                     }
        //                 });
        //         }
        //
        //         return tileImage;
        //     },
        //
        //     getAttribute() {
        //         return ``;
        //     },
        // });
        //
        // const offlineTilesLayer = new OfflineTilesLayer();
        //
        // offlineTilesLayer.addTo(this.map);

        // no uncomment
        leaflet.tileLayer(
            `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
            {
                maxZoom: 18,
            },
        ).addTo(map.value);

        // setTimeout(() => {
        //     map.value.invalidateSize();
        // }, 1000);
        // L.Routing.control({
        // 	waypoints: [
        // 		L.latLng(57.74, 25.94),
        // 		L.latLng(67.6792, 30.949),
        // 	],
        //
        // 	show: false,
        //
        // 	router: new L.Routing.OSRMv1({
        // 		serviceUrl: `http://localhost:5000/route/v1`,
        // 	}),
        // }).addTo(this.map);
    }

    // import { addHeadElement } from '@/helpers/libraries';
    // import Icon from '@/components/base/buttons/Icon';
    // import { mapGetters, mapState } from 'vuex';
    // import { namespace as responsiveNamespace } from '@/store/responsive';
    // import { types as responsiveGetterTypes } from '@/store/responsive/getters';
    // import { fromBlobToBase64 } from '@donatas123/main/helpers/file';
    // import { indexedDBMapTilesDBName } from '@donatas123/main/features/tripOffline/constants';
    // import getMapTileURL from '@/features/map/methods/getMapTileURL';
    // import { namespace as baseNamespace } from '@/store/base';
    // import { types as baseStateTypes } from '@/store/base/state';
    //
    // export const infoBoxTransitionDurationMS = 300;
    //
    // export default {
    //     props: {
    //         initialCenterLat: {
    //             type: Number,
    //             default: 46.8182,
    //         },
    //
    //         initialCenterLng: {
    //             type: Number,
    //             default: 8.2275,
    //         },
    //
    //         initialZoom: {
    //             type: Number,
    //             default: 11,
    //         },
    //
    //         isInfoBoxCloseDisabled: {
    //             type: Boolean,
    //             default: false,
    //         },
    //
    //         infoBoxSizePercentage: {
    //             type: Number,
    //             default: 0,
    //         },
    //
    //         isInfoBoxDisabled: {
    //             type: Boolean,
    //             default: false,
    //         },
    //
    //         maxInfoBoxWidthDesktop: {
    //             type: Number,
    //             default: 40,
    //         },
    //     },
    //
    //     provide() {
    //         return {
    //             getMap: () => {
    //                 return this.map;
    //             },
    //         };
    //     },
    //
    //     data() {
    //         return {
    //             mapID: null,
    //             map: null,
    //         };
    //     },
    //
    //     async mounted() {
    //         this.mapID = generateUnique();
    //
    //         let mapMountHack = setInterval(() => {
    //             if (document.getElementById(this.mapID)) {
    //                 this.mountMap();
    //                 clearTimeout(mapMountHack);
    //             }
    //         }, 100);
    //     },
    //
    //     computed: {
    //         ...mapGetters({
    //             responsive__isDesktop: `${responsiveNamespace}/${responsiveGetterTypes.isDesktop}`,
    //         }),
    //
    //         ...mapState({
    //             base__isOnline: (state) => state[baseNamespace][baseStateTypes.isOnline],
    //         }),
    //
    //         infoBoxBorderSize() {
    //             return `2rem`;
    //         },
    //
    //         infoBoxBorderCutterStyles() {
    //             const borderRadius = this.responsive__isDesktop || this.infoBoxSizePercentage === 100
    //                 ? 0
    //                 : this.infoBoxBorderSize;
    //
    //             return {
    //                 'border-top-left-radius': borderRadius,
    //                 'border-top-right-radius': borderRadius,
    //             };
    //         },
    //
    //         infoBoxStyles() {
    //             const styles = {
    //                 transition: `
    // 					height ${infoBoxTransitionDurationMS}ms,
    // 					top ${infoBoxTransitionDurationMS}ms,
    // 					width ${infoBoxTransitionDurationMS}ms
    // 				`,
    //             };
    //
    //             if (this.responsive__isDesktop) {
    //                 styles.height = `100%`;
    //
    //                 if (this.infoBoxSizePercentage < 100) {
    //                     styles.width = `${this.maxInfoBoxWidthDesktop}rem !important`;
    //                 }
    //             } else {
    //                 styles.height = `${this.infoBoxSizePercentage}%`;
    //
    //                 if (this.infoBoxSizePercentage < 100) {
    //                     styles[`border-top-left-radius`] = this.infoBoxBorderSize;
    //                     styles[`border-top-right-radius`] = this.infoBoxBorderSize;
    //                 }
    //             }
    //
    //             return styles;
    //         },
    //
    //         mapStyles() {
    //             const styles = {};
    //
    //             if (this.responsive__isDesktop) {
    //                 styles.height = `100%`;
    //
    //                 if (this.infoBoxSizePercentage === 100) {
    //                     styles.width = `0`;
    //                     styles.overflow = `hidden`;
    //                 }
    //             } else {
    //                 styles.height = this.infoBoxSizePercentage > 0 ?
    //                     `calc(${100 - this.infoBoxSizePercentage}% + ${this.infoBoxBorderSize})`
    //                     : `100%`;
    //
    //                 styles.width = `100%`;
    //             }
    //
    //             return styles;
    //         },
    //     },
    //
    //     methods: {
    //         invalidateMapSize() {
    //             this.map.invalidateSize();
    //         },
    //
    //         async mountMap() {
    //             if (!window.leaflet) {
    //                 window.leaflet = await import(`leaflet`);
    //                 //await require(`leaflet-routing-machine`);
    //
    //                 addHeadElement(`link`, {
    //                     rel: `stylesheet`,
    //                     href: `https://unpkg.com/leaflet@1.6.0/dist/leaflet.css`,
    //                     integrity: `sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==`,
    //                     crossorigin: ``,
    //                 });
    //             }
    //
    //             this.map = leaflet.map(this.mapID, {
    //                 zoomControl: false,
    //                 attributionControl: false,
    //
    //                 maxBounds: [
    //                     [-90, -180],
    //                     [90, 180],
    //                 ],
    //             });
    //
    //             const emittableEventListeners = [
    //                 `click`,
    //                 `moveend`,
    //                 `move`,
    //                 `movestart`,
    //                 `unload`,
    //                 `zoomstart`,
    //                 `zoomlevelschange`,
    //                 `zoom`,
    //                 `zoomend`,
    //                 `viewreset`,
    //                 `resize`,
    //                 `mousemove`,
    //             ];
    //
    //             this.map.on(`load`, () => {
    //                 this.invalidateMapSize();
    //                 this.$emit(`created-map-id`, this.mapID);
    //                 this.$emit(`created`, this.map);
    //             });
    //
    //             emittableEventListeners.forEach((emmitableEventListener) => {
    //                 if (this.$listeners[emmitableEventListener]) {
    //                     this.map
    //                         .on(emmitableEventListener, (event) => {
    //                             this.$emit(emmitableEventListener, event);
    //                         });
    //                 }
    //             });
    //
    //             this.map.setView([
    //                 this.initialCenterLat,
    //                 this.initialCenterLng,
    //             ], this.initialZoom);
    //
    //             const mapTilesCache = await caches.open(indexedDBMapTilesDBName);
    //             const self = this;
    //
    //             const OfflineTilesLayer = L.TileLayer.extend({
    //                 createTile(coords, done) {
    //                     const tileURL = getMapTileURL(coords.z, coords.x, coords.y);
    //                     const tileImage = document.createElement(`img`);
    //
    //                     tileImage.style.visibility = `visible`;
    //
    //                     if (self.base__isOnline) {
    //                         tileImage.src = tileURL;
    //                     } else {
    //                         mapTilesCache
    //                             .match(tileURL)
    //                             .then(async (tileInCache) => {
    //                                 if (tileInCache) {
    //                                     const imageBlob = await tileInCache.blob();
    //
    //                                     tileImage.src = await fromBlobToBase64(imageBlob);
    //                                     done(null, tileImage);
    //                                 }
    //                             });
    //                     }
    //
    //                     return tileImage;
    //                 },
    //
    //                 getAttribute() {
    //                     return ``;
    //                 },
    //             });
    //
    //             const offlineTilesLayer = new OfflineTilesLayer();
    //
    //             offlineTilesLayer.addTo(this.map);
    //
    //             // L
    //             // 	.tileLayer(
    //             // 		`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
    //             //
    //             // 		{
    //             // 			maxZoom: 18,
    //             // 		},
    //             // 	)
    //             // 	.addTo(this.map);
    //
    //             // L.Routing.control({
    //             // 	waypoints: [
    //             // 		L.latLng(57.74, 25.94),
    //             // 		L.latLng(67.6792, 30.949),
    //             // 	],
    //             //
    //             // 	show: false,
    //             //
    //             // 	router: new L.Routing.OSRMv1({
    //             // 		serviceUrl: `http://localhost:5000/route/v1`,
    //             // 	}),
    //             // }).addTo(this.map);
    //         },
    //     },
    //
    //     components: {
    //         Icon,
    //     },
    // };
</script>

<style lang='scss'>
    .map {
        width:  100%;
        height: 100%;
    }
</style>

<style lang='scss' scoped>
    //@import '~@/styles/responsive';
    //@import '~@/styles/constants';
    //
    //.map {
    //    @include isDesktop {
    //        display: flex;
    //    }
    //
    //    .map__map {
    //        position:   absolute;
    //        width:      100%;
    //        transition: width 0.3s;
    //
    //        @include isDesktop {
    //            position: relative;
    //            order:    1;
    //        }
    //
    //        .map__map__controls {
    //            position:       absolute;
    //            top:            0;
    //            left:           0;
    //            width:          100%;
    //            height:         100%;
    //            z-index:        500;
    //            pointer-events: none;
    //        }
    //
    //        .map__map__attribution {
    //            position:         absolute;
    //            top:              0;
    //            right:            0;
    //            z-index:          400;
    //            background-color: rgba(255, 255, 255, 0.7);
    //            font-size:        1.1rem;
    //            padding:          0 0.5rem;
    //            color:            #333;
    //            cursor:           auto;
    //            pointer-events:   auto;
    //            font:             12px/1.5 'Helvetica Neue', Arial, Helvetica, sans-serif;
    //
    //            a {
    //                color: #0078A8;
    //            }
    //        }
    //    }
    //
    //    .map__infoBox {
    //        background-color: $containerBackgroundColor;
    //        z-index:          500;
    //        top:              100%;
    //        transform:        translateY(-100%);
    //        position:         absolute;
    //
    //        @include isDesktop {
    //            position:  static;
    //            top:       0;
    //            left:      0;
    //            transform: translateY(0);
    //            order:     0;
    //        }
    //
    //        .map__infoBox__closeIcon {
    //            position:  absolute;
    //            top:       0;
    //            left:      50%;
    //            transform: translate(-50%, -50%);
    //            z-index:   100;
    //        }
    //    }
    //}
</style>

<style lang='scss'>
    //.map {
    //    .map__map__controls {
    //        > * {
    //            pointer-events: all;
    //        }
    //    }
    //}
    //
    //.leaflet-control-container {
    //    display: none;
    //}
</style>

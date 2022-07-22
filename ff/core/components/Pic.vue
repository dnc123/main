<template>
    <img
        ref="pic"
        class="pic"
        :class="{
            'pic--loaded': isLoaded,
        }"
        :style="styles"
        :width="widthPx"
        :height="heightPx"
        draggable="false"
        :src="src"
        :alt="alt"
        @click="$emit('click')"
        @load="isLoaded = true"
    />
</template>

<script>
    export default {
        props: {
            alt: {
                type: String,
                required: true,
            },
            
            src: {
                type: String,
                required: true,
            },
            
            heightPx: {
                type: Number,
                required: true,
            },
            
            widthPx: {
                type: Number,
                required: true,
            },
            
            widthCss: {
                type: String,
                default: '',
            },
            
            heightCss: {
                type: String,
                default: '',
            },
            
            maxHeight: {
                type: String,
                default: null,
            },
            
            maxWidth: {
                type: String,
                default: null,
            },
        },
        
        data() {
            return {
                isLoaded: false,
            };
        },
        
        computed: {
            styles() {
                const styles = {};
                
                if (this.maxWidth !== null) {
                    styles['max-width'] = this.maxWidth;
                }
                
                if (this.maxHeight !== null) {
                    styles['max-height'] = this.maxHeight;
                }
                
                if (this.widthCss) {
                    styles['width'] = this.widthCss;
                }
                
                if (this.heightCss) {
                    styles['height'] = this.heightCss;
                }
                
                return styles;
            },
        },
    };
</script>

<style lang="scss" scoped>
    .pic {
        opacity:     0;
        display:     inline-block;
        user-select: none;
        max-width:   100%;
        width:       100%;
        height:      auto;
        
        &--loaded {
            opacity: 1;
        }
    }
</style>

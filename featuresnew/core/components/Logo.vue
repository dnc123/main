<template>
    <Pic
        :src="src"
        alt="Personal Route logo"
        :height-px="size"
        :width-px="size"
        :max-width="`${size}px`"
        :max-height="`${size}px`"
    />
</template>

<script>
    import Pic from './Pic';
    import allowedLogoSizes from '../constants/allowedLogoSizes';
    
    export default {
        props: {
            size: {
                type: Number,
                default: allowedLogoSizes.px64,
            },
            
            isLight: {
                type: Boolean,
                default: false,
            },
        },
        
        computed: {
            src() {
                let logoImageSize;
                
                if (this.size <= allowedLogoSizes.px32) {
                    logoImageSize = allowedLogoSizes.px32;
                } else if (this.size <= allowedLogoSizes.px64) {
                    logoImageSize = allowedLogoSizes.px64;
                } else if (this.size <= allowedLogoSizes.px128) {
                    logoImageSize = allowedLogoSizes.px128;
                } else if (this.size <= allowedLogoSizes.px256) {
                    logoImageSize = allowedLogoSizes.px256;
                } else if (this.size <= allowedLogoSizes.px512) {
                    logoImageSize = allowedLogoSizes.px512;
                }
                
                const colorMode = this.isLight ? 'light' : 'dark';
                
                return require(`../images/logo/logo--${colorMode}--${logoImageSize}.png`);
            },
        },
        
        components: {
            Pic,
        },
    };
</script>

<template>
    <header class="header">
        <h1>{{ $options.PAGE_NAME_TO_TITLE_MAP[$route.name] }}</h1>
        <slot />
    </header>
</template>

<script>
    import { PAGE_NAME_TO_TITLE_MAP } from '../constants/pageToTitleMap';
    
    export default {
        PAGE_NAME_TO_TITLE_MAP,
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/constants';
    @import '../../../styles/colors';
    @import '../../../styles/responsive';
    
    $headerSideWidth: 7rem;
    
    .header {
        height:           $headerHeight;
        position:         relative;
        z-index:          1000;
        padding:          0 10px;
        background-color: $color__dark;
        color:            $color__light;
        display:          flex;
        align-items:      center;
        justify-content:  center;
        
        @include isDesktop {
            display: none;
        }
        
        h1 {
            //todo - make font size clamp
            font-size:   clamp(2rem, 7vw, 3rem);
            font-weight: 400;
        }
    }
</style>

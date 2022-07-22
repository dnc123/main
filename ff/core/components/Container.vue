<template>
    <div class="container">
        <!--        :class='{-->
        <!--        "container&#45;&#45;active": isActive,-->
        <!--        }'-->
        <!--        <h3-->
        <!--            v-if='heading'-->
        
        <!--            class='-->
        <!--				width&#45;&#45;100-->
        <!--				margin__bottom&#45;&#45;medium-->
        <!--				textAlign&#45;&#45;center-->
        <!--				background__color&#45;&#45;secondary-->
        <!--				fontSize&#45;&#45;big-->
        <!--				color&#45;&#45;light-->
        <!--				padding__all&#45;&#45;big-->
        <!--			'-->
        <!--        >-->
        <!--            {{ heading }}-->
        <!--        </h3>-->
        
        <!--        <div-->
        <!--            :class='{-->
        <!--				"padding__all&#45;&#45;big": !isPadingless,-->
        <!--			}'-->
        <!--        >-->
        <slot></slot>
        <!--        </div>-->
    </div>
</template>

<script>
    import colors from '../../../styles/colors';
    
    export default {
        inheritAttrs: false,
        
        props: {
            // heading: {
            //     type: String,
            //     default: ``,
            // },
            //
            // isActive: {
            //     type: Boolean,
            //     default: false,
            // },
            //
            // color: {
            //     type: String,
            //     default: colors.dark,
            // },
            //
            // isPadingless: {
            //     type: Boolean,
            //     default: false,
            // },
        },
        
        // computed: {
        // styles () {
        //     return {
        //         backgroundColor: this.color !== colors.dark
        //             ? this.color
        //             : colors.light,
        //     };
        // },
        // },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/colors';
    
    .container {
        //transition:       transform 0.3s, box-shadow 0.3s;
        padding:          1.5rem;
        border-radius:    0.5rem;
        //box-shadow:       rgba(0, 0, 0, 0.2) 0 0.1rem 0.2rem 0;
        background-color: darken($color__light, 5);
        
        //&.container--active {
        //    transform:  scale(1.03);
        //    box-shadow: 0 0 1rem transparentize($color__dark, 0.7),
        //                0 0 1rem transparentize($color__dark, 0.7) !important;
        //}
    }
</style>

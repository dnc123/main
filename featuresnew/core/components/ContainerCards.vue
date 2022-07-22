<template>
    <div class="containerCards">
        <nuxt-link
            v-for="card in cards"
            :key="card.name" :to="card.path"
            append
            class="containerCards__outerCardContainer"
        >
            <div class="containerCards__outerCardContainer__content">
                <Icon
                    :name="card.icon"
                    :size-rem="3.8"
                    class="containerCards__outerCardContainer__content__icon"
                />
                
                <p class="containerCards__outerCardContainer__content__title">
                    {{ card.name }}
                </p>
            </div>
        </nuxt-link>
    </div>
</template>

<script>
    import Icon from './Icon';
    
    export default {
        props: {
            cards: {
                type: Array,
                required: true,
            },
        },
        
        components: {
            Icon,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/_responsive.scss';
    @import '../../../styles/colors.scss';
    @import '../../../styles/constants.scss';
    
    $gridGapMobile:  0.8rem;
    $gridGapDesktop: 1.6rem;
    
    .containerCards {
        width:                 100%;
        display:               grid;
        grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
        grid-gap:              $gridGapMobile;
        padding:               $gridGapMobile;
        justify-items:         center;
        
        @include isDesktop {
            grid-gap:              $gridGapDesktop;
            padding:               $gridGapDesktop;
            grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
        }
        
        @media screen and (min-width: 1300px) {
            grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
        }
        
        .containerCards__outerCardContainer {
            vertical-align:   top;
            border:           2px solid $color__light;
            transition:       border-color 0.2s;
            width:            100%;
            position:         relative;
            padding-bottom:   100%;
            background-color: $color__light;
            
            .containerCards__outerCardContainer__content {
                position:        absolute;
                top:             0;
                left:            0;
                width:           100%;
                height:          100%;
                display:         flex;
                align-items:     center;
                justify-content: center;
                flex-direction:  column;
                box-shadow:      rgba(0, 0, 0, 0.2) 0 0.2rem 0.4rem 0;
            }
            
            &:hover {
                border: 2px solid $color__dark;
            }
            
            .containerCards__outerCardContainer__content__icon {
                height:        4rem;
                fill:          $color__dark;
                margin-bottom: 1rem;
                
                @include isDesktop {
                    height: 5rem;
                }
            }
            
            .containerCards__outerCardContainer__content__title {
                color: $color__dark;
                
                @include isDesktop {
                    font-size: 2.2rem
                }
            }
        }
    }
</style>

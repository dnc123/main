<template>
    <div class="noItemsFound">
        <Illustration
            alt="Illustration empty box"
            illustration-name="empty"
            :width-px="1010"
            :height-px="790"
            max-width="300px"
        />
        
        <p class="noItemsFound__label">
            <span class="noItemsFound__label__message">No {{ itemName }}s created</span>
            <Button @click="buttonClickHandler()">Create first {{ itemName }}</Button>
        </p>
    </div>
</template>

<script>
    import Illustration from './Illustration';
    import Button from './Button';
    
    export default {
        props: {
            itemName: {
                type: String,
                required: true,
            },
            
            buttonClickHandler: {
                type: Function,
                required: true,
            },
        },
        
        components: {
            Illustration,
            Button,
        },
    };
</script>

<style lang="scss" scoped>
    @import '../../../styles/constants';
    @import '../../../styles/colors';
    
    .noItemsFound {
        height:           100%;
        width:            100%;
        display:          flex;
        align-items:      center;
        justify-content:  center;
        flex-direction:   column;
        position:         absolute;
        top:              0;
        left:             0;
        z-index:          20;
        background-color: $color__light;
        
        .noItemsFound__label {
            margin-top: 2rem;
            font-size:  2rem;
            text-align: center;
            
            .noItemsFound__label__message {
                margin-bottom: 0.5rem;
                display:       block;
            }
        }
    }
</style>

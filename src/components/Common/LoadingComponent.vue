<template>
    <div>
        <i class="twicon-black-bear"></i>
        <div class="loading-text">
            <span>Loading...</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoadingComponent"
    }
</script>

<style scoped lang="scss">
    i{
        font-size: 3em;
        margin:    0 15px;
    }
    .loading-text{
        display:           inline-block;
        width:             135px;
        overflow:          hidden;
        vertical-align:    bottom;
        -webkit-animation: loading 2s linear infinite;
        animation:         loading 2s linear infinite;
        transition:        1s;
        font-size:         2em;
    }
    @keyframes loading{
        from{
            width: 0;
        }
        to{
            width: 135px;
        }
    }
</style>
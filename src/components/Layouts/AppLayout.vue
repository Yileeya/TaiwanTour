<template>
    <div class="row">
        <div class="col-md-12">
            <header-view/>
            <banner-search-view/>
<!--            <loading-view v-if="isLoading"/>-->
            <router-view></router-view>
<!--            <footer-view/>-->
        </div>
    </div>
</template>

<script>
    import HeaderView from '@/components/Common/HeaderView';
    import BannerSearchView from '@/components/Common/BannerSearchView';
    export default {
        name: "AppLayout",
        components: {BannerSearchView, HeaderView},
    }
</script>

<style scoped lang="scss">
.row{
    margin: 0;
    background: #FAFAFA;
    .col-md-12{
        padding: 0 30px;
    }
}
</style>
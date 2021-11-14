<template>
    <div class="row">
        <div class="col-md-12">
            <header-view style="margin-bottom: 88px"/>
<!--            <loading-view v-if="isLoading"/>-->
            <router-view></router-view>
            <footer-view/>
        </div>
    </div>
</template>

<script>
    import HeaderView from '@/components/Common/HeaderView';
    import FooterView from '@/components/Common/FooterView';
    export default {
        name: "AppLayout",
        components: {FooterView, HeaderView},
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
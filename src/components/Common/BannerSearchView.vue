<template>
    <div class="banner">
        <h1>探索，福爾摩沙。</h1>
        <div class="search-form-group">
            <county-select class="county-select" v-model="selectedCounty"/>
            <div class="search-form">
                <search-type-select class="search-type-select" v-model="selectedSearchType"/>
                <b-form-input class="keyWord-input" v-model="keyWord" placeholder="請輸入關鍵字"/>
                <b-button variant="success">搜尋</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import CountySelect from '@/components/County/CountySelect';
    import SearchTypeSelect from '@/components/SearchType/SearchTypeSelect';

    export default {
        name: "BannerSearchView",
        components: {SearchTypeSelect, CountySelect},
        data() {
            return {
                keyWord: null,
                selectedCounty: '全台縣市',
                selectedSearchType: 1
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
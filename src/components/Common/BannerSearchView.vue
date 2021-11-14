<template>
    <div class="banner">
        <h1>探索，<br>福爾摩沙。</h1>
        <!--        <div class="search-form-group">-->
        <!--            <county-select class="county-select"/>-->
        <!--            <div class="search-form">-->
        <!--                <search-type-select class="search-type-select" v-model="selectedSearchType"/>-->
        <!--                <b-form-input class="keyWord-input" v-model="keyWord" placeholder="請輸入關鍵字"/>-->
        <!--                <b-button variant="success" @click="search">搜尋</b-button>-->
        <!--            </div>-->
        <!--        </div>-->
    </div>
</template>

<script>
    // import CountySelect from '@/components/County/CountySelect';
    // import SearchTypeSelect from '@/components/SearchType/SearchTypeSelect';
    import {mapState} from 'vuex';

    export default {
        name: "BannerSearchView",
        // components: {SearchTypeSelect, CountySelect},
        computed: {
            ...mapState({
                keyWordState: state => state.searchKeyword
            })
        },
        watch: {
            keyWord(newVal) {
                this.$store.commit('UPDATE_SEARCH_KEYWORD', newVal)
            }
        },
        data() {
            return {
                keyWord: null,
                selectedSearchType: 1
            }
        },
        created() {
            this.$store.commit('UPDATE_SEARCH_KEYWORD', null);
            this.$store.commit('UPDATE_COUNTY', '全台縣市');
        },
        methods: {
            search() {
                if(this.selectedSearchType == 1) {
                    this.$router.push({
                        path: '/scenicSpot'
                    });
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .banner{
        display:     flex;
        align-items: center;
    }
</style>
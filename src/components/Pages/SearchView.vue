<template>
    <div class="search-area">
        <county-select class="county-select"/>
        <b-form-input class="key-word-input"
                      v-model="keyWord"
                      placeholder="想探索哪裡呢？請輸入關鍵字"/>
        <b-button variant="success" @click="search">搜尋</b-button>
    </div>
</template>

<script>
    import CountySelect from '@/components/County/CountySelect';
    import {mapState} from 'vuex';

    export default {
        name: "SearchView",
        components: {CountySelect},
        props: {
            isSearch: {
                type: Boolean,
                default: false
            }
        },
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
                keyWord: null
            }
        },
        created() {
            if(this.keyWordState !== null) {
                this.keyWord = this.keyWordState;
            }
        },
        methods: {
            search(){
                this.$emit('update:isSearch', true)
            }
        }
    }
</script>

<style scoped lang="scss">
    .search-area{
        display: flex;
        .county-select, .key-word-input{
            margin: 0 15px;
        }
        .key-word-input{
            width: 300px;
        }
    }
</style>
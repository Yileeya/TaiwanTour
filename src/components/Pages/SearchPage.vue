<template>
    <div>
        <div>
            <!--            <search-view :is-search.sync="isSearch"/>-->
            <tags-view style="margin: 15px"/>
            <div class="cards-area">
                <loading-component v-if="!pageData.length"/>
                <card-component class="card-component"
                                v-for="(card, i) in pageData"
                                :key="i"
                                :classification="route.name"
                                :card-data="card"
                                :list="true"/>
            </div>
            <div v-if="pageData.length" class="text-center">
                <button class="btn btn-lg" @click="fetchData(pageData.length)">載入更多</button>
            </div>
        </div>
    </div>
</template>

<script>
    import TagsView from '@/components/Pages/TagsView';
    // import SearchView from '@/components/Pages/SearchView';
    import {mapState} from 'vuex';
    import CardComponent from '@/components/Common/CardComponent';
    import LoadingComponent from '@/components/Common/LoadingComponent';

    export default {
        name: "SearchPage",
        components: {LoadingComponent, CardComponent, TagsView},
        computed: {
            ...mapState({
                route: state => state.route
            })
        },
        watch: {
            route() {
                this.fetchData()
            },
            isSearch(newVal) {
                if(newVal == true) {
                    this.fetchData(0);
                }
            }
        },
        data() {
            return {
                pageData: [],
                isSearch: false
            }
        },
        async created() {
            await this.fetchData(0)
        },
        methods: {
            async fetchData(skipNumber) {
                let apiData = [];
                if(this.route.name == 'scenicSpot') {
                    apiData = await this.getScenicSpots(null, 30, skipNumber)
                } else if(this.route.name == 'restaurant') {
                    apiData = await this.getRestaurants(null, 30, skipNumber)
                } else if(this.route.name == 'hotel') {
                    apiData = await this.getHotels(null, 30, skipNumber)
                } else if(this.route.name == 'activity') {
                    apiData = await this.getActivities(null, 30, skipNumber)
                } else {
                    return
                }
                if(skipNumber) {
                    this.pageData = this.pageData.concat(apiData);
                } else {
                    this.pageData = apiData;
                }
                this.isSearch = false;
            }
        }
    }
</script>

<style scoped lang="scss">
    .cards-area{
        display:   flex;
        flex-wrap: wrap;
        .card-component{
            width:  calc(25% - 30px);
            margin: 15px;
            height: auto;
            @media (max-width: 768px){
                width: calc(50% - 30px);
            }
            @media (max-width: 576px){
                width: calc(100% - 30px);
            }
        }
    }
    ::v-deep.card{
        position:      relative;
        overflow:      hidden;
        height:        100%;
        border-radius: 1.5em;
        transition:    all 0.3s;
        .card-img{
            height:              150px;
            background-size:     cover;
            background-position: center;
        }
        .card-hover-description{
            display: none;
        }
        .card-body{
            padding:         1rem 1.25rem;
            display:         flex;
            flex-direction:  column;
            justify-content: space-around;
        }
        &:hover{
            cursor:     pointer;
            transform:  scale(1.05);
            transition: all 0.3s;
            .card-hover-description{
                display: none;
            }
        }
    }
    .btn-lg{
        background:    #3FB195;
        color:         white;
        padding:       0.25em 2em;
        margin-bottom: 30px;
        &:hover{
            opacity: 0.8 !important;
        }
    }
</style>
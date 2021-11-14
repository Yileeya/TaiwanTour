<template>
    <div>
        <banner-search-view/>
        <div v-for="i in 4" :key="i">
            <carousel-view :title="classification[i - 1]" :carousel-data="setCarouselData(i)"/>
        </div>
    </div>
</template>

<script>
    import CarouselView from '@/components/Common/CarouselView';
    import popularScenicSpots from './popularScenicSpotJsons';
    import BannerSearchView from '@/components/Common/BannerSearchView';

    export default {
        name: "IndexPage",
        components: {BannerSearchView, CarouselView},
        data() {
            return {
                classification: [
                    {
                        name: '熱門景點',
                        url: 'scenicSpot',
                        icon: 'twicon-taipei101 tw-icon-sm'
                    },
                    {
                        name: '近期活動',
                        url: 'activity',
                        icon: 'twicon-dragon-boat'
                    },
                    {
                        name: '特色美食',
                        url: 'restaurant',
                        icon: 'twicon-tapioca tw-icon-sm'
                    },
                    {
                        name: '住宿推薦',
                        url: 'hotel',
                        icon: 'twicon-grand-hotel'
                    }
                ],
                activities: [],
                restaurants: [],
                hotels: []
            }
        },
        async created() {
            let today = this.dateFormat(new Date(), 'YYYY-MM-DD');
            this.activities = await this.getActivities(`(StartTime ge ${today})`, 8);
            this.restaurants = await this.getRestaurants('(contains(Name,\'獲選\'))', 8);
            this.hotels = await this.getHotels('(City ne null)', 8);
        },
        methods: {
            setCarouselData(index) {
                if(index == 1) {
                    return popularScenicSpots
                } else if(index == 2) {
                    return this.activities
                } else if(index == 3) {
                    return this.restaurants
                } else if(index == 4) {
                    return this.hotels
                }
            }
        }
    }
</script>

<style scoped>

</style>
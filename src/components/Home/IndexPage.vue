<template>
    <div>
        <div v-for="i in 4" :key="i">
            <carousel-view :title="classification[i - 1]" :carousel-data="setCarouselData(i)"/>
        </div>
    </div>
</template>

<script>
    import CarouselView from '@/components/Common/CarouselView';
    import popularScenicSpots from './popularScenicSpotJsons';
    import axios from 'axios'
    import {mapState} from 'vuex';
    import _ from 'lodash';

    export default {
        name: "IndexPage",
        components: {CarouselView},
        computed: {
            ...mapState({
                authorizationHeader: state => state.authorizationHeader
            })
        },
        data() {
            return {
                classification: [
                    {
                        name: '熱門景點',
                        icon: 'twicon-taipei101 tw-icon-sm'
                    },
                    {
                        name: '近期活動',
                        icon: 'twicon-dragon-boat'
                    },
                    {
                        name: '特色美食',
                        icon: 'twicon-tapioca tw-icon-sm'
                    },
                    {
                        name: '住宿推薦',
                        icon: 'twicon-grand-hotel'
                    }
                ],
                activities: [],
                restaurants: [],
                hotels: []
            }
        },
        created() {
            this.getActivities();
            this.getRestaurants();
            this.getHotels();
        },
        methods: {
            async getActivities() {
                let today = this.dateFormat(new Date(), 'YYYY-MM-DD');
                let res = await axios.get(`https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?
                $select=Name,Picture,StartTime,EndTime,City&
                $filter=(StartTime%20ge%20${today})%20AND%20(Picture%2FPictureUrl1%20ne%20null%20)&$top=8&$format=JSON`, {
                    headers: this.authorizationHeader
                });
                if(res.status == 200) {
                    this.activities = _.map(res.data, (activity) => {
                        return {
                            Name: activity.Name,
                            City: activity.City,
                            PictureUrl1: activity.Picture.PictureUrl1,
                            StartTime: this.dateFormat(activity.StartTime, 'YYYY-MM-DD'),
                            EndTime: this.dateFormat(activity.EndTime, 'YYYY-MM-DD')
                        }
                    });
                }
            },
            async getRestaurants() {
                let res = await axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Restaurant?$filter=(Picture/PictureUrl1 ne null) AND (contains(Name,\'獲選\'))&$top=8&$format=JSON', {
                    headers: this.authorizationHeader
                });
                if(res.status == 200) {
                    this.restaurants = _.map(res.data, (restaurant) => {
                        return {
                            Name: restaurant.Name,
                            City: restaurant.City,
                            PictureUrl1: restaurant.Picture.PictureUrl1
                        }
                    });
                }
            },
            async getHotels() {
                let res = await axios.get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Hotel?$filter=(Picture%2FPictureUrl1%20ne%20null)%20AND%20(City%20ne%20null)&$top=10&$format=JSON', {
                    headers: this.authorizationHeader
                });
                if(res.status == 200) {
                    this.hotels = _.map(res.data, (hotel) => {
                        return {
                            Name: hotel.Name,
                            City: hotel.City,
                            PictureUrl1: hotel.Picture.PictureUrl1
                        }
                    });
                }
            },
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
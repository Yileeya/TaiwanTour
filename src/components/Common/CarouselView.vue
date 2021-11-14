<template>
    <div class="carousel-section">
        <div class="title row">
            <h3 class="col-md-6 text-left">
                <i :class="title.icon"></i>
                {{ title.name }}
            </h3>
            <h4 class="col-md-6 text-right">
                <div v-if="carouselData.length" class="more-link">
                    <router-link :to="title.url">更多{{ title.name }}</router-link>
                </div>
            </h4>
        </div>
        <div>
            <div v-if="!carouselData.length" class="text-center">
                <loading-component/>
            </div>
            <swiper-component :carousel-data="carouselData" :classification="title.url"/>
        </div>
    </div>
</template>

<script>
    import SwiperComponent from '@/components/Common/SwiperComponent';
    import LoadingComponent from '@/components/Common/LoadingComponent';

    export default {
        name: "CarouselView",
        components: {LoadingComponent, SwiperComponent},
        props: {
            title: Object,
            carouselData: [Array, Object, Promise]
        }
    }
</script>

<style scoped lang="scss">
    .more-link{
        a{
            color: #3fb195 !important;
        }
    }
</style>
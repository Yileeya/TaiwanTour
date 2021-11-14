<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(data,i) in carouselData" :key="i">
                <card-component :card-data="data" :classification="classification"/>
            </swiper-slide>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
        </swiper>
    </div>
</template>

<script>
    import CardComponent from '@/components/Common/CardComponent';

    export default {
        name: "SwiperComponent",
        components: {CardComponent},
        props: {
            carouselData: Array,
            classification: String
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: this.setSlides(),
                    spaceBetween: 30,
                    slidesPerGroup: this.setSlides(),
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                    breakpoints: { //當寬度小於等於下列數字
                        576: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                            slidesPerGroup: 1
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                            slidesPerGroup: 2
                        }
                    }
                }
            }
        },
        methods: {
            setSlides() {
                if(this.classification == 'scenicSpot') {
                    return 4
                } else if(this.classification == 'activity') {
                    return 2
                } else if(this.classification == 'restaurant') {
                    return 3
                } else if(this.classification == 'hotel') {
                    return 4
                }
            }
        }
    }
</script>

<style scoped lang="scss">
</style>
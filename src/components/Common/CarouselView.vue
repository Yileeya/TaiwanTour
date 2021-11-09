<template>
    <div class="carousel-section">
        <div class="title row">
            <h3 class="col-md-6 text-left">
                <i :class="title.icon"></i>
                {{ title.name }}
            </h3>
            <h4 class="col-md-6 text-right">
                <div class="more-link">更多{{ title.name }}</div>
            </h4>
        </div>
        <div>
            <swiper :options="swiperOption">
                <swiper-slide v-for="(data,i) in carouselData" :key="i">
                    <div class="parent slide-pic" :style="setBgUrl(data.PictureUrl1)">
                        <a href="#">點擊前往</a>
                    </div>
                    <div class="slide-pic-intro">
                        <h5><b>{{ data.Name }}</b></h5>
                        <p class="city">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            {{ data.City }}
                        </p>
                    </div>
                </swiper-slide>
                <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
                <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            </swiper>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarouselView",
        props: {
            title: Object,
            carouselData: [Array, Object]
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: this.title.name == '特色美食' ? 4 : 5,
                    spaceBetween: 30,
                    slidesPerGroup: this.title.name == '特色美食' ? 4 : 5,
                    loop: true,
                    loopFillGroupWithBlank: true,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }
                }
            }
        },
        methods: {
            setBgUrl(url) {
                return 'background-image: url("' + url + '")'
            }
        }
    }
</script>

<style scoped>
    a{
        display:    none;
        font-size:  1.6em;
        color:      white !important;
        text-align: center;
        margin:     auto;
        position:   absolute;
        top:        0;
        left:       0;
        bottom:     0;
        right:      0;
        height:     calc(80px + 1em);
        cursor:     pointer;
    }
    .parent:hover, .parent:focus{
        display:    block;
        transition: 0.3s;
    }
    .parent:hover a, .parent:focus a{
        display:         flex;
        transition:      0.3s;
        text-decoration: none;
        background:      rgba(104, 101, 101, 0.5);
        height:          calc(100% - 77px);
        margin-bottom:   3em;
        justify-content: center;
        align-items:     center;
    }
</style>
<template>
    <div style="margin-bottom: 30px">
        <div class="route-name">
            <router-link :to="reBackRoute">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                回到 {{ showClassText(this.route.name) }}
            </router-link>
        </div>
        <section class="detail-header">
            <div class="img" :style="setBgUrl(detailPageData.Picture.PictureUrl1)"></div>
            <div class="info">
                <div class="info-text">
                    <h3>{{ detailPageData.Name }}</h3>
                </div>
                <div class="info-text" v-show="detailPageData.Address || detailPageData.Location || detailPageData.City">
                    <i class="fa fa-lg fa-map-marker" aria-hidden="true"/>
                    <span style="margin-right: 1em" v-if="detailPageData.Location || detailPageData.City">
                        {{ detailPageData.Location ? detailPageData.Location : detailPageData.City}}
                    </span>
                    {{ detailPageData.Address }}
                </div>
                <div class="info-text" v-show="detailPageData.OpenTime || detailPageData.StartTime">
                    <i class="fa fa-lg fa-clock-o" aria-hidden="true"/>
                    <span v-if="detailPageData.OpenTime">{{ detailPageData.OpenTime }}</span>
                    <span v-if="detailPageData.StartTime">
                        <span v-if="detailPageData.StartTime">{{ changeDateFormat(detailPageData.StartTime)}} 至 </span>
                        <span v-if="detailPageData.EndTime">{{ changeDateFormat(detailPageData.EndTime)}}</span>
                    </span>
                </div>
                <div class="info-text" v-show="detailPageData.TicketInfo">
                    <i class="fa fa-lg fa-ticket" aria-hidden="true"/>
                    {{ detailPageData.TicketInfo }}
                </div>
                <div class="info-text" v-show="detailPageData.Particpation">
                    <i class="fa fa-lg fa-users" aria-hidden="true"/>
                    {{ detailPageData.Particpation }}
                </div>
                <div class="info-text" v-show="detailPageData.Cycle">
                    <i class="fa fa-lg fa-commenting" aria-hidden="true"/>
                    {{ detailPageData.Cycle }}
                </div>
                <div class="info-text" v-show="detailPageData.Phone">
                    <i class="fa fa-lg fa-phone" aria-hidden="true"/>
                    {{ detailPageData.Phone }}
                </div>
                <div class="info-text" v-show="detailPageData.WebsiteUrl">
                    <i class="fa fa-lg fa-link" aria-hidden="true"/>
                    <a :href="detailPageData.WebsiteUrl" target="_blank">前往官網</a>
                </div>
                <div class="info-text" v-show="detailPageData.Class1 || detailPageData.Class">
                    <i class="fa fa-lg fa-tags" aria-hidden="true"/>
                    <span class="tag-btn" v-if="detailPageData.Class">{{ detailPageData.Class }}</span>
                    <span class="tag-btn" v-if="detailPageData.Class1">{{ detailPageData.Class1 }}</span>
                    <span class="tag-btn" v-if="detailPageData.Class2">{{ detailPageData.Class2 }}</span>
                    <span class="tag-btn" v-if="detailPageData.Class3">{{ detailPageData.Class3 }}</span>
                </div>
            </div>
        </section>
        <section class="detail-intro">
            <div class="title">
                <i class="fa fa-info-circle" aria-hidden="true"></i>介紹
            </div>
            <div class="intro-container">
                {{ detailPageData.DescriptionDetail ? detailPageData.DescriptionDetail : detailPageData.Description }}
            </div>
        </section>
        <section class="detail-intro">
            <div class="title">
                <i class="fa fa-train" aria-hidden="true"></i>交通資訊
            </div>
            <iframe class="intro-container" width="100%" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    :src="`https://maps.google.com.tw/maps?f=q&amp;hl=zh-TW&amp;geocode=&amp;q=${detailPageData.Position.PositionLat},${detailPageData.Position.PositionLon}(${detailPageData.Name})&amp;z=16&amp;output=embed&amp;t=`"></iframe>
            <div class="intro-container" v-if="detailPageData.TravelInfo">
                {{ detailPageData.TravelInfo }}
            </div>
        </section>
        <section class="detail-intro" v-if="detailPageData.Remarks">
            <div class="title">
                <i class="fa fa-bell" aria-hidden="true"></i>警告及注意事項
            </div>
            <div class="intro-container">
                {{ detailPageData.Remarks }}
            </div>
        </section>
        <!--        放附近資料-->
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: "DetailPage",
        computed: {
            ...mapState({
                route: state => state.route,
                detailPageData: state => state.detailPageData
            }),
            reBackRoute() {
                let length = this.route.name.length;
                let url = this.route.name.substr(0, length - 6);
                return '/' + url
            }
        },
        methods: {
            setBgUrl(url) {
                return 'background-image: url("' + url + '")'
            },
            showClassText(routeName) {
                if(routeName == 'scenicSpotDetail') {
                    return '探索景點'
                } else if(routeName == 'activityDetail') {
                    return '觀光活動'
                } else if(routeName == 'restaurantDetail') {
                    return '美食品嘗'
                } else if(routeName == 'hotelDetail') {
                    return '尋找住宿'
                }
            },
            changeDateFormat(date) {
                return date.substring(0, 10);
            }
        }
    }
</script>

<style scoped lang="scss">
    .route-name{
        font-size: 1.1em;
        i{
            margin:     0 0.5em;
            transition: all 0.3s;
            &:hover{
                opacity:    0.9;
                transform:  scale(0.9);
                transition: all 0.3s;
                cursor:     pointer;
            }
        }
    }
    .detail-header{
        display:   flex;
        flex-wrap: wrap;
        .img{
            margin:              30px 15px;
            background-size:     cover;
            height:              300px;
            width:               30%;
            border-radius:       1em;
            box-shadow:          2px 2px 4px #ddd;
            background-repeat:   no-repeat;
            background-position: center;
        }
        .info{
            width:           65%;
            margin:          30px auto;
            background:      #3fb19514;
            border-radius:   1em;
            font-size:       1.1em;
            line-height:     2em;
            padding:         15px;
            box-shadow:      2px 2px 4px #ddd;
            display:         flex;
            flex-direction:  column;
            justify-content: space-between;
            @media (max-width: 768px){
                margin: 0 auto;
            }
            .info-text{
                display:     flex;
                align-items: baseline;
                flex-wrap:   wrap;
                h3{
                    padding:         0.5em;
                    font-weight:     bold;
                    text-decoration: underline;
                }
                i{
                    margin: 0 0.5em;
                }
            }
        }
        .tag-btn{
            background:    rgba(63, 177, 149, 0.2);
            color:         darkslategray;
            padding:       0px 10px;
            border-radius: 0.8em;
            margin:        0 5px;
        }
        @media (max-width: 768px){
            .img, .info{
                width: 100%;
            }
            .img{
                min-height: 150px;
            }
        }
    }
    .detail-intro{
        margin: 0 15px;
        .title{
            color:       #3fb195;
            font-size:   1.3em;
            font-weight: bold;
            margin:      10px 0;
            i{
                margin-right: 0.5em;
            }
        }
        .intro-container{
            line-height: 1.7em;
            font-size:   1.1em;
            padding:     0 1.5em;
            @media (max-width: 768px){
                padding: 0;
            }
        }
    }
</style>
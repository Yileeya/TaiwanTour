<template>
    <div class="card" @click="emitDetailData">
        <router-link :to="{name: `${classification}Detail`, params:{ name: cardData.Name} }">
            <img class="card-img" :style="setBgUrl(cardData.Picture.PictureUrl1)"/>
            <div class="card-hover-description">
                點擊前往
            </div>
            <div class="card-body">
                <h4><b>{{ cardData.Name }}</b></h4>
                <div class="city">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>
                    {{ list ? cardData.Address: cardData.City }}
                </div>
            </div>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "CardComponent",
        props: {
            cardData: Object,
            classification: String,
            list: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            setBgUrl(url) {
                return 'background-image: url("' + url + '")'
            },
            emitDetailData() {
                this.$store.commit('UPDATE_DETAIL_PAGE_DATA', this.cardData)
            }
        }
    }
</script>

<style scoped>

</style>
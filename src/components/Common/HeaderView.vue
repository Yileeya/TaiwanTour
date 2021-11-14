<template>
    <div>
        <b-navbar toggleable="lg" :fixed="'top'">
            <b-navbar-brand>
                <router-link to="/">
                    <img src="@/assets/images/logo.png">
                </router-link>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto text-center">
                    <b-nav-item>
                        <router-link to="/scenicSpot">
                            <span :class="{'active': routePath ==  'scenicSpot'}">探索景點</span>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/activity">
                            <span :class="{'active': routePath ==  'activity'}">觀光活動</span>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/restaurant">
                            <span :class="{'active': routePath ==  'restaurant'}">美食品嘗</span>
                        </router-link>
                    </b-nav-item>
                    <b-nav-item>
                        <router-link to="/hotel">
                            <span :class="{'active': routePath ==  'hotel'}">尋找住宿</span>
                        </router-link>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "HeaderView",
        watch: {
            '$route'(to) {
                this.routePath = to.name;
                this.$store.commit('UPDATE_ROUTE', to)
            },
        },
        data() {
            return {
                routePath: null
            }
        },
        created() {
            this.routePath = this.$route.name;
            this.$store.commit('UPDATE_ROUTE', this.$route)
        }
    }
</script>

<style scoped>
    .active{
        font-weight:     bold;
        font-size:       1.05em;
        color:           #3FB195;
        text-decoration: underline;
    }
</style>
<template>
    <div>
        <b-navbar toggleable="lg">
            <b-navbar-brand href="#">
                <img src="@/assets/images/logo.png">
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">
                    <b-nav-item href="#">探索景點</b-nav-item>
                    <b-nav-item href="#">觀光活動</b-nav-item>
                    <b-nav-item href="#">美食品嘗</b-nav-item>
                    <b-nav-item href="#">尋找住宿</b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
    export default {
        name: "HeaderView"
    }
</script>

<style scoped>
</style>
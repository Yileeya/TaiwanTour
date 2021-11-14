<template>
    <div>
        <label>
            <input class="check-box-btn" v-model="checkBox" type="checkbox" :value="'全部'">
            <span><i class="fa fa-tag" aria-hidden="true"></i> 全部</span>
        </label>
<!--        <label v-for="(scenicSpot, i) in scenicSpots" :key="i">-->
<!--            <input class="check-box-btn" v-model="checkBox" type="checkbox" :value="scenicSpot">-->
<!--            <span><i class="fa fa-tag" aria-hidden="true"></i> {{scenicSpot}}</span>-->
<!--        </label>-->
    </div>
</template>

<script>
    export default {
        name: "TagsView",
        data() {
            return {
                scenicSpots: ['自然風景類', '觀光工廠', '遊憩', '休閒農業', '生態', '溫泉', '古蹟'],
                activities: ['節慶', '自行車', '遊憩', '產業文化', '年度活動', '四季活動'],
                restaurants: ['地方特產', '中式美食', '甜點冰品', '異國料理', '伴手禮', '素食'],
                checkBox: ['全部']
            }
        }
    }
</script>

<style scoped lang="scss">
    label{
        margin: 10px 5px;
    }
    .check-box-btn{
        display: none;
    }
    input.check-box-btn + span{
        padding:       6px 12px;
        border-radius: 5px;
        box-shadow:    1px 2px 5px rgba(230, 228, 228, 0.5);
        background:    white;
        color:         #666666;
        border:        1px solid #55b29be6;
    }
    input.check-box-btn:hover + span{
        background: rgba(73, 194, 164, 0.9);
        color:      white;
        cursor:     pointer;
    }
    input.check-box-btn:checked + span{
        background: #49c2a4;
        color:      white;
        i{
            color:      white;
        }
    }
</style>
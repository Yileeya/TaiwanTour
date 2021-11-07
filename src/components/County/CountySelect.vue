<template>
    <v-select v-model="selectedCounty"
              :options="counties"
              :placeholder="'全台縣市'">
        <template #no-options>
            無符合選項
        </template>
    </v-select>
</template>

<script>
    export default {
        name: "CountySelect",
        props:{
          value:{
              type: String,
              default: '全台縣市'
          }
        },
        watch:{
            value(newVal){
                this.selectedCounty = newVal
            },
            selectedCounty(newVal){
                this.$emit('input', newVal)
            }
        },
        data(){
            return{
                selectedCounty: this.value,
                counties: [
                    '全台縣市',
                    '基隆市',
                    '台北市',
                    '新北市',
                    '桃園市',
                    '新竹市',
                    '新竹縣',
                    '苗栗縣',
                    '台中市',
                    '彰化縣',
                    '南投縣',
                    '雲林縣',
                    '嘉義市',
                    '嘉義縣',
                    '台南市',
                    '高雄市',
                    '屏東縣',
                    '宜蘭縣',
                    '台東縣',
                    '花蓮縣',
                    '澎湖縣',
                    '金門縣',
                    '連江縣'
                ]
            }
        }
    }
</script>

<style scoped>

</style>
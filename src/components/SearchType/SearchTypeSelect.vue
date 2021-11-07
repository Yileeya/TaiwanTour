<template>
    <v-select v-model="selectedSearchType"
              :options="searchTypes"
              :placeholder="'探索景點'"
              :clearable="false"
              :reduce="(option) => option.value"
              :filterable="false"
              :searchable="false">
    </v-select>
</template>

<script>
    export default {
        name: "SearchTypeSelect",
        prop: {
            value: {
                type: Number,
                default: 1
            }
        },
        watch: {
            value(newVal) {
                this.selectedSearchType = newVal
            },
            selectedSearchType(newVal) {
                this.$emit('input', newVal)
            }
        },
        data() {
            return {
                selectedSearchType: 1,
                searchTypes: [
                    {value: 1, label: '探索景點'},
                    {value: 2, label: '觀光活動'},
                    {value: 3, label: '美食品嘗'},
                    {value: 4, label: '尋找住宿'}
                ]
            }
        }
    }
</script>

<style scoped>

</style>
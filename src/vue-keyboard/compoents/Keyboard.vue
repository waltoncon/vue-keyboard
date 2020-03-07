<template>
    <div class="keyboard">
        <div v-for="(row, rowNum) in rows" :key="rowNum" class="keyboard-row" :style="{
            marginBottom: (rowsMeta[rowNum] || {}).spacerBottom * 50 + 'px'
        }">
            <div v-for="(key, index) in row" :key="index" :is="key.type || 'key'" :data="key"></div>
        </div>
    </div>
</template>

<script>
    import Key from './Key';
    import Spacer from "./Spacer";
    import QwertyLayout from '../layouts/qwerty'

    export default {
        name: "Keyboard",
        components: {
            Key, Spacer
        },
        data: () => (QwertyLayout),
        computed: {
            rows() {
                // return this.keys.map(key => key.row || 1)
                let key = 'row';
                return this.keys.reduce(function (rv, x) {
                    (rv[x[key] || 1] = rv[x[key] || 1] || []).push(x);
                    return rv;
                }, {});
            },
        },
    }
</script>

<style scoped>

</style>

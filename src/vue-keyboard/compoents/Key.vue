<template>
    <div :class="'keyboard-' + $options._componentTag" :style="{
        width, height
    }">
        {{ value }}
    </div>
</template>

<script>
    export default {
        name: "Key",
        props: ['data'],
        data: () => ({
            defaultWidth: 1,
            defaultHeight: 0,
            defaultRow: 1,
            defaultColumn: 1,
            defaultRowOverlap: 1,
            defaultValue: null,
            unitConversion: 50,
        }),
        computed: {
            width() {
                return `${(this.data.width || this.defaultWidth) * this.unitConversion}px`
            },
            height() {
                return `${(this.data.height || this.defaultHeight) * this.unitConversion}px`
            },
            value() {
                return this.data.value || this.defaultValue;
            },

        }
    }
</script>

<style scoped>

</style>

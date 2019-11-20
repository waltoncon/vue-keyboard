<template>
    <div class="keyboard">
        <div v-for="(row, rowNum) in rows" :key="rowNum" class="keyboard-row" :style="{
            marginBottom: (rowsMeta[rowNum] || {}).spacerBottom * 50 + 'px'
        }">
            <div v-for="key in row" :key="key.value" :is="key.type || 'key'" :data="key"></div>
        </div>
    </div>
</template>

<script>
    import Key from './Key';
    import Spacer from "./Spacer";

    export default {
        name: "Keyboard",
        components: {
            Key, Spacer
        },
        data: () => ({
            rowsMeta: {
                1: {
                    spacerBottom: 0.5
                }
            },
            keys: [
                {value: 'Esc',                      row: 1, width: 1, height: 0.5, },
                {type: 'spacer',                    row: 1, width: 1},
                {value: 'F1',                       row: 1, width: 1, height: 0.5, },
                {value: 'F2',                       row: 1, width: 1, height: 0.5, },
                {value: 'F3',                       row: 1, width: 1, height: 0.5, },
                {value: 'F4',                       row: 1, width: 1, height: 0.5, },
                {type: 'spacer',                    row: 1, width: 0.5},
                {value: 'F5',                       row: 1, width: 1, height: 0.5, },
                {value: 'F6',                       row: 1, width: 1, height: 0.5, },
                {value: 'F7',                       row: 1, width: 1, height: 0.5, },
                {value: 'F8',                       row: 1, width: 1, height: 0.5, },
                {type: 'spacer', row: 1, width: 0.5},
                {value: 'F9',                       row: 1, width: 1, height: 0.5, },
                {value: 'F10',                      row: 1, width: 1, height: 0.5, },
                {value: 'F11',                      row: 1, width: 1, height: 0.5, },
                {value: 'F12',                      row: 1, width: 1, height: 0.5, },
                {type: 'spacer', row: 1, width: 0.5},
                {value: 'Print Screen',             row: 1, width: 1, height: 0.5, },
                {value: 'Scroll Lock',              row: 1, width: 1, height: 0.5, },
                {value: 'Pause',                    row: 1, width: 1, height: 0.5, },
                {value: '`',                        row: 2, width: 1, height: 1, },
                {value: '1',                        row: 2, width: 1, height: 1, },
                {value: '2',                        row: 2, width: 1, height: 1, },
                {value: '3',                        row: 2, width: 1, height: 1, },
                {value: '4',                        row: 2, width: 1, height: 1, },
                {value: '5',                        row: 2, width: 1, height: 1, },
                {value: '6',                        row: 2, width: 1, height: 1, },
                {value: '7',                        row: 2, width: 1, height: 1, },
                {value: '8',                        row: 2, width: 1, height: 1, },
                {value: '9',                        row: 2, width: 1, height: 1, },
                {value: '0',                        row: 2, width: 1, height: 1, },
                {value: '-',                        row: 2, width: 1, height: 1, },
                {value: '=',                        row: 2, width: 1, height: 1, },
                {value: 'Backspace',                row: 2, width: 2, height: 1, },
                {value: 'Q',                        row: 3, width: 1, height: 1, },
                {value: 'W',                        row: 3, width: 1, height: 1, },
                {value: 'E',                        row: 3, width: 1, height: 1, },
                {value: 'R',                        row: 3, width: 1, height: 1, },
                {value: 'T',                        row: 3, width: 1, height: 1, },
                {value: 'Y',                        row: 3, width: 1, height: 1, },
                {value: 'U',                        row: 3, width: 1, height: 1, },
                {value: 'I',                        row: 3, width: 1, height: 1, },
                {value: 'O',                        row: 3, width: 1, height: 1, },
                {value: 'P',                        row: 3, width: 1, height: 1, },
                {value: 'A',                        row: 4, width: 1, height: 1, },
                {value: 'S',                        row: 4, width: 1, height: 1, },
                {value: 'D',                        row: 4, width: 1, height: 1, },
                {value: 'F',                        row: 4, width: 1, height: 1, },
                {value: 'G',                        row: 4, width: 1, height: 1, },
                {value: 'H',                        row: 4, width: 1, height: 1, },
                {value: 'J',                        row: 4, width: 1, height: 1, },
                {value: 'K',                        row: 4, width: 1, height: 1, },
                {value: 'L',                        row: 4, width: 1, height: 1, },
                {value: 'Z',                        row: 5, width: 1, height: 1, },
                {value: 'X',                        row: 5, width: 1, height: 1, },
                {value: 'C',                        row: 5, width: 1, height: 1, },
                {value: 'V',                        row: 5, width: 1, height: 1, },
                {value: 'B',                        row: 5, width: 1, height: 1, },
                {value: 'N',                        row: 5, width: 1, height: 1, },
                {value: 'M',                        row: 5, width: 1, height: 1, },
                {value: 'Space',                    row: 6, width: 1, height: 1, },
            ]
        }),
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

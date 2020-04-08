<template>
    <div>
        <el-input v-model="item.names" readonly @click.native="inputClickHandler" />
        <choose-people-or-org v-model="item.codes" :isShowGlobal="true" :names.sync="item.names" :visible.sync="opickerToToVisible" @selected="selectedHandler" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { ChoosePeopleOrOrg } from '@belvoly-vue-aioa/ui'
@Component({
    components: {
        ChoosePeopleOrOrg
    }
})
export default class ChoosePeopeleOrOrg extends Vue {
    opickerToToVisible = false
    item = {
        codes: '',
        names: ''
    }

    inputClickHandler() {
        console.log('click')

        this.opickerToToVisible = true
    }

    selectedHandler() {
        console.log(`selected:`, arguments)
    }
}
</script>

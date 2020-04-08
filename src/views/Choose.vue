<template>
    <div>
        <el-input v-model="item.names" readonly @click.native="inputClickHandler" />
        <choose-people-or-org
            v-if="opickerToToVisible"
            rootOrgCode="shhr"
            :isShowGlobal="true"
            :defaultUsers="item.users"
            :defaultOrgs="item.orgs"
            :codes.sync="item.codes"
            :names.sync="item.names"
            :visible.sync="opickerToToVisible"
            @selected="selectedHandler"
        />
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
        names: '',
        users: [],
        orgs: []
    }

    inputClickHandler() {
        console.log('click')

        this.opickerToToVisible = true
    }

    selectedHandler({ users, orgs }) {
        this.item.users = users
        this.item.orgs = orgs
    }
}
</script>

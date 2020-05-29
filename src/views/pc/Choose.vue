<template>
    <div>
        <el-input v-model="item.names" readonly @click.native="inputClickHandler" />
        <choose-people-or-org
            v-if="opickerToToVisible"
            rootOrgCode="shhr"
            selectionMode="single"
            mode="user"
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
        users: [
            {
                name: '罗龙',
                value: 'luolong'
            }
        ],
        orgs: []
    }

    inputClickHandler() {
        this.opickerToToVisible = true
    }

    selectedHandler({ users, orgs }) {
        this.item.users = users
        this.item.orgs = orgs
    }
}
</script>

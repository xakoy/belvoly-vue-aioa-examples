<template>
    <div>
        <el-row>
            <el-col :span="6">
                <el-menu :default-active="active" class="el-menu-vertical-demo" @select="selectHandler">
                    <el-menu-item :key="index" :index="menu.path" v-for="(menu, index) in menus">
                        <i class="el-icon-menu"></i>
                        <span slot="title">{{ menu.name }}</span>
                    </el-menu-item>
                </el-menu>
            </el-col>
            <el-col :span="18">
                <router-view></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { routeNames } from '@/router'

@Component
export default class Index extends Vue {
    menus = [
        {
            name: 'tinymce',
            path: routeNames.pc.tinymce
        },
        {
            name: 'upload',
            path: routeNames.pc.upload
        },
        {
            name: 'choose',
            path: routeNames.pc.choose
        },
        {
            name: 'SubscriptionEvent',
            path: routeNames.pc.subscriptionEvent
        }
    ]

    active: string | null | undefined = 'home'

    mounted() {
        const { name } = this.$route
        this.active = name
    }

    selectHandler(routerName: string) {
        if (this.$route.name === routerName) {
            return
        }
        this.$router.push({ name: routerName })
        console.log(arguments)
    }
}
</script>

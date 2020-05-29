<template>
    <div style="background: #F9F9F9; text-align: left; height: 100%;">
        <template v-if="isMain">
            <bvan-nav-bar title="示例"></bvan-nav-bar>
            <bvan-cell-group title="点击查看示例">
                <bvan-cell :key="index" :index="menu.path" v-for="(menu, index) in menus" :title="menu.name" is-link @click="selectHandler(menu.path)"></bvan-cell>
            </bvan-cell-group>
        </template>
        <template v-else>
            <bvan-nav-bar style="margin-bottom: 10px" left-arrow left-text="返回" @click-left="$router.back()" :title="title"></bvan-nav-bar>
            <router-view></router-view>
        </template>
        <!-- <el-row>
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
        </el-row> -->
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { routeNames } from '@/router'

@Component
export default class Index extends Vue {
    menus = [
        {
            name: 'choose',
            path: routeNames.mobile.choose
        },
        {
            name: 'upload',
            path: routeNames.mobile.upload
        }
    ]

    active: string | null | undefined = 'home'

    mounted() {
        const { name } = this.$route
        this.active = name
        console.log(this.$route)
    }

    get title() {
        return this.$route.name
    }

    get isMain() {
        return this.$route.matched.length === 1
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

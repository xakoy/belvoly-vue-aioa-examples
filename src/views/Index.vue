<template>
    <div>
        <ul>
            <li>
                <router-link to="/pc">PC</router-link>
            </li>
            <li>
                <router-link to="/mobile">Mobile</router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Index extends Vue {}
</script>

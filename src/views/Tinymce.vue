<template>
    <el-form :model="item" :rules="rules" ref="form">
        <el-form-item label="文本：" prop="html">
            <tinymce-editor ref="textEditor" v-model="item.html" :text.sync="text" />
        </el-form-item>
        <el-button @click="saveHandler">
            保存
        </el-button>
    </el-form>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { TinymceEditor } from '@belvoly-vue-aioa/tinymce'
import { ElForm } from 'element-ui/types/form'
import { Message } from 'element-ui'
console.log(TinymceEditor)

@Component({
    components: {
        TinymceEditor
    }
})
export default class HelloWorld extends Vue {
    @Prop() private msg!: string

    validateMaxText(rule: any, value: any, callback: any) {
        if (this.text && this.text.length > 30) {
            callback(new Error(rule.message))
        } else {
            callback()
        }
    }
    rules = {
        html: [
            { required: true, message: '请填写' },
            { validator: this.validateMaxText, message: '不能大于30字' }
        ]
    }
    item = {
        html: '<p>测试</p>'
    }

    text = ''

    async saveHandler() {
        const isValid = await (this.$refs.form as ElForm).validate()
        if (!isValid) {
            return
        }

        Message.success({
            message: `值为：${this.item.html}, 纯文本为：${this.text}`
        })
    }
}
</script>

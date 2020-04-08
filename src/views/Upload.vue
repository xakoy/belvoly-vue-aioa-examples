<template>
    <div>
        <upload :action="actionUrl" :fileList="fileList" :typeCode="typeCode" :refTableName="refTableName" :isEditFile="false" />
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Upload } from '@belvoly-vue-aioa/ui'
@Component({
    components: {
        Upload
    }
})
export default class UploadIndex extends Vue {
    actionUrl = `http://192.168.101.135:2001/api/sharedservice/blob/upload`
    typeCode = 'demo'
    refTableName = 'FRONTEND_TEST'
    fileList = [
        {
            id: '30cfe4ac-6635-4bff-8bae-721c3247605a',
            refTableID: '302df60ca8a94cfe8d7cc1f7b64c0d45',
            refTableName: 'CALENDAR_MYCALENDAR',
            displayName: '155058843.jpg',
            persistentType: 0,
            contentType: 'image/jpeg',
            name: '155058843',
            extension: '.jpg',
            content: null,
            length: 23100,
            relativePath: 'CALENDAR_MYCALENDAR\\20200331',
            internalName: '8c4d33f1-c92b-4306-9332-d1c357c7ec7b.jpg',
            typeCode: null,
            isDelete: 0,
            extraData: null,
            sequence: 0,
            creatorID: 'xiejianyun',
            creatorName: '谢建云',
            createTime: '2020-03-31 16:51:53',
            updateTime: '2020-03-31 16:51:53',
            url: 'http://192.168.101.135:2001/api/sharedservice/blob/30cfe4ac-6635-4bff-8bae-721c3247605a',
            downTimes: 0
        },
        {
            id: 'f3880c0f-e022-4523-98c8-535fe84beb4e',
            refTableID: '302df60ca8a94cfe8d7cc1f7b64c0d45',
            refTableName: 'CALENDAR_MYCALENDAR',
            displayName: '155058843.jpg',
            persistentType: 0,
            contentType: 'image/jpeg',
            name: '155058843',
            extension: '.jpg',
            content: null,
            length: 23100,
            relativePath: 'CALENDAR_MYCALENDAR\\20200331',
            internalName: '6599bbb1-2180-4fde-9aae-fda56bb2106f.jpg',
            typeCode: null,
            isDelete: 0,
            extraData: null,
            sequence: 0,
            creatorID: 'xiejianyun',
            creatorName: '谢建云',
            createTime: '2020-03-31 16:52:14',
            updateTime: '2020-03-31 16:52:14',
            url: 'http://192.168.101.135:2001/api/sharedservice/blob/f3880c0f-e022-4523-98c8-535fe84beb4e',
            downTimes: 0
        },
        {
            id: 'f6b80c23-41d2-42f1-8743-75f4190d123f',
            refTableID: '302df60ca8a94cfe8d7cc1f7b64c0d45',
            refTableName: 'CALENDAR_MYCALENDAR',
            displayName: '155058843.jpg',
            persistentType: 0,
            contentType: 'image/jpeg',
            name: '155058843',
            extension: '.jpg',
            content: null,
            length: 190124,
            relativePath: 'CALENDAR_MYCALENDAR\\20200331',
            internalName: '39d675c8-85ca-4683-a03b-f3fa3c0498d1.jpg',
            typeCode: 'undefined',
            isDelete: 0,
            extraData: null,
            sequence: 0,
            creatorID: 'xiejianyun',
            creatorName: null,
            createTime: '2020-03-31 17:15:02',
            updateTime: '2020-03-31 17:15:02',
            url: 'http://192.168.101.135:2001/api/sharedservice/blob/f6b80c23-41d2-42f1-8743-75f4190d123f',
            downTimes: 0
        }
    ]
}
</script>

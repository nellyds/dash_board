
<template>
    <div class="container">
        <markdown-editor v-model="value" theme="success"></markdown-editor>
        <p>{{value}}</p>
    </div>
</template>


<script>
    export default {

        data() {
            return {
                options: {                   
                     lineNumbers: true,
                     styleActiveLine: true,
                     styleSelectedText: true,
                     lineWrapping: true,
                     indentWithTabs: true,
                     tabSize: 2,
                     indentUnit: 2
                },
                value: 'hi'
            }
        }
    }
</script>
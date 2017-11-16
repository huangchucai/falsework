<template>
    <div id="app">
        {{name}}-{{time}}
        <pagination :pageNumber="12" :curNumber="5" :showNumber="3"></pagination>
    </div>
</template>
<script>
    import pagination from './components/pagination.vue'
    export default {
        data() {
            return {
                name: 'My arch',
                time: new Date()
            }
        },
        components: {
            pagination
        }
    }
</script>
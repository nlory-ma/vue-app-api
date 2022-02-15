<template>
    <div>
        <span> {{ posts.length }} Posts </span>
    </div>
</template>

<script>
import * as UsersDataService from '../services/UsersDataService.js'

    export default {
        props: {
            userID: {
                type: Number,
                required: true 
            },
        },
        data() {
            return {
                posts: []
            }
        },
        async created () {
           this.posts = await UsersDataService.getAllPostsByUser(this.userID) ;
        },
    }
</script>

<style lang="scss" scoped>

</style>
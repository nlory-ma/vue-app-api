<template>
    <div aria-label="group of cards" tabindex="0" class="focus:outline-none py-8 w-full ">
        <div class="grid grid-cols-3 gap-4 items-center justify-center w-full mt-7">
            <!-- <Posts  /> -->

                <div v-for="post in userPosts" :key="post.id"
                class="focus:outline-none lg:w-full/12 lg:mr-7 w-full lg:mb-0 mb-7 dark:bg-gray-800 p-6 
                shadow-lg rounded flex flex-col">
                <div class="flex items-center border-b border-gray-700 pb-6">
                        <div class="w-12 h-12 bg-gray-300 rounded-full flex flex-shrink-0"></div>
                        <div class="flex items-start justify-between w-full">
                            <div class="pl-3 w-full">
                                <p tabindex="0" class="focus:outline-none text-xl font-medium leading-5 text-slate-400">{{ post.title }}</p>
                            </div>
                            <div role="img" aria-label="bookmark" class="cursor-pointer iconlike-block">

                                <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/list1-svg2.svg" 
                                v-if="!checkFavorited(post.id)"
                                alt="bookmark" 
                                class="unlikedPost" @click="likeApost(post)" />
                               
                                <img :src="`${$assets}/bookmark.png`" style="height: 32px;" 
                                class="likedPost" v-else @click="likeApost(post)" />

                            </div>
                        </div>
                    </div>
                    <div class="px-2">
                        <p tabindex="0" class="focus:outline-none text-sm leading-5 py-4 text-gray-400">
                            {{ post.body }}
                        </p>
                        <div tabindex="0" class="focus:outline-none flex float-right">
                            <div @click="loadComments(post.id, post.title)" 
                            class="py-2 px-4 text-xs leading-3 text-indigo-100 rounded-full bg-indigo-700 cursor-pointer">
                                <svg class="inline fill-current" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path>
                                </svg>
                                <span>see comments</span>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </div>

    <div class="comments-contener fixed lg:w-1/4 md:w-1/3 shadow-xl z-50 p-3 overflow-y-auto hidden" id="comments-container">
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg 
            float-right text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
            data-modal-toggle="defaultModal" @click="closeCommentModal(currentPostID)">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
        </button>
        <div class="p-8">
            <h2 class="text-2xl font-bold mb-2 hover:text-gray-500 leading-7">
                    <a href="">
                        {{ currentTitle }}
                    </a>
            </h2>
            <Comments :commentsList="comments"/>
        </div>
    </div>
</template>

<script>
    import * as UsersDataService from '../services/UsersDataService.js' 
    import Comments from '../components/comments.vue'
    import { mapState } from 'vuex'

    export default {
        data() {
            return {
                userPosts: [],
                currentTitle: '',
                comments: [],
                currentPostLiked: null,
            }
        },
        components: {
            Comments,
        },
        computed: {
            ...mapState(['favoritedPosts']),

            updateFavoritedPosts() {
                
                if (this.currentPostLiked !== null) {
                    if (this.$store.state.favoritedPosts.includes(this.currentPostLiked.id)) {
                        this.$store.state.favoritedPosts.splice(this.$store.state.favoritedPosts.indexOf(this.currentPostLiked.id), 1)
                    } else {
                        this.$store.state.favoritedPosts.push(this.currentPostLiked.id)
                    }
                    return this.$store.state.favoritedPosts
                }
            }

        },
        mounted () {
            
        },
        methods: {

            async loadComments(postId, title) {
                this.comments = await UsersDataService.getAllCommentsByPost(postId)
                this.currentTitle = title

                const commentsContainer = document.getElementById('comments-container')
                const overlayContainer = document.getElementById('overlay')

                commentsContainer.classList.remove('hidden')
                overlayContainer.classList.remove('hidden')
            },
            closeCommentModal(postId) {
                const commentsContainer = document.getElementById('comments-container')
                const overlayContainer = document.getElementById('overlay')

                commentsContainer.classList.add('hidden')
                overlayContainer.classList.add('hidden')
            },
            likeApost(post) {
                this.currentPostLiked = post
                let favorited = this.updateFavoritedPosts

                console.log(favorited)
                this.currentPostLiked = null
            },
            checkFavorited(id) {
                this.updateFavoritedPosts
                return this.$store.state.favoritedPosts.includes(id)
            }
        },
        async created () {

            try {
                this.userPosts = await UsersDataService.getAllPostsByUser(this.$route.params.id)

            } catch (error) {
                console.error(error)
            }
        },
    }
</script>

<style lang="scss" scoped>
    .comments-contener {
        height: 100%;
        background-color: #fff;
        top: 0;
        right: 0;
    }
    .iconlike-block {
        height: 30px;
        width: 30px;
        display: block;

    }
</style>
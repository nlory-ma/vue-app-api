<template>
    <div class="" v-if="commentsList.length">
        <article  v-for="comment in commentsList" :key="comment.id" 
                    class="border w-full mx-auto bg-gray-100 rounded-lg md:p-4 sm:py-3 py-4 px-2 m-10" >
                        <div role="presentation">
                            <div>
                                <div class="m-2">
                                <div class="flex items-center">
                                    <div class="mr-2">                
                                        <a href="">          
                                        <img class="rounded-full w-8" src="https://res.cloudinary.com/practicaldev/image/fetch/s---dcV6iX4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/112962/b1373942-b945-4d16-af76-c448e080d14a.jpeg" alt="hagnerd profile" loading="lazy">        
                                        </a>      
                                    </div>
                                    <div>
                                        <p class="text text-gray-700 text-sm hover:text-black">          
                                            <small>{{ comment.email }}</small>        
                                        </p>      
                                    </div>
                                </div>
                                </div>
                                <div class="pl-12 md:pl-10 xs:pl-10">
                            
                                    <div class="mb-2">
                                        <span class="p-1 hover:text-black text-sm leading-6 text-slate-900 font-semibold mb-2">
                                            {{ comment.name }}
                                        </span>
                                    </div>
                                    <div class="mb-1 leading-6 text-left text-sm">
                                        {{ comment.body }}
                                    </div>
                                    <small class="mr-2 text-purple-700">8 min read</small>   
                                </div>
                            </div>
                        </div>
        </article>
    </div>
</template>

<script>
    export default {
        name: "Comments",
        props: {
            commentsList: {
                type: Array,
                default: []
            },
        },
        watch: {
            commentsList() {
                this.$nextTick();
            }
        },
        async mounted () {
            await this.$nextTick();
        },
    }
</script>

<style lang="scss" scoped>

</style>
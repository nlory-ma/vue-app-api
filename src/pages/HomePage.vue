<template>
		<h2 class="my-8 text-3xl font-semibold dark:text-gray-400 text-left">
				Utilisateurs 
                
		</h2>
         
		<div
				class="pb-2 flex items-center justify-between text-gray-600
				dark:text-gray-400 border-b dark:border-gray-600">
				<!-- Header -->

				<div>
					<span>
						<span class="text-green-500 dark:text-green-200">
							10
						</span>
						users
					</span>
				</div>

		</div>
		<div
				class="mt-6 flex justify-between text-gray-600 dark:text-gray-400">
				<!-- List sorting -->

				<div class="ml-10 pl-2 flex capitalize">
					<!-- Left side -->
					<span class="ml-8 flex items-center">
						username
						
					</span>
					<span class="ml-24 flex items-center">
						name
					</span>
				</div>

				<div class="mr-12 flex capitalize">
					<!-- Right side -->
					<span class="mr-16 pr-1 flex items-center">
						Posts
					</span>

					<span class="mr-16 pr-2 flex items-center">
						email
					</span>

					<span class="mr-10 flex items-center">
						zipcode
					</span>
				</div>

		</div>

		<div v-for="user in users" :key="user.id">
				
            <router-link :to="{ name: 'UserDetails', params: { id: user.id }}"
                 class="mt-8 mb-4 flex px-4 py-4 justify-between bg-white
				dark:bg-gray-800 shadow-xl rounded-lg cursor-pointer" >
                    <!-- Card -->
                    <div class="flex justify-between">
                        <img
                            class="h-12 w-12 rounded-full object-cover"
                            :src="'https://eu.ui-avatars.com/api/?background=random&size=16&name=' + user.name.replace(/\s+/g, '')"
                            alt="" />

                        <div
                            class="ml-12 flex flex-col capitalize text-gray-600
                            dark:text-gray-400 text-left">
                            <span>name </span>
                            <span class="mt-2 text-black dark:text-gray-200">
                                {{ user.name}}
                            </span>
                        </div>

                        <div
                            class="ml-12 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>username</span>
                            <span class="mt-2 text-black dark:text-gray-200">
                                {{ user.username}}
                            </span>

                        </div>

                    </div>

                    <div class="flex">
                        <!-- Rigt side -->

                        <div
                            class="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>Posts</span>
                            <span class="mt-2 text-black dark:text-gray-200">
                                <UserPosts :userID="user.id"  />
                            </span>
                        </div>

                        <div
                            class="mr-16 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>email</span>
                            <span class="mt-2 text-yellow-600 dark:text-yellow-400">
                                 {{ user.email}}
                            </span>
                        </div>

                        <div
                            class="mr-8 flex flex-col capitalize text-gray-600
                            dark:text-gray-400">
                            <span>zipcode</span>
                            <span class="mt-2 text-green-400 dark:text-green-200">
                                {{ user.address.zipcode}}
                            </span>
                        </div>

                    </div>
                </router-link>

			</div>

<!-- end data table -->
</template>

<script>
import { mapMutations } from 'vuex'
import { mapActions } from 'vuex'
import UserPosts from '../components/userPosts.vue'

import * as UsersDataService from '../services/UsersDataService.js'

    export default {

        props: {
             users: {
                 type: Array,
                 default: []
             },
        },
        components: {
            UserPosts
        },
        data() {
            return {
            }
        },
        watch: {
        },
        methods: {
            ...mapMutations({
                likeApost: 'LIKE_POST'
            }),
            ...mapActions([
                'favoritePost'
            ])
        },
        async mounted () {
            this.likeApost()
            await this.favoritePost()
        },
    }
</script>

<style lang="scss" scoped>

</style>
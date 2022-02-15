<template>
    <nav class="flex flex-row justify-between border-b
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out">
				<div class="flex">
					<!-- Top NavBar -->
                    <router-link :to="{ path: '/' }" 
                        class="py-2 block focus:text-green-500 focus:border-green-500
						    dark-focus:text-green-200 dark-focus:border-green-200  
                            focus:outline-none border-b-2 font-medium capitalize
                            transition duration-500 ease-in-out">
                            Home - Utilisateurs
                    </router-link>

                    <router-link :to="{ name: 'UserDetails', params: { id: '2' }}"
                    v-if="$route.params.id"
                    class="ml-6 py-2 block border-b-2 border-transparent
						focus:outline-none font-medium capitalize text-center
						focus:text-green-500 focus:border-green-500
						dark-focus:text-green-200 dark-focus:border-green-200
						transition duration-500 ease-in-out"> User - {{ $route.params.id }} </router-link>
				</div>
                <div class="flex mb-2" v-if="$store.state.favoritedPosts.length !== 0">
                    <div class="py-2 px-4 text-xs leading-3 text-indigo-100 rounded-full bg-pink-700 cursor-pointer flex">
                        <svg class="heart" viewBox="0 0 32 29.6" >
                            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                                c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                        </svg> 
                        <span class="ml-2">{{ $store.state.favoritedPosts.length }} favorited posts</span></div>
                </div>
			</nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.heart {
  fill: white;
  position: relative;
  width: 15px;
  //animation: pulse 1s ease infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
}
</style>
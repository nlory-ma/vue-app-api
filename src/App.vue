<template>
  <!-- start data table -->

  <div class="h-screen w-full flex overflow-hidden">
    <main
      class="flex-1 flex flex-col bg-gray-100 dark:bg-gray-900 transition
      duration-500 ease-in-out overflow-y-auto">
      <div class="mx-10 my-2 main-content px-10">
      <TheMenu />
      <router-view :users="users || []">
      </router-view>
		</div>

	</main>

</div>
</template>


<script>
import * as UsersDataService from './services/UsersDataService.js'
import TheMenu from './components/TheMenu.vue'

export default {

  name: 'App',
  components: {
    TheMenu,
  },
  data() {
      return {
         users: [],
    }
  },
  methods: {
      testfunction() {
      
    }
  },
  async created() {
       try {
           this.users = await UsersDataService.getUsers()
       } catch (error) {
            console.error(error)
     }
  }
}

</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main-content {
  padding-bottom: 4.5rem;
}
</style>

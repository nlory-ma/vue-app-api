<template>
    <div>
        <i class="ri-h-1">page introuvale</i>
        <p v-if="$route.params.wrongPath">{{ $route.params.wrongPath }} </p>
        <button @click="$router.back()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Revenir en arriere
        </button>
        <!--  -->
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>
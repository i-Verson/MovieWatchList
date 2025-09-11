<script setup lang="ts">
import Navbar from '@/components/Navbar.vue';
import IconLogoMovieWatchlist from '@/components/icons/IconLogoMovieWatchlist.vue';
import Movies from '@/components/NavItems/Movies.vue';
</script>

<template>
  <div class="flex flex-row items-center justify-between px-4 py-4">
    <icon-logo-movie-watchlist />
    <Navbar />
  </div>
  <div>
    <Movies />
  </div>
</template>

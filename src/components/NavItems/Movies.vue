<script setup lang="ts">
import axios from 'axios';
import { Button } from 'primevue';
import { ref, computed, onMounted } from "vue";
import InputText from 'primevue/inputtext';

const items = ref<any>(null);
const movietitle = ref([]);
const poster = ref('');
const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/discover/movie',
    params: {
        include_adult: 'true',
        include_video: 'true',
        language: 'en-US',
        page: '1',
        sort_by: 'popularity.desc'
    },
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmMDZjZGNmYmYwYTFjMGI4NDgzNDEwOTAzMGQxZiIsIm5iZiI6MTc1NzU1MTYzNC42NTQsInN1YiI6IjY4YzIxYzEyOWMzZmU4MTQ3ZDFmNjMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G8U1M4oNA3l91K-_nFObkzqQJhLkBtX45u3fr_DSZC8'
    }
};

axios
    .request(options)
    .then(res => {
        items.value = res.data.results;
        console.log(items.value);
    })
    .catch(err => console.error(err));

</script>
<template>
    <div>
        <div v-for="item in items" :key="item.id" class="flex flex-col items-center justify-center text-xl">
            <img :src="'https://image.tmdb.org/t/p/w500' + item.poster_path" />
            <h1>Title: {{ item.original_title }}</h1>
            <h1>Overview: {{ item.overview }}</h1>
        </div>
    </div>
</template>
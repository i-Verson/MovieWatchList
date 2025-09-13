<script setup lang="ts">
import axios from 'axios';
import { Button } from 'primevue';
import { ref, computed, onMounted, nextTick } from "vue";
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
import Paginator from 'primevue/paginator';

const items = ref<any>(null);
const movietitle = ref([]);
const poster = ref('');
const title = ref('');
const page = ref(1);


const getNextPage = async (pageNum: number) => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${pageNum}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjdmMDZjZGNmYmYwYTFjMGI4NDgzNDEwOTAzMGQxZiIsIm5iZiI6MTc1NzU1MTYzNC42NTQsInN1YiI6IjY4YzIxYzEyOWMzZmU4MTQ3ZDFmNjMyNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.G8U1M4oNA3l91K-_nFObkzqQJhLkBtX45u3fr_DSZC8'
        }
    })
    items.value = res.data.results;
};

onMounted(() => {
    getNextPage(page.value);
});
const onPageChange = async (event: any) => {
    page.value = event.page + 1;
    await getNextPage(page.value);
    await nextTick();
    setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
};
</script>
<template>
    <div class="px-4 py-4">
        <h1 class="text-3xl font-mono">Popular Movies</h1>
    </div>
    <div class="flex flex-wrap gap-4 justify-center px-4 py-4">
        <div v-for="item in items" :key="item.id">
            <Card style="width: 25rem; overflow: hidden">
                <template #header>
                    <img class="w-90 h-96" :src="'https://image.tmdb.org/t/p/w500' + item.poster_path"
                        v-if="item.poster_path" />
                </template>
                <template #title>
                    <div>{{ item.original_title }}</div>
                </template>
                <template #subtitle>{{ item.overview }}</template>
            </Card>
        </div>
    </div>
    <Paginator :rows="20" :totalRecords="1000" :first="(page - 1) * 20" @page="onPageChange" />

</template>
<template>
    <div class="card">
        <Menubar :model="items" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Menubar from 'primevue/menubar';

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home'
    },
    {
        label: 'Movies',
        icon: 'pi pi-video'
    },
    {
        label: 'Genres',
        icon: 'pi pi-search',
        items: [
            {
                label: 'Components',
                icon: 'pi pi-bolt'
            },
            {
                label: 'Blocks',
                icon: 'pi pi-server'
            },
            {
                label: 'UI Kit',
                icon: 'pi pi-pencil'
            },
            {
                label: 'Templates',
                icon: 'pi pi-palette',
                items: [
                    {
                        label: 'Apollo',
                        icon: 'pi pi-palette'
                    },
                    {
                        label: 'Ultima',
                        icon: 'pi pi-palette'
                    }
                ]
            }
        ]
    },
    {
        label: 'About',
        icon: 'pi pi-envelope'
    }
]);
</script>

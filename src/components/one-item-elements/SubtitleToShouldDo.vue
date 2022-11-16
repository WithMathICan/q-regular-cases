<template>
   <q-item-label :class="item.ClassOfToShouldDo" caption>{{ item.TextToShouldDo }}</q-item-label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
   props: ['item'],
})
</script>
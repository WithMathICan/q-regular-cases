<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>
        <span v-if="itemsKey">
          <AddNewCategory v-if="itemsKey === 'categories'" />
          <AddNewItem v-else />
        </span>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Доступные разделы</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-if="isAppInit" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import { pageTitle, isEditMode, itemsKey, itemsToShow, isAppInit, initApp } from "../store"
import EssentialLink from 'components/EssentialLink.vue'
import AddNewItem from '../components/items/AddNewItem.vue'
import AddNewCategory from '../components/items/AddNewCategory.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink, AddNewItem, AddNewCategory,
  },

  setup() {
    const leftDrawerOpen = ref(false)

    onBeforeMount(() => {
      initApp()
    })

    const linksList = Object.keys(itemsToShow).map(key => ({
      title: itemsToShow[key].title,
      caption: '',
      icon: 'school',
      link: `/items/${key}`
    }))
    linksList.push({
      title: 'Категории',
      caption: 'Добавляйте и изменяйте категории',
      icon: 'edit',
      link: '/categories',
    })

    return {
      essentialLinks: linksList, leftDrawerOpen,
      pageTitle, isEditMode, itemsKey, isAppInit,
    }
  }
})
</script>

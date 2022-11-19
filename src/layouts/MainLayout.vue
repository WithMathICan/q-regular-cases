<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />
        <q-toolbar-title>{{ pageTitle }}</q-toolbar-title>
        <span v-if="itemsKey">
          <AddNewCategory v-if="itemsKey === CATEGORY_KEY" />
          <AddNewItem v-else />
        </span>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Доступные разделы</q-item-label>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        <EssentialLink title="Категории" caption="Добавляйте и изменяйте категории" link="/categories" icon="category" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-if="allItems[CATEGORY_KEY]" />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, onBeforeMount } from 'vue'
import { pageTitle, isEditMode, itemsKey, initApp, menuItems, allItems, CATEGORY_KEY } from "../store"
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

    return {
      essentialLinks: menuItems, leftDrawerOpen,
      pageTitle, isEditMode, itemsKey, allItems, CATEGORY_KEY
    }
  }
})
</script>

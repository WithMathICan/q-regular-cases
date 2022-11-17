<template>
   <q-expansion-item :class="{ 'expanded-item': expanded }" v-model="expanded">
      <template v-slot:header>
         <q-item-section>
            <q-item-label>{{ item.title }} </q-item-label>
         </q-item-section>
      </template>
      <q-card :class="{ 'expanded-item': expanded }">
         <q-card-section>
            <q-item-label v-if="item.description">{{ item.description }}</q-item-label>
            <q-item-label caption>Порядковый номер: {{ item.order }}</q-item-label>
         </q-card-section>
         <q-card-actions>
            <EditItem :item="item" :closeExpanded="closeExpanded" />
            <RemoveItem :item="item" :closeExpanded="closeExpanded" />
         </q-card-actions>
      </q-card>
   </q-expansion-item>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { itemsType } from 'src/store/items'
import EditItem from 'src/components/items/EditItem.vue'
import RemoveItem from 'src/components/items/RemoveItem.vue'
export default defineComponent({
   props: ['item'],
   components: { EditItem, RemoveItem },
   setup() {
      let expanded = ref(false)
      function closeExpanded(v) {
         if (v == false) expanded.value = false
      }
      return { itemsType, expanded, closeExpanded }
   }
})
</script>

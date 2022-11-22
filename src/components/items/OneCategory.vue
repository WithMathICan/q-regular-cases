<template>
   <q-expansion-item :class="{ 'expanded-item': expanded }" v-model="expanded">
      <template v-slot:header>
         <q-item-section>
            <q-item-label>{{ item.title }} </q-item-label>
            <q-item-label caption>{{ typeLabel(item.type) }}</q-item-label>
         </q-item-section>
      </template>
      <q-card :class="{ 'expanded-item': expanded }">
         <q-card-section>
            <q-item-label v-if="item.description">{{ item.description }}</q-item-label>
         </q-card-section>
         <q-card-actions>
            <EditItem :item="item" :closeExpanded="closeExpanded" />
            <RemoveItem :item="item" :closeExpanded="closeExpanded" />
            <q-btn class="q-ma-xs" :to="'items/'+item.alias" round color="primary" icon="open_in_new" />
            <MoveUp v-if="item_index>0" :index="item_index" />
         </q-card-actions>
      </q-card>
   </q-expansion-item>
</template>

<script>
import { defineComponent, ref } from 'vue';
import EditItem from 'src/components/items/EditItem.vue'
import RemoveItem from 'src/components/items/RemoveItem.vue'
import {typeLabel} from 'src/store'
import MoveUp from './MoveUp.vue';
export default defineComponent({
   props: ['item', 'item_index'],
   components: { EditItem, RemoveItem, MoveUp },
   setup() {
      let expanded = ref(false)
      function closeExpanded(v) {
         if (v == false) expanded.value = false
      }
      return { expanded, closeExpanded, typeLabel }
   }
})
</script>

<template>
   <q-dialog v-model="confirm" persistent>
      <q-card>
         <q-card-section class="row items-center">
            <q-avatar icon="delete" color="negative" text-color="white" />
         </q-card-section>
         <q-card-section class="row items-center">
            <span class="q-ml-sm">Удалить {{ item.title }}?</span>
         </q-card-section>

         <q-card-actions align="right">
            <q-btn flat label="Отмена" color="primary" v-close-popup />
            <q-btn label="Удалить" color="negative" @click="deleteItem" />
         </q-card-actions>
      </q-card>
   </q-dialog>
   <q-btn class="q-ma-xs" @click="openConfirm" round color="negative" icon="delete" />
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
// import { removeItem } from "src/store/items"
import { remove } from 'src/store';


export default defineComponent({
   props: ['item', 'closeExpanded'],
   setup(props) {
      let confirm = ref(false)
      watch(() => confirm.value, (val) => props.closeExpanded(val))

      function openConfirm() {
         confirm.value = true
      }

      function deleteItem() {
         remove(props.item)
         confirm.value = false
      }

      return {
         confirm,
         openConfirm, deleteItem,
      }
   }
})
</script>
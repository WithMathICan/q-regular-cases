<template>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="done" color="positive" text-color="white" />
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Отмена" color="primary" v-close-popup />
          <q-btn label="Сделанно" color="positive" @click="doneItem" />
        </q-card-actions>
      </q-card>
    </q-dialog>
   <q-btn class="q-ma-xs" @click="openConfirm" round color="grey-6" icon="done" />
</template>

<script>
import { defineComponent, ref, watch } from 'vue';
import { saveItems } from "src/store/items"

export default defineComponent({
   props: ['item', 'closeExpanded'],
   setup(props) {
      let confirm = ref(false)
      watch(() => confirm.value, (val) => props.closeExpanded(val))
      
      function openConfirm(){
         confirm.value = true
      }

      function doneItem(){
         props.item.done_at = Date.now()
         confirm.value = false
         saveItems()
      }

      return {
         confirm,
         openConfirm, doneItem,
      }
   }
})
</script>
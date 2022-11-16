<template>
  <q-expansion-item v-model="expanded">
    <template v-slot:header>
      <q-item-section>
        <q-item-label>
          {{ item.title }}
          <span class="text-grey-6" v-if="item.days > 0">(Раз в {{ item.days }} д.)</span>
        </q-item-label>
        <q-item-label v-if="usingDays" :class="item.ClassOfToShouldDo" caption>{{ item.TextToShouldDo }}</q-item-label>
        <q-item-label v-if="!usingDays" caption>
          Сделанно {{ hoursToString(item.HoursAgo) }} назад
        </q-item-label>
      </q-item-section>
    </template>

    <q-card>
      <q-card-section >
        <q-item-label v-if="usingDays" caption>
          Сделанно {{ item.DoneAt }} ({{ hoursToString(item.HoursAgo) }} назад)
        </q-item-label>
        <q-item-label v-if="!usingDays" caption>
          Сделанно {{ item.DoneAt }}
        </q-item-label>
      </q-card-section>
      <q-card-section v-if="item.description">
        {{ item.description }}
      </q-card-section>
      <!-- <q-separator /> -->
      <q-card-actions>
        <EditItem :item="item" :closeExpanded="closeExpanded" />
        <RemoveItem :item="item" :closeExpanded="closeExpanded" />
        <SetItemDone :item="item" :closeExpanded="closeExpanded" />
      </q-card-actions>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { usingDays, hoursToString } from 'src/store/items'
import EditItem from 'src/components/items/EditItem.vue'
import RemoveItem from 'src/components/items/RemoveItem.vue'
import SetItemDone from 'src/components/items/SetItemDone.vue'
export default defineComponent({
  props: ['item'],
  components: { EditItem, RemoveItem, SetItemDone },
  setup() {
    let expanded = ref(false)
    function closeExpanded(v){
      if (v == false) expanded.value = false
    }
    return { usingDays, expanded, hoursToString, closeExpanded }
  }
})
</script>
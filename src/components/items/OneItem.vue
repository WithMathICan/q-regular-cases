<template>
  <q-expansion-item :class="{ 'expanded-item': expanded }" v-model="expanded">
    <template v-slot:header>
      <q-item-section>
        <q-item-label>
          {{ item.title }}
          <span class="text-grey-6" v-if="itemsType === 'regular'">(Раз в {{ item.days }} д.)</span>
        </q-item-label>
        <SubtitleToShouldDo v-if="itemsType == 'regular'" :item="item" />
        <SubtitleMadesHoursAgo v-if="itemsType == 'repeated'" :item="item" />
        <q-item-label caption v-if="itemsType == 'main-date'">{{ DateOfMainDate(item) }}</q-item-label>
      </q-item-section>
    </template>

    <q-card :class="{ 'expanded-item': expanded }">
      <!-- <q-separator /> -->
      <q-card-section>
        <SubtitleMadesHoursAgo :item="item" v-if="itemsType == 'regular'" />
        <SubtitleDoneAt v-if="itemsType == 'repeated'" :item="item" />
      </q-card-section>
      <q-card-section v-if="item.description">{{ item.description }}</q-card-section>
      <q-card-actions>
        <EditItem :item="item" :closeExpanded="closeExpanded" />
        <RemoveItem :item="item" :closeExpanded="closeExpanded" />
        <SetItemDone :item="item" :closeExpanded="closeExpanded" v-if="['regular', 'repeated'].includes(itemsType)" />
        <MoveUp v-if="['main-date', 'to-do'].includes(itemsType) && index>0" :index="index" />
      </q-card-actions>
    </q-card>
  </q-expansion-item>
</template>

<script>
import { defineComponent, ref } from 'vue';
import { itemsType } from 'src/store'
import { DoneAt, DateOfMainDate } from 'src/store/items'
import EditItem from 'src/components/items/EditItem.vue'
import RemoveItem from 'src/components/items/RemoveItem.vue'
import SetItemDone from 'src/components/items/SetItemDone.vue'
import SubtitleToShouldDo from '../one-item-elements/SubtitleToShouldDo.vue';
import SubtitleMadesHoursAgo from '../one-item-elements/SubtitleMadesHoursAgo.vue';
import SubtitleDoneAt from '../one-item-elements/SubtitleDoneAt.vue';
import MoveUp from './MoveUp.vue';
export default defineComponent({
  props: ['item', 'index'],
  components: { EditItem, RemoveItem, SetItemDone, SubtitleToShouldDo, SubtitleMadesHoursAgo, SubtitleDoneAt, MoveUp },
  setup() {
    let expanded = ref(false)
    function closeExpanded(v) {
      if (v == false) expanded.value = false
    }
    return { itemsType, expanded, closeExpanded, DoneAt, DateOfMainDate }
  }
})
</script>

<style lang="scss">
.expanded-item {
  background-color: $yellow-1;
}

.expanded-item-title {
  background-color: $yellow-2;
}
</style>
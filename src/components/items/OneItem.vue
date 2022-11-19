<template>
  <q-expansion-item :class="{'expanded-item': expanded}" v-model="expanded">
    <template v-slot:header>
      <q-item-section>
        <q-item-label>
          {{ item.title }}
          <span class="text-grey-6" v-if="item.days && item.days > 0">(Раз в {{ item.days }} д.)</span>
        </q-item-label>
        <SubtitleToShouldDo v-if="itemsType=='regular'" :item="item" />
        <SubtitleMadesHoursAgo v-else :item="item" />
      </q-item-section>
    </template>

    <q-card :class="{'expanded-item': expanded}">
      <!-- <q-separator /> -->
      <q-card-section >
        <SubtitleMadesHoursAgo :item="item" v-if="itemsType=='regular'" />
        <SubtitleDoneAt v-else :item="item"/>
      </q-card-section>
      <q-card-section v-if="item.description">{{ item.description }}</q-card-section>
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
import { itemsType } from 'src/store'
import EditItem from 'src/components/items/EditItem.vue'
import RemoveItem from 'src/components/items/RemoveItem.vue'
import SetItemDone from 'src/components/items/SetItemDone.vue'
import SubtitleToShouldDo from '../one-item-elements/SubtitleToShouldDo.vue';
import SubtitleMadesHoursAgo from '../one-item-elements/SubtitleMadesHoursAgo.vue';
import SubtitleDoneAt from '../one-item-elements/SubtitleDoneAt.vue';
export default defineComponent({
  props: ['item'],
  components: { EditItem, RemoveItem, SetItemDone, SubtitleToShouldDo, SubtitleMadesHoursAgo, SubtitleDoneAt },
  setup() {
    let expanded = ref(false)
    function closeExpanded(v){
      if (v == false) expanded.value = false
    }
    return { itemsType, expanded, closeExpanded }
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
<template>
  <q-page>
    <q-list bordered separator>
      <q-item clickable v-ripple v-for="item in cases.sort(Cases.Compare)">
        <q-item-section>
          <q-item-label>{{ item.title }} ({{ item.days }} д.)</q-item-label>
          <!-- <q-item-label caption>Сделать: {{ item.ShouldDo }}</q-item-label> -->
          <q-item-label :class="item.ClassOfToShouldDo" caption>{{ item.TimeToShouldDo }}</q-item-label>
        </q-item-section>
        <q-item-section avatar>
          <div>
            <SetDone :item="item" />
          </div>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { cases } from '../../store'
import {Cases} from "../../store/cases___"
import SetDone from "../SetDone.vue"
export default defineComponent({
  name: 'NonCompleted',
  components: {SetDone},
  setup() {
    return { cases, Cases }
  }
})
</script>

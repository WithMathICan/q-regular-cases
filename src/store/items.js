import { reactive, computed } from 'vue'
import { readData, itemsKey, itemsToShow } from '.'
import { formatDate, msInDay } from './cases'

export function hoursToString(hours) {
   if (hours < 0) hours = -hours
   if (hours <= 24) return `${hours} ч.`
   else return `${Math.floor(hours / 24)} д. ${hours % 24} ч.`
}

export class Item {
   constructor({ title, description = '', done_at = 0, days = 0, id=Date.now() }) {
      this.id = id.toString() + Math.random()
      this.title = title
      this.description = description
      this.done_at = +done_at
      this.days = +days
   }

   get DoneAt() {
      return formatDate(this.done_at)
   }

   get MsToShoudDo() {
      return this.done_at + this.days * msInDay - Date.now()
   }

   get HoursAgo() {
      let time = Date.now() - this.done_at
      return Math.floor(time / 3600000)
   }

   get HoursToShouldDo() {
      let time = this.done_at + this.days * msInDay - Date.now()
      return Math.floor(time / 3600000)
   }

   get ClassOfToShouldDo() {
      if (this.HoursToShouldDo > 0) return 'text-positive'
      else if (this.HoursToShouldDo > -24) return 'text-primary'
      return 'text-negative'
   }

   get TextToShouldDo() {
      let hours = this.HoursToShouldDo
      if (hours == 0) return "Нужно сделать сейчас"
      let label = (hours > 0) ? 'Время до выполнения' : 'Просроченное время'
      if (hours < 0) hours = -hours
      return `${label}: ${hoursToString(hours)}`
   }
}

export const allItems = reactive({

})

export function initItems() {
   let data = readData(itemsKey.value)
   allItems[itemsKey.value] = data.map(v => new Item(v))
}

export function saveItems() {
   localStorage.setItem(itemsKey.value, JSON.stringify(allItems[itemsKey.value]))
}

export function addItem(obj) {
   allItems[itemsKey.value] = [...allItems[itemsKey.value], new Item(obj)]
   saveItems()
}

export function removeItem(item) {
   allItems[itemsKey.value] = allItems[itemsKey.value].filter(el => el !== item)
   saveItems()
}

export let usingDays = computed(() => itemsToShow[itemsKey.value].usingDays)

export const sortedItems = computed(() => {
   let items = allItems[itemsKey.value]
   if (!Array.isArray(items)) return []
   if (usingDays.value){
      return items.sort((a,b) => Math.sign(a.MsToShoudDo - b.MsToShoudDo))
   }
   return items.sort((a,b) => Math.sign(a.done_at - b.done_at))
})

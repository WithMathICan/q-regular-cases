import { computed } from "vue"
import { allItems } from "./items"

export const categoryTypes = [
   {id: 'regular', label: 'Регулярные дела'},
   {id: 'repeated', label: 'Повторяемые дела'},
   {id: 'to-do', label: 'Текущие одноразовые дела'},
   {id: 'main-date', label: 'Знаменательные даты'}
]

export class Category{
   title = ''
   description = ''
   alias = ''
   type = ''
   order = 1
}

export const sortedCategories = computed(() => {
   let categories = allItems['categories']
   return categories.sort((a, b) => Math.sign(a.order - b.order))
})
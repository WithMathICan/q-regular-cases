export const categoryTypes = [
   { id: 'regular', label: 'Регулярные дела' },
   { id: 'repeated', label: 'Повторяемые дела' },
   { id: 'to-do', label: 'Текущие одноразовые дела' },
   { id: 'main-date', label: 'Знаменательные даты' }
]

export const CATEGORY_KEY = '___category_123'

export class Category {
   title = ''
   description = ''
   alias = ''
   type = ''
   icon = 'school'
}

export function typeLabel(typeAlias){
   let type = categoryTypes.find(el => el.id === typeAlias)
   if (type) return type.label
   return ''
}

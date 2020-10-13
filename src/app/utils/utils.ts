import { Abstract } from '../models/abstract';

export function compareWithGenerico(item1: Abstract, item2: Abstract) {
  return item1.id === item2.id
}

import type { Locale } from '../i18n/locale'
import { en } from './en'
import { ru } from './ru'
import type { Content } from './types'

export const content: Record<Locale, Content> = { ru, en }

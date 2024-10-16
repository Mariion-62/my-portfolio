import { MessageKeys, NestedKeyOf } from "next-intl";

export type DictionaryKeys = MessageKeys<Dictionary, NestedKeyOf<Dictionary>>;

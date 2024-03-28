export type SearchQueryPayload = {
  widget: Widget;
  context: Context;
};

export type Value = {
  name: string;
  order: string;
};

export type Sort = {
  value: Value[];
};

export type Search = {
  limit: number;
  offset: number;
  sort: Sort;
};

export type Widget = {
  items: Item[];
};

export type Item = {
  rfk_id: string;
  entity: string;
  search: Search;
  sources: string[];
};

export type Locale = {
  country: string;
  language: string;
};

export type Context = {
  locale: Locale;
};

export type SearchResponseWidget<T> = {
  rfk_id: string;
  type: string;
  used_in: string;
  entity: string;
  content: Array<T>;
  total_item: number;
  limit: number;
  offset: number;
};

export type SearchResponse<T> = {
  widgets: SearchResponseWidget<T>[];
  dt: number;
  ts: number;
};

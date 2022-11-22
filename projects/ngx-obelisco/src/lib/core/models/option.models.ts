export interface Option {
  title: string;
  items: OptionItem[];
}

export interface OptionItem {
  text: string;
  active?: boolean;
}

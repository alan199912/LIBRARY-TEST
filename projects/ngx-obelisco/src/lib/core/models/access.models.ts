export interface Access {
  title: string;
  description?: string;
  route?: string;
  link?: string;
}

export interface AccessList {
  title: string;
  description?: string;
  link?: string;
  route?: string;
  isDescriptive?: boolean;
}

export type AccessGroup = Omit<Access, 'description'>;

export interface AccessCategory {
  name: string;
  access: Access[];
}

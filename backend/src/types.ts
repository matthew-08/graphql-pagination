import { Collection } from 'mongodb';

export type Comment = {
  date: string;
  content: string;
  user: {
    name: string;
  };
};

export type Database = Collection<Comment>;

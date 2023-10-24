import { Collection } from 'mongodb';
import { Document } from 'mongodb';
import { Database } from 'sqlite';
import { Comment } from '../../types';

type CommentConnectionInput = {
  input: { first: number; after?: string };
};

interface Edge<TNode> {
  cursor: string;
  node: TNode;
}
const createEdges = <TNode, CursorField extends keyof TNode>(
  dbResult: TNode[],
  cursorField: CursorField
): Edge<TNode>[] => {
  return dbResult.map((result) => {
    return {
      cursor: result[cursorField] as string,
      node: result,
    };
  });
};

export const commentConnection = async (
  parent: any,
  { input }: CommentConnectionInput,
  { database }: { database: Collection<Comment> },
  _: any
) => {
  const prevDate = input.after ?? new Date(0).toISOString();

  const noAfterCursor = input.after ? false : true;

  const comments = await database
    .find({ date: { $gt: prevDate } })
    .limit(input.first + 1)
    .sort({ date: 'asc' })
    .toArray();

  const docBefore = await database
    .find({ date: { $lt: prevDate } })
    .limit(1)
    .toArray();

  const docAfter = await database
    .find({ date: { $gt: comments[comments.length - 1].date } })
    .limit(1)
    .toArray();

  return {
    pageInfo: {
      hasPreviousPage: docBefore[0] ? true : false,
      hasNextPage: docAfter[0] ? true : false,
      startCursor: comments[1].date,
      endCursor: comments[comments.length - 1].date,
    },
    edges: createEdges(comments.slice(1), 'date'),
  };
};

/* type PageInfo {
    hasPreviousPage: Boolean!
    hasNextPage: Boolean!
    startCursor: String
    endCursor: String
} */

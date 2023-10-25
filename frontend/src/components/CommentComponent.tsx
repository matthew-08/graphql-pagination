import { Comment } from '../App';

type Props = {
  comment: Comment;
};

const CommentComponent = ({ comment }: Props) => {
  return (
    <div className="border-2 mb-2">
      <div>
        <p className="mr-auto w-fit p-2 text-lg">{comment.user.name}</p>
      </div>
      <p>{comment.content}</p>
      <div className="mt-8">
        <p className="ml-auto w-fit p-2 text-xs">{comment.date}</p>
      </div>
    </div>
  );
};

export default CommentComponent;

import { useState } from 'react';
import './App.css';
import './index.css';
import CommentComponent from './components/CommentComponent';

export type Comment = {
  date: string;
  content: string;
  user: {
    name: string;
  };
};

type FormState = {
  name: string;
  content: string;
};

const initFormState: FormState = {
  content: '',
  name: '',
};

function App() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState<FormState>(initFormState);

  const handleNewComment = () => {
    setComments([
      ...comments,
      {
        content: form.content,
        date: new Date().toISOString(),
        user: {
          name: form.name,
        },
      },
    ]);
    setForm(initFormState);
  };

  const handleFormChange = (field: 'name' | 'content', value: string) => {
    setForm((prevForm) => ({
      ...prevForm,
      [field]: value,
    }));
  };
  return (
    <div className="min-w-max max-w-5xl min-h-screen flex-col justify-center m-auto">
      <p className="text-4xl">Pagination Testing</p>
      <div className="mt-24">Comments:</div>
      <div className="flex-col max-w-lg m-auto">
        <form
          className="flex-col"
          onSubmit={(e) => {
            e.preventDefault();
            handleNewComment();
          }}
        >
          <input
            type="text"
            placeholder="Name"
            className="border-2 mb-2 "
            value={form.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
          />
          <div>
            <textarea
              value={form.content}
              placeholder="Type comment here:"
              className="border-2 min-w-full max-h-full"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNewComment();
                }
              }}
              onChange={(e) => handleFormChange('content', e.target.value)}
            />
          </div>
          <button className="mb-4">Submit</button>
        </form>
        <div className="flex-col">
          {comments.map((comment) => (
            <CommentComponent comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

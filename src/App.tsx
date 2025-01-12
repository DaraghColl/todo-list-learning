interface Todo {
  id: string;
  title: string;
  description?: string;
  status: 'todo' | 'in progress' | 'complete';
}

const todos: Todo[] = [
  {
    id: 'todo1',
    title: 'Finish the presentation for the client meeting',
    status: 'todo'
  },
  {
    id: 'todo2',
    title: 'Research new marketing strategies for the product launch',
    status: 'in progress'
  },
  {
    id: 'todo3',
    title: 'Complete the monthly sales report',
    status: 'todo'
  },
  {
    id: 'todo4',
    title: 'Attend the team-building workshop',
    status: 'in progress'
  },
  {
    id: 'todo5',
    title: "Review and update the company's website",
    status: 'complete'
  }
];

function App() {
  return (
    <div className="mx-auto max-w-screen-md px-4">
      <h1 className="text-3xl tracking-widest">My Todo List</h1>
      <div className="mt-10 flex flex-col gap-4">
        {todos.map((todo) => (
          <div className="flex flex-col gap-4 rounded-md border border-slate-300 p-4">
            <h3>{todo.title}</h3>
            {todo.description && <p>{todo.description}</p>}
            <span>{todo.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

export default function Page() {
  return (
    <div className="bg-gray-50 p-16 max-w-lg mx-auto mt-24">
      <div className="flex gap-2">
        <input className="border flex-1 bg-white" />
        <button className="bg-blue-400 py-2 px-4">add</button>
      </div>

      <Task text="hicheelee dawtah" />
      <Task text="hooloo hiih" />
      <Task text="ger tsewrleh" />
      <Task text="nom unshih" />
      <Task text="dvvge harah" />
    </div>
  );
}

function Task({ text }) {
  return (
    <div className="border bg-white p-4 mt-4 flex justify-between">
      <div className="text-gray-500">{text}</div>

      <button className="text-sm text-red-800 cursor-pointer px-2 rounded hover:bg-gray-200">Delete</button>
    </div>
  );
}

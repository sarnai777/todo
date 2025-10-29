export default function Page() {
  return (
    <div className="bg-gray-50 p-16 max-w-lg mx-auto mt-24">
      <div className="flex gap-2">
        <input className="border flex-1 bg-white" />
        <button className="bg-blue-400 py-2 px-4">add</button>
      </div>

      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  );
}

function Task() {
  return (
    <div className="border bg-white p-4 mt-4 flex justify-between">
      <div>hicheelee davtah</div>

      <button className="text-sm text-red-800 cursor-pointer px-2 rounded hover:bg-gray-200">Delete</button>
    </div>
  );
}

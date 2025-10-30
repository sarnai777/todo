"use client";

const tasks = ["hicheelee dawtah", "hooloo hiih", "geree tseverleh"];

export default function Page() {
  return (
    <div className="bg-pink-50 rounded-2xl p-16 max-w-lg mx-auto mt-24">
      <div className="flex gap-2">
        <input className="border rounded-2xl flex-1 bg-white" />

        <button className="bg-pink-400 py-2 px-4 rounded-2xl">add</button>
      </div>

      {tasks.map((task) => (
        <Task key={task} text={task} />
      ))}
    </div>
  );
}

function Task({ text }) {
  return (
    <div className="border bg-white p-4 mt-4 flex justify-between rounded-3xl">
      <div className="text-gray-500">
        <input type="checkbox" />
        {text}
      </div>
      <div className="flex-gap-2">
        <button className="text-sm text-green-800 cursor-pointer px-2 rounded hover:bg-gray-200 ">zasah</button>
        <button className="text-sm text-red-800 cursor-pointer px-2 rounded hover:bg-gray-200">Delete</button>
      </div>
    </div>
  );
}

const Stack = () => {
  return (
    <aside className="w-full rounded-xl border border-slate-100 border-t-2 border-t-sky-500 bg-white p-4 shadow-sm">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">
          Your Stack
        </h2>

        <p className="mt-1 text-[14px] text-slate-400">
          No technologies selected yet.
        </p>
      </div>

      {/* Empty State */}
      <div className="mt-3 flex min-h-13 items-center justify-center rounded-lg border border-dashed border-slate-200 px-3">
        <p className="text-[12px] text-slate-400">
          Your stack is empty.
        </p>
      </div>
    </aside>
  );
};

export default Stack;
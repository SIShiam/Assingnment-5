export default function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <aside className="h-fit rounded-2xl border border-white/10 bg-white/[0.03] p-5 lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Your Stack</h3>
        {stack.length > 0 && (
          <button
            onClick={onRemoveAll}
            className="text-xs font-semibold text-rose-400 hover:text-rose-300"
          >
            Remove All
          </button>
        )}
      </div>
      <p className="mt-1 text-sm text-gray-400">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <div className="mt-6 flex flex-col items-center gap-2 py-8 text-center">
          <span className="text-3xl">🧰</span>
          <p className="text-sm text-gray-500">
            Your stack is empty. Add technologies from the list to build your
            perfect stack.
          </p>
        </div>
      ) : (
        <ul className="mt-4 flex flex-col gap-3">
          {stack.map((tech) => (
            <li
              key={tech.id}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3"
            >
              <img
                src={tech.icon}
                alt={`${tech.name} logo`}
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                }}
              />
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">{tech.name}</p>
                <p className="text-xs text-gray-400">{tech.category}</p>
              </div>
              <button
                onClick={() => onRemove(tech.id)}
                aria-label={`Remove ${tech.name}`}
                className="rounded-full p-1 text-gray-400 hover:bg-white/10 hover:text-rose-400"
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}
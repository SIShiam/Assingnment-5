import StarRating from './StarRating'

const DIFFICULTY_STYLES = {
  'Beginner-Friendly': 'bg-emerald-500/15 text-emerald-400',
  Intermediate: 'bg-amber-500/15 text-amber-400',
  Advanced: 'bg-rose-500/15 text-rose-400',
}

export default function TechCard({ tech, isAdded, onAdd }) {
  return (
    <div className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-sm transition hover:border-white/20 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <img
          src={tech.icon}
          alt={`${tech.name} logo`}
          className="h-10 w-10 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
        <span className="rounded-full bg-brand-gradient px-3 py-1 text-xs font-semibold text-white">
          {tech.badge}
        </span>
      </div>

      <h3 className="mt-4 text-lg font-bold text-white">{tech.name}</h3>
      <p className="mt-1 flex-1 text-sm text-gray-400">{tech.description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-gray-300">
          {tech.category}
        </span>
        <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${DIFFICULTY_STYLES[tech.difficulty] ?? 'bg-white/10 text-gray-300'}`}>
          {tech.difficulty}
        </span>
        <StarRating rating={tech.rating} />
      </div>

      <button
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={`mt-5 w-full rounded-full py-2.5 text-sm font-semibold transition ${
          isAdded
            ? 'cursor-not-allowed bg-white/10 text-gray-400'
            : 'bg-brand-gradient text-white hover:opacity-90'
        }`}
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  )
}
export default function StarRating({ rating }) {
  return (
    <span className="flex items-center gap-1 text-sm font-medium text-amber-400">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
      </svg>
      {rating.toFixed(1)}
    </span>
  )
}
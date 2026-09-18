export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-24 text-gray-400">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-pink-500" />
      <p className="text-sm">Loading technologies…</p>
    </div>
  )
}
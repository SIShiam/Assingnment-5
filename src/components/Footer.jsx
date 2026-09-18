const LINK_GROUPS = {
  Product: ['Technologies', 'Projects', 'Pricing', 'Changelog'],
  Company: ['About', 'Careers', 'Blog', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0b0b12]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 md:grid-cols-4 md:px-8">
        <div className="md:col-span-1">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-gradient font-bold text-white">
              {'</>'}
            </span>
            <span className="text-lg font-bold text-brand-gradient">Dev Stack</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-gray-400">
            Discover, compare, and build your own web development stack from
            the technologies developers love most.
          </p>
          <div className="mt-4 flex gap-4 text-gray-400">
            <a href="#github" aria-label="GitHub" className="hover:text-white">GitHub</a>
            <a href="#twitter" aria-label="Twitter" className="hover:text-white">Twitter</a>
            <a href="#linkedin" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
          </div>
        </div>

        {Object.entries(LINK_GROUPS).map(([group, links]) => (
          <div key={group}>
            <h4 className="text-sm font-semibold text-white">{group}</h4>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-gray-400">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-6 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 text-xs text-gray-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
export function TopNav() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition duration-300">
                CookedUp
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

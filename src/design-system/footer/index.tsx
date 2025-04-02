export const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-6 text-center text-gray-500 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <p className="flex items-center justify-center text-sm">© {currentYear} Michał Janiec. All rights reserved.</p>
      </div>
    </footer>
  )
}


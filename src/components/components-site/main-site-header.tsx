import Link from "next/link"
import Image from "next/image"

export function MainSiteHeader() {
  return (
    <header className="bg-black/50 backdrop-blur-sm fixed w-full lg:sticky top-0 z-40">
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="h-12 flex items-center justify-center px-4 relative">
          <div className="absolute left-0 top-0 bottom-0 w-1" style={{ backgroundColor: "#477050" }}></div>
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-10 h-10 border border-black flex items-center justify-center relative"
              style={{ backgroundColor: "#FFD700" }}
            >
              <Image src="/logo.png" alt="Logo" width={56} height={56} className="w-8 h-8" />
            </div>
            <div className="text-center">
              <h1 className="text-base font-bold leading-tight">
                <span className="text-[#D62718]">Legjobb</span>
                <span className="text-white"> Fogadó</span>
                <span className="text-[#D62718]">irodák</span>
                <span className="text-white"> Magyarországon</span>
              </h1>
            </div>
          </Link>
          <div className="absolute right-0 top-0 bottom-0 w-1 bg-[#D62718]"></div>
        </div>
      </div>

      {/* Desktop/Tablet Header */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#477050]"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1.5 bg-[#D62718]"></div>

        <div className="container mx-auto px-4 py-3 max-w-[1150px]">
          <div className="flex items-center justify-center">
            {/* Logo and Brand - Centered */}
            <Link href="/" className="flex items-center gap-4 group">
              <div className="relative">
                <div
                  className="w-12 h-12 border-2 border-black flex items-center justify-center"
                  style={{ backgroundColor: "#FFD700" }}
                >
                  <Image src="/logo.png" alt="Logo" width={24} height={24} className="w-8 h-8" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border border-black bg-[#D62718]"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-[#477050] border border-black"></div>
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold">
                  <span className="text-[#D62718]">Legjobb</span>
                  <span className="text-white"> Fogadó</span>
                  <span className="text-[#D62718]">irodák</span>
                  <span className="text-white"> Magyarországon</span>
                </h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

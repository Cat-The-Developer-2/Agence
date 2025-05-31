const App = () => {
  return (
    <div className="overflow-hidden">
      <div className="bg-black min-h-screen min-w-screen relative overflow-hidden text-white bg-[url('/background.png')] bg-cover bg-center">
        <div className="py-[1%] px-[5%] md:px-[10%] w-full">
          <nav className="flex justify-between items-center p-4 w-full">
            <div className="flex gap-4 items-center">
              <span className="flex gap-2 items-center">
                <img src="/icon.png" alt="logo" />
                <h2 className="font-medium text-xl">Agence</h2>
              </span>

              <ul className="gap-4 ml-8 hidden md:flex">
                <li className="cursor-pointer hover:underline">Product</li>
                <li className="cursor-pointer hover:underline">Resources</li>
                <li className="cursor-pointer hover:underline">Docs</li>
                <li className="cursor-pointer hover:underline">Pricing</li>
              </ul>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <button className="text-white px-4 py-2 rounded-full cursor-pointer hover:bg-[#1E1E1E] hover:border-2 hover:border-white/20 transition-all duration-300 ease-in-out ">
                Sign In
              </button>
              <button className="bg-[#1E1E1E] text-white px-4 py-2 rounded-full border-2 border-white/20 cursor-pointer">
                Get Started
              </button>
            </div>
          </nav>

          <div className="hero flex items-center justify-center flex-col mt-[6%]">
            <span className="flex items-center gap-2">
              <img src="/copilots.png" alt="copilots" />
              <p className="md:text-xl text-lg font-medium">Copilots</p>
            </span>
            <h1 className="md:text-6xl text-4xl font-bold bg-gradient-to-b from-white to-[#307AE2] to-200% inline-block text-transparent bg-clip-text leading-[1.2] text-center">
              Build Agentic AI <br /> with drag and drop
            </h1>
            <p className="md:text-xl text-lg text-center text-[#B8C2D1] w-[80%] md:w-1/2 mt-4">
              Visually orchestrate workflows, connect tools, and deploy AI
              agents without writing a single line of code
            </p>

            <div className="email flex items-center gap-2 mt-6 bg-[#1E1E1E]/20 p-2 rounded-full border-2 border-[#3A81CA]/50">
              <input
                type="email"
                className="ml-3"
                placeholder="Enter your email"
              />
              <button className="bg-white text-black p-2 rounded-full px-4">
                Book a demo
              </button>
            </div>
          </div>
        </div>

        <img
          src="/aiCursor.png"
          alt="aiCursor"
          className="absolute md:left-[65%] right-[5%]"
        />
        <img
          src="/holiday.png"
          alt="holiday"
          className="md:absolute top-[50%] mt-[100px] mx-auto"
        />
        <img
          src="/askCopilot.png"
          alt="askCopilot"
          className="md:absolute top-[50%] right-0 mx-auto"
        />
      </div>
      <div className="bg-black  overflow-hidden text-white pt-6">
        <div className="py-[1%] px-[5%] md:px-[10%] w-full text-center text-[#8D8C8C]">
          <p className="md:text-xl text-lg">
            Built to be integrated with your current stack
          </p>
          <img src="/Logos.png" alt="Logos" className="mt-6" />
        </div>
      </div>
    </div>
  );
};

export default App;

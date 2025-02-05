export default function Background() {
  return (
    <>
      {/* Noise Background with Darker Overlay */}
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen bg-[url('/images/noise1.png')] bg-auto bg-repeat pointer-events-none opacity-100 z-[-1]">
        <div className="absolute top-0 left-0 w-full h-full bg-[#2c2c2c] opacity-30"></div>
      </div>

      {/* Vertical Lines */}
      <div className="fixed top-0 left-0 right-0 bottom-0 w-full min-h-screen flex z-[-2] pointer-events-none">
        {[...Array(5)].map((_, index) => (
          <span
            key={index}
            className="h-full w-[10%] mx-[5%] border-r border-white/5 border-l border-dashed border-l-white/5"
          ></span>
        ))}
      </div>
    </>
  );
}

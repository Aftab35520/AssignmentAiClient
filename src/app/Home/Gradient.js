export default function Gradient() {
  return (
    <>
      {/* Background filler for mobile: soft lavender-blue */}
      <div className="block md:hidden fixed inset-0 bg-[#A3A0FF] -z-20"></div>

      {/* Main gradient blob with smooth fade */}
      <div
        className="absolute top-[-33%] left-0 rounded-[40%] rotate-[-6deg] ml-[-100px] w-[130%] h-dvh z-10"
        style={{
          background: "linear-gradient(to bottom right, #8179FC, #D8ACF1)",
          WebkitMaskImage:
            "radial-gradient(circle at top left, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
          maskImage:
            "radial-gradient(circle at top left, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%)",
        }}
      ></div>
    </>
  );
}

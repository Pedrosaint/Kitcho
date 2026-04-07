const FlippedCurve = () => {
  return (
    <div className="mx-auto container -mt-2 hidden lg:block">
      {/* Flipped slant — mirrors the navbar shape, anchored bottom-right */}
      <div className="flex justify-end">
        <div className="bg-white clip-slant-flipped h-20 w-full 2xl:max-w-5xl  xl:max-w-3xl lg:max-w-lg" />
      </div>
    </div>
  );
};

export default FlippedCurve;

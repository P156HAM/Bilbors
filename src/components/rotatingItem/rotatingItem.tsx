interface RotatingSentenceProps {
  sentence: string;
}

function RotatingSentence({ sentence }: RotatingSentenceProps) {
  const chars = sentence.split("");

  return (
    <div className="hidden md:flex justify-center items-center h-64 animate-yo-yo">
      <div className="relative animate-spin-slow w-40 h-40 flex justify-center items-center text-xl font-bold">
        {chars.map((char, index) => {
          const rotate = (index / chars.length) * 360;
          return (
            <span
              key={index}
              className="absolute tracking-tighter"
              style={{
                transform: `rotate(${rotate}deg) translateX(100px)`,
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default RotatingSentence;

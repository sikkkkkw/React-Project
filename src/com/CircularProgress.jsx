export default function CircularProgress({ rate = 60 }) {
  let color;

  switch (true) {
    case parseInt(rate) >= 70:
      color = "#2da94c";
      break;
    case parseInt(rate) >= 50 && rate < 70:
      color = "#90972c";
      break;
    case parseInt(rate) < 50:
      color = "#974c2c";
      break;
    default:
      break;
  }
  return (
    // 제일큰 테두리
    <div className="w-[40px] h-[40px] rounded-full flex justify-center items-center bg-gray-900 relative">
      <div
        className="w-[36px] h-[36px] rounded-full flex justify-center items-center "
        style={{
          background: `conic-gradient(${color} 0% ${
            360 * rate * 0.01
          }deg, rgba(255, 255, 255, 0.1) ${360 * rate * 0.01}deg 360deg)`,
        }}
      >
        <div className="w-[32px] h-[32px] bg-gray-900 rounded-full flex justify-center items-center text-[12px] text-white">
          {rate}
          <sup>%</sup>
        </div>
      </div>
    </div>
  );
}

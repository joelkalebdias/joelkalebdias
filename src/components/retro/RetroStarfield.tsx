export default function RetroStarfield() {
  return (
    <div className="retro-starfield" aria-hidden>
      <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
        <defs>
          <pattern id="stars-base" width="160" height="160" patternUnits="userSpaceOnUse">
            <rect x="12" y="20" width="1" height="1" fill="#ffffff" opacity="0.7" />
            <rect x="48" y="6" width="1" height="1" fill="#cdd6ff" opacity="0.6" />
            <rect x="92" y="34" width="1" height="1" fill="#ffffff" opacity="0.5" />
            <rect x="130" y="14" width="1" height="1" fill="#fff2a8" opacity="0.7" />
            <rect x="22" y="74" width="1" height="1" fill="#ffffff" opacity="0.5" />
            <rect x="70" y="110" width="1" height="1" fill="#bfeaff" opacity="0.6" />
            <rect x="118" y="92" width="1" height="1" fill="#ffffff" opacity="0.55" />
            <rect x="150" y="138" width="1" height="1" fill="#ffd0e8" opacity="0.55" />
            <rect x="40" y="146" width="1" height="1" fill="#ffffff" opacity="0.45" />
            <rect x="100" y="64" width="1" height="1" fill="#ffffff" opacity="0.5" />
          </pattern>
          <pattern id="stars-tw-a" width="240" height="240" patternUnits="userSpaceOnUse">
            <rect x="30" y="40" width="2" height="1" fill="#ffffff" />
            <rect x="31" y="39" width="1" height="3" fill="#ffffff" />
            <rect x="180" y="80" width="1" height="1" fill="#bfeaff" />
            <rect x="90" y="170" width="1" height="1" fill="#fff2a8" />
            <rect x="210" y="200" width="2" height="1" fill="#ffffff" />
          </pattern>
          <pattern id="stars-tw-b" width="200" height="200" patternUnits="userSpaceOnUse">
            <rect x="60" y="20" width="1" height="1" fill="#ffd0e8" />
            <rect x="140" y="120" width="1" height="1" fill="#ffffff" />
            <rect x="20" y="160" width="2" height="1" fill="#bfeaff" />
            <rect x="21" y="159" width="1" height="3" fill="#bfeaff" />
            <rect x="170" y="60" width="1" height="1" fill="#fff2a8" />
          </pattern>
          <pattern id="stars-tw-c" width="320" height="320" patternUnits="userSpaceOnUse">
            <rect x="80" y="50" width="1" height="1" fill="#ffffff" />
            <rect x="260" y="240" width="1" height="1" fill="#ffffff" />
            <rect x="200" y="100" width="1" height="1" fill="#ffd0e8" />
          </pattern>
          <symbol id="planet-saturn" viewBox="0 0 16 16">
            <rect x="6" y="4" width="4" height="1" fill="#f7b267" />
            <rect x="5" y="5" width="6" height="1" fill="#f4a261" />
            <rect x="5" y="6" width="6" height="1" fill="#e76f51" />
            <rect x="6" y="7" width="4" height="1" fill="#c44536" />
            <rect x="2" y="6" width="3" height="1" fill="#ffd6a5" opacity="0.85" />
            <rect x="11" y="6" width="3" height="1" fill="#ffd6a5" opacity="0.85" />
          </symbol>
          <symbol id="planet-blue" viewBox="0 0 10 10">
            <rect x="3" y="2" width="4" height="1" fill="#8ad8ff" />
            <rect x="2" y="3" width="6" height="1" fill="#5ab7e8" />
            <rect x="2" y="4" width="6" height="2" fill="#2e86c1" />
            <rect x="3" y="6" width="4" height="1" fill="#1b4f72" />
          </symbol>
          <symbol id="planet-red" viewBox="0 0 8 8">
            <rect x="2" y="1" width="4" height="1" fill="#ff7b7b" />
            <rect x="1" y="2" width="6" height="2" fill="#e63946" />
            <rect x="1" y="4" width="6" height="2" fill="#a4161a" />
            <rect x="2" y="6" width="4" height="1" fill="#6a040f" />
          </symbol>
        </defs>

        <rect className="tw-a" width="100%" height="100%" fill="url(#stars-base)" opacity="0.9" />
        <rect className="tw-b" width="100%" height="100%" fill="url(#stars-tw-a)" />
        <rect className="tw-c" width="100%" height="100%" fill="url(#stars-tw-b)" />
        <rect className="tw-d" width="100%" height="100%" fill="url(#stars-tw-c)" />

        <use href="#planet-saturn" x="6%" y="14%" width="22" height="22" opacity="0.85" />
        <use href="#planet-blue" x="82%" y="38%" width="14" height="14" opacity="0.8" />
        <use href="#planet-red" x="14%" y="72%" width="10" height="10" opacity="0.8" />
        <use href="#planet-blue" x="68%" y="82%" width="12" height="12" opacity="0.75" />
        <use href="#planet-saturn" x="90%" y="8%" width="16" height="16" opacity="0.7" />
      </svg>
    </div>
  );
}

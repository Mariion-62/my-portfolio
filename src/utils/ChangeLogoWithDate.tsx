import Image from "next/image";
import { useEffect, useState } from "react";

function ChangeLogoWithDate() {
  const [, setDate] = useState(new Date());
  const [logo, setLogo] = useState("/logo.png");

  useEffect(() => {
    const updateLogo = () => {
      const now = new Date();
      const month = now.getMonth();
      const day = now.getDate();
      let logoSrc = "/logo.png";

      if (month === 9 && day >= 15 && day <= 31) {
        // Halloween: October 15th to 31st
        logoSrc = "/logo_halloween.png";
      } else if (month === 11 && day >= 1 && day <= 31) {
        // Christmas: December 1st to 31st
        logoSrc = "/logo_noel.png";
      }

      setLogo(logoSrc);
    };

    updateLogo();
    const interval = setInterval(() => {
      setDate(new Date());
      updateLogo();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Image src={logo} alt="logo" width={130} height={130} />
    </div>
  );
}

export default ChangeLogoWithDate;

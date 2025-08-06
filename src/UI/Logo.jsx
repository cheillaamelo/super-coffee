import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <div className="logo">
      <Link href="/">
        <Image
          src="/images/logos/logo.svg"
          alt="Super coffee"
          width={77}
          height={38}
        />
      </Link>
    </div>
  );
};

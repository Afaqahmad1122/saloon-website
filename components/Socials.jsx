import Link from "next/link";
import { FaYoutube, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = ({ containerrStyles }) => {
  return (
    <ul className={`${containerrStyles}`}>
      <li>
        <Link href="/">
          <FaYoutube />
        </Link>
      </li>
      <li>
        <Link href="/">
          <FaInstagram />
        </Link>
      </li>
      <li>
        <Link href="/">
          <FaTwitter />
        </Link>
      </li>
      <li>
        <Link href="/">
          <FaFacebook />
        </Link>
      </li>
    </ul>
  );
};

export default Socials;

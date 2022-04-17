import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faVimeoSquare } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} />;
  const velogIcon = <FontAwesomeIcon icon={faVimeoSquare} />;
  return (
    <div className="text-center border-t border-slate-300 p-4 text-slate-400">
      <div>Built by oaat9309</div>
      <Link href="https://github.com/oaat9309">
        <a className="text-3xl text-slate-300">{githubIcon}</a>
      </Link>
      <Link href="https://velog.io/@kite1993">
        <a className="text-3xl text-slate-300">{velogIcon}</a>
      </Link>
    </div>
  );
};

export default Footer;

import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import shiba from '../images/shiba.svg';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img src={shiba} alt="shiba" width="72" />
        <span className="title">URL</span>
      </div>
      <div className="header__right">
        <Link href="https://github.com/hungteddy" target="_blank">
          <GitHubIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default Header;

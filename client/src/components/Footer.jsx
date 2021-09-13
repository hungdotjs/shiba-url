import Link from '@material-ui/core/Link';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
  return (
    <div className="footer">
      Made with <FavoriteIcon color="error" fontSize="small" className="mx-8" />
      by
      <Link className="footer__link">Hung</Link>
    </div>
  );
};

export default Footer;

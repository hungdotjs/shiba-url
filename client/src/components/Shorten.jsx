import { useState } from 'react';
import axios from 'axios';
import validUrl from 'valid-url';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';
import CircularProgress from '@material-ui/core/CircularProgress';

const Shorten = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isShorting, setIsShorting] = useState(false);
  const [isCopied, setIsCopied] = useState(-1);
  const [longUrl, setLongUrl] = useState('');
  const [links, setLinks] = useState([]);

  const shortenLink = () => {
    if (!validUrl.isUri(longUrl)) {
      setError(true);
      const timeout = setTimeout(() => {
        setError(false);
        clearTimeout(timeout);
      }, 3000);
      return;
    }

    setIsShorting(true);
    axios
      .post('https://shibaurl.herokuapp.com/api/url/shorten', {
        longUrl,
      })
      .then((res) => {
        console.log(res);
        const { shortUrl } = res.data;
        setLinks((links) => links.concat({ longUrl, shortUrl }));
        setLongUrl('');
        setOpen(true);
        setIsShorting(false);
      })
      .catch((err) => {
        console.error(err);
        setIsShorting(false);
      });
  };

  const copyText = (shortUrl, index) => {
    navigator.clipboard.writeText(shortUrl);
    setIsCopied(index);
    const timeout = setTimeout(() => {
      setIsCopied(-1);
      clearTimeout(timeout);
    }, 2000);
  };

  return (
    <>
      <div className="shorten">
        <TextField
          className="shorten__input mb-16"
          placeholder="Paste long url and shorten it"
          variant="outlined"
          onChange={(e) => setLongUrl(e.target.value)}
          value={longUrl}
          error={error}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button
          className="shorten__btn mb-16"
          variant="contained"
          color="primary"
          size="large"
          onClick={shortenLink}
        >
          {isShorting ? (
            <CircularProgress color="inherit" size={20} />
          ) : (
            'Shorten'
          )}
        </Button>
      </div>
      <Collapse in={error}>
        <Alert severity="error" className="mb-16">
          Unable to shorten that link. It is not a valid url.
        </Alert>
      </Collapse>
      <Collapse in={open}>
        <div className="links">
          {links.map((item, idx) => (
            <div className="links__item" key={idx}>
              <span>{item.longUrl}</span>
              <a href={item.shortUrl} target="_blank" rel="noreferrer">
                {item.shortUrl}
              </a>
              <Button
                color="primary"
                variant={isCopied === idx ? 'contained' : 'outlined'}
                onClick={() => copyText(item.shortUrl, idx)}
              >
                {isCopied === idx ? 'Copied!' : 'Copy'}
              </Button>
            </div>
          ))}
        </div>
      </Collapse>
    </>
  );
};

export default Shorten;

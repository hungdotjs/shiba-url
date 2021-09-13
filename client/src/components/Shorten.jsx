import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import LinkIcon from '@material-ui/icons/Link';

const Shorten = () => {
  return (
    <div>
      <div className="shorten">
        <TextField
          className="mb-16 shorten__input"
          variant="outlined"
          placeholder="Paste long url and shorten it"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LinkIcon />
              </InputAdornment>
            ),
          }}
          fullWidth
        />
        <Button
          className="mb-16 ml-16 shorten__btn"
          variant="contained"
          color="primary"
          size="large"
        >
          Shorten
        </Button>
      </div>
    </div>
  );
};

export default Shorten;

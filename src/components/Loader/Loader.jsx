import css from './Loader.module.css';
import { Audio } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div>
        
        <Audio
  height="80"
  width="80"
  radius="9"
  color="blue"
  ariaLabel="loading"
  wrapperStyle
  wrapperClass
/>
<p>Loading, please wait...</p>
        </div>
    )
}
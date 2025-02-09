import { Logo } from '@src/shared/assets/icon/logo/Logo';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { path } from '@src/shared/constants/constants';
export const Header = () => {
   return (
      <header className={styles.header}>
         <Link to={path.home}>
            <Logo smallOne />
         </Link>
      </header>
   );
};

import { Logo } from '@src/shared/assets/icon/logo/Logo';
import styles from './Header.module.scss';
export const Header = () => {
   return (
      <header className={styles.header}>
         <Logo smallOne />
         {/* <div className={styles.languagePicker}>eng</div> */}
      </header>
   );
};

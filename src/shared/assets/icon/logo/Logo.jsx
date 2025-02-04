import { FcIdea } from 'react-icons/fc';
import styles from './Logo.module.scss';
import { Typography } from '@src/shared/ui/typography/Typography';
export const Logo = ({ smallOne = false }) => {
   return (
      <div className={`${styles.logo} ${smallOne ? styles.smallLogo : ''}`}>
         <FcIdea className={styles.icon} />
         <Typography color="#fff" className={styles.logoText} variant="h1">
            IdeaForge
         </Typography>
      </div>
   );
};

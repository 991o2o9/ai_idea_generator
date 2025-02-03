import { Typography } from '@src/shared/ui/typography/Typography';
import styles from './SideBar.module.scss';
export const SideBar = () => {
   return (
      <aside className={styles.sideBar}>
         <div className={styles.sideBarSection}>
            <div className={styles.logoPart}>
               <Typography size="h1">Idea pad</Typography>
               <img src="" alt="close" />
            </div>
            <div className={styles.newChat}>
               <Typography size="h4"></Typography>
            </div>
         </div>
      </aside>
   );
};

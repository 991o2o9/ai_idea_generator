import { Typography } from '@src/shared/ui/typography/Typography';
import styles from './HeroBlock.module.scss';
import { Container } from '@src/shared/ui/container/Container';
import { GiPartyPopper } from 'react-icons/gi';
import { Logo } from '@src/shared/assets/icon/logo/Logo';

export const HeroBlock = () => {
   return (
      <Container>
         <section className={styles.heroBlock}>
            <div className={styles.description}>
               <GiPartyPopper className={styles.icon} />
               <Typography size="L" color="#bbc5d4">
                  IdeaForge is a platform powered by cutting-edge artificial
                  intelligence to help you discover fresh ideas for businesses,
                  creativity, scientific projects, and more.
               </Typography>
            </div>
            <div className={styles.logoPart}>
               <Logo />
               <Typography color="#fff" className={styles.subtitle}>
                  Artificial Intelligence for Your Ideas
               </Typography>
            </div>
            <div className={styles.cardList}>
               <div className={styles.card}>
                  <Typography color="#fff">Start now</Typography>
                  <div className={styles.cardDescription}>
                     <Typography>
                        Create a unique idea with the power of AI
                     </Typography>
                  </div>
               </div>
               <div className={styles.card}>
                  <Typography color="#fff">About Us</Typography>
                  <div className={styles.cardDescription}>
                     <Typography>
                        Learn more about our mission and technology
                     </Typography>
                  </div>
               </div>
            </div>
         </section>
      </Container>
   );
};

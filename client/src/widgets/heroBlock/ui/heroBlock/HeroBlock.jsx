import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { Typography } from '@src/shared/ui/typography/Typography';
import styles from './HeroBlock.module.scss';
import { Container } from '@src/shared/ui/container/Container';
import { GiPartyPopper } from 'react-icons/gi';
import { Logo } from '@src/shared/assets/icon/logo/Logo';
import { CardLinker } from '../cardLinker/CardLinker';
import { cardData } from '@src/shared/constants/constants';

gsap.registerPlugin(TextPlugin);

export const HeroBlock = () => {
   const textRef = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         textRef.current,
         { text: '' },
         {
            text: 'IdeaForge is a platform powered by cutting-edge artificial intelligence to help you discover fresh ideas for businesses, creativity, scientific projects, and more.',
            duration: 3,
            ease: 'power2.out',
            delay: 1,
         }
      );

      gsap.fromTo(
         `.${styles.icon}`,
         { scale: 0, opacity: 0 },
         { scale: 1, opacity: 1, duration: 1, ease: 'bounce.out', delay: 0.5 }
      );
   }, []);

   return (
      <Container>
         <section className={styles.heroBlock}>
            <div className={styles.description}>
               <GiPartyPopper className={styles.icon} />
               <h3 className={styles.animatedText} ref={textRef}></h3>
            </div>
            <div className={styles.logoPart}>
               <Logo />
               <Typography color="#fff" className={styles.subtitle}>
                  Artificial Intelligence for Your Ideas
               </Typography>
            </div>
            <div className={styles.cardList}>
               {cardData.map((item, index) => (
                  <CardLinker item={item} key={index} />
               ))}
            </div>
         </section>
      </Container>
   );
};

import { useRef } from 'react';
import { gsap } from 'gsap';
import { Typography } from '@src/shared/ui/typography/Typography';
import styles from './CardLinker.module.scss';

export const CardLinker = ({ item }) => {
   const cardRef = useRef(null);

   const handleMouseEnter = () => {
      gsap.to(cardRef.current, {
         y: -10,
         rotation: 3,
         scale: 1.05,
         boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
         duration: 0.3,
         ease: 'power2.out',
      });
   };

   const handleMouseLeave = () => {
      gsap.to(cardRef.current, {
         y: 0,
         rotation: 0,
         scale: 1,
         boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
         duration: 0.3,
         ease: 'power2.out',
      });
   };

   return (
      <div
         className={styles.card}
         ref={cardRef}
         onMouseEnter={handleMouseEnter}
         onMouseLeave={handleMouseLeave}
      >
         <Typography color="#fff">{item.title}</Typography>
         <div className={styles.cardDescription}>
            <Typography>{item.description}</Typography>
         </div>
      </div>
   );
};

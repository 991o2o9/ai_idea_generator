import { useEffect, useRef } from 'react';
import { Typography } from '@src/shared/ui/typography/Typography';
import styles from './Topics.module.scss';
import { topics } from '@src/shared/constants/constants';
import gsap from 'gsap';

export const Topics = () => {
   const firstPart = topics.slice(0, 7);
   const secondPart = topics.slice(7, 14);

   const firstPartRefs = useRef([]);
   const secondPartRefs = useRef([]);

   useEffect(() => {
      gsap.fromTo(
         firstPartRefs.current,
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 0.3, stagger: 0.2 }
      );

      gsap.fromTo(
         secondPartRefs.current,
         { opacity: 0, y: 50 },
         { opacity: 1, y: 0, duration: 0.3, stagger: 0.2, delay: 1 }
      );
   }, []);

   return (
      <section className={styles.topic}>
         <div className={styles.firstPart}>
            {firstPart.map((item, index) => (
               <article
                  key={index}
                  className={styles.topicCard}
                  ref={(el) => (firstPartRefs.current[index] = el)}
               >
                  <Typography variant="h5">{item}</Typography>
               </article>
            ))}
         </div>
         <div className={styles.secondPart}>
            {secondPart.map((item, index) => (
               <article
                  key={index}
                  className={styles.topicCard}
                  ref={(el) => (secondPartRefs.current[index] = el)}
               >
                  <Typography variant="h5">{item}</Typography>
               </article>
            ))}
         </div>
      </section>
   );
};

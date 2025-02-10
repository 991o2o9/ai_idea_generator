import { Typography } from '@src/shared/ui/typography/Typography';
import styles from './Topics.module.scss';

export const Topics = () => {
   const topics = [
      'Programming',
      'Artificial Intelligence',
      'Web Development',
      'Mobile Development',
      'Cybersecurity',
      'UI/UX Design',
      'Game Development',
      'Fintech',
      'Marketing & SEO',
      'Startups & Business',
      'Process Automation',
      'Blockchain & Cryptocurrencies',
      'Education & Online Courses',
      'Health & Fitness',
      'Science & Technology',
   ];

   const firstPart = topics.slice(0, 7);
   const secondPart = topics.slice(7, 14);

   return (
      <section className={styles.topic}>
         <div className={styles.firstPart}>
            {firstPart.map((item, index) => (
               <article key={index} className={styles.topicCard}>
                  <Typography variant="h5">{item}</Typography>
               </article>
            ))}
         </div>
         <div className={styles.secondPart}>
            {secondPart.map((item, index) => (
               <article key={index} className={styles.topicCard}>
                  <Typography variant="h5">{item}</Typography>
               </article>
            ))}
         </div>
      </section>
   );
};

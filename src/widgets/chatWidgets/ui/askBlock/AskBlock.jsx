import { Container } from '@src/shared/ui/container/Container';
import styles from './AskBlock.module.scss';
import { Typography } from '@src/shared/ui/typography/Typography';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useState, useRef } from 'react';
import { phrases } from '@src/shared/constants/constants';
import { Topics } from '../readyTopics/ui/Topics';

export const AskBlock = () => {
   const [placeholder, setPlaceholder] = useState('');
   const textareaRef = useRef(null);

   useEffect(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      setPlaceholder(randomPhrase);
   }, []);

   const handleInput = () => {
      if (textareaRef.current) {
         textareaRef.current.style.height = 'auto';
         textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 160)}px`;
      }
   };

   return (
      <Container chatContainer>
         <section className={styles.askBlock}>
            <div className={styles.text}>
               <Typography variant="h3">Write down your ideas below</Typography>
            </div>
            <Topics />
            <div className={styles.Input}>
               <textarea
                  className={styles.input}
                  placeholder={placeholder}
                  ref={textareaRef}
                  onInput={handleInput}
                  rows={1}
               />
               <button className={styles.sendBtn}>
                  <FaArrowUp />
               </button>
            </div>
         </section>
      </Container>
   );
};

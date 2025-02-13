import { Container } from '@src/shared/ui/container/Container';
import styles from './AskBlock.module.scss';
import { Typography } from '@src/shared/ui/typography/Typography';
import { FaArrowUp } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { phrases } from '@src/shared/constants/constants';
import { Topics } from '../readyTopics/ui/Topics';
import { useAskStore } from '../../api/askStore';

export const AskBlock = () => {
   const textareaRef = useRef(null);
   const { inputValue, setInputValue, isLoading, response, sendQuestion } =
      useAskStore();

   useEffect(() => {
      const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
      textareaRef.current.placeholder = randomPhrase;
   }, []);

   const handleInput = (e) => {
      const textarea = e.target;
      textarea.style.height = 'auto';
      textarea.style.height = `${Math.min(textarea.scrollHeight, 160)}px`;
      setInputValue(textarea.value);
   };

   // Отправка вопроса
   const handleSend = () => {
      sendQuestion(inputValue);
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
                  ref={textareaRef}
                  value={inputValue}
                  onInput={handleInput}
                  rows={1}
               />
               <button
                  className={styles.sendBtn}
                  onClick={handleSend}
                  disabled={isLoading}
               >
                  {isLoading ? '...' : <FaArrowUp />}
               </button>
            </div>
            <ResponseBlock response={response} />
         </section>
      </Container>
   );
};

const ResponseBlock = ({ response }) => {
   if (!response) return null;
   return (
      <div className={styles.response}>
         <Typography variant="h4">Generated Ideas:</Typography>
         <p>{response.ideas || 'No ideas generated'}</p>
      </div>
   );
};

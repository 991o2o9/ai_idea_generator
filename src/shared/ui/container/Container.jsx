import styles from './Container.module.scss';

export const Container = ({ children, className, chatContainer }) => {
   return (
      <div
         className={`${styles.container} ${chatContainer ? styles.chatContainer : ''} ${className}`}
      >
         {children}
      </div>
   );
};

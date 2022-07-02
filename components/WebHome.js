import Chatbot from 'react-chatbot-kit';
import LinksBar from '../components/layouts/LinksBar';
import SectionsBar from '../components/layouts/SectionsBar';
import styles from '../styles/Home.module.css';
import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';

export default function WebHome() {
    return (
      <>
        <div className={styles.links}>
          <LinksBar />
        </div>
        <Chatbot
          className={styles}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
        <div className={styles.links}>
          <SectionsBar />
        </div>
      </>
    );
  };
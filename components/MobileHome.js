import { Box } from '@mui/system';
import MobileHeader from '../components/layouts/MobileHeader';
import Chatbot from 'react-chatbot-kit';
import styles from '../styles/Home.module.css';
import config from '../utility/chatbot/config';
import ActionProvider from '../utility/chatbot/ActionProvider';
import MessageParser from '../utility/chatbot/MessageParser';


export default function MobileHome() {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          minHeight: '100vh',
          height: '100vh',
        }}
      >
        <MobileHeader />
        <Chatbot
          className={styles}
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      </Box>
    );
  };
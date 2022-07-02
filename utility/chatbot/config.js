import { createChatBotMessage } from 'react-chatbot-kit';
import Options from '../../components/molecules/Options';
import BalanceCards from '../../components/organisms/BalanceCards';
import MoneyCards from '../../components/organisms/MoneyCards';
import AppointmentCards from '../../components/organisms/AppointmentCards';
import FAQCards from '../../components/organisms/FAQCards';

const getMoodOptions = (actionProvider) => {
  return [
    {
      text: 'Doing great! Tell me about your services',
      handler: () => actionProvider.handleGoodMood(),
      id: 1,
    },
    {
      text: 'Having a bad day...',
      handler: () => actionProvider.handleBadMood(),
      id: 2,
    },
  ];
};

const getJokeOptions = (actionProvider) => {
  return [
    {
      text: "LOL that's funny",
      handler: () => actionProvider.handleGoodMoodFinally(),
      id: 1,
    },
    {
      text: 'Tell me another one',
      handler: () => actionProvider.handleBadMoodAgain(),
      id: 2,
    },
  ];
};

const getPersonalOptions = (actionProvider) => {
  return [
    {
      text: 'Check Balance',
      handler: () => actionProvider.handleBalance(),
      id: 1,
    },
    {
      text: 'Sent Money',
      handler: () => actionProvider.handleMoney(),
      id: 2,
    },
    {
      text: 'Book Appointments',
      handler: () => actionProvider.handleAppointment(),
      id: 3,
    },
    {
      text: 'Frequently Asked Questions',
      handler: () => actionProvider.handleFAQ(),
      id: 4,
    },
  ];
};

const config = {
  botName: 'Joe',
  initialMessages: [
    createChatBotMessage(
      "Hello, good to have you here! I How are you doing today?",
      {
        widget: 'moodOptions',
      }
    ),
  ],
  // customStyles: {
  //   botMessageBox: {
  //     backgroundColor: '#147efb',
  //   },
  //   chatButton: {
  //     backgroundColor: '#147efb',
  //   },
  // },
  widgets: [
    {
      widgetName: 'moodOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getMoodOptions} />
      ),
    },
    {
      widgetName: 'jokeOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options actionProvider={actionProvider} getOptions={getJokeOptions} />
      ),
    },
    {
      widgetName: 'personalOptions',
      widgetFunc: ({ actionProvider }) => (
        <Options
          actionProvider={actionProvider}
          getOptions={getPersonalOptions}
        />
      ),
    },
    {
      widgetName: 'balancesOptions',
      widgetFunc: () => <BalanceCards />,
    },
    {
      widgetName: 'moneysOptions',
      widgetFunc: () => <MoneyCards />,
    },
    {
      widgetName: 'appointmentsOptions',
      widgetFunc: () => <AppointmentCards />,
    },
    {
      widgetName: 'faqsOptions',
      widgetFunc: () => <FAQCards />,
    },
  ],
};

export default config;

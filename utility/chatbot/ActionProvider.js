// import { getProgrammingJoke } from 'random-joke-getter';

const intro =
  "We provides many services regarding your finance! What do you want to know about us?";
const balence =
  "You can check your Balance and the exact amount on your account from here.";
const money =
  "You can sent your money to every who is holding AFB account without fees. Click on the link below to authenticate and send money to your beneficiaries";
const appointment =
  "It is also possible to book an appointment, then go directly to encounter your bank expert agent.";
const faq = "Let's see the common question regarding this system.";

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const greetingMessage = this.createChatBotMessage(
      'AI chat in development...'
    );
    this.updateChatbotState(greetingMessage);
  }

  handleGoodMood() {
    const message = this.createChatBotMessage(intro, {
      widget: 'personalOptions',
    });
    this.updateChatbotState(message);
  }

  async handleBadMood() {
    const jokeData = await (
      await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    ).json();
    const message = this.createChatBotMessage(
      `Let me tell you a joke: ${jokeData.joke}`,
      {
        widget: 'jokeOptions',
      }
    );
    this.updateChatbotState(message);
  }

  async handleBadMoodAgain() {
    const jokeData = await (
      await fetch('https://v2.jokeapi.dev/joke/Any?type=single')
    ).json();
    const message = this.createChatBotMessage(
      `Here's another one: ${jokeData.joke}`,
      {
        widget: 'jokeOptions',
      }
    );
    this.updateChatbotState(message);
  }

  handleGoodMoodFinally() {
    const message = this.createChatBotMessage(
      `Glad you're happy! Let me do a quick self intro: ${intro}`,
      { widget: 'personalOptions' }
    );
    this.updateChatbotState(message);
  }
  // chack balance
  // handleExperience() {
  //   const message = this.createChatBotMessage(experience, {
  //     widget: 'experienceOptions',
  //   });
  //   this.updateChatbotState(message);
  // }
  handleBalance() {
    const message = this.createChatBotMessage(balence, {
      widget: 'balancesOptions',
    });
    this.updateChatbotState(message);
  }


  handleMoney() {
    const message = this.createChatBotMessage(money, {
      widget: 'moneysOptions',
    });
    this.updateChatbotState(message);
  }

  handleAppointment() {
    const message = this.createChatBotMessage(appointment, {
      widget: 'appointmentsOptions',
    });
    this.updateChatbotState(message);
  }

  handleFAQ() {
    const message = this.createChatBotMessage(faq, {
      widget: 'faqsOptions',
    });
    this.updateChatbotState(message);
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;

import { checkDocument } from "@apollo/client/utilities";

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  // beforeEach(async () => {
  //   await device.reloadReactNative();
  // });

  checkVisisbility = (expectedResult, id, text) => {
    it(expectedResult, async () => {
      await expect(element(by.id(id))).toHaveText(text);
    });
  }

  checkVisisbility('should display a signup text', 'signup', 'Signup');

  checkTextInput = (expectedResult, id, textToBeTyped) => {
    it(expectedResult, async () => {
      await element(by.id(id)).typeText(textToBeTyped);
    });
  }

  checkTextInput('should write "test" in email textinput', 'emailTextInput', 'test')

  checkButton = (expectedResult, id) => {
    it(expectedResult, async () => {
      await element(by.id(id)).tap();
    });
  }

  checkButton("should tap on the signup button","signupButton")

  checkVisisbility('should display an error msg','errMsgText', 'Invalid email form')

  checkTextInput('should write "test@test.tst" in email textinput', 'emailTextInput', 'test6@test.tst')

  checkButton("should tap on the signup button","signupButton")

  checkVisisbility("should display an error msg","errMsgText", "Password is required")

  checkTextInput('should write "password" in password textinput', 'passwordTextInput', 'password')

  checkButton("should tap on the signup button to navigate to the login screen","signupButton")

  checkVisisbility('should display a login text', 'login', 'Login');

  checkTextInput('should write "test@kolp.tst" in email textinput', 'emailTextInput', 'test@kolp.tst')

  checkVisisbility("should display an error msg", "errMsgText", "email not found")

  checkTextInput('should write "test@test.tst" in email textinput', 'emailTextInput', 'test@test.tst')

  checkTextInput('should write "password" in password textinput', 'passwordTextInput', 'password')

  checkButton("should tap on the login button to navigate to the chat screen","loginButton")

  checkTextInput('should write "test chatting" in password textinput', 'messageTextInput', 'test chatting')
  
  checkButton("should tap on the send message button to send message","sendButton")

  checkVisisbility("Should display text 'test chatting' in the meesages list", "messagesList", "test chatting")
});
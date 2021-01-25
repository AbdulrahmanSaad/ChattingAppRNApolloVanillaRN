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

  checkTextInput = (expectedResult, id, textToBeTyped) => {
    it(expectedResult, async () => {
      await element(by.id(id)).typeText(textToBeTyped);
    });
  }

  checkButton = (expectedResult, id) => {
    it(expectedResult, async () => {
      await element(by.id(id)).tap();
    });
  }

  checkVisisbility('should display a signup text', 'signup', 'Signup');

  checkTextInput('should write "test" in email textinput', 'emailTextInput', 'test')

  checkButton("should tap on the signup button","signupButton")

  checkVisisbility('should display an error msg','errMsgText', 'Invalid email form')

  it("should clear text", async () => {
    await element(by.id("emailTextInput")).clearText();
  });

  checkTextInput('should write "test@test.tst" in email textinput', 'emailTextInput', 'test@test.tst')

  checkButton("should tap on the signup button","signupButton")

  checkVisisbility("should display an error msg","errMsgText", "Password is required")

  checkTextInput('should write "password" in password textinput', 'passwordTextInput', 'password')

  checkButton("should tap on the signup button to navigate to the login screen","signupButton")

  checkVisisbility('should display a login text', 'login', 'Login');

  checkTextInput('should write "test@test.tst" in email textinput', 'loginEmailTextInput', 'test@test.tst')

  checkTextInput('should write "password" in password textinput', 'loginPasswordTextInput', 'password')

  checkButton("should tap on the login button to navigate to the chat screen","loginButton")

  checkTextInput('should write "Yodawy" in message textinput', 'messageTextInput', 'Yodawy')
  
  checkButton("should tap on the send message button to send message","sendButton")
  
  it("Should display text 'Yodawy' in the meesages list", async () => {
    await expect(element(by.text("Yodawy"))).toBeVisible()})

});
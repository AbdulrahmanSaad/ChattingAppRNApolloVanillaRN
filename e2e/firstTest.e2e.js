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
});
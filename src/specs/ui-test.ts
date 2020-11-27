// import { expect } from 'chai';
describe('Index', () => {
  before(async () => {
​
    browser.url('https://hirayama-2008-1.cybozu-dev.com/k/m/5/');
    const localSettingForDisableWelcomeInfo = 'window.localStorage.setItem("gaia.1::com.cybozu.kintone.mobile.LocalSetting", \'{"v2NavigationPanelButtonTooltipDisplayed":true,"v2WelcomeDialogDisplayed":true}\')';
    browser.executeScript(localSettingForDisableWelcomeInfo, [])
    browser.$("div.form-username-slash input[name='username']").setValue("cybozu");
    browser.$("div.form-password-slash input[name='password']").setValue("cybozu");
    browser.$("input.login-button").click();
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('index-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('index-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('index-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('index-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
​
​
describe('Create', () => {
  before(() => {
    browser.url('https://hirayama-2008-1.cybozu-dev.com/k/m/5/');
    $(".gaia-mobile-v2-app-indextoolbar-addrecord-border").click();
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('Create-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('Create-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('Create-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('Create-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
​
describe('Detail', () => {
  before(() => {
    browser.url('https://hirayama-2008-1.cybozu-dev.com/k/m/5/show?record=4&prev=0&next=0&view=20');
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('Detail-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('Detail-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('Detail-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('Detail-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
​
describe('Edit', () => {
  before(() => {
    browser.url('https://hirayama-2008-1.cybozu-dev.com/k/m/5/show?record=4&prev=0&next=0&view=20');
    $('.gaia-mobile-v2-app-record-showtoolbar-editrecord-border').click();
    browser.pause(5000);
  });
​
  it('should save some screenshots', () => {
​
    // Save a full page screenshot
    browser.saveFullPageScreen('Edit-fullPage', { /* some options */});
    browser.pause(5000);
    // Save a full page screenshot with all tab executions
    browser.saveTabbablePage('Edit-tabbable', { /* some options, use the same options as for saveFullPageScreen */});
    browser.pause(5000);
  });
​
  it('should compare successful with a baseline', () => {
​
    // Check a full page screenshot
    expect(browser.checkFullPageScreen('Edit-fullPage', { /* some options */})).toEqual(0);
    browser.pause(5000);
    // Check a full page screenshot with all tab executions
    expect(browser.checkTabbablePage('Edit-tabbable', { /* some options, use the same options as for checkFullPageScreen */})).toEqual(0);
    browser.pause(5000);
  });
});
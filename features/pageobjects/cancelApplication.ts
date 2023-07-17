class CancelApplication {

  public async cancelApplication() {
    await $("button[name='cancelBtn']").click();
    return await $("button[name='confirmYes']").click();
  }

  public async isFlashMessagePresent() {
    const cancelMessage = await $('h1=Your application');
    return await expect(cancelMessage).toHaveText('Your application' || 'has been cancelled');
  }
  public async getFlashMessage() {
    const flash = await $('h1*=Your application ')
    console.log(await flash.getText());
  }
}

export default new CancelApplication();
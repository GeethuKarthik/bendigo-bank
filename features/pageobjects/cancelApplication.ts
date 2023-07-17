class CancelApplication {

    public async cancelApplication() {
        await $("button[name='cancelBtn']").click();
        return await $("button[name='confirmYes']").click();
    }

    public async flashMessage() {
        const cancelMessage =  await $('h1=Your application');
        return await expect(cancelMessage).toHaveText('Your application' || 'has been cancelled');
      }
}

export default new CancelApplication();
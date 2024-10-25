const jsreport = require('@jsreport/jsreport-core')();
jsreport.use(require('@jsreport/jsreport-chrome-pdf')());
jsreport.use(require('@jsreport/jsreport-handlebars')());
const getPdf = async () => {
  await jsreport.init();
  const result = await jsreport.render({
    template: {
      content: '<h1>Hello {{foo}}</h1>',
      engine: 'handlebars',
      recipe: 'chrome-pdf',
    },
    data: {
      foo: 'world',
    },
  });
  console.log(result.content.toString('base64'));
};

getPdf();

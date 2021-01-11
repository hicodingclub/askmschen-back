let replacement = {
  user: 'user',
  _id: '',
};

const templates = [
  {
    templateName: 'Online Class Enrollment',
    //fromEmail: '', // use default one
    subject: 'Online Class Enrollment Confirmation',
    content: `
Dear {{name}}<br/>
Thanks for enrolling in the MSRS online class! Your enrollment ID is {{_id}}.<br/>
Class: {{class}}<br/>
Price: <b>{{price}}</b><br/>

We will contact you for the class details.<br/>

<br/>
MSRS team
`,
    tag: 'communityonlineclassenrollment',
  },
];

module.exports = {
  replacement,
  templates,
  hooks: {
    'insert': async (emailer, data, replacement, emailerObj, restController) => {
      let payment = await data.populate('enrollment').execPopulate();
      let enrollment = await payment.enrollment.populate('onlineClass').execPopulate();
      let classDetail = enrollment.onlineClass;

      let classDate = `${classDetail.classDate}`; //Tue Mar 24 2015 17:00:00 GMT-0700 (Pacific Daylight Time)
      classDate = classDate.split(' ').slice(0, 4).join(' ');

      const tag = 'communityonlineclassenrollment';
      const email = enrollment.email;
      const obj = {
        _id: enrollment._id,
        name: enrollment.name,
        class: `${classDetail.title}, ${classDetail.classTime}, ${classDate}`,
        price: enrollment.price,
      };
      emailer.sendEmailTemplate([email], tag, replacement, [obj]).then(
        // result: {success: 1, fail: 0, pending: 0, errors: []}
        (result) => {}
      ).catch((err) => {});
    },
    'update': undefined,
  }
};

var nodemailer = require("nodemailer");

var path ='D:/playground/mochawesome-report/report.html';
var filename='report.html';

var sender = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'sonia1183.cse19@chitkara.edu.in',
		pass: 'sonia@1970KUSHAL'
	}
});

var mail = {
	from: 'sonia1183.cse19@chitkara.edu.in',
	to:'jatin.verma@bajajfinserv.in',
	subject: 'Cypress Report Submitted By Sonia',
	text: 'Sir if you got report then please reply its work thank you ',
  html:"<h1>Report</h1>",
attachments: [
		{
			filename: filename,
			path: path
		}
	]
};

sender.sendMail(mail, function (error, info) {
	if (error) {
		console.log(error);
	} else {
		console.log('Email sent successfully: '
				+ info.response);
	}
});

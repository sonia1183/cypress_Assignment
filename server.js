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
	to:'soniarani20985@gmail.com',
	subject: 'Cypress Report Submitted By Sonia',
	text: 'name - sonia rani',
  html:"<h1>Report</h1><br><h2>all test cases are complete </h2>",
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

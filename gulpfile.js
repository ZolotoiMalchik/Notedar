var gulp = require('gulp'),
	bs = require('browser-sync').create(),
	notify = require('gulp-notify'),
	eslint = require('gulp-eslint'),
	through2 = require('through2').obj,
	url = require("url"),
	proxy = require("proxy-middleware"),
	spawn = require('child_process').spawn;

gulp.task('serve', (cb) => {
	spawn('node', ['server.js', 'fhd'], {stdio: "inherit"});

	//console.log("BEFORE BS INIT", bs);
	try {
	bs.init({
		open: false,
		proxy: 'http://localhost:5335',		
		startPath: '/index.html',
		browser: 'chrome.exe'		
	});

} catch(err) {
	console.log("CATCH", err);
}

bs.watch('./components/**/*.{css|html}').on('change', bs.reload);
gulp.watch('./components/**/*.js', (args) => {
	gulp.src(args.path)
		.pipe(eslint({
			fix: true
		}))
		.pipe(eslint.format())
		.pipe(through2((file, enc, cb) => {
			
			/*console.log("MY PIPE", file.eslint.messages[0]);*/
			let er = file && file.eslint && file.eslint.messages[0] ? file.eslint.messages[0] : false;
			if (er && er.message) {
				cb(null, file);
			} else {

				bs.reload({sream: true});
			}
			
		}))
		.pipe(notify((file) => {
			console.log("NOTIFY", file);
			let err = file.eslint.messages[0];
			return {
				title: "Error in " + file.path.match(/(\w+\.)*[j,s]+$|\w+\.[j,s]+$/)[0],
				message: "Line "+ err.line +": "+ err.message
			};
		}));
	});
});





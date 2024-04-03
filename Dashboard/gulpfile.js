const gulp = require('gulp');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', gulp.series('svgStack:dev', 'svgSymbol:dev'), 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', gulp.series('svgStack:docs', 'svgSymbol:docs'), 'files:docs', 'js:docs'),
	)
);

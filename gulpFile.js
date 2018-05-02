
const gulp= require('gulp');
const typedoc =require('gulp-typedoc');
 
 
//generates documentation using typedoc
gulp.task('typedoc',function(){
    console.log('Runinng Typedoc....');
    return gulp
                .src(["src/app/**/*.ts"])
                .pipe(typedoc({
                    //typescript options
                    module:"commonjs",
                    experimentalDecorators:"true",
 
                    //output options
                    out:"doc/",
                    //exclude the files specified in the pattern
                    exclude:"**/*+(spec|service|model).ts",
 
                    //typedoc options
                    name: 'Documentation',
                    // plugins: ["my", "plugins"],
                    theme:'markdown',
                    ignoreCompilerErrors:true,
                    excludePrivate:true,
                    readme:false,
                    mode:'modules',
 
                }));
 
});
 
gulp.task('default',['typedoc'],function(){
    });
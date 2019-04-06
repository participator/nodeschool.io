# Links that helped me

## [Running Scripts with npm](https://blog.jayway.com/2014/03/28/running-scripts-with-npm/)
- Goal: learn how to run a script that in a parent directory from a parent directory
- Conclusion: 
    - this goal was not accomplished through my research, although, I do understand how to use npm better.  
    - The highlight is learning to update npm's autocompletion filter to recognize custom script commands (npm completion)

## Bash Commands
[Create Folder](http://mally.stanford.edu/~sr/computing/basic-unix.html)
- Goal: make directory and make file from the bash command prompt
- Conclusion: mkdir <directory_name> makes a new folder in your current directory

[Create File](https://stackoverflow.com/a/9381492)
- Goal: make file from the bash command prompt
- Conclusion: touch <file_name> creates an empty file in the current directory

## npm Commands
- **View package content:** npm view or npm view @\<user-name>/\<package-name>
- **Update package version number:** npm version

## Semantic Version (semver)
- specification maintained at https://semver.org
>>
>>1.2.3\
>>^ ^ ^\
>>| | `-- Patch version. Update for every change.`\
>>| `---- Minor version. Update for API additions.`\
>>`------ Major version. Update for breaking API changes.`
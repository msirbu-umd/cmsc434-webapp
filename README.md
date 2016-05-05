# cmsc434-webapp

## Running code

[1] Download zip and launch a local server in the main directory of this repo (e.g. the one with all of the files such as maplanding.html) <br />
[1b] If you do not have a local server, you can Download Node.js and follow the commands in set-up (below) <br />
[2] To launch the website point your browser to http://localhost:8080/maplanding <br />
[3] You can get to the state page by either clicking on Maryland on the main map or by pointing your browser to http://localhost:8080/Maryland_statepage.html <br />
[4] To get to the filtering page, point your browser to http://localhost:8080/filtering.html

## Libraries used

We are using a number of libraries/tools for this implementation. This includes: 

[1] <a href="https://jquery.com/"> jQuery </a> <br />
[2] <a href="https://angularjs.org/"> AngularJs </a> <br />
[3] <a href="https://getbootstrap.com/"> Bootstrap </a> <br />
[4] <a href="https://chriszarate.github.io/sheetrock/"> Sheetrock </a> <br />
[5] <a href="http://www.highcharts.com/products/highmaps"> HighMaps.js </a> <br />
[6] <a href="http://www.sharethis.com/"> ShareThis </a> <br />

## Set-up 

[1] Clone this repo. 
[2] Download Node.js (https://nodejs.org/en/download/). This should come with npm. <br />
[3] In the command line (or terminal) type npm install http-server -g <br />
[4] Go to this repo and type hs in the command line (or terminal) <br />
[5] Then redirect your browser to http://localhost:8080/ <br />
[6] You should see "Hello World!" <br />

When adding new work please create a new branch. This can be done with the following git command: <br /> 

$ git checkout -b [name_of_your_new_branch] <br />

You can push your branch to this repo by doing the following: <br />

$ git push origin [name_of_your_new_branch]

When you are ready to add new code, please inform another group member so they can inspect </br>
the branch. If everything looks good you can go ahead and merge your changes into master </br>
by typing: 

$ git checkout master
$ git merge [name_of_your_new_branch]

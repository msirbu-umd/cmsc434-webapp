# Empowering The Voter: cmsc434-webapp

This github repo implements the web app for Team 2's Empowering the Voter project for CSMC434. The purpose of this web app is to raise awareness about voter ID laws throughout the US. The two main tasks that this web app implements is "finding more info about voter ID laws in Maryland" and "sharing the Maryland state page with friends via email." Interactive maps built using highmaps is central to our design. We also implemented an additional state filtering tool. 

Team 2 is composed of four seniors: Jay Zhang, Justin Miller, Cindy Ren, and Mihai Sirbu. Cindy and Mihai were in charge of the web app and worked on its implementation throughout all three versions.  

## Running the code

[1] Download zip and launch a local server in the main directory of this repo (e.g. the one with all of the files such as maplanding.html) <br />
[1b] If you do not have a local server, you can Download Node.js and follow the commands in set-up (below) <br />
[2] To launch the website point your browser to http://localhost:8080/maplanding <br />
[3] You can get to the state page by either clicking on Maryland on the main map or by pointing your browser to http://localhost:8080/Maryland_statepage.html <br />
[4] To get to the filtering page, you can click on Tools in the navbar or by pointing your browser to http://localhost:8080/filtering.html

## Libraries used

We are using a number of libraries for this implementation. This includes: 

[1] <a href="https://jquery.com/"> jQuery </a> <br />
[2] <a href="https://angularjs.org/"> AngularJs </a> <br />
[3] <a href="https://getbootstrap.com/"> Bootstrap </a> <br />
[4] <a href="https://chriszarate.github.io/sheetrock/"> Sheetrock </a> <br />
[5] <a href="http://www.highcharts.com/products/highmaps"> HighMaps.js </a> <br />
[6] <a href="http://www.sharethis.com/"> ShareThis </a> <br />

## Data used came from: 

[1] http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx
[2] http://www.electproject.org/home/voter-turnout/voter-turnout-data
[3] http://www.infoplease.com/us/census/data/maryland/
[4] http://www.ncsl.org/research/elections-and-campaigns/absentee-and-early-voting.aspx
[5] http://www.census.gov/quickfacts/
[6] http://www.elections.state.md.us/press_room/

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

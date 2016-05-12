# Empowering The Voter: cmsc434-webapp

This github repo implements the web app for Team 2's Empowering the Voter project for CSMC434. The purpose of this web app is to raise awareness about voter ID laws throughout the US. The two main tasks that this web app implements are _finding more info about voter ID laws in Maryland_ and _sharing the Maryland state page with friends via email._ Interactive maps built using highmaps is central to our design. We also implemented an additional state filtering tool. 

Team 2 is composed of four seniors: Jay Zhang, Justin Miller, Cindy Ren, and Mihai Sirbu. Cindy and Mihai were in charge of the web app and worked on its implementation throughout all three versions.  

## Running the code

[1] Download zip and launch a local server in the main directory of this repo (e.g. the one with all of the files such as maplanding.html) <br />
[1b] If you do not have a local server, you can Download Node.js and follow the commands in set-up (below) <br />
[2] To launch the website point your browser to http://localhost:8080/maplanding <br />
[3] You can get to the state page by either clicking on Maryland on the main map or by pointing your browser to http://localhost:8080/Maryland_statepage.html <br />
[4] To get to the filtering page, you can click on Tools in the navbar or by pointing your browser to http://localhost:8080/filtering.html

NOTE: If you have trouble seeing the colors on the filtering page, it may be due to an issue of permissions. Email Mihai at msirbu [at] terpmail.umd.edu and I will give you permission to the spreadsheet that stores the data. 

## Libraries used

We are using a number of libraries for this implementation. This includes: 

[1] <a href="https://jquery.com/"> jQuery </a> <br />
[2] <a href="https://angularjs.org/"> AngularJs </a> <br />
[3] <a href="https://getbootstrap.com/"> Bootstrap </a> <br />
[4] <a href="https://chriszarate.github.io/sheetrock/"> Sheetrock </a> <br />
[5] <a href="http://www.highcharts.com/products/highmaps"> HighMaps.js </a> <br />
[6] <a href="http://www.sharethis.com/"> ShareThis </a> <br />

## Data used came from: 

[1] http://www.ncsl.org/research/elections-and-campaigns/voter-id.aspx <br />
[2] http://www.electproject.org/home/voter-turnout/voter-turnout-data <br />
[3] http://www.infoplease.com/us/census/data/maryland/ <br />
[4] http://www.ncsl.org/research/elections-and-campaigns/absentee-and-early-voting.aspx <br />
[5] http://www.census.gov/quickfacts/ <br />
[6] http://www.elections.state.md.us/press_room/ <br />

## Other references: 

[1] http://www.highcharts.com/maps/demo <br />
[2] http://api.highcharts.com/highmaps <br />
[3] https://stackoverflow.com/questions/29036951/displaying-points-and-drilldown-data-in-highmaps <br />
[4] https://stackoverflow.com/questions/17546405/toggle-between-charts-using-highcharts <br />
[5] https://stackoverflow.com/questions/23436425/how-to-properly-integrate-google-spreadsheets-with-highcharts <br />
[6] https://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/maps/members/axis-update/ <br />
[7] https://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/maps/members/axis-setextremes/ <br />
[8] https://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/maps/coloraxis/mincolor-maxcolor/ <br />
[9] http://jsfiddle.net/gh/get/jquery/1.7.2/highslide-software/highcharts.com/tree/master/samples/highcharts/title/style/ <br />
[10] https://stackoverflow.com/questions/20731153/changing-highcharts-background-color <br />
[11] https://chriszarate.github.io/sheetrock/ <br />
[12] https://developers.google.com/chart/interactive/docs/querylanguage#where <br />
[13] https://stackoverflow.com/questions/3010840/loop-through-array-in-javascript <br />
[14] https://stackoverflow.com/questions/17120633/loop-through-each-html-table-column-and-get-the-data-using-jquery <br />
[15] https://stackoverflow.com/questions/23430949/jquery-multiple-dropdown-filter-menu <br />
[16] https://stackoverflow.com/questions/11292778/use-jquery-to-get-values-of-selected-checkboxes <br />
[17] https://stackoverflow.com/questions/436411/where-is-the-best-place-to-put-script-tags-in-html-markup <br />
[18] https://stackoverflow.com/questions/10291017/how-to-get-id-of-button-user-just-clicked <br />
[19] https://stackoverflow.com/questions/24503685/bootstrap-3-navbar-that-doesnt-take-up-full-width-of-page <br />
[20] http://presscustomizr.com/snippet/change-navbar-colorsfontsize/ <br />
[21] https://stackoverflow.com/questions/21980660/bootstrap-3-align-navigation-to-center <br />
[22] https://getbootstrap.com/examples/navbar/ <br />
[23] http://presscustomizr.com/snippet/change-navbar-colorsfontsize/ <br />
[24] http://www.websitecodetutorials.com/code/css/css-center-nav.php <br />
[25] https://stackoverflow.com/questions/5995405/how-to-center-a-navigation-bar-with-css-or-html <br />
[26] https://stackoverflow.com/questions/9262827/twitter-bootstrap-onclick-event-on-buttons-radio <br />
[27] https://developers.facebook.com/docs/plugins/share-button <br />
[28] https://stackoverflow.com/questions/16463030/how-to-add-facebook-share-button-on-my-website <br />
[29] https://stackoverflow.com/questions/14829040/facebook-sharer-popup-window/14829742#14829742 <br />
[30] https://developers.facebook.com/docs/sharing/web <br />
[31] https://support.sharethis.com/hc/en-us/articles/218441477-How-to-Customize-which-URL-Text-and-IMG-to-Share <br />

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

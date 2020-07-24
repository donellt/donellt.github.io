jQuery(document).ready(function($) {
   /* Github Calendar - https://github.com/IonicaBizau/github-calendar */
   new GitHubCalendar("#github-graph", "donellt");
    
    
   /* Github Activity Feed - https://github.com/caseyscarborough/github-activity */
   GitHubActivity.feed({ username: "donellt", selector: "#ghfeed" });
});
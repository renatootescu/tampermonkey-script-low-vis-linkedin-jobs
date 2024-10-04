// ==UserScript==
// @name         Hide Viewed job posts Linkedin
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.linkedin.com/jobs/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=linkedin.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    function hideViewedJobs() {
        var job_card = document.querySelectorAll(".job-card-container");
        let i = 0;
        console.log(job_card.length);
        while (i < job_card.length) {
            var first_footer_item = job_card[i].querySelector(".job-card-container__footer-item")
            if (first_footer_item.textContent.trim() == "Viewed" || first_footer_item.textContent.trim() == "Saved"){
                job_card[i].style.opacity = 0.2;
            }
            i++;
        }
        console.log(job_card);
        console.log(job_card.length);
    }

    var intervalId = window.setInterval(function(){
        hideViewedJobs();
    }, 5000);


})();

// based on: https://github.com/aaldescu/script-hide-promoted-linkedin/blob/main/script.js

/*

LICENSE:
This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.
The full license text can be found here: [http://creativecommons.org/licenses/by-nc-sa/4.0/](http://creativecommons.org/licenses/by-nc-sa/4.0/)
The link has an easy to understand version of the license and the full license text.

*/

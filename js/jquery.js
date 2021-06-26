$(document).ready(function () {

  let allmatches;
  let matchDate;
  let match;
  // let flags = {turkey:"https://www.clipartmax.com/middle/m2i8H7G6K9G6i8Z5_turkish-turkey-flag-png-clipart-image-turkey-small-flag-png/"};
  let listElement = $("ul");
  let detailElement = $(".detail");

  console.log(listElement.html());

  $.get("https://sheetlabs.com/MENC/euros", function (data) {
    allmatches = data;

    data.forEach((d) =>{

      let date = new Date(d.date);

      listElement.append(`
        <li class="match" name="${d.matchnumber}">
          <p class="time">${date.toLocaleTimeString()}</p>
          <p class="home-team team">
            ${d.hometeam}
            <span>-</span>
          </p>
          <p class="away-team team">
            ${d.awayteam}
            <span>-</span>
          </p>
        </li>`
        );
    });

    match = allmatches[0];

    matchDate = new Date(match.date) ;

    $("#matchDate").html(`${matchDate.toLocaleTimeString()}`);
    $("#round").html(`Round ${match.roundnumber}`);
    $("#group").html(`${match.group}`);
    $("#homeTeam").html(`${match.hometeam}`);
    $("#awayTeam").html(`${match.awayteam}`);
    $("#stadium").html(`${match.location}`);
    // $("#matchDate").html(`${matchDate.toLocaleTimeString()}`);
    console.log(allmatches);
  });

  $(document).on("click",".match", function () {
     let matchID = $(this).attr('name'); // or var clickedBtnID = this.id
     matchID = (matchID*1);
     for (var i = 0; i < allmatches.length; i++) {
       if (matchID == allmatches[i].matchnumber){
         match = allmatches[i];
         matchDate = new Date(match.date);

         $("#matchDate").html(`${matchDate.toLocaleTimeString()}`);
         $("#round").html(`Round ${match.roundnumber}`);
         $("#group").html(`${match.group}`);
         $("#homeTeam").html(`${match.hometeam}`);
         $("#awayTeam").html(`${match.awayteam}`);
         $("#stadium").html(`${match.location}`);
         $("#img").attr("src", "https://www.clipartmax.com/middle/m2i8H7G6K9G6i8Z5_turkish-turkey-flag-png-clipart-image-turkey-small-flag-png/");
       }
     }
  });

});


// Used jquery or ajax fetch fo get data - Checked
// Eventhandler for displaying details when item in list is clicked - Checked
//

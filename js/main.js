$(function() {
  $("#content").hide();
  $("#search").click(function() {
    $("#content").show();
    $("#input").html("");
    $.ajax({
      method: "GET",
      url: "https://data.kaohsiung.gov.tw/Opendata/DownLoad.aspx?Type=2&CaseNo1=AF&CaseNo2=1&FileType=2&Lang=C&FolderType=O",
      dataType: "json"
    })
      .done(function(msg) {
        $.each(msg,function(index, elm) {
          if($("#dist").val() == elm["行政區"]) {
            var data = "<tr>" + 
                       "<td>" + elm['測  照  地  點'] + "</td>" +
                       "<td>" + elm['測照方向'] + "</td>" + 
                       "<td>" + elm['功能'] + "</td>" + 
                       "</tr>";
            $("#input").append(data);
          }
        });
      });
    $('html, body').animate({
          scrollTop: $('#content').offset().top
        }, 900);
  });
});

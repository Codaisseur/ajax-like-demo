function like(url, id) {
  $.ajax({
    method: "POST",
    url: url + ".json"
  })
    .done(function( response ) {
      console.log(response.likes);
      $("#post-counter-" + id).html(response.likes);
    });
}


$(document).ready(function() {
  $(".like-button").click(function(e) {
    var href = $(this).attr("href");
    var post_id = $(this).attr("data-post-id");
    like(href, post_id);
    e.preventDefault();
  });
});

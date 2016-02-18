function like(url, id) {
  $.ajax({
    method: "POST",
    url: url + ".json"
  })
    .done(function( response ) {
      console.log(response.likes);
      $("#post-counter-" + id).html(response.likes);
    })

    .fail(function( xhr ) {
      console.log(xhr.responseJSON);
      var response = xhr.responseJSON;
      var error_message = $("<span/>");
      error_message.addClass("error");
      error_message.html(response.errors.post[0]);
      error_message.insertAfter($("#post-counter-" + id));
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

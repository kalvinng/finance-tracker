$(document).on('turbolinks:load', function() {
  $('#friend-lookup-form').on('ajax:success', function(event){
  	[data, status, xhr] = event.detail;
  	$('#results').html(xhr.responseText)
  })
})
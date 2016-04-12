(function($) {
    "use strict";
    /* TODO: Start your Javascript code here */
    var socket = io();
    $('#send_message').submit(function(){
      socket.emit('newsfeed', $('#user_input').val());
      $('#user_input').val('');
      return false;
    })

    socket.on('newsfeed', function(data) {
    var parsedData;
    // grab and parse data and assign it to the parsedData variable.
    parsedData = {
      'user': {
        'photo': data.user.photos[0].value,
        'username': data.user.username
      },
      'message': data.message,
      'posted': new Date()
    };


    // other possible solution(s) here.
    $('#messages').prepend($('<li>').html(messageTemplate(parsedData)));

    function messageTemplate(parsedData) {
      // generate HTML text based on some data to be prepended into the list
      var result = '<div class="user">' +
          '<div class="user-image">' +
          '<img src="' + parsedData.user.photo + '" alt="">' +
          '</div>' +
          '<div class="user-info">' +
          '<span class="username">' + parsedData.user.username + '</span><br/>' +
          '<span class="posted">' + parsedData.posted + '</span>' +
          '</div>' +
          '</div>' +
          '<div class="message-content">' +
          parsedData.message +
          '</div>';
      return result;
    }
});

    // You may use this for updating new message
    function messageTemplate(template) {
        var result = '<div class="user">' +
            '<div class="user-image">' +
            '<img src="' + template.user.photo + '" alt="">' +
            '</div>' +
            '<div class="user-info">' +
            '<span class="username">' + template.user.username + '</span><br/>' +
            '<span class="posted">' + template.posted + '</span>' +
            '</div>' +
            '</div>' +
            '<div class="message-content">' +
            template.message +
            '</div>';
        return result;
    }
})($);

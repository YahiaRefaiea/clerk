$(document).ready(function() {

  var labeledInput = $('.field.labeled:not(.blocked)').find('input, textarea')

  labeledInput.focus(function() {
    $(this).parent().addClass('animate')
  })

  labeledInput.focusout(function() {
    if ($.trim($(this).val()).length == 0)
      $(this).parent().removeClass('animate')
  })

})

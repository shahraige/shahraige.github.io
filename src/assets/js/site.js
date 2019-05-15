$("#dp").datepicker({
  buttonImage: '/images/calander.png',
  buttonImageOnly: true,
  buttonText: "Select date",
  changeMonth: true,
  changeYear: true,
  showOn: 'both',
  showAnim: 'slideDown',
  dateFormat: 'd M',
});

$("#dp").on("change",function(){
  var selected_date = $(this).val();
  $('.ui-datepicker-trigger').addClass('d-none');
  $('#picked_date').html(selected_date);
});

function printFunction() {
  window.print();
}
$(function() {

  $('#person1').val('');
  $('#person2').val('');
  $('#animal').val('');
  $('#verb').val('');

  $('#blanks form').submit(function(event){
    var person1Input = $('#person1').val();
    var person2Input = $('#person2').val();
    var animalInput = $('#animal').val();
    var verbInput = $('#verb').val();

    $('.person1').text(person1Input);
    $('.person2').text(person2Input);
    $('.animal').text(animalInput);
    $('.verb').text(verbInput);

    $('#story').show();
    event.preventDefault();

  })
  //Letter
  $('#userNameContainer form').submit(function(event){

    var userNameInput = $('#userName').val();
    $('.userName').text(userNameInput);
    $('#letter').show();
    event.preventDefault();

  });
  //uppercase
  $('#formLowerCaseInput form').submit(function(event){
    var inputUpperCase = $('#lowerCaseInput').val().toUpperCase();
    $('#upperCaseReturn').text(inputUpperCase);
    event.preventDefault();
  });

});

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
  //productOrder
  $('#formProductOrder form').submit(function(event){
    var inputUserName = $('#orderUserName').val();
    var inputUserAddress = $('#orderUserAddress').val();

    $('#reciept').show();

    $('.orderUserName').text(inputUserName);
    $('.orderUserAddress').text(inputUserAddress);
    event.preventDefault();
  });
  //booking
  $('#bookingForm form').submit(function(event){
    var inputUserName = $('#bookingUserName').val();
    var inputDate = $('#date').val();
    var inputStartTime = $('#startTime').val();
    var inputEndtime = $('#endTime').val();

    $('#bookingConfirmation').show();

    $('.bookingUserName').text(inputUserName);
    $('.date').text(inputDate);
    $('.startTime').text(inputStartTime);
    $('.endTime').text(inputEndtime);
    $('#bookingForm').hide();
    event.preventDefault();
  });
  //questions
  $('#buttonQuestions').click(function(){
    var userNameInput = $('#questions #userName').val();
    var numberInput = $('#number').val();
    var colorInput = $('#color').val();

    $('#buttonQuestions').after('<br>'+userNameInput + " " + numberInput + " " + colorInput);
  });
});



function verify(){
    var name = document.getElementById("name").value;
    var service = [];

    if (document.getElementById("flexCheckDefault1").checked){
        service.push("Dental Care");
    }
    if (document.getElementById("flexCheckDefault2").checked){
        service.push("Flea and Tick Treatment");
    }
    if (document.getElementById("flexCheckDefault3").checked){
        service.push("Microchip ID");
    }
    if (document.getElementById("flexCheckDefault4").checked){
        service.push("Spay or Neuter");
    }
    if (document.getElementById("flexCheckDefault5").checked){
        service.push("Vaccinations");
    }
    var date = document.getElementById("dateInput").value;
    var timeH = document.getElementById("hour").value;
    var timeM = document.getElementById("min").value;
    var email = document.getElementById("email").value;
    var phone1 = document.getElementById("phone1").value;
    var phone2 = document.getElementById("phone2").value;
    var phone3 = document.getElementById("phone3").value;
    var cName = document.getElementById("creditName").value;
    var cNum1 = document.getElementById("creditNum1").value;
    var cNum2 = document.getElementById("creditNum2").value;
    var cNum3 = document.getElementById("creditNum3").value;
    var cNum4 = document.getElementById("creditNum4").value;

    var cExpM = document.getElementById("creditExpM").value;
    var cExpY = document.getElementById("creditExpY").value;
    var cSec = document.getElementById("creditSec").value;

    var nonDigits = /^[a-zA-Z_.+-]+$/;

    if(parseInt(name).toString() != 'NaN'){
        alert("Please enter valid name. (no numbers)");
        return;
    }
    if(parseInt(cName).toString() != 'NaN'){
        alert("Please enter a valid card name. (no numbers)");
        return;
    }
    if (nonDigits.test(timeH) || nonDigits.test(timeM) || nonDigits.test(phone1) || nonDigits.test(phone2) || nonDigits.test(phone3) || nonDigits.test(cNum1) || nonDigits.test(cNum2) || nonDigits.test(cNum3) || nonDigits.test(cNum4) || nonDigits.test(cExpM) || nonDigits.test(cExpY) || nonDigits.test(cSec)){
        alert("Please only use numbers in the following fields: \n Time \n Phone Number \n Credit Number \n Expiry Date \n Security Code");
        return;
    }

    if (name != ""){
        if (service.length != 0){
            if (date != ""){
                
                if (timeH != "" && (parseInt(timeH) >= 8 && parseInt(timeH) <= 22)){

                    if (parseInt(timeH) == 8 || parseInt(timeH) == 22){
                        if((parseInt(timeH) == 8 && parseInt(timeM) >= 30) || (parseInt(timeH) == 22 && parseInt(timeM) <= 30)){

                        } else {
                            alert("Please enter a valid time! \n Open hours: \n Monday - Friday: 8:30 - 22:30 \n Saturday - Sunday: Closed");
                        }
                    }


                    var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
                    if (filter.test(email)){
                        
                        if(parseInt(phone1).toString().length == 3 && parseInt(phone2).toString().length == 3 && parseInt(phone3).toString().length == 4){
                            if (cName != ""){
                                if (parseInt(cNum1).toString().length == 4 && parseInt(cNum2).toString().length == 4 && parseInt(cNum3).toString().length == 4 && parseInt(cNum4).toString().length == 4){
                                    if(parseInt(cExpM).toString().length >= 1 && parseInt(cExpY).toString().length == 2){
                                        if (parseInt(cSec).toString().length == 3){
                                            alert("Your appointment is booked! Have a great day!");
                                        }else{
                                            alert("Please enter a valid credit security code!");
                                        }
                                    } else {
                                        alert("Please enter a valid credit expiry date!");
                                    }
                                }else {
                                    alert("Please enter a valid credit card number!");
                                }
                            } else {
                                alert("Please enter a valid credit name!");
                            }
                        }else {
                            alert("Please enter a valid phone number!");
                        }
                    } else {
                        alert("Please enter a valid email!");
                    }

                    
                } else {
                    alert("Please enter a valid time! \n Open hours: \n Monday - Friday: 8:30 - 22:30 \n Saturday - Sunday: Closed");
                }


            }else {
                alert("Please enter a valid date!");
            }
        }else {
            alert("Please check off services you want provided!");
        }
    }else {
        alert("Please enter your name!");
    }
}

var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {

    var expert = document.getElementById("expert").value;


    if (date.getDay() === 0 || date.getDay() === 6){
        return [false];
    }

    if (expert == 'smith'){
        if (date.getDay() === 2 || date.getDay() === 3 || date.getDay() === 4){
            return[false];
        }
    }else if (expert == 'bailey'){
        if (date.getDay() === 1 || date.getDay() === 3 || date.getDay() === 5){
            return[false];
        }
    }else if (expert == 'cole'){
        if (date.getDay() === 1 || date.getDay() === 2 || date.getDay() === 4 || date.getDay() === 5){
            return[false];
        }
    }

    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


$(document).ready(function(){

    
    $( "#dateInput" ).datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date(),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );

    $('#dateInput').on('change', function(){
        var txtVal =  $('#dateInput').val();
        if(isDate(txtVal)){

        } else{
            alert('Please enter a valid date!');
        }
    });

    function isDate(txtDate) {
    var currVal = txtDate;
    if(currVal == '')
        return false;
    
    var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
    var dtArray = currVal.match(rxDatePattern); // is format OK?
    
    if (dtArray == null) 
        return false;
    
    //Checks for mm/dd/yyyy format.
    dtMonth = dtArray[1];
    dtDay= dtArray[3];
    dtYear = dtArray[5];        
    
    if (dtMonth < 1 || dtMonth > 12) 
        return false;
    else if (dtDay < 1 || dtDay> 31) 
        return false;
    else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
        return false;
    else if (dtMonth == 2) 
    {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                return false;
    }
    return true;
    }

    $('#name').on('change', function(){
        var name = document.getElementById("name").value;
        if(parseInt(name).toString() != 'NaN'){
            alert("Please enter valid name. (no numbers)");
            return;
        }
        if (name != ""){
            return;
        }else {
            alert("Please enter your name!");
        }
    });

    $('#creditName').on('change', function(){
        var cName = document.getElementById("creditName").value;
        if(parseInt(cName).toString() != 'NaN'){
            alert("Please enter the valid name on the credit card. (no numbers)");
            return;
        }
        if (cName != ""){
            return;
        }else {
            alert("Please enter the name on the credit card!");
        }
    });

    $('#email').on('change', function(){
        var tmp = document.getElementById("email").value;
        var filter = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (filter.test(tmp)){
        
        } else {
            alert("Please enter a valid email!");
        }
        

    });

    var nonDigits = /^[a-zA-Z_.+-]+$/;

    $('#hour').on('change', function(){
        var timeH = document.getElementById("hour").value;
        if (nonDigits.test(timeH)){
            alert("Please only enter digits into the hour entry!");
            return;
        }
        
    });

    $('#min').on('change', function(){
        var timeM = document.getElementById("min").value;
        if (nonDigits.test(timeM)){
            alert("Please only enter digits into the minute entry!");
            return;
        }
    });

    $('#phone1').on('change', function(){
        var tmp = document.getElementById("phone1").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the first parameter of the phone number!");
            return;
        }

        if(parseInt(tmp).toString().length != 3){
            alert("Please enter the correct amount of digits (only digits) into the first parameter of the phone number!")
        }
        
    });

    $('#phone2').on('change', function(){
        var tmp = document.getElementById("phone2").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the second parameter of the phone number!");
            return;
        }

        if(parseInt(tmp).toString().length != 3){
            alert("Please enter the correct amount of digits (only digits) into the second parameter of the phone number!")
        }
        
    });

    $('#phone3').on('change', function(){
        var tmp = document.getElementById("phone3").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the third parameter of the phone number!");
            return;
        }

        if(parseInt(tmp).toString().length != 4){
            alert("Please enter the correct amount of digits (only digits) into the third parameter of the phone number!")
        }
        
    });

    $('#creditNum1').on('change', function(){
        var tmp = document.getElementById("creditNum1").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the first parameter of the credit card number!");
            return;
        }

        if(parseInt(tmp).toString().length != 4){
            alert("Please enter the correct amount of digits (only digits) into the first parameter of the credit card number!")
        }
        
    });

    $('#creditNum2').on('change', function(){
        var tmp = document.getElementById("creditNum2").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the second parameter of the credit card number!");
            return;
        }

        if(parseInt(tmp).toString().length != 4){
            alert("Please enter the correct amount of digits (only digits) into the second parameter of the credit card number!")
        }
        
    });

    $('#creditNum3').on('change', function(){
        var tmp = document.getElementById("creditNum3").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the third parameter of the credit card number!");
            return;
        }

        if(parseInt(tmp).toString().length != 4){
            alert("Please enter the correct amount of digits (only digits) into the third parameter of the credit card number!")
        }
        
    });

    $('#creditNum4').on('change', function(){
        var tmp = document.getElementById("creditNum4").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the fourth parameter of the credit card number!");
            return;
        }

        if(parseInt(tmp).toString().length != 4){
            alert("Please enter the correct amount of digits (only digits) into the fourth parameter of the credit card number!")
        }
        
    });

    $('#creditExpM').on('change', function(){
        var tmp = document.getElementById("creditExpM").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the month parameter of the expiry date of the credit card!");
            return;
        }
        
    });

    $('#creditExpY').on('change', function(){
        var tmp = document.getElementById("creditExpY").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits into the year parameter of the expiry date of the credit card!");
            return;
        }
        
    });

    $('#creditSec').on('change', function(){
        var tmp = document.getElementById("creditSec").value;
        if (nonDigits.test(tmp)){
            alert("Please only enter digits for the security code of the credit card!");
            return;
        }

        if(parseInt(tmp).toString().length != 3){
            alert("Please enter the correct amount of digits (only digits) into the security code of the credit card!")
        }
        
    });

    

});

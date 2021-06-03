
   $().ready(function() {

    $.validator.addMethod('mypassword', function(value, element) {
        return this.optional(element) || (value.match(/[A-Z]/) && value.match(/[0-9]/) && value.match(/[_\-!\"@;,.:]/));
    },
    'Minimo 12 caratteri,una lettera Maiuscola,un numero, un carattere speciale');


    $("#custom-form").validate({
        
        rules : {
         
            custom_name : {
              required : true,
              minlength : 3,
            },
            custom_surname : {
                minlength : 3,
                required : true,
            },
            password : {
                required : true,
                minlength : 12,
                mypassword:true
            },
            password_confirm : {
                required : true,
                minlength : 12,
                equalTo : "#password"
            },
            custom_email :{
                required : true,
                email : true
            }
        },
      
        messages: {
            custom_name: "Inserisci un nome",
            custom_surname: "Inserisci un cognome",
            password: "Minimo 12 caratteri,una lettera Maiuscola,un numero, un carattere speciale",
            password_confirm:' Non corrisponde alla password',
            custom_email: "Inserisci una email valida"
        },
      
        submitHandler: function(form) {
            form.submit();
        }
    });
});
var numbersEntered = jQuery.when(numberEntered(0), numberEntered(1)),
    promiseForm;

function numberEntered(elIndex) {
    var deferred = jQuery.Deferred();

    jQuery('.example-1 input').eq(elIndex).change(deferred.resolve);

    return deferred.promise();
}

function buttonPressed() {
    var deferred = jQuery.Deferred();
        
    jQuery('.example-1 button').click(deferred.resolve);

    return deferred.promise();
}

promiseForm = jQuery
                .when(numbersEntered, buttonPressed())
                .then(function(){
                    jQuery('.example-1 input').eq(2).val(
                        parseInt( jQuery('.example-1 input')[0].value ) +
                        parseInt( jQuery('.example-1 input')[1].value )
                    );
                    jQuery('.example-2')
                        .removeClass('unresolved rejected')
                        .addClass('resolved');
                })
                .promise();

promises.push(promiseForm);
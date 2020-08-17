var app = document.getElementById('headtext');

$("#sendmail").click(function (){
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#subject').val();
    var body = $("#ebody").val();
    var myemail = 'sp@gmaihubham11598l.com';
    var complete_body = 'From:%0D%0AName : ' + name + '%0D%0AEmail : ' + email + '%0D%0A%0D%0AMeassage%0D%0A%0D%0A' + body + '%0D%0A%0D%0A';

    var mailto_link = 'mailto:' + myemail + '?subject=' + subject + '&body=' + complete_body;
    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
})


var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('A Developer!')
    .pauseFor(2000)
    .deleteChars(10)
    .typeString('Data Scientist!')
    .pauseFor(2000)
    .deleteChars(15)
    .typeString('Tester!')
    .pauseFor(2000)
    .start();
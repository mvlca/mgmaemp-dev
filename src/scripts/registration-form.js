document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // important

    const factoryNameInput = document.querySelector('input[name="entry.1650276213"]');
    const phoneTwoInput = document.querySelector('input[name="entry.1697690310"]');
    const gmailTwoInput = document.querySelector('input[name="entry.2098673559"]');
    const gmailThreeInput = document.querySelector('input[name="entry.97517160"]');

    if (!factoryNameInput.value.trim()) factoryNameInput.value = 'unknown';
    if (!phoneTwoInput.value.trim()) phoneTwoInput.value = '09xxxxxxxxx';
    if (!gmailTwoInput.value.trim()) gmailTwoInput.value = 'unknown@gmail.com';
    if (!gmailThreeInput.value.trim()) gmailThreeInput.value = 'unknown@gmail.com';

    fetch(event.target.action, {
        method: 'POST',
        body: new FormData(event.target),
        mode: 'no-cors' // required and important
    }).then(() => {
        alert("Form submission is confirmed.");
    }).catch((error) => {
        alert("There was an error submitting form.");
    });
});

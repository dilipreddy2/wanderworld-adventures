function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let destination = document.getElementById("destination").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email.");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits.");
        return false;
    }

    if (destination === "") {
        alert("Please select a tour package.");
        return false;
    }

    alert("Booking Submitted Successfully!");

    return true;
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;   

            if (name === "" || email === "" || message === "") {
                alert("All fields are required.");
                event.preventDefault();
            }
        });
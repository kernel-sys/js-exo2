const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("confirmPassword");
        const messageDiv = document.getElementById("message");

        const passwordCheck = () => {
            const password = passwordInput.value;
            const confirmPassword = confirmPasswordInput.value;

            if (password === confirmPassword) {
                confirmPasswordInput.classList.remove("nomatch");
                confirmPasswordInput.classList.add("match");
                messageDiv.textContent = "Les mots de passe correspondent.";
                messageDiv.style.color = "green";
            } else {
                confirmPasswordInput.classList.remove("match");
                confirmPasswordInput.classList.add("nomatch");
                messageDiv.textContent = "Les mots de passe ne correspondent pas.";
                messageDiv.style.color = "red";
            }
        };

        document.getElementById("passwordForm").addEventListener("submit", (e) => {
            e.preventDefault();
            passwordCheck();
        });
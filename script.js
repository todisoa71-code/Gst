<script src="script.js">
const form = document.getElementById("demo-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const demoId = document.getElementById("demo-id").value.trim();
    const demoPassword = document.getElementById("demo-password").value.trim();
    const result = document.getElementById("result-message");

    if (!demoId || !demoPassword) return;

    try {
        const response = await fetch("URL_DE_TON_WEB_APP_GOOGLE", {
            method: "POST",
            body: new URLSearchParams({
                identifiant: demoId,
                resultat: "Simulation de phishing",
                consentement: "Démonstration pédagogique"
            })
        });

        result.textContent =
            "Démonstration terminée. Aucune donnée de mot de passe n'a été envoyée.";

        // Ne pas conserver le mot de passe fictif en mémoire.
        document.getElementById("demo-password").value = "";
    } catch (error) {
        result.textContent = "Erreur lors de l'envoi des données.";
    }
});
</script>

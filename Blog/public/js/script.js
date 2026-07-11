document.querySelectorAll(".delete-btn").forEach(button => {

    button.addEventListener("click", async () => {

        const id = button.dataset.id;

        const response = await fetch("/delete", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id })
        });

        if (response.ok) {
            document.getElementById(`blog-${id}`).remove();
        }

    });

});
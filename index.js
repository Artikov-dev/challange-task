document.addEventListener("DOMContentLoaded", () => {
  const newsletterForm = document.querySelector(".newsletter form")
  const emailInput = document.querySelector(".newsletter input")

  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const email = emailInput.value.trim()
    if (email === "") {
      alert("Please enter your email address.")
      return
    }
    alert(`Thank you for subscribing with ${email}!`)
    emailInput.value = ""
  })

  const socialLinks = document.querySelectorAll(".social-icons a")
  socialLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault()
      alert("Redirecting to social media...")
    })
  })

  const fakeOrderButton = document.querySelector("#fake-order-now")
  const realOrderButton = document.querySelector("#real-order-now")

  fakeOrderButton.addEventListener("click", () => {
    realOrderButton.click()
  })
})


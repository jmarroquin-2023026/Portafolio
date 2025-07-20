document.addEventListener("DOMContentLoaded", function () {
    const el = document.querySelector('.title')
    if (el) {
        const text = el.textContent
        el.textContent = ""
        let i = 0
        let typing = true

        function type() {
            if (typing) {
                if (i < text.length) {
                    el.textContent += text.charAt(i)
                    i++
                    setTimeout(type, 60)
                } else {
                    typing = false
                    setTimeout(type, 2400)
                }
            } else {
                if (i > 1) {
                    el.textContent = text.substring(0, i - 1)
                    i--
                    setTimeout(type, 50)
                } else {
                    typing = true
                    setTimeout(type, 500)
                }
            }
        }
        type()
    }



    function revealOnScroll() {
        document.querySelectorAll('.fade-in').forEach(el => {
            const rect = el.getBoundingClientRect()
            if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
                el.classList.add('visible')
            } else {
                el.classList.remove('visible')
            }
        })
    }

    window.addEventListener('scroll', revealOnScroll)
    window.addEventListener('DOMContentLoaded', revealOnScroll)


    const navbar = document.querySelector('.navbar')
    window.addEventListener('scroll', function () {
        if (window.scrollY > 40) {
            navbar.style.backgroundColor = "rgba(0,0,0,0.95)"
            navbar.style.boxShadow = "0 2px 12px #00ffff55"
        } else {
            navbar.style.backgroundColor = "rgba(0,0,0,0.7)"
            navbar.style.boxShadow = "none"
        }
    })


    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-list').classList.remove('active')
        })
    })


    const form = document.getElementById('contactForm')
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault()
            const nombre = document.getElementById('nombre').value.trim()
            const email = document.getElementById('email').value.trim()
            const mensaje = document.getElementById('mensaje').value.trim()
            const msg = document.getElementById('formMsg')
            if (!nombre || !email || !mensaje) {
                msg.textContent = "Por favor, completa todos los campos."
                msg.style.color = "#ff5555"
                return
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
            if (!emailRegex.test(email)) {
                msg.textContent = "Por favor, ingresa un email válido."
                msg.style.color = "#ff5555"
                return
            }
            msg.textContent = "Enviando..."
            msg.style.color = "#00a6ddff"
            form.querySelector('button').disabled = true

            setTimeout(() => {
                msg.textContent = "¡Mensaje enviado! (Simulado)"
                msg.style.color = "#64ceffff"
                form.reset()
                form.querySelector('button').disabled = false
            }, 3000)
        })
    }
})

        // --- CONFIGURACIÓN DE LOS DÍAS ---
        // Aquí puedes cambiar 'isUnlocked' a true para habilitar cada día.
        // También puedes modificar los textos y las URLs de las imágenes.
        const daysData = [
            {
                id: 1,
                dayName: "Domingo (la previa)",
                title: "¡Bienvenida a nuestra semana!",
                isUnlocked: true, // ¡Hoy es el único desbloqueado!
                icon: "fa-gift", // Ícono especial por ser sorpresa
                text: "Holi mi vida, hice este jueguito simple para ponerle un toquecito de amor a la semana, consiste en que cada dia de la semana vas a ir desbloqueando razones que tengo para amarte, espero disfrutes la dinamica, TE AMOOO. Hoy es dominguito y no podes terminar la semana sin tomar tu heladito semanal asi que aqui lo podes reclamar",
                imageUrl: "imagenDomingo.jpeg", 
                imageCaption: " ÑAAAMMMM 🍦",
                actionButton: {
                    text: "Y que viva el helado de los findes!",
                    url: "https://api.whatsapp.com/send?text=Hola%20bro,%20quiero%20desbloquear%20mi%20heladito%20e%20🍧",
                    icon: "fa-whatsapp",
                    colorClass: "bg-[#25D366] hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                }
            },
            {
                id: 2,
                dayName: "Lunes",
                title: "Tu sonrisita hermosa",
                isUnlocked: true, // Bloqueado por ahora
                icon: "fa-star",
                text: "Tu sonrisa tiene algo magico y siempre lo voy a pensar, y en este tiempito que estamos pasando mas me mueve tu sonrisa y es lo unico que busco cada dia, on cada videollamada, con cada plancito que hacemos, con cada mensajito, busco verte sonreir y ser feliz un 1% de lo feliz que me haces todos los dias a mi, te amo mucho mi vida, este es solo un comiencito de la semana, espero que te guste. Como ayer no pudiste pedir tu heladito, el premio es valido tambien hoy. TE AMOOO",
                imageUrl: "fotoLunes.jpeg",
                imageCaption: "Tu sonrisa mágica",
                actionButton: {
                    text: "Pedir heladito atrasado hoy \n (disponible a partir de las 10:00hs)🍦",
                    url: "https://api.whatsapp.com/send?text=Hola%20amor%2C%20quiero%20mi%20helado%20de%20hoy%20%F0%9F%8D%A7",
                    icon: "fa-whatsapp",
                    colorClass: "bg-[#25D366] hover:bg-[#128C7E] shadow-[0_0_20px_rgba(37,211,102,0.4)]"
                }
            },
            {
                id: 3,
                dayName: "Martes",
                title: "Por ser mi compañera incondicional",
                isUnlocked: false,
                icon: "fa-people-pulling",
                text: "Siempre estuviste para mi, apoyandome en todo lo que hacia, siempre estuviste presente ya sea con algun detallito, tu presencia, con tus acciones, siempre me hiciste sentir que no estaba solo y me enseñaste lo  que es el amor incondicional, es algo que destaco siempre que hablo de vos con otras personas y estoy agradecido para siempre. En fin, esta es una de las tantas razones por las que te amo",
                imageUrl: "fotoMartes.jpg",
                imageCaption: "Siempre hiciste lo imposible para estar"
            },
            {
                id: 4,
                dayName: "Miércoles",
                title: "Razon Miercoles",
                isUnlocked: false,
                icon: "fa-music",
                text: "Amo nuestras charlas interminables, nuestras bromas internas y cómo parecemos leernos la mente. La conexión que tenemos es única y no la cambiaría por nada del mundo.",
                imageUrl: "https://placehold.co/600x600/0097A7/FFFFFF?text=Foto+Miercoles",
                imageCaption: "Nuestras locuras"
            },
            {
                id: 5,
                dayName: "Jueves",
                title: "Razon Jueves",
                isUnlocked: false,
                icon: "fa-fire",
                text: "Admiro tu fuerza y tu pasión por todo lo que haces. Me inspiras cada día a ser una mejor persona. Eres increíblemente valiente y te admiro muchísimo.",
                imageUrl: "https://placehold.co/600x600/00838F/FFFFFF?text=Foto+Jueves",
                imageCaption: "Mi inspiración"
            },
            {
                id: 6,
                dayName: "Viernes",
                title: "Razon Viernes",
                isUnlocked: false,
                icon: "fa-moon",
                text: "Amo quedarme dormido escuchando tu respiración o tu voz al otro lado del teléfono. Has convertido la distancia en una excusa para valorar cada segundo que compartimos.",
                imageUrl: "https://placehold.co/600x600/203a43/FFFFFF?text=Foto+Viernes",
                imageCaption: "Buenas noches, amor"
            },
            {
                id: 7,
                dayName: "Sábado",
                title: "Razon Sabado",
                isUnlocked: false,
                icon: "fa-infinity",
                text: "Simplemente te amo por ser quien eres. Con tus virtudes y tus defectos. Eres la pieza que le faltaba a mi rompecabezas. Te elijo hoy y todos los días de mi vida.",
                imageUrl: "https://placehold.co/600x600/2c5364/FFFFFF?text=Foto+Sabado",
                imageCaption: "Te amo infinitamente"
            },
            {
                id: 8,
                dayName: "Domingo",
                title: "Razon Domingo",
                isUnlocked: false,
                icon: "fa-infinity",
                text: "Simplemente te amo por ser quien eres. Con tus virtudes y tus defectos. Eres la pieza que le faltaba a mi rompecabezas. Te elijo hoy y todos los días de mi vida.",
                imageUrl: "https://placehold.co/600x600/2c5364/FFFFFF?text=Foto+Sabado",
                imageCaption: "Te amo infinitamente"
            }
        ];

        const grid = document.getElementById('daysGrid');
        const modal = document.getElementById('dayModal');
        const modalContent = document.getElementById('modalContent');
        const bodyElement = document.body;
        const themeState = { current: null };

        function getThemeMode() {
            const hour = new Date().getHours();
            return hour >= 7 && hour <= 19 ? 'day' : 'night';
        }

        function getThemeAccent() {
            return themeState.current === 'day'
                ? { badgeBg: 'bg-[#f7c46c]/20', badgeText: 'text-[#9a590f]', infoText: 'text-[#7a4b0d]' }
                : { badgeBg: 'bg-teal-900/50', badgeText: 'text-teal-300', infoText: 'text-teal-300' };
        }

        function applyTheme(mode) {
            if (themeState.current === mode) return;
            themeState.current = mode;
            bodyElement.classList.remove('theme-day', 'theme-night');
            bodyElement.classList.add(`theme-${mode}`);
            document.getElementById('mainTitle').classList.add('theme-heading');
            document.getElementById('mainSubtitle').classList.add('theme-subtitle');
            document.getElementById('countdownCard').classList.add('theme-panel');
            modalContent.classList.add('theme-modal');
            document.getElementById('modalDayTitle').classList.add('theme-subtitle');
            document.getElementById('modalDate').classList.add('theme-heading');
            document.querySelectorAll('.quote-icon').forEach(el => el.classList.add('theme-quote'));
            initStars();
            if (grid.children.length > 0) renderDays();
        }

        function checkThemeChange() {
            applyTheme(getThemeMode());
        }

        // Renderizar las tarjetas
        function renderDays() {
            grid.innerHTML = '';
            daysData.forEach((day, index) => {
                const isLocked = !day.isUnlocked;
                const accent = getThemeAccent();
                // Retraso de animación para efecto en cascada
                const animationDelay = index * 0.1;
                
                const card = document.createElement('div');
                card.className = `relative rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-300 theme-card ${isLocked ? 'theme-card-locked' : 'theme-card theme-card-active cursor-pointer card-glow hover:-translate-y-2 floating'}`;
                card.style.animationDelay = `${animationDelay}s`;
                
                if (!isLocked) {
                    card.onclick = () => openModal(day.id);
                }

                card.innerHTML = `
                    <div class="w-16 h-16 rounded-full mb-4 flex items-center justify-center ${isLocked ? 'bg-slate-700 text-slate-500' : `${accent.badgeBg} ${accent.badgeText} shadow-[0_0_15px_rgba(255,171,51,0.2)]`}">
                        <i class="fa-solid ${isLocked ? 'fa-lock' : day.icon} text-2xl"></i>
                    </div>
                    <h3 class="text-xl font-serif mb-1" style="color: var(--text-primary);">${day.dayName}</h3>
                    <p class="text-sm ${isLocked ? 'text-[#94a3b8]' : `${accent.infoText} font-medium`}">
                        ${isLocked ? 'Todavia no e, confianzuuda, pasiensia pasiensa' : '¡Toca para abrir!'}
                    </p>
                `;
                
                grid.appendChild(card);
            });
        }

        // Función para abrir la tarjeta corregida (aquí estaba el error)
        function openModal(dayId) {
            const day = daysData.find(d => d.id === dayId);
            if (!day) return;

            // Llenar datos en el HTML
            document.getElementById('modalDayTitle').innerText = day.dayName;
            document.getElementById('modalDate').innerText = day.title;
            document.getElementById('modalImage').src = day.imageUrl;
            document.getElementById('modalImageCaption').innerText = day.imageCaption;
            document.getElementById('modalText').innerText = day.text;

            // Manejar el botón de acción (WhatsApp)
            const actionContainer = document.getElementById('modalActionContainer');
            if (day.actionButton) {
                const actionBtn = document.getElementById('modalActionButton');
                actionBtn.href = day.actionButton.url;
                
                // Limpiar clases previas de color y asignar las de la configuración
                actionBtn.className = `inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-white font-medium text-lg transition-all hover:scale-105 shadow-lg w-full sm:w-auto ${day.actionButton.colorClass}`;
                
                document.getElementById('modalActionText').innerText = day.actionButton.text;
                document.getElementById('modalActionIcon').className = `fa-brands ${day.actionButton.icon} text-2xl`;
                
                // Mostrar contenedor
                actionContainer.classList.remove('hidden');
                actionContainer.classList.add('flex');
            } else {
                actionContainer.classList.add('hidden');
                actionContainer.classList.remove('flex');
            }

            // Mostrar el modal con animación suave
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                modalContent.classList.remove('scale-95');
                modalContent.classList.add('scale-100');
            }, 10);
        }

        function closeModal() {
            modal.classList.add('opacity-0');
            modalContent.classList.remove('scale-100');
            modalContent.classList.add('scale-95');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // --- LÓGICA DEL FONDO DE ESTRELLAS (CANVAS) ---
        const canvas = document.getElementById('starsCanvas');
        const ctx = canvas.getContext('2d');
        let stars = [];

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initStars();
        }

        function initStars() {
            stars = [];
            const numStars = Math.floor((canvas.width * canvas.height) / 3000); // Densidad de estrellas
            for (let i = 0; i < numStars; i++) {
                stars.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 1.5 + 0.5,
                    alpha: Math.random(),
                    speed: Math.random() * 0.02 + 0.005,
                    color: Math.random() > 0.8 ? '#67e8f9' : '#ffffff' // Algunas estrellas celestes
                });
            }
        }

        function animateStars() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const isDay = themeState.current === 'day';

            if (isDay) {
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, '#fff8e1');
                gradient.addColorStop(1, '#ffd39e');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);

                // Sol suave en la esquina superior derecha
                const sunX = canvas.width * 0.85;
                const sunY = canvas.height * 0.18;
                const sunRadius = Math.min(canvas.width, canvas.height) * 0.12;
                const sunGradient = ctx.createRadialGradient(sunX, sunY, sunRadius * 0.1, sunX, sunY, sunRadius);
                sunGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
                sunGradient.addColorStop(0.6, 'rgba(255, 223, 125, 0.6)');
                sunGradient.addColorStop(1, 'rgba(255, 149, 58, 0.0)');
                ctx.fillStyle = sunGradient;
                ctx.beginPath();
                ctx.arc(sunX, sunY, sunRadius, 0, Math.PI * 2);
                ctx.fill();
            } else {
                const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                gradient.addColorStop(0, '#081426');
                gradient.addColorStop(1, '#0b2a47');
                ctx.fillStyle = gradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            stars.forEach(star => {
                star.alpha += star.speed;
                if (star.alpha > 1 || star.alpha < 0) {
                    star.speed = -star.speed;
                }
                
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = star.color;
                ctx.globalAlpha = Math.abs(star.alpha) * (themeState.current === 'day' ? 0.75 : 1);
                ctx.fill();
            });
            ctx.globalAlpha = 1;
            
            requestAnimationFrame(animateStars);
        }

        // Calcula la próxima medianoche local y muestra el día siguiente
        function getNextUnlockedDayInfo() {
            const now = new Date();
            const targetDate = new Date(now);
            targetDate.setHours(24, 0, 0, 0); // la próxima medianoche local

            const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
            const nextDayName = dayNames[targetDate.getDay()];

            const lockedDays = daysData.filter(day => !day.isUnlocked);
            if (lockedDays.length === 0) {
                return { label: 'Ya está todo desbloqueado', target: null };
            }

            return {
                label: `Cuenta regresiva para ${nextDayName} (00:00)`,
                target: targetDate
            };
        }

        function formatCountdown(ms) {
            if (ms <= 0) return '00:00:00';
            const totalSeconds = Math.floor(ms / 1000);
            const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
            const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
            const seconds = String(totalSeconds % 60).padStart(2, '0');
            return `${hours}:${minutes}:${seconds}`;
        }

        function updateCountdown() {
            const countdownLabel = document.getElementById('countdownLabel');
            const countdownTimer = document.getElementById('countdownTimer');
            const info = getNextUnlockedDayInfo();

            countdownLabel.textContent = info.label;
            if (!info.target) {
                countdownTimer.textContent = '--:--:--';
                return;
            }

            const now = new Date();
            const diff = info.target - now;
            countdownTimer.textContent = formatCountdown(diff);

            if (diff <= 0) {
                // Forzar re-render si el día cambió justo a medianoche
                renderDays();
            }
        }

        // Iniciar todo al cargar
        window.addEventListener('resize', resizeCanvas);
        window.onload = function() {
            resizeCanvas();
            checkThemeChange();
            animateStars();
            renderDays();
            updateCountdown();
            setInterval(updateCountdown, 1000);
            setInterval(checkThemeChange, 60000);
        };

        // Cerrar modal si hacen click fuera de él
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

    
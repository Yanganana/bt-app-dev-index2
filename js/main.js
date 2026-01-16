/**
 * BlackHole Software - Main JavaScript
 * Handles Navigation, Search, Form Validation, and Modals
 */

(function() {
    'use strict';

    function init() {
        // --- 1. Mobile Menu Logic ---
        const menuToggle = document.getElementById('menu-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuToggle && mobileMenu) {
            const menuIcon = menuToggle.querySelector('i');
            menuToggle.addEventListener('click', function() {
                const isHidden = mobileMenu.classList.toggle('hidden');
                if (menuIcon) {
                    menuIcon.classList.toggle('fa-bars', isHidden);
                    menuIcon.classList.toggle('fa-times', !isHidden);
                }
            });

            // Close menu when clicking links
            mobileMenu.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    mobileMenu.classList.add('hidden');
                    if (menuIcon) {
                        menuIcon.classList.replace('fa-times', 'fa-bars');
                    }
                });
            });
        }

        // --- 2. Navigation Scroll Effect ---
        const header = document.querySelector('header');
        if (header) {
            window.addEventListener('scroll', function() {
                const isScrolled = window.scrollY > 20;
                header.classList.toggle('bg-white/95', !isScrolled);
                header.classList.toggle('bg-white/90', isScrolled);
                header.classList.toggle('backdrop-blur-md', isScrolled);
                header.classList.toggle('shadow-sm', isScrolled);
            }, { passive: true });
        }

        // --- 3. Form Validation & Submission ---
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            const inputs = contactForm.querySelectorAll('input[required], textarea[required]');
            
            inputs.forEach(function(input) {
                input.addEventListener('blur', function() { validateInput(input); });
                input.addEventListener('input', function() {
                    if (input.classList.contains('border-red-500')) {
                        validateInput(input);
                    }
                });
            });

            contactForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                let isFormValid = true;
                inputs.forEach(function(input) {
                    if (!validateInput(input)) {
                        isFormValid = false;
                    }
                });

                if (isFormValid) {
                    const btn = contactForm.querySelector('button[type="submit"]');
                    const originalText = btn.innerHTML;
                    
                    btn.disabled = true;
                    btn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i>正在提交...';
                    btn.classList.add('opacity-80', 'cursor-not-allowed');

                    const formData = {
                        name: contactForm.name.value,
                        phone: contactForm.phone.value,
                        email: contactForm.email.value,
                        message: contactForm.message.value
                    };

                    try {
                        const response = await fetch('https://saas.btitib.com/api/basic-service/v1/kapi/app/c9c99e27bd0f092606ac85e402b95e8d/table/34b51eb1f0484a76b560b5b7f3b83859/clueCreate', { 
                            method: 'POST', 
                            headers: { 
                                'Authorization': 'Bearer sk-fYUTKkxKa7xj0Ua9uYCdv72nL3AkkHR7', 
                                'Content-Type': 'application/json; charset=utf-8',
                                'Accept': 'application/json'
                            }, 
                            body: JSON.stringify(formData)
                        });

                        if (response.ok) {
                            btn.innerHTML = '<i class="fa fa-check mr-2"></i>提交成功！';
                            btn.classList.replace('bg-primary', 'bg-green-500');
                            contactForm.reset();
                        } else {
                            throw new Error('提交失败');
                        }
                    } catch (error) {
                        console.error('Submission error:', error);
                        btn.innerHTML = '<i class="fa fa-exclamation-triangle mr-2"></i>提交失败，请稍后重试';
                        btn.classList.replace('bg-primary', 'bg-red-500');
                    } finally {
                        setTimeout(function() {
                            btn.disabled = false;
                            btn.innerHTML = originalText;
                            btn.classList.remove('opacity-80', 'cursor-not-allowed');
                            btn.classList.remove('bg-green-500', 'bg-red-500');
                            btn.classList.add('bg-primary');
                        }, 3000);
                    }
                }
            });
        }

        // --- 4. WeChat Modal Logic ---
        const wechatModal = document.getElementById('wechat-modal');
        const modalTriggers = document.querySelectorAll('.wechat-modal-trigger');
        const closeModalBtn = document.getElementById('close-modal');

        if (wechatModal && modalTriggers.length > 0) {
            // Use safer selectors that don't depend on Tailwind classes with slashes
            const modalOverlay = wechatModal.querySelector('div:first-child');
            const modalContent = wechatModal.querySelector('.relative');

            const openModal = function() {
                wechatModal.classList.remove('opacity-0', 'pointer-events-none');
                wechatModal.classList.add('opacity-100', 'pointer-events-auto');
                if (modalContent) {
                    modalContent.classList.remove('scale-90');
                    modalContent.classList.add('scale-100');
                }
                document.body.style.overflow = 'hidden';
            };

            const closeModal = function() {
                wechatModal.classList.add('opacity-0', 'pointer-events-none');
                wechatModal.classList.remove('opacity-100', 'pointer-events-auto');
                if (modalContent) {
                    modalContent.classList.add('scale-90');
                    modalContent.classList.remove('scale-100');
                }
                document.body.style.overflow = '';
            };

            modalTriggers.forEach(function(trigger) {
                trigger.addEventListener('click', function(e) {
                    e.preventDefault();
                    console.log('WeChat trigger clicked');
                    openModal();
                });
            });

            if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
            if (modalOverlay) modalOverlay.addEventListener('click', closeModal);

            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape' && wechatModal.classList.contains('opacity-100')) {
                    closeModal();
                }
            });
        }
    }

    function validateInput(input) {
        let valid = true;
        let message = '';
        const parent = input.parentElement;
        if (!parent) return true;
        
        const errorSpan = parent.querySelector('.input-error-message');

        if (input.required && !input.value.trim()) {
            valid = false;
            message = '此项为必填项';
        } else if (input.type === 'email' && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
                valid = false;
                message = '请输入有效的邮箱地址';
            }
        } else if (input.id === 'phone' && input.value) {
            const phoneRegex = /^1[3-9]\d{9}$/;
            if (!phoneRegex.test(input.value)) {
                valid = false;
                message = '请输入有效的手机号码';
            }
        }

        if (!valid) {
            input.classList.add('border-red-500', 'ring-red-500/10');
            input.classList.remove('border-gray-200');
        } else {
            input.classList.remove('border-red-500', 'ring-red-500/10');
            input.classList.add('border-gray-200');
        }

        if (errorSpan) {
            errorSpan.textContent = message;
            errorSpan.style.display = message ? 'block' : 'none';
        }

        return valid;
    }

    // Initialize
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        init();
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();

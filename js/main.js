document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Logic
    const navbar = document.getElementById('navbar');
    const mobileMenuBtn = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Toggle Mobile Menu
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            if (mobileMenu.classList.contains('hidden')) {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            } else {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            }
        });
    }

    // Sticky Header Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-md', 'bg-white/95');
        } else {
            navbar.classList.remove('shadow-md', 'bg-white/95');
        }
    });

    // 2. Search Functionality (Mock)
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    // Mock Data
    const searchData = [
        { title: '定制开发服务', link: '#services' },
        { title: 'SaaS解决方案', link: '#services' },
        { title: '开发流程', link: '#process' },
        { title: '关于我们', link: '#about' },
        { title: '联系方式', link: '#contact' },
        { title: '获取报价', link: '#contact' }
    ];

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            if (query.length < 1) {
                searchResults.classList.add('hidden');
                return;
            }

            const filtered = searchData.filter(item => item.title.toLowerCase().includes(query));
            
            if (filtered.length > 0) {
                searchResults.innerHTML = filtered.map(item => `
                    <a href="${item.link}" class="block px-4 py-2 hover:bg-light transition-colors text-dark-light hover:text-primary">
                        ${item.title}
                    </a>
                `).join('');
                searchResults.classList.remove('hidden');
            } else {
                searchResults.innerHTML = '<div class="px-4 py-2 text-gray-500">无搜索结果</div>';
                searchResults.classList.remove('hidden');
            }
        });

        // Hide search results when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
                searchResults.classList.add('hidden');
            }
        });
    }

    // 3. Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        const inputs = contactForm.querySelectorAll('input, textarea');
        
        // Real-time validation
        inputs.forEach(input => {
            input.addEventListener('blur', validateInput);
            input.addEventListener('input', () => {
                if (input.classList.contains('input-error')) {
                    validateInput({ target: input });
                }
            });
        });

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;
            inputs.forEach(input => {
                if (!validateInput({ target: input })) {
                    isValid = false;
                }
            });

            if (isValid) {
                // Mock submission
                const btn = contactForm.querySelector('button[type="submit"]');
                const originalText = btn.innerHTML;
                btn.innerHTML = '<i class="fa fa-spinner fa-spin mr-2"></i>提交中...';
                btn.disabled = true;

                setTimeout(() => {
                    btn.innerHTML = '<i class="fa fa-check mr-2"></i>提交成功';
                    btn.classList.replace('bg-primary', 'bg-secondary');
                    contactForm.reset();
                    setTimeout(() => {
                        btn.innerHTML = originalText;
                        btn.disabled = false;
                        btn.classList.replace('bg-secondary', 'bg-primary');
                    }, 3000);
                }, 1500);
            }
        });
    }

    function validateInput(e) {
        const input = e.target;
        const errorSpan = input.parentElement.querySelector('.input-error-message');
        let valid = true;
        let message = '';

        if (input.required && !input.value.trim()) {
            valid = false;
            message = '此项为必填项';
        } else if (input.type === 'email' && !/\S+@\S+\.\S+/.test(input.value)) {
            valid = false;
            message = '请输入有效的邮箱地址';
        } else if (input.type === 'tel' && !/^\d{11}$/.test(input.value)) {
            // Simple 11-digit phone check for CN
            valid = false;
            message = '请输入有效的手机号码';
        }

        if (!valid) {
            input.classList.add('input-error', 'border-red-500');
            input.classList.remove('border-gray-300');
            if (errorSpan) errorSpan.textContent = message;
        } else {
            input.classList.remove('input-error', 'border-red-500');
            input.classList.add('input-success', 'border-green-500'); // Optional: Green border for success
            if (errorSpan) errorSpan.textContent = '';
        }
        return valid;
    }
});

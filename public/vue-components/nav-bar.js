const NavBar = {
    // 接外部參數
    props: {
        show: { type: Boolean, default: false },
        logoSrc: { type: String, required: true },
        logoAlt: { type: String, default: '' },
        activeIconSrc: { 
            type: String, 
            default: 'https://cdn2.cdnstep.com/7nMicWJUjxIuxSjwmf1i/cover-1.thumb256.png' 
        },
        // links 範例: [{ path: 'index.html', label: '寶寶尋找' }, { path: 'dashboard.html', label: '寶寶數據' }]
        links: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            showMobileMenu: false,
        };
    },
    methods: {
        isActive(page) {
            const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            return currentPage === page;
        },
    },
    template: `
        <nav v-if="show" class="sticky top-0 left-0 right-0 bg-white shadow-md z-30">
            <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                <!-- Logo (左側) -->
                <img 
                    :src="logoSrc"
                    :alt="logoAlt"
                    class="w-20 md:w-60 h-auto flex-shrink-0"
                >

                <!-- 桌面菜單 (md以上显示) -->
                <div class="hidden md:flex gap-6 items-center">
                    <a 
                        v-for="link in links"
                        :key="link.path"
                        :href="'./' + link.path"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-1.5 text-gray-700 hover:text-[#005AB5] transition-colors font-medium pb-1 border-b-2"
                        :class="isActive(link.path) ? 'border-[#005AB5] text-[#005AB5]' : 'border-transparent'"
                    >
                        <img 
                            v-if="isActive(link.path)"
                            :src="activeIconSrc"
                            class="w-5 h-5"
                            alt=""
                        >
                        {{ link.label }}
                    </a>
                </div>

                <!-- 手機漢堡菜單 (md以下显示) -->
                <button @click="showMobileMenu = !showMobileMenu" class="md:hidden p-2">
                    <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            <!-- 手機菜單 (展開時顯示) -->
            <div v-if="showMobileMenu" class="md:hidden border-t border-gray-200">
                <div class="px-4 py-3 space-y-2">
                    <a 
                        v-for="link in links"
                        :key="link.path"
                        :href="'./' + link.path"
                        class="block text-gray-700 hover:text-[#005AB5] px-3 py-2 rounded transition-colors"
                        :class="isActive(link.path) ? 'bg-[#005AB5]/10 text-[#005AB5]' : 'hover:bg-gray-50'"
                    >
                        {{ link.label }}
                    </a>
                </div>
            </div>
        </nav>
    `
};
/**
 * AIRFAN - Multi-Language & Dark/Light Theme System
 * Supports: UZ (Uzbek), RU (Russian), EN (English)
 * Supports: Light & Dark Mode with LocalStorage persistence
 */

const TRANSLATIONS = {
    uz: {
        // Navigation & Topbar
        top_address: "Toshkent shahri, Sergeli industrial zonasi",
        top_hours: "Dush - Shan: 09:00 - 18:00",
        nav_home: "Bosh sahifa",
        nav_catalog: "Katalog",
        nav_detail: "Mahsulot Tahlili",
        nav_contact: "Aloqa & Buyurtma",
        btn_catalog_go: "Katalogga o'tish",
        
        // Brand & Themes
        theme_light: "Kunduzgi",
        theme_dark: "Tungi",

        // Hero Slider (index.html)
        hero_badge_1: "AIRFAN SANOAT VENTILYATSIYASI",
        hero_title_1: "Sanoat Ventilyatsiyasi va Shamollatish Tizimlari",
        hero_desc_1: "O'zbekistondagi eng quvvatli sanoat tortish ventilyatorlari. Sexlar, parrandachilik va yirik binolar uchun 44 500 m³/soatgacha rekord unumdorlik.",
        
        hero_badge_2: "AIRFAN ISITISH TEXNOLOGIYALARI",
        hero_title_2: "Sanoat Isitish Agregatlari va Kaloriferlar",
        hero_desc_2: "Sexlar, omborxonalar va issiqxonalarni sovuq mavsumda jadal va tejamkor isituvchi zamonaviy suvli hamda elektr isitish tizimlari.",
        
        hero_badge_3: "AIRFAN TABIIY SOVUTISH TIZIMLARI",
        hero_title_3: "Evaporativ Sovutish va Bio-Kulerlar",
        hero_desc_3: "Cooling Pad sellyuloza gofra panellari va mobil hamda statsionar bio-oxladitellar. Elektrni 85% tejab haroratni 8-12°C ga pasaytiradi.",
        
        hero_btn_view: "Mahsulotlarni ko'rish",
        hero_btn_contact: "Bog'lanish",

        // Features (index.html)
        feat_1_title: "Rasmiy Kafolat",
        feat_1_desc: "Barcha uskunalarga 3 yilgacha kafolat",
        feat_2_title: "Tezkor Yetkazish",
        feat_2_desc: "O'zbekiston bo'ylab o'rnatish va servis",
        feat_3_title: "24/7 Muhandislik",
        feat_3_desc: "Professional texnik yordam va maslahat",
        feat_4_title: "Sifat Standarti",
        feat_4_desc: "Xalqaro ISO sertifikatiga ega mahsulotlar",

        // Categories & Sections (index.html)
        cat_section_title: "Asosiy Mahsulot Yo'nalishlari",
        cat_section_desc: "Sanoat korxonalari, omborxonalar, ferma va issiqxonalar uchun iqlim texnologiyalari",
        cat_card_1_title: "Sanoat ventilyatorlari",
        cat_card_1_desc: "Katta hajmdagi binolarda havo almashinuvini ta'minlovchi, avtomatik jalyuzili yuqori quvvatli devoriy ventilyatorlar.",
        cat_card_2_title: "Isitish agregatlari",
        cat_card_2_desc: "Sanoat obyekti, issiqxona va omborxonalarni qishki mavsumda tezkor isitish uchun suvli va elektr kaloriferlar.",
        cat_card_3_title: "Gofra sovutish panellari",
        cat_card_3_desc: "Yozgi issiq kunlarda sex va issiqxonalar haroratini 8-12°C gacha pasaytiruvchi sellyuloza cooling pad panellari.",
        link_view_catalog: "Katalogdan ko'rish",

        popular_section_title: "Ommabop Uskunalar",
        popular_section_desc: "Hozirgi kunda eng ko'p talab yuqori bo'lgan professional modellar",
        badge_top: "Top Sotuv",
        badge_heating: "Isitish",
        badge_portable: "Portativ",
        btn_order_now: "Buyurtma",
        btn_buy: "Sotib olish",
        btn_analysis: "Tahlil",

        // 10 Products Localized Names & Categories (UZ)
        prod_title_1: "Isitish agregati - 800",
        prod_cat_1: "Isitish agregatlari",
        prod_desc_1: "Katta sex va omborxonalarni suvli va elektr usulda jadal isitish",

        prod_title_2: "Tortish ventilyatori-1120",
        prod_cat_2: "Tortish ventilyatorlari",
        prod_desc_2: "32 500 m³/soat quvvat va avtomatik gravitatsion jalyuzi",

        prod_title_3: "Tortish ventilyatori-600",
        prod_cat_3: "Tortish ventilyatorlari",
        prod_desc_3: "Kam elektr sarfi (0.37 kW) va o'ta sokin sanoat motori",

        prod_title_4: "AURA SMART AIR havo filtri",
        prod_cat_4: "Havo filtrlari",
        prod_desc_4: "HEPA H13 tozalash, UV-C dezinfeksiya va aqlli Wi-Fi boshqaruv",

        prod_title_5: "Gofra sovutish panellari",
        prod_cat_5: "Gofra sovutish panellari",
        prod_desc_5: "Bino haroratini 8-12°C ga pasaytiruvchi tabiiy evaporativ sovutish",

        prod_title_6: "AIRFAN Bio-sovutgichlari (Mobil)",
        prod_cat_6: "Bio-sovutgichlar",
        prod_desc_6: "18 000 m³/soat havo oqimi, 100L suv baki va masofadan pult",

        prod_title_7: "Sanoat ventilyatorlari-1380",
        prod_cat_7: "Tortish ventilyatorlari",
        prod_desc_7: "44 500 m³/soat rekord unumdorlik va santrifugal ochilish tizimi",

        prod_title_8: "Isitish agregatlari-510",
        prod_cat_8: "Isitish agregatlari",
        prod_desc_8: "Ixcham gabarit (510 mm), 35 kW quvvat va yuqori issiqlik",

        prod_title_9: "Kassetali gofra sovutish panellari",
        prod_cat_9: "Gofra sovutish panellari",
        prod_desc_9: "Alyuminiy karkas, suv taqsimlash va aylanma nav tizimi bilan",

        prod_title_10: "AIRFAN Bio-sovutgichlari (Statsionar)",
        prod_cat_10: "Bio-sovutgichlar",
        prod_desc_10: "22 000 m³/soat tom/devoriy statsionar inverter sovutish tizimi",


        // Catalog (catalog.html)
        cat_banner_title: "AIRFAN Mahsulotlar Katalogi",
        cat_banner_desc: "Sanoat va maishiy obyektlar uchun barcha turdagi ventilyatsiya, isitish, sovutish va havo tozalash uskunalarini tanlang.",
        filter_title: "Filtrlar",
        filter_categories: "Kategoriyalar",
        cat_all: "Barchasi",
        cat_heating_label: "Отопительные агрегаты",
        cat_fan_label: "Вытяжные вентиляторы",
        cat_filter_label: "Воздушные фильтры",
        cat_pad_label: "Гофра охладительные панели",
        cat_cooler_label: "Био-охладители AIRFAN",
        filter_price_title: "Narx oralig'i (so'm)",
        price_from: "Dan",
        price_to: "Gacha",
        filter_avail_title: "Mavjudligi",
        avail_in_stock: "Omborxonada bor",
        avail_on_order: "Buyurtma asosida",
        search_ph: "Mahsulot nomini qidiring...",
        sort_default: "Saralash: Standart",
        sort_low_high: "Narx: Arzondan qimmatga",
        sort_high_low: "Narx: Qimmatdan arzonga",

        // Product Detail (product-detail.html)
        detail_banner_title: "Mahsulot Tahlili va Texnik Ekspertiza",
        detail_banner_desc: "AIRFAN iqlim uskunalarining to'liq texnik xarakteristikalari, samaradorlik ko'rsatkichlari va 10 ta asosiy modelning qiyosiy tahlili.",
        selector_title: "Tahlil uchun modelni tanlang (1 - 10):",
        jump_matrix: "Qiyosiy jadvalga o'tish",
        zoom_hint: "Kattalashtirish",
        vat_note: "QQS bilan rasmiy narx",
        btn_order_detail: "Hoziroq Buyurtma Berish",
        badge_delivery: "Butun O'zbekiston bo'ylab yetkazish",
        badge_iso: "ISO 9001 Sifat sertifikati",
        tab_specs: "Texnik Xarakteristikalar",
        tab_desc: "Batafsil Tavsif & Tamoyil",
        tab_install: "O'rnatish & Servis",
        matrix_title: "10 Mahsulotning Qiyosiy Tahlil Jadvali",
        matrix_desc: "Katalogdagi barcha 10 ta asosiy modelning texnik parametrlari, quvvati, havo unumdorligi va narxlarini solishtiring.",
        col_product: "Mahsulot Modeli",
        col_cat: "Kategoriya",
        col_power: "Quvvati / Xususiyati",
        col_airflow: "Havo Aylanishi",
        col_price: "Narxi",
        col_advantage: "Asosiy Afzalligi",
        col_action: "Tahlil",

        // Contact (contact.html)
        contact_banner_title: "Biz bilan Bog'laning",
        contact_banner_desc: "AIRFAN mutaxassislari loyihangiz uchun eng optimal ventilyatsiya, isitish va sovutish yechimlarini tanlab berishadi.",
        info_phone_title: "Yagona Aloqa Markazi",
        info_email_title: "Elektron Pochta",
        info_address_title: "Bosh Ofis va Ombor",
        info_address_val: "Toshkent shahri, Sergeli tumani, Yangi Sergeli ko'chasi 45-uy",
        info_hours_title: "Ish Vaqti",
        info_hours_val: "Dushanba - Shanba: 09:00 dan 18:00 gacha",
        contact_form_title: "Tezkor Murojaat va Maslahat Olish",
        contact_form_desc: "Ma'lumotlaringizni qoldiring, muhandislarimiz 15 daqiqa ichida siz bilan bog'lanishadi.",
        field_name: "Ismingiz va Familiyangiz *",
        field_name_ph: "Masalan: Jamshid Aliyev",
        field_phone: "Telefon raqamingiz *",
        field_topic: "Qiziqtirgan Mahsulot Turi *",
        field_message: "Xabar yoki Obyekt haqida ma'lumot *",
        field_message_ph: "Bino hajmi, maydoni yoki loyiha talablari...",
        btn_contact_send: "Murojaatni Yuborish",

        // Modals & Order
        modal_order_title: "Buyurtma Rasmiylashtirish",
        modal_order_desc: "Tanlangan mahsulot to'g'ridan-to'g'ri mas'ul mutaxassisga yuboriladi.",
        modal_name_label: "Ismingiz va Familiyangiz *",
        modal_name_ph: "Masalan: Sardor Aliyev",
        modal_phone_label: "Telefon raqamingiz *",
        modal_phone_ph: "+998 90 123 45 67",
        modal_addr_label: "Yetkazib berish manzili va Izoh *",
        modal_addr_ph: "Shahar, tuman, ko'cha, sex yoki ferma...",
        modal_send_tg: "Telegram Botga Yuborish",

        // Footer
        footer_about: "O'zbekistonda sanoat va maishiy iqlim texnologiyalari bo'yicha yetakchi ishlab chiqaruvchi va yetkazib beruvchi brend. Rasmiy kafolat va professional servis.",
        footer_pages: "Sahifalar",
        footer_directions: "10 Asosiy Yo'nalish",
        footer_contact: "Bog'lanish",
        footer_rights: "Barcha huquqlar himoyalangan."
    },

    ru: {
        // Navigation & Topbar
        top_address: "г. Ташкент, Сергелийская промышленная зона",
        top_hours: "Пн - Сб: 09:00 - 18:00",
        nav_home: "Главная",
        nav_catalog: "Каталог",
        nav_detail: "Анализ Продукции",
        nav_contact: "Контакты & Заказ",
        btn_catalog_go: "В каталог",
        
        // Brand & Themes
        theme_light: "Светлая",
        theme_dark: "Темная",

        // Hero Slider (index.html)
        hero_badge_1: "AIRFAN ПРОМЫШЛЕННАЯ ВЕНТИЛЯЦИЯ",
        hero_title_1: "Системы Промышленной Вентиляции и Вытяжки",
        hero_desc_1: "Самые мощные промышленные вытяжные вентиляторы в Узбекистане. Рекордный воздухообмен до 44 500 м³/ч для цехов, птицефабрик и складов.",
        
        hero_badge_2: "AIRFAN ТЕПЛОВЫЕ ТЕХНОЛОГИИ",
        hero_title_2: "Отопительные Агрегаты и Калориферы",
        hero_desc_2: "Современные водяные и электрические отопительные системы для быстрого и экономичного обогрева цехов, складов и теплиц в зимний период.",
        
        hero_badge_3: "AIRFAN СИСТЕМЫ ОХЛАЖДЕНИЯ",
        hero_title_3: "Испарительное Охлаждение и Био-Охладители",
        hero_desc_3: "Целлюлозные гофра панели Cooling Pad, мобильные и стационарные био-охладители. Экономия электроэнергии 85% со снижением температуры на 8-12°C.",
        
        hero_btn_view: "Смотреть каталог",
        hero_btn_contact: "Связаться с нами",

        // Features (index.html)
        feat_1_title: "Официальная Гарантия",
        feat_1_desc: "До 3 лет гарантии на все оборудование",
        feat_2_title: "Быстрая Доставка",
        feat_2_desc: "Монтаж и сервис по всему Узбекистану",
        feat_3_title: "24/7 Инженерия",
        feat_3_desc: "Профессиональная техподдержка и расчет",
        feat_4_title: "Стандарт Качества",
        feat_4_desc: "Продукция с международным сертификатом ISO",

        // Categories & Sections (index.html)
        cat_section_title: "Основные Направления Оборудования",
        cat_section_desc: "Климатические технологии для промышленных предприятий, складов, ферм и теплиц",
        cat_card_1_title: "Промышленные вентиляторы",
        cat_card_1_desc: "Настенные вытяжные вентиляторы высокой мощности с автоматическими жалюзи для эффективного воздухообмена в больших зданиях.",
        cat_card_2_title: "Отопительные агрегаты",
        cat_card_2_desc: "Водяные и электрические калориферы для оперативного обогрева промышленных объектов, теплиц и складских комплексов.",
        cat_card_3_title: "Гофра охладительные панели",
        cat_card_3_desc: "Целлюлозные панели Cooling Pad для снижения температуры в цехах и теплицах на 8-12°C в жаркие летние дни.",
        link_view_catalog: "Смотреть в каталоге",

        popular_section_title: "Популярные Модели",
        popular_section_desc: "Самые востребованные профессиональные климатические решения",
        badge_top: "Топ Продаж",
        badge_heating: "Отопление",
        badge_portable: "Портативный",
        btn_order_now: "Заказать",
        btn_buy: "Купить",
        btn_analysis: "Анализ",

        // 10 Products Localized Names & Categories (RU)
        prod_title_1: "Отопительный агрегат - 800",
        prod_cat_1: "Отопительные агрегаты",
        prod_desc_1: "Мощный водяной и электрический нагрев для цехов и складов",

        prod_title_2: "Вытяжной вентилятор-1120",
        prod_cat_2: "Вытяжные вентиляторы",
        prod_desc_2: "Производительность 32 500 м³/ч и автоматические жалюзи",

        prod_title_3: "Вытяжной вентилятор-600",
        prod_cat_3: "Вытяжные вентиляторы",
        prod_desc_3: "Низкое энергопотребление и бесшумный промышленный мотор",

        prod_title_4: "Воздушный фильтр AURA SMART AIR",
        prod_cat_4: "Воздушные фильтры",
        prod_desc_4: "Очистка HEPA H13, UV-C дезинфекция и умное управление Wi-Fi",

        prod_title_5: "Гофра охладительные панели",
        prod_cat_5: "Гофра охладительные панели",
        prod_desc_5: "Экологичное испарительное охлаждение со снижением на 8-12°C",

        prod_title_6: "Био-охладители AIRFAN (Мобильный)",
        prod_cat_6: "Био-охладители AIRFAN",
        prod_desc_6: "Расход воздуха 18 000 м³/ч, бак 100 л и дистанционный пульт",

        prod_title_7: "Промышленные вентиляторы-1380",
        prod_cat_7: "Вытяжные вентиляторы",
        prod_desc_7: "Рекордный воздухообмен 44 500 м³/ч и центробежная система",

        prod_title_8: "Отопительные агрегаты-510",
        prod_cat_8: "Отопительные агрегаты",
        prod_desc_8: "Компактный размер (510 мм), мощность 35 кВт и быстрый прогрев",

        prod_title_9: "Гофра охладительные панели с кассетой",
        prod_cat_9: "Гофра охладительные панели",
        prod_desc_9: "Алюминиевая кассета, система распределения воды и сливной желоб",

        prod_title_10: "Био-охладители AIRFAN (Стационарный)",
        prod_cat_10: "Био-охладители AIRFAN",
        prod_desc_10: "Стационарный крышный/настенный инверторный охладитель 22 000 м³/ч",

        // Catalog (catalog.html)
        cat_banner_title: "Каталог Продукции AIRFAN",
        cat_banner_desc: "Выберите оборудование вентиляции, отопления, охлаждения и очистки воздуха для промышленных и коммерческих объектов.",
        filter_title: "Фильтры",
        filter_categories: "Категории",
        cat_all: "Все товары",
        cat_heating_label: "Отопительные агрегаты",
        cat_fan_label: "Вытяжные вентиляторы",
        cat_filter_label: "Воздушные фильтры",
        cat_pad_label: "Гофра охладительные панели",
        cat_cooler_label: "Био-охладители AIRFAN",
        filter_price_title: "Диапазон цен (сум)",
        price_from: "От",
        price_to: "До",
        filter_avail_title: "Наличие",
        avail_in_stock: "В наличии на складе",
        avail_on_order: "Под заказ",
        search_ph: "Поиск по названию модели...",
        sort_default: "Сортировка: По умолчанию",
        sort_low_high: "Цена: От дешевых к дорогим",
        sort_high_low: "Цена: От дорогих к дешевым",

        // Product Detail (product-detail.html)
        detail_banner_title: "Анализ Продукции и Техническая Экспертиза",
        detail_banner_desc: "Полные технические характеристики оборудования AIRFAN, параметры производительности и сравнительный анализ всех 10 основных моделей.",
        selector_title: "Выберите модель для анализа (1 - 10):",
        jump_matrix: "Перейти к сравнительной таблице",
        zoom_hint: "Увеличить",
        vat_note: "Официальная цена с учетом НДС",
        btn_order_detail: "Оформить Заказ Сейчас",
        badge_delivery: "Доставка по всему Узбекистану",
        badge_iso: "Сертификат качества ISO 9001",
        tab_specs: "Технические Характеристики",
        tab_desc: "Подробное Описание & Принцип",
        tab_install: "Монтаж & Обслуживание",
        matrix_title: "Сравнительная Таблица 10 Продуктов",
        matrix_desc: "Сравните технические параметры, мощность, объем воздухообмена и цены всех 10 основных моделей каталога.",
        col_product: "Модель Продукта",
        col_cat: "Категория",
        col_power: "Мощность / Особенность",
        col_airflow: "Воздухообмен",
        col_price: "Цена",
        col_advantage: "Главное Преимущество",
        col_action: "Анализ",

        // Contact (contact.html)
        contact_banner_title: "Свяжитесь с Нами",
        contact_banner_desc: "Инженеры AIRFAN бесплатно подберут оптимальное оборудование вентиляции, отопления и охлаждения для вашего объекта.",
        info_phone_title: "Единый Контакт-Центр",
        info_email_title: "Электронная Почта",
        info_address_title: "Главный Офис и Склад",
        info_address_val: "г. Ташкент, Сергелийский район, ул. Янги Сергели, д. 45",
        info_hours_title: "График Работы",
        info_hours_val: "Понедельник - Суббота: с 09:00 до 18:00",
        contact_form_title: "Быстрая Заявка и Консультация",
        contact_form_desc: "Оставьте заявку, и наш ведущий инженер свяжется с вами в течение 15 минут.",
        field_name: "Ваше Имя и Фамилия *",
        field_name_ph: "Например: Жавлон Алиев",
        field_phone: "Номер телефона *",
        field_topic: "Интересующее Оборудование *",
        field_message: "Сообщение или параметры объекта *",
        field_message_ph: "Площадь, высота потолков или требования проекта...",
        btn_contact_send: "Отправить Заявку",

        // Modals & Order
        modal_order_title: "Оформление Заказа",
        modal_order_desc: "Информация о выбранной модели моментально передается ответственному менеджеру.",
        modal_name_label: "Ваше Имя и Фамилия *",
        modal_name_ph: "Например: Жавлон Алиев",
        modal_phone_label: "Номер телефона *",
        modal_phone_ph: "+998 90 123 45 67",
        modal_addr_label: "Адрес доставки и Комментарий *",
        modal_addr_ph: "Город, район, улица, цех или объект...",
        modal_send_tg: "Отправить в Telegram Бот",

        // Footer
        footer_about: "Ведущий производитель и поставщик промышленных и бытовых климатических технологий в Узбекистане. Официальная гарантия и профессиональный сервис.",
        footer_pages: "Страницы",
        footer_directions: "10 Основных Моделей",
        footer_contact: "Контакты",
        footer_rights: "Все права защищены."
    },

    en: {
        // Navigation & Topbar
        top_address: "Tashkent city, Sergeli Industrial Zone",
        top_hours: "Mon - Sat: 09:00 - 18:00",
        nav_home: "Home",
        nav_catalog: "Catalog",
        nav_detail: "Product Analysis",
        nav_contact: "Contact & Order",
        btn_catalog_go: "View Catalog",
        
        // Brand & Themes
        theme_light: "Light",
        theme_dark: "Dark",

        // Hero Slider (index.html)
        hero_badge_1: "AIRFAN INDUSTRIAL VENTILATION",
        hero_title_1: "Industrial Ventilation & Exhaust Systems",
        hero_desc_1: "The most powerful industrial exhaust fans in Uzbekistan. Record airflow up to 44,500 m³/h engineered for manufacturing plants, poultry farms, and warehouses.",
        
        hero_badge_2: "AIRFAN HEATING SYSTEMS",
        hero_title_2: "Industrial Heating Units & Air Heaters",
        hero_desc_2: "Advanced water and electric heating systems for rapid, energy-efficient heating of factories, workshops, and greenhouse facilities in cold seasons.",
        
        hero_badge_3: "AIRFAN NATURAL BIO-COOLING",
        hero_title_3: "Evaporative Cooling Pads & Bio-Coolers",
        hero_desc_3: "Cellulose Cooling Pad panels, portable and stationary bio-coolers. Reduce temperatures by 8-12°C while saving up to 85% electricity.",
        
        hero_btn_view: "Browse Catalog",
        hero_btn_contact: "Contact Us",

        // Features (index.html)
        feat_1_title: "Official Warranty",
        feat_1_desc: "Up to 3 years warranty on all equipment",
        feat_2_title: "Fast Delivery",
        feat_2_desc: "Installation and service across Uzbekistan",
        feat_3_title: "24/7 Engineering",
        feat_3_desc: "Professional tech support and calculations",
        feat_4_title: "Quality Standards",
        feat_4_desc: "Certified according to international ISO standards",

        // Categories & Sections (index.html)
        cat_section_title: "Main Product Categories",
        cat_section_desc: "Climate engineering technologies for factories, agricultural complexes, and warehouses",
        cat_card_1_title: "Industrial Exhaust Fans",
        cat_card_1_desc: "High-performance wall-mounted exhaust fans with automatic louvers for continuous air turnover in large-scale premises.",
        cat_card_2_title: "Industrial Heating Units",
        cat_card_2_desc: "Water and electric unit heaters engineered for quick, uniform heating of commercial buildings and greenhouses.",
        cat_card_3_title: "Evaporative Cooling Pads",
        cat_card_3_desc: "Cellulose cooling pads dropping facility temperatures by 8-12°C during hot summer days with minimal power consumption.",
        link_view_catalog: "Explore in Catalog",

        popular_section_title: "Featured Equipment",
        popular_section_desc: "Our most requested professional HVAC equipment models",
        badge_top: "Best Seller",
        badge_heating: "Heating",
        badge_portable: "Portable",
        btn_order_now: "Order",
        btn_buy: "Buy Now",
        btn_analysis: "Analysis",

        // 10 Products Localized Names & Categories (EN)
        prod_title_1: "Unit Air Heater - 800",
        prod_cat_1: "Heating Units",
        prod_desc_1: "High-capacity hot water/electric air heating for factories and warehouses",

        prod_title_2: "Exhaust Fan-1120",
        prod_cat_2: "Exhaust Fans",
        prod_desc_2: "Air capacity 32,500 m³/h with automatic gravitational louvers",

        prod_title_3: "Exhaust Fan-600",
        prod_cat_3: "Exhaust Fans",
        prod_desc_3: "Ultra-quiet motor with minimal power consumption (0.37 kW)",

        prod_title_4: "AURA SMART AIR Filter",
        prod_cat_4: "Air Filters",
        prod_desc_4: "HEPA H13 filtration, UV-C germicidal disinfection & Smart Wi-Fi",

        prod_title_5: "Evaporative Cooling Pads",
        prod_cat_5: "Cooling Pad Panels",
        prod_desc_5: "Natural evaporative cooling reducing heat by 8-12°C with 85% energy savings",

        prod_title_6: "AIRFAN Bio-Coolers (Mobile)",
        prod_cat_6: "AIRFAN Bio-Coolers",
        prod_desc_6: "18,000 m³/h airflow, 100L water tank, and wireless remote controller",

        prod_title_7: "Industrial Exhaust Fan-1380",
        prod_cat_7: "Exhaust Fans",
        prod_desc_7: "Record 44,500 m³/h airflow with centrifugal opening mechanism",

        prod_title_8: "Unit Air Heater-510",
        prod_cat_8: "Heating Units",
        prod_desc_8: "Compact 510mm chassis, 35 kW heating power & ultra-low noise",

        prod_title_9: "Framed Cooling Pad System",
        prod_cat_9: "Cooling Pad Panels",
        prod_desc_9: "Complete anodized aluminum cassette with water distributor pipe and gutters",

        prod_title_10: "AIRFAN Bio-Cooler (Stationary)",
        prod_cat_10: "AIRFAN Bio-Coolers",
        prod_desc_10: "22,000 m³/h roof/wall-mounted 12-speed inverter industrial cooler",

        // Catalog (catalog.html)
        cat_banner_title: "AIRFAN Products Catalog",
        cat_banner_desc: "Select high-efficiency ventilation, heating, evaporative cooling, and air filtration systems for industrial and commercial projects.",
        filter_title: "Filters",
        filter_categories: "Categories",
        cat_all: "All Products",
        cat_heating_label: "Heating Units",
        cat_fan_label: "Exhaust Fans",
        cat_filter_label: "Air Filters",
        cat_pad_label: "Cooling Pad Panels",
        cat_cooler_label: "AIRFAN Bio-Coolers",
        filter_price_title: "Price Range (UZS)",
        price_from: "From",
        price_to: "To",
        filter_avail_title: "Availability",
        avail_in_stock: "In Stock at Warehouse",
        avail_on_order: "Made to Order",
        search_ph: "Search by equipment name...",
        sort_default: "Sort: Default",
        sort_low_high: "Price: Low to High",
        sort_high_low: "Price: High to Low",

        // Product Detail (product-detail.html)
        detail_banner_title: "Product Analysis & Technical Expertise",
        detail_banner_desc: "Comprehensive technical specifications, performance metrics, and comparative evaluation of all 10 core AIRFAN models.",
        selector_title: "Select Model for Analysis (1 - 10):",
        jump_matrix: "Jump to Comparison Matrix",
        zoom_hint: "Zoom In",
        vat_note: "Official price including VAT",
        btn_order_detail: "Place Order Now",
        badge_delivery: "Express delivery across Uzbekistan",
        badge_iso: "ISO 9001 Certified Quality",
        tab_specs: "Technical Specifications",
        tab_desc: "Detailed Description & Principles",
        tab_install: "Installation & Maintenance",
        matrix_title: "Comparative Matrix of 10 Models",
        matrix_desc: "Compare electrical parameters, motor power, airflow volumes, and pricing of all 10 core catalog models.",
        col_product: "Product Model",
        col_cat: "Category",
        col_power: "Power / Feature",
        col_airflow: "Airflow Volume",
        col_price: "Price",
        col_advantage: "Key Advantage",
        col_action: "Analysis",

        // Contact (contact.html)
        contact_banner_title: "Contact AIRFAN Team",
        contact_banner_desc: "Our climate engineers will calculate and recommend the optimum ventilation, heating, or cooling solution for your project.",
        info_phone_title: "Direct Hotline",
        info_email_title: "Corporate Email",
        info_address_title: "Headquarters & Warehouse",
        info_address_val: "Tashkent city, Sergeli district, Yangi Sergeli st. 45",
        info_hours_title: "Working Hours",
        info_hours_val: "Monday - Saturday: 09:00 to 18:00",
        contact_form_title: "Request Quotation & Consultation",
        contact_form_desc: "Leave your contact details and our lead engineer will get in touch within 15 minutes.",
        field_name: "Full Name *",
        field_name_ph: "E.g.: John Doe",
        field_phone: "Phone Number *",
        field_topic: "Interested Equipment Category *",
        field_message: "Message or Project Specs *",
        field_message_ph: "Facility dimensions, height, or design criteria...",
        btn_contact_send: "Send Inquiry",

        // Modals & Order
        modal_order_title: "Complete Your Order",
        modal_order_desc: "Selected equipment details will be immediately dispatched to our responsible manager.",
        modal_name_label: "Full Name *",
        modal_name_ph: "E.g.: Alex Miller",
        modal_phone_label: "Phone Number *",
        modal_phone_ph: "+998 90 123 45 67",
        modal_addr_label: "Delivery Address & Comments *",
        modal_addr_ph: "City, district, street, factory or warehouse...",
        modal_send_tg: "Send via Telegram Bot",

        // Footer
        footer_about: "Leading manufacturer and supplier of industrial and commercial climate technologies in Uzbekistan. Official factory warranty and professional maintenance.",
        footer_pages: "Quick Links",
        footer_directions: "10 Core Directions",
        footer_contact: "Contact Info",
        footer_rights: "All rights reserved."
    }
};

/**
 * THEME CONTROLLER
 */
function getCurrentTheme() {
    return localStorage.getItem('airfan_theme') || 'light';
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('airfan_theme', theme);

    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        const lang = getCurrentLanguage();
        const icon = toggleBtn.querySelector('i');
        const label = toggleBtn.querySelector('.theme-label');
        if (theme === 'dark') {
            if (icon) icon.className = 'fa-solid fa-sun';
            if (label) label.innerText = lang === 'uz' ? 'Kunduzgi' : (lang === 'ru' ? 'Светлая' : 'Light');
        } else {
            if (icon) icon.className = 'fa-solid fa-moon';
            if (label) label.innerText = lang === 'uz' ? 'Tungi' : (lang === 'ru' ? 'Темная' : 'Dark');
        }
    }
}

function toggleTheme() {
    const current = getCurrentTheme();
    setTheme(current === 'dark' ? 'light' : 'dark');
}

/**
 * LANGUAGE CONTROLLER
 */
function getCurrentLanguage() {
    return localStorage.getItem('airfan_lang') || 'uz';
}

function setLanguage(lang) {
    if (!TRANSLATIONS[lang]) lang = 'uz';
    localStorage.setItem('airfan_lang', lang);

    const dict = TRANSLATIONS[lang];

    // Update text elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const key = el.getAttribute('data-i18n-ph');
        if (dict[key]) {
            el.setAttribute('placeholder', dict[key]);
        }
    });

    // Update active class on language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Sync theme toggle label
    const currentTheme = getCurrentTheme();
    const toggleBtn = document.getElementById('themeToggle');
    if (toggleBtn) {
        const label = toggleBtn.querySelector('.theme-label');
        if (label) {
            if (currentTheme === 'dark') {
                label.innerText = lang === 'uz' ? 'Kunduzgi' : (lang === 'ru' ? 'Светлая' : 'Light');
            } else {
                label.innerText = lang === 'uz' ? 'Tungi' : (lang === 'ru' ? 'Темная' : 'Dark');
            }
        }
    }

    // Trigger custom event for page-specific components
    window.dispatchEvent(new CustomEvent('airfanLanguageChanged', { detail: { lang } }));
}

/**
 * INITIALIZATION ON PAGE LOAD
 */
document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Theme
    const savedTheme = getCurrentTheme();
    setTheme(savedTheme);

    // 2. Initialize Language
    const savedLang = getCurrentLanguage();
    setLanguage(savedLang);
});

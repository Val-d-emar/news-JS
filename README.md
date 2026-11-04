# News Portal (News API)

Интерактивное веб-приложение для просмотра актуальных мировых новостей по различным источникам на базе REST API [News API](https://newsapi.org/).
Проект полностью мигрирован с JavaScript на **TypeScript** в строгом режиме типизации в рамках курса RS School.

## 🚀 Live Demo

Посмотреть задеплоенное приложение:
👉 **[https://Val-d-emar.github.io/news-JS/](https://Val-d-emar.github.io/news-JS/)**

---

## 🛠 Стек технологий

-   **Язык**: TypeScript 5 (строгий режим `strict: true`, `noImplicitAny: true`, 0% `any`)
-   **Сборщик**: Webpack 5 (ts-loader, Asset Modules, HtmlWebpackPlugin, DotenvWebpackPlugin)
-   **Линтинг и кодстайл**: ESLint 8 + `@typescript-eslint` (с правилами `no-explicit-any`, `explicit-function-return-type`, `explicit-member-accessibility`) + Prettier
-   **Стили**: CSS3 (Flexbox, CSS Grid, адаптивный дизайн `clamp`, медиа-запросы 320px–1920px)

---

## 💻 Установка и локальный запуск

1. **Клонирование репозитория:**

    ```bash
    git clone -b news-api https://github.com/Val-d-emar/news-JS.git
    cd news-JS
    ```

2. **Установка зависимостей:**

    ```bash
    npm install
    ```

3. **Настройка переменных окружения (опционально для локального режима):**
   Создайте файл `.env` в корне проекта:

    ```env
    API_URL=https://newsapi.org/v2/
    API_KEY=ваш_ключ_с_newsapi_org
    ```

    _(Если файл `.env` не создан, приложение автоматически переключается на прокси-сервер RS School)._

4. **Запуск сервера разработки:**

    ```bash
    npm start
    ```

    Приложение откроется в браузере по адресу `http://localhost:8080/`.

---

## 🧪 Скрипты проверки и сборки

-   **Проверка типов TypeScript (Typecheck):**

    ```bash
    npx tsc --noEmit
    ```

-   **Проверка линтером (ESLint):**

    ```bash
    npm run lint
    ```

-   **Сборка production-бандла:**

    ```bash
    npm run build
    ```

-   **Деплой на GitHub Pages:**

    ```bash
    npm run deploy
    ```

---

## 📱 Особенности и улучшения интерфейса

-   **100% адаптивность**: корректное отображение на всех экранах от `320px` до `1920px`.
-   **UX источников**: фильтрация в виде горизонтальных пилюль (chips) со стилизованным скроллбаром и подсветкой активного источника.
-   **Обработка пустого состояния**: при отсутствии новостей выводится информативное сообщение вместо пустого экрана.
-   **Обязательный футер RS School**: кликабельный логотип курса, ссылка на профиль автора и год разработки (2026).

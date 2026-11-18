# Portfolio — заметки для Claude

Личное сайт-портфолио владельца (GitHub: `KuliyevMerdan`). Общаемся на русском.

## Стек и команды

- React 19 + TypeScript 7 + Vite 8, линтер oxlint. Создан через `npm create vite@latest` с шаблоном `react-ts`.
- Tailwind CSS v4 (`@tailwindcss/vite`), шрифт JetBrains Mono (`@fontsource-variable/jetbrains-mono`, свой хостинг, без Google Fonts).
- `npm run dev` — dev-сервер (http://localhost:5173, конфиг для браузера Claude в `.claude/launch.json`).
- `npm run build` — `tsc -b` + сборка в `dist/`.
- `npm run lint` — oxlint.
- Git **не инициализирован** — всё, что удаляется, удаляется безвозвратно.

## Решения по фронтенду (утверждены владельцем)

- Стили — **Tailwind CSS**.
- Визуальный стиль — **«для разработчика»**: тёмный фон, моноширинный шрифт, интерфейс в духе терминала/кода.
- Разделы: **обо мне, проекты, навыки и стек, опыт, контакты**.
- Языки: **русский и английский** с переключателем.

## Устройство кода

- `src/content/` — весь текст сайта. `types.ts` — тип `Content` (обе локали обязаны заполнить всё), `ru.ts` / `en.ts` — тексты, `shared.ts` — общие ссылки и стек.
- `src/i18n/` — локаль без библиотек: `locale.ts` (контекст, `useLocale`, `useContent`), `LocaleProvider.tsx` (выбор по `localStorage` → `navigator.language`, обновляет `<html lang>`, title, description).
- `src/components/` — `Header` (навигация `./раздел`, scroll spy, мобильное меню, `[RU|EN]`), `Hero` (окно терминала с печатью `whoami`), `About` (`me.yml`), `Projects` (карточки `README.md`), `Skills` (стек как TS-объект), `Experience` (как `git log`), `Contact` (`contact --list`), `ui.tsx` (общие мелочи).
- `src/hooks/` — `useTypewriter`, `useActiveSection`.
- Цвета и шрифт — токены в `@theme` в `src/index.css` (`bg`, `surface`, `fg`, `muted`, `accent` = зелёный `#7ee787`, цвета подсветки синтаксиса).
- Учтён `prefers-reduced-motion`; у анимированного hero есть текстовая версия для скринридеров.

**Тексты — заглушки** (помечены `TODO(owner)`): имя взято из ника GitHub, контакты (`hello@example.com`, `@username`, LinkedIn) ненастоящие, второе место опыта — шаблон, описания проектов написаны по документации secret-coach. Всё это владелец должен заменить.

## Как работать с владельцем

- Владелец хочет сам задавать вопросы и уточнять требования **до** того, как начинается работа. Дизайн, разделы и содержимое сайта решает он — не придумывать их за него, а спрашивать.
- С сервером ничего не делать без явного подтверждения. SSH на сервер заблокирован настройками разрешений Claude Code; если нужен — просить владельца разрешить.

## История (2026-11-13)

1. Пробовали шаблон https://github.com/KuliyevMerdan/portfolio-plain-template (Bootstrap 4 alpha + jQuery, тема «Anjali», тёмный фон, зелёный акцент `#08d665`). Склонировали и полностью переписали на React + TS: компоненты, данные в одном файле, jQuery-плагины заменены своим кодом.
2. Шаблон владельцу **не понравился** — проект и клон удалены целиком. К нему не возвращаемся.
3. Создан чистый проект Vite + React + TS (текущий).
4. Владелец выбрал стек и стиль (см. «Решения по фронтенду»). Сверстана первая версия всех разделов с текстами-заглушками, проверена на десктопе и телефоне (375px).

## Сервер и деплой (ещё не сделано)

Решено: **сначала фронтенд, потом сервер.**

### Что известно о сервере

Из документации соседнего проекта `../secret-coach` (`deploy/README.md`, `deploy/docker-compose.yml`, `deploy/Caddyfile`, `.github/workflows/deploy.yml`). Реальное состояние сервера **не проверялось**.

- netcup vServer, IP `152.53.248.130`, Ubuntu 24.04, 8 ГБ RAM. SSH: `root`, ключ `~/.ssh/secretcoach_deploy`.
- Там работает demo-стенд **secret-coach** (Docker Compose, проект `secret-coach`, `/opt/secret-coach`): caddy, server (Express API), postgres, redis, minio, backup.
- Порты **80/443 занимает Caddy из стека secret-coach**. Он же раздаёт фронтенды secret-coach — их сборка лежит в образе Caddy (`deploy/web.Dockerfile`).
- Своего домена нет: адреса `app.` / `admin.` / `api.` / `media.152-53-248-130.sslip.io`.
- Деплой secret-coach: GitHub Actions после зелёного CI на `main` → git bundle по SSH → `deploy.sh` (build → migrate → up → проверка готовности).
- Слабые места, отмеченные в README secret-coach: вход под root по паролю разрешён, fail2ban нет, бэкапы только на этом же диске.

### Предложенный план (владелец не утвердил)

- Купить один домен (владелец делает сам), DNS: `@` и `*` → `152.53.248.130`. Портфолио на корне домена, пет-проекты на поддоменах.
- Поставить **отдельный edge-Caddy** (свой Compose-стек, например `/opt/edge`), который один держит 80/443 и выпускает сертификаты. Каждый проект — отдельный файл в `sites/` + общая Docker-сеть.
- secret-coach: его Caddy перестаёт публиковать порты, подключается к общей сети, edge проксирует к нему его sslip.io-адреса. Это пара минут простоя — делать по плану с откатом (вернуть `ports`).
- Каждый пет-проект — свой Compose-стек со своей БД и лимитами памяти.
- Портфолио — статическая сборка, раздаётся edge-Caddy, деплой через GitHub Actions по образцу secret-coach.
- Coolify/Dokploy отложены: съедают 1–2 ГБ из 8, а secret-coach сам тяжёлый (Postgres, MinIO, ffmpeg).
- До пет-проектов: SSH только по ключу, fail2ban.

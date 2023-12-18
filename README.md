# Демо Магазин

## Описание

Демонстрационный интернет-магазин, созданный с использованием ReactJS. Включает в себя список товаров, детальную страницу товара и корзину. Проект доступен на [GitHub Pages](https://frontdevinlove.github.io/demo_shop/).

## Особенности

- **Список товаров**: Показ товаров с изображениями. Переход на детальную страницу по клику.
- **Детальная страница**: Информация о товаре, выбор цвета, просмотр изображений, выбор размера.
- **Корзина**: Добавление товаров с выбором цвета и размера. Уникальные товары с количеством. Возможность удаления товаров.

## Технологии

1. React (ReactJS)
2. TypeScript
3. Vite
4. Ant Design (antd)
5. MobX и mobx-react-lite
6. React Query
7. React Router Dom
8. PrimeFlex
9. Normalize.css
10. ESLint, Prettier, Sass, GitHub Pages и др.

## Установка и Запуск

```bash
git clone git@github.com:frontDevInLove/demo_shop.git
npm install
npm run dev
```

Вот обновленный раздел о деплое в вашем README:

---

## Деплой

Для развертывания проекта на GitHub Pages используйте следующую команду:

```bash
npm run deploy
```

Эта команда включает в себя:
1. Сборку проекта с помощью Vite (`vite build`).
2. Копирование `index.html` в `404.html` для корректной маршрутизации на GitHub Pages (`node copy404.js`).
3. Публикацию собранного проекта в ветке GitHub Pages (`gh-pages -d dist`).

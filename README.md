Генерация токена:
1. git clone https://github.com/pavel-zlotarenchuk/AppStoreApiToken
2. cd AppStoreApiToken
3. npm install
4. Идём сюда: https://appstoreconnect.apple.com/access/users
5. Вкладка “Ключи”
6. Создать ключ API
7. Выбираем название / группу
8. Скачиваем файл AuthKey_XXXXXXX.p8 и кладем его в папку AppStoreApiToken
9. Значение ID КЛЮЧА - копируем и вставляем в поле apiKeyId в файле index.js
10. Значение Issuer ID - копируем и вставляем в поле issuerId в файле index.js
11. node index.js 
12. Токен готов
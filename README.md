Генерация токена:
1. <i>git clone https://github.com/pavel-zlotarenchuk/AppStoreApiToken</i>
2. <i>cd AppStoreApiToken</i>
3. <i>npm install</i>
4. Идём сюда: https://appstoreconnect.apple.com/access/users
5. Вкладка <b>“Ключи”</b>
6. Жмем <b>Создать ключ API</b>
7. Выбираем название / группу
8. Скачиваем файл <b>AuthKey_XXXXXXX.p8</b> и кладем его в папку AppStoreApiToken
9. Значение <b>ID КЛЮЧА</b> - копируем и вставляем в поле <i>apiKeyId</i> в файле <i>index.js</i>
10. Значение <b>Issuer ID</b> - копируем и вставляем в поле <i>issuerId</i> в файле <i>index.js</i>
11. <i>node index.js</i>
12. Токен готов

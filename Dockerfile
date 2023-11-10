# Используем официальный образ MySQL
FROM mysql:latest

# Устанавливаем переменные окружения
ENV MYSQL_ROOT_PASSWORD=root_password
ENV MYSQL_DATABASE=animals_db
ENV MYSQL_USER=animal_tracker
ENV MYSQL_PASSWORD=tracker123

# Копируем скрипт инициализации в директорию /docker-entrypoint-initdb.d/
# Этот скрипт будет выполнен при первом запуске контейнера и создаст базу данных и пользователя
COPY init.sql /docker-entrypoint-initdb.d/

# Открываем порт 3306
EXPOSE 3306


let config = {};

config.port = 3300;

config.error = {
    notFound: 'Нет такой страницы =(',
    serverError: 'Ошибка сервера'
};

config.directories = {
    readyFiles: './ready'
};

module.exports = config;
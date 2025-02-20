CREATE TABLE
  IF NOT EXISTS Couriers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) ,
    age INTEGER  CHECK (age BETWEEN 18 AND 100),
    city VARCHAR(100) ,
    nationality VARCHAR(100) ,
    transport VARCHAR(100),
    isactive BOOLEAN  DEFAULT TRUE,
    phone VARCHAR(20) ,
    email VARCHAR(100) ,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );

CREATE TABLE IF NOT EXISTS Orders (
  id SERIAL PRIMARY KEY,
  order_name VARCHAR(255),
  recipient_name VARCHAR(255),
  recipient_phone VARCHAR(255),
  recipient_email VARCHAR(255),
  address_from TEXT ,
  address_to TEXT ,
  distance FLOAT ,
  courier_id INTEGER,
  price DECIMAL(10, 2) ,
  region VARCHAR(255) ,
  city VARCHAR(255) ,
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO
  Couriers (
    name,
    age,
    city,
    nationality,
    transport,
    isactive,
    phone,
    email
  )
VALUES
  (
    'Абдирахман Хассан',
    26,
    'Москва',
    'Сомали',
    'Велосипед',
    TRUE,
    '+7 901 222-33-44',
    'abdirahman.hassan@example.com'
  ),
  (
    'Мохамед Фарах',
    31,
    'Санкт-Петербург',
    'Сомали',
    'Самокат',
    TRUE,
    '+7 911 777-88-99',
    'mohamed.farah@example.com'
  ),
  (
    'Ибрагим Ахмед',
    29,
    'Екатеринбург',
    'Сомали',
    'Автомобиль',
    TRUE,
    '+7 922 555-66-77',
    'ibrahim.ahmed@example.com'
  ),
  (
    'Халима Нур',
    27,
    'Новосибирск',
    'Сомали',
    'Велосипед',
    TRUE,
    '+7 933 888-99-00',
    'halima.nur@example.com'
  ),
  (
    'Юсуф Али',
    34,
    'Ростов-на-Дону',
    'Сомали',
    'Мотоцикл',
    TRUE,
    '+7 944 333-22-11',
    'yusuf.ali@example.com'
  ),
  (
    'Иван Петров',
    30,
    'Москва',
    'Россия',
    'Автомобиль',
    TRUE,
    '+79161234567',
    'ivan@mail.ru'
  ),
  (
    'Исмоил Давронов',
    29,
    'Самара',
    'Таджикистан',
    'Мотоцикл',
    TRUE,
    '+7 905 258-69-74',
    'ismoil.davronov@example.com'
  ),
  (
    'Хуршед Махмадов',
    33,
    'Ростов-на-Дону',
    'Таджикистан',
    'Велосипед',
    FALSE,
    '+7 906 112-23-45',
    'khurshed.makhmadov@example.com'
  ),
  (
    'Бахтиёр Юнусов',
    24,
    'Уфа',
    'Таджикистан',
    'Автомобиль',
    TRUE,
    '+7 909 987-65-43',
    'bakhtiyor.yunusov@example.com'
  ),
  (
    'Мария Сидорова',
    25,
    'Санкт-Петербург',
    'Россия',
    'Велосипед',
    TRUE,
    '+79035556677',
    'maria@yandex.ru'
  ),
  (
    'Алексей Иванов',
    35,
    'Новосибирск',
    'Россия',
    'Мотоцикл',
    TRUE,
    '+79261234567',
    'alexey@mail.ru'
  ),
  (
    'Алишер Насриддинов',
    25,
    'Москва',
    'Таджикистан',
    'Велосипед',
    TRUE,
    '+7 900 123-45-67',
    'alisher.nasr@example.com'
  ),
  (
    'Фаррух Юсупов',
    30,
    'Санкт-Петербург',
    'Таджикистан',
    'Скутер',
    TRUE,
    '+7 911 456-78-90',
    'farukh.yusup@example.com'
  ),
  (
    'Давлатмурод Каримов',
    28,
    'Новосибирск',
    'Таджикистан',
    'Автомобиль',
    FALSE,
    '+7 923 321-98-76',
    'davlat.karimov@example.com'
  ),
  (
    'Саид Шарипов',
    22,
    'Екатеринбург',
    'Таджикистан',
    'Мотоцикл',
    TRUE,
    '+7 950 654-32-10',
    'said.sharipov@example.com'
  ),
  (
    'Мирзо Дустов',
    35,
    'Казань',
    'Таджикистан',
    'Велосипед',
    TRUE,
    '+7 987 789-12-34',
    'mirzo.dustov@example.com'
  ),
  (
    'Шодмон Рахимов',
    40,
    'Челябинск',
    'Таджикистан',
    'Автомобиль',
    FALSE,
    '+7 951 741-25-36',
    'shodmon.rahimov@example.com'
  ),
  (
    'Нодирбек Сатторов',
    27,
    'Краснодар',
    'Таджикистан',
    'Скутер',
    TRUE,
    '+7 903 369-47-58',
    'nodirbek.sattorov@example.com'
  );

INSERT INTO
  Orders (
    order_name,
    recipient_name,
    recipient_phone,
    recipient_email,
    address_from,
    address_to,
    distance,
    courier_id,
    price,
    region,
    city,
    description
  )
VALUES
  (
    'Заказ #1',
    'Алексей Иванов',
    '+79261234567',
    'alexey@mail.ru',
    'ул. Ленина, 15',
    'пр. Мира, 42',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #2',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #3',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #4',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #5',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #6',
    'Ирина Морозова',
    '+79961234567',
    'irina@mail.ru',
    'ул. Горького, 7',
    'ул. Маяковского, 22',
    12.4,
    3,
    600.00,
    'Центральный',
    'Нижний Новгород',
    'Перевозка документов'
  ),
  (
    'Заказ #7',
    'Иван Петров',
    '+79161234567',
    'ivan@mail.ru',
    'ул. Тверская, 8',
    'ул. Арбат, 14',
    18.9,
    1,
    950.00,
    'Восточный',
    'Челябинск',
    'Доставка продуктов'
  ),
  (
    'Заказ #8',
    'Мария Сидорова',
    '+79035556677',
    'maria@yandex.ru',
    'ул. Суворова, 12',
    'ул. Пушкина, 20',
    22.1,
    2,
    1100.00,
    'Южный',
    'Самара',
    'Перевозка багажа'
  ),
  (
    'Заказ #9',
    'Алексей Кальянов',
    '+79261234517',
    'alexeykal@mail.ru',
    'ул. Ленина, 11',
    'пр. Мира, 18',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #10',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #11',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #12',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #13',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #14',
    'Дмитрий Соколов',
    '+79167778899',
    'dmitry@gmail.com',
    'ул. Невская, 25',
    'пр. Космонавтов, 11',
    14.8,
    4,
    680.00,
    'Северо-Западный',
    'Калининград',
    'Доставка электроники'
  ),
  (
    'Заказ #15',
    'Екатерина Волкова',
    '+79034445566',
    'volkova@yandex.ru',
    'ул. Балтийская, 7',
    'ул. Парковая, 33',
    9.1,
    5,
    420.00,
    'Приволжский',
    'Самара',
    'Цветы в горшках'
  ),
  (
    'Заказ #16',
    'Павел Кузнецов',
    '+79653332211',
    'pavelk@inbox.ru',
    'ш. Энтузиастов, 45',
    'ул. Юбилейная, 2',
    18.3,
    3,
    890.00,
    'Уральский',
    'Пермь',
    'Офисная техника'
  ),
  (
    'Заказ #17',
    'Алина Новикова',
    '+79219876543',
    'novikova@mail.com',
    'пр. Ленинградский, 88',
    'ул. Зеленая, 15',
    12.7,
    2,
    620.00,
    'Центральный',
    'Воронеж',
    'Спортивный инвентарь'
  ),
  (
    'Заказ #18',
    'Артем Лебедев',
    '+79531112233',
    'lebedev@ya.ru',
    'ул. Солнечная, 3',
    'пер. Садовый, 6',
    6.5,
    1,
    350.00,
    'Южный',
    'Сочи',
    'Медицинское оборудование'
  ),
  (
    'Заказ #19',
    'Виктория Крылова',
    '+79776665544',
    'viktoria.k@list.ru',
    'ул. Речная, 19',
    'пр. Победы, 77',
    22.4,
    5,
    1150.00,
    'Сибирский',
    'Омск',
    'Хрупкие сувениры'
  ),
  (
    'Заказ #20',
    'Глеб Морозов',
    '+79021234567',
    'morozov.gleb@bk.ru',
    'ул. Гвардейская, 14',
    'ул. Строителей, 28',
    17.9,
    4,
    940.00,
    'Дальневосточный',
    'Владивосток',
    'Стройматериалы'
  ),
  (
    'Заказ #21',
    'Юлия Воробьева',
    '+79644447788',
    'julia.vorob@mail.ru',
    'пр. Мира, 55',
    'ул. Лесная, 9',
    11.2,
    3,
    570.00,
    'Центральный',
    'Тула',
    'Книги и канцтовары'
  ),
  (
    'Заказ #22',
    'Никита Павлов',
    '+79165556677',
    'nikita.p@inbox.ru',
    'ул. Центральная, 1',
    'ш. Революционное, 40',
    24.6,
    2,
    1270.00,
    'Приволжский',
    'Уфа',
    'Музыкальные инструменты'
  ),
  (
    'Заказ #23',
    'Олеся Тимофеева',
    '+79039998877',
    'olesya.t@yandex.ru',
    'ул. Маяковского, 12',
    'пр. Строителей, 18',
    13.8,
    1,
    710.00,
    'Северный',
    'Мурманск',
    'Зимняя одежда'
  ),
  (
    'Заказ #1',
    'Алексей Иванов',
    '+79261234567',
    'alexey@mail.ru',
    'ул. Ленина, 15',
    'пр. Мира, 42',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #2',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #3',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #4',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #5',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #6',
    'Ирина Морозова',
    '+79961234567',
    'irina@mail.ru',
    'ул. Горького, 7',
    'ул. Маяковского, 22',
    12.4,
    3,
    600.00,
    'Центральный',
    'Нижний Новгород',
    'Перевозка документов'
  ),
  (
    'Заказ #7',
    'Иван Петров',
    '+79161234567',
    'ivan@mail.ru',
    'ул. Тверская, 8',
    'ул. Арбат, 14',
    18.9,
    1,
    950.00,
    'Восточный',
    'Челябинск',
    'Доставка продуктов'
  ),
  (
    'Заказ #8',
    'Мария Сидорова',
    '+79035556677',
    'maria@yandex.ru',
    'ул. Суворова, 12',
    'ул. Пушкина, 20',
    22.1,
    2,
    1100.00,
    'Южный',
    'Самара',
    'Перевозка багажа'
  ),
  (
    'Заказ #9',
    'Алексей Кальянов',
    '+79261234517',
    'alexeykal@mail.ru',
    'ул. Ленина, 11',
    'пр. Мира, 18',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #10',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #11',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #12',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #13',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #14',
    'Дмитрий Соколов',
    '+79167778899',
    'dmitry@gmail.com',
    'ул. Невская, 25',
    'пр. Космонавтов, 11',
    14.8,
    4,
    680.00,
    'Северо-Западный',
    'Калининград',
    'Доставка электроники'
  ),
  (
    'Заказ #15',
    'Екатерина Волкова',
    '+79034445566',
    'volkova@yandex.ru',
    'ул. Балтийская, 7',
    'ул. Парковая, 33',
    9.1,
    5,
    420.00,
    'Приволжский',
    'Самара',
    'Цветы в горшках'
  ),
  (
    'Заказ #16',
    'Павел Кузнецов',
    '+79653332211',
    'pavelk@inbox.ru',
    'ш. Энтузиастов, 45',
    'ул. Юбилейная, 2',
    18.3,
    3,
    890.00,
    'Уральский',
    'Пермь',
    'Офисная техника'
  ),
  (
    'Заказ #17',
    'Алина Новикова',
    '+79219876543',
    'novikova@mail.com',
    'пр. Ленинградский, 88',
    'ул. Зеленая, 15',
    12.7,
    2,
    620.00,
    'Центральный',
    'Воронеж',
    'Спортивный инвентарь'
  ),
  (
    'Заказ #18',
    'Артем Лебедев',
    '+79531112233',
    'lebedev@ya.ru',
    'ул. Солнечная, 3',
    'пер. Садовый, 6',
    6.5,
    1,
    350.00,
    'Южный',
    'Сочи',
    'Медицинское оборудование'
  ),
  (
    'Заказ #19',
    'Виктория Крылова',
    '+79776665544',
    'viktoria.k@list.ru',
    'ул. Речная, 19',
    'пр. Победы, 77',
    22.4,
    5,
    1150.00,
    'Сибирский',
    'Омск',
    'Хрупкие сувениры'
  ),
  (
    'Заказ #20',
    'Глеб Морозов',
    '+79021234567',
    'morozov.gleb@bk.ru',
    'ул. Гвардейская, 14',
    'ул. Строителей, 28',
    17.9,
    4,
    940.00,
    'Дальневосточный',
    'Владивосток',
    'Стройматериалы'
  ),
  (
    'Заказ #21',
    'Юлия Воробьева',
    '+79644447788',
    'julia.vorob@mail.ru',
    'пр. Мира, 55',
    'ул. Лесная, 9',
    11.2,
    3,
    570.00,
    'Центральный',
    'Тула',
    'Книги и канцтовары'
  ),
  (
    'Заказ #22',
    'Никита Павлов',
    '+79165556677',
    'nikita.p@inbox.ru',
    'ул. Центральная, 1',
    'ш. Революционное, 40',
    24.6,
    2,
    1270.00,
    'Приволжский',
    'Уфа',
    'Музыкальные инструменты'
  ),
  (
    'Заказ #23',
    'Олеся Тимофеева',
    '+79039998877',
    'olesya.t@yandex.ru',
    'ул. Маяковского, 12',
    'пр. Строителей, 18',
    13.8,
    1,
    710.00,
    'Северный',
    'Мурманск',
    'Зимняя одежда'
  ),
  (
    'Заказ #1',
    'Алексей Иванов',
    '+79261234567',
    'alexey@mail.ru',
    'ул. Ленина, 15',
    'пр. Мира, 42',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #2',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #3',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #4',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #5',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #6',
    'Ирина Морозова',
    '+79961234567',
    'irina@mail.ru',
    'ул. Горького, 7',
    'ул. Маяковского, 22',
    12.4,
    3,
    600.00,
    'Центральный',
    'Нижний Новгород',
    'Перевозка документов'
  ),
  (
    'Заказ #7',
    'Иван Петров',
    '+79161234567',
    'ivan@mail.ru',
    'ул. Тверская, 8',
    'ул. Арбат, 14',
    18.9,
    1,
    950.00,
    'Восточный',
    'Челябинск',
    'Доставка продуктов'
  ),
  (
    'Заказ #8',
    'Мария Сидорова',
    '+79035556677',
    'maria@yandex.ru',
    'ул. Суворова, 12',
    'ул. Пушкина, 20',
    22.1,
    2,
    1100.00,
    'Южный',
    'Самара',
    'Перевозка багажа'
  ),
  (
    'Заказ #9',
    'Алексей Кальянов',
    '+79261234517',
    'alexeykal@mail.ru',
    'ул. Ленина, 11',
    'пр. Мира, 18',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #10',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #11',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #12',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #13',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #14',
    'Дмитрий Соколов',
    '+79167778899',
    'dmitry@gmail.com',
    'ул. Невская, 25',
    'пр. Космонавтов, 11',
    14.8,
    4,
    680.00,
    'Северо-Западный',
    'Калининград',
    'Доставка электроники'
  ),
  (
    'Заказ #15',
    'Екатерина Волкова',
    '+79034445566',
    'volkova@yandex.ru',
    'ул. Балтийская, 7',
    'ул. Парковая, 33',
    9.1,
    5,
    420.00,
    'Приволжский',
    'Самара',
    'Цветы в горшках'
  ),
  (
    'Заказ #16',
    'Павел Кузнецов',
    '+79653332211',
    'pavelk@inbox.ru',
    'ш. Энтузиастов, 45',
    'ул. Юбилейная, 2',
    18.3,
    3,
    890.00,
    'Уральский',
    'Пермь',
    'Офисная техника'
  ),
  (
    'Заказ #17',
    'Алина Новикова',
    '+79219876543',
    'novikova@mail.com',
    'пр. Ленинградский, 88',
    'ул. Зеленая, 15',
    12.7,
    2,
    620.00,
    'Центральный',
    'Воронеж',
    'Спортивный инвентарь'
  ),
  (
    'Заказ #18',
    'Артем Лебедев',
    '+79531112233',
    'lebedev@ya.ru',
    'ул. Солнечная, 3',
    'пер. Садовый, 6',
    6.5,
    1,
    350.00,
    'Южный',
    'Сочи',
    'Медицинское оборудование'
  ),
  (
    'Заказ #19',
    'Виктория Крылова',
    '+79776665544',
    'viktoria.k@list.ru',
    'ул. Речная, 19',
    'пр. Победы, 77',
    22.4,
    5,
    1150.00,
    'Сибирский',
    'Омск',
    'Хрупкие сувениры'
  ),
  (
    'Заказ #20',
    'Глеб Морозов',
    '+79021234567',
    'morozov.gleb@bk.ru',
    'ул. Гвардейская, 14',
    'ул. Строителей, 28',
    17.9,
    4,
    940.00,
    'Дальневосточный',
    'Владивосток',
    'Стройматериалы'
  ),
  (
    'Заказ #21',
    'Юлия Воробьева',
    '+79644447788',
    'julia.vorob@mail.ru',
    'пр. Мира, 55',
    'ул. Лесная, 9',
    11.2,
    3,
    570.00,
    'Центральный',
    'Тула',
    'Книги и канцтовары'
  ),
  (
    'Заказ #22',
    'Никита Павлов',
    '+79165556677',
    'nikita.p@inbox.ru',
    'ул. Центральная, 1',
    'ш. Революционное, 40',
    24.6,
    2,
    1270.00,
    'Приволжский',
    'Уфа',
    'Музыкальные инструменты'
  ),
  (
    'Заказ #23',
    'Олеся Тимофеева',
    '+79039998877',
    'olesya.t@yandex.ru',
    'ул. Маяковского, 12',
    'пр. Строителей, 18',
    13.8,
    1,
    710.00,
    'Северный',
    'Мурманск',
    'Зимняя одежда'
  ),
  (
    'Заказ #1',
    'Алексей Иванов',
    '+79261234567',
    'alexey@mail.ru',
    'ул. Ленина, 15',
    'пр. Мира, 42',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #2',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #3',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #4',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #5',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #6',
    'Ирина Морозова',
    '+79961234567',
    'irina@mail.ru',
    'ул. Горького, 7',
    'ул. Маяковского, 22',
    12.4,
    3,
    600.00,
    'Центральный',
    'Нижний Новгород',
    'Перевозка документов'
  ),
  (
    'Заказ #7',
    'Иван Петров',
    '+79161234567',
    'ivan@mail.ru',
    'ул. Тверская, 8',
    'ул. Арбат, 14',
    18.9,
    1,
    950.00,
    'Восточный',
    'Челябинск',
    'Доставка продуктов'
  ),
  (
    'Заказ #8',
    'Мария Сидорова',
    '+79035556677',
    'maria@yandex.ru',
    'ул. Суворова, 12',
    'ул. Пушкина, 20',
    22.1,
    2,
    1100.00,
    'Южный',
    'Самара',
    'Перевозка багажа'
  ),
  (
    'Заказ #9',
    'Алексей Кальянов',
    '+79261234517',
    'alexeykal@mail.ru',
    'ул. Ленина, 11',
    'пр. Мира, 18',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #10',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #11',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #12',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #13',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #14',
    'Дмитрий Соколов',
    '+79167778899',
    'dmitry@gmail.com',
    'ул. Невская, 25',
    'пр. Космонавтов, 11',
    14.8,
    4,
    680.00,
    'Северо-Западный',
    'Калининград',
    'Доставка электроники'
  ),
  (
    'Заказ #15',
    'Екатерина Волкова',
    '+79034445566',
    'volkova@yandex.ru',
    'ул. Балтийская, 7',
    'ул. Парковая, 33',
    9.1,
    5,
    420.00,
    'Приволжский',
    'Самара',
    'Цветы в горшках'
  ),
  (
    'Заказ #16',
    'Павел Кузнецов',
    '+79653332211',
    'pavelk@inbox.ru',
    'ш. Энтузиастов, 45',
    'ул. Юбилейная, 2',
    18.3,
    3,
    890.00,
    'Уральский',
    'Пермь',
    'Офисная техника'
  ),
  (
    'Заказ #17',
    'Алина Новикова',
    '+79219876543',
    'novikova@mail.com',
    'пр. Ленинградский, 88',
    'ул. Зеленая, 15',
    12.7,
    2,
    620.00,
    'Центральный',
    'Воронеж',
    'Спортивный инвентарь'
  ),
  (
    'Заказ #18',
    'Артем Лебедев',
    '+79531112233',
    'lebedev@ya.ru',
    'ул. Солнечная, 3',
    'пер. Садовый, 6',
    6.5,
    1,
    350.00,
    'Южный',
    'Сочи',
    'Медицинское оборудование'
  ),
  (
    'Заказ #19',
    'Виктория Крылова',
    '+79776665544',
    'viktoria.k@list.ru',
    'ул. Речная, 19',
    'пр. Победы, 77',
    22.4,
    5,
    1150.00,
    'Сибирский',
    'Омск',
    'Хрупкие сувениры'
  ),
  (
    'Заказ #20',
    'Глеб Морозов',
    '+79021234567',
    'morozov.gleb@bk.ru',
    'ул. Гвардейская, 14',
    'ул. Строителей, 28',
    17.9,
    4,
    940.00,
    'Дальневосточный',
    'Владивосток',
    'Стройматериалы'
  ),
  (
    'Заказ #21',
    'Юлия Воробьева',
    '+79644447788',
    'julia.vorob@mail.ru',
    'пр. Мира, 55',
    'ул. Лесная, 9',
    11.2,
    3,
    570.00,
    'Центральный',
    'Тула',
    'Книги и канцтовары'
  ),
  (
    'Заказ #22',
    'Никита Павлов',
    '+79165556677',
    'nikita.p@inbox.ru',
    'ул. Центральная, 1',
    'ш. Революционное, 40',
    24.6,
    2,
    1270.00,
    'Приволжский',
    'Уфа',
    'Музыкальные инструменты'
  ),
  (
    'Заказ #23',
    'Олеся Тимофеева',
    '+79039998877',
    'olesya.t@yandex.ru',
    'ул. Маяковского, 12',
    'пр. Строителей, 18',
    13.8,
    1,
    710.00,
    'Северный',
    'Мурманск',
    'Зимняя одежда'
  ),
  (
    'Заказ #1',
    'Алексей Иванов',
    '+79261234567',
    'alexey@mail.ru',
    'ул. Ленина, 15',
    'пр. Мира, 42',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #2',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #3',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #4',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #5',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #6',
    'Ирина Морозова',
    '+79961234567',
    'irina@mail.ru',
    'ул. Горького, 7',
    'ул. Маяковского, 22',
    12.4,
    3,
    600.00,
    'Центральный',
    'Нижний Новгород',
    'Перевозка документов'
  ),
  (
    'Заказ #7',
    'Иван Петров',
    '+79161234567',
    'ivan@mail.ru',
    'ул. Тверская, 8',
    'ул. Арбат, 14',
    18.9,
    1,
    950.00,
    'Восточный',
    'Челябинск',
    'Доставка продуктов'
  ),
  (
    'Заказ #8',
    'Мария Сидорова',
    '+79035556677',
    'maria@yandex.ru',
    'ул. Суворова, 12',
    'ул. Пушкина, 20',
    22.1,
    2,
    1100.00,
    'Южный',
    'Самара',
    'Перевозка багажа'
  ),
  (
    'Заказ #9',
    'Алексей Кальянов',
    '+79261234517',
    'alexeykal@mail.ru',
    'ул. Ленина, 11',
    'пр. Мира, 18',
    10.5,
    1,
    500.00,
    'Центральный',
    'Москва',
    'Доставка документов'
  ),
  (
    'Заказ #10',
    'Ольга Попова',
    '+79561234567',
    'olga@mail.ru',
    'ул. Пушкина, 10',
    'ул. Садовая, 5',
    15.2,
    2,
    750.00,
    'Восточный',
    'Санкт-Петербург',
    'Перевозка мебели'
  ),
  (
    'Заказ #11',
    'Сергей Васильев',
    '+79661234567',
    'sergey@mail.ru',
    'ул. Гагарина, 20',
    'ул. Советская, 8',
    20.0,
    3,
    1000.00,
    'Южный',
    'Новосибирск',
    'Доставка продуктов'
  ),
  (
    'Заказ #12',
    'Анна Михайлова',
    '+79761234567',
    'anna@mail.ru',
    'ул. Чехова, 5',
    'ул. Тимирязева, 12',
    8.3,
    1,
    400.00,
    'Западный',
    'Екатеринбург',
    'Перевозка багажа'
  ),
  (
    'Заказ #13',
    'Максим Федоров',
    '+79861234567',
    'maxim@mail.ru',
    'ул. Карла Маркса, 30',
    'ул. Красная, 18',
    25.7,
    2,
    1250.00,
    'Северный',
    'Казань',
    'Доставка мебели'
  ),
  (
    'Заказ #14',
    'Дмитрий Соколов',
    '+79167778899',
    'dmitry@gmail.com',
    'ул. Невская, 25',
    'пр. Космонавтов, 11',
    14.8,
    4,
    680.00,
    'Северо-Западный',
    'Калининград',
    'Доставка электроники'
  ),
  (
    'Заказ #15',
    'Екатерина Волкова',
    '+79034445566',
    'volkova@yandex.ru',
    'ул. Балтийская, 7',
    'ул. Парковая, 33',
    9.1,
    5,
    420.00,
    'Приволжский',
    'Самара',
    'Цветы в горшках'
  ),
  (
    'Заказ #16',
    'Павел Кузнецов',
    '+79653332211',
    'pavelk@inbox.ru',
    'ш. Энтузиастов, 45',
    'ул. Юбилейная, 2',
    18.3,
    3,
    890.00,
    'Уральский',
    'Пермь',
    'Офисная техника'
  ),
  (
    'Заказ #17',
    'Алина Новикова',
    '+79219876543',
    'novikova@mail.com',
    'пр. Ленинградский, 88',
    'ул. Зеленая, 15',
    12.7,
    2,
    620.00,
    'Центральный',
    'Воронеж',
    'Спортивный инвентарь'
  ),
  (
    'Заказ #18',
    'Артем Лебедев',
    '+79531112233',
    'lebedev@ya.ru',
    'ул. Солнечная, 3',
    'пер. Садовый, 6',
    6.5,
    1,
    350.00,
    'Южный',
    'Сочи',
    'Медицинское оборудование'
  ),
  (
    'Заказ #19',
    'Виктория Крылова',
    '+79776665544',
    'viktoria.k@list.ru',
    'ул. Речная, 19',
    'пр. Победы, 77',
    22.4,
    5,
    1150.00,
    'Сибирский',
    'Омск',
    'Хрупкие сувениры'
  ),
  (
    'Заказ #20',
    'Глеб Морозов',
    '+79021234567',
    'morozov.gleb@bk.ru',
    'ул. Гвардейская, 14',
    'ул. Строителей, 28',
    17.9,
    4,
    940.00,
    'Дальневосточный',
    'Владивосток',
    'Стройматериалы'
  ),
  (
    'Заказ #21',
    'Юлия Воробьева',
    '+79644447788',
    'julia.vorob@mail.ru',
    'пр. Мира, 55',
    'ул. Лесная, 9',
    11.2,
    3,
    570.00,
    'Центральный',
    'Тула',
    'Книги и канцтовары'
  ),
  (
    'Заказ #22',
    'Никита Павлов',
    '+79165556677',
    'nikita.p@inbox.ru',
    'ул. Центральная, 1',
    'ш. Революционное, 40',
    24.6,
    2,
    1270.00,
    'Приволжский',
    'Уфа',
    'Музыкальные инструменты'
  ),
  (
    'Заказ #23',
    'Олеся Тимофеева',
    '+79039998877',
    'olesya.t@yandex.ru',
    'ул. Маяковского, 12',
    'пр. Строителей, 18',
    13.8,
    1,
    710.00,
    'Северный',
    'Мурманск',
    'Зимняя одежда'
  );
import { ADD_COUNTRY } from "./countryTypes";

// Initial State
const initialState = {
  countries: [
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/paris%201.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/champs-elysees-paris-france-1920x1080_65498-mm-90.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=WeqH6Rt_dGM&ab_channel=101Facts",
      currency: "EUR",
      timeZone: "Europe/Paris",
      localizations: {
        EN: {
          capital: "Paris",
          description:
            "France. The elegant beauty France is a vacation with charm: a rich 'excursion', a vacation on the refined Cote d'Azur, famous museums, gastronomic provinces and Loire castles. Cuisine, wine and ski resorts - everything about France: tours, prices, hotels and attractions.",
          name: "France",
          places: [
            {
              name: "Triumphal Arch",
              description:
                "The Arc de Triomphe Napoleon personally gave the order for its construction: this is how the emperor was going to perpetuate the victories of his 'Great Army'. The height of the monument is 50 meters.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/triumfalnaya-arka-1%201.jpg",
            },
            {
              name: "Orsay Museum",
              description:
                "Orsay Museum In the past, the museum building served as a Paris station. First, the station was closed, and the premises were mothballed, later it was reconstructed. One of the most impressive collections of fine art in the world became available for inspection in 1986.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/muzey-orse%201.jpg",
            },
            {
              name: "Cote d'Azur",
              description:
                "Cote d'Azur Another name is the French Riviera, a stretch of the Mediterranean coastline from the city of Toulon to the border with Italy. One of the best vacation spots in the world.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/lazurny-bereg%201.jpg",
            },
            {
              name: "Exchange Square",
              description:
                "Exchange Square (Bordeaux) The symbol of the city of Bordeaux and its main attraction. The architectural ensemble consists of two long Baroque buildings and adjacent buildings.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/birzhevaya-ploshad%201.jpg",
            },
            {
              name: "Sainte-Chapelle",
              description:
                "The chapel was built on the Ile de la Cité in Paris. Although the building belongs to the Gothic style, it is 'airy' and 'light'.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/birzhevaya-ploshad%201.jpg",
            },
            {
              name: "Notre Dame Cathedral",
              description:
                "This Gothic Catholic church, celebrated in the work of Hugo, is another symbol of Paris and France.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/sobor-parizhskoy-bogomateri%201.jpg",
            },
          ],
        },
        RU: {
          capital: "Париж",
          description:
            "Франция. Элегантная красота Франции - это отдых с шармом: богатая «экскурсия», отдых на изысканном Лазурном берегу, знаменитые музеи, гастрономические провинции и замки Луары. Кухня, винные и горнолыжные курорты - все о Франции: туры, цены, отели и достопримечательности.",
          name: "Франция",
          places: [
            {
              name: "Триумфальная арка",
              description:
                "Триумфальная арка Наполеон лично отдал приказ на ее строительство: так император собирался увековечить победы своей «Великой армии». Высота памятника 50 метров.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/triumfalnaya-arka-1%201.jpg",
            },
            {
              name: "Музей Орсе",
              description:
                "Музей Орсе В прошлом здание музея выполняло функции парижского вокзала. Сначала станцию закрыли, а помещения законсервировали, позже прошла реконструкция. Одна из самых внушительных в мире коллекций изобразительного искусства стала доступна к осмотру в 1986 году.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/muzey-orse%201.jpg",
            },
            {
              name: "Лазурный берег",
              description:
                "Лазурный берег Другое название – Французская Ривьера, участок Средиземноморского побережья от города Тулон до границы с Италией. Одно из лучших мест в мире для отдыха.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/lazurny-bereg%201.jpg",
            },
            {
              name: "Биржевая площадь",
              description:
                "Биржевая площадь (Бордо) Символ города Бордо и его главная достопримечательность. Архитектурный ансамбль состоит из двух протяжённых зданий, построенных в стиле барокко, и прилегающих к ним построек.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/birzhevaya-ploshad%201.jpg",
            },
            {
              name: "Сент-Шапель",
              description:
                "Сент-Шапель (Париж) Капелла построена на острове Сите в Париже. Хотя здание относится к готическому стиля, оно «воздушное» и «лёгкое».",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/birzhevaya-ploshad%201.jpg",
            },
            {
              name: "Cобор Парижской Богоматери",
              description:
                "Готический католический храм, воспетый в произведении Гюго – ещё один символ Парижа и Франции.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/sobor-parizhskoy-bogomateri%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Парыж",
          Description:
            "Францыя. Элегантная прыгажуня Францыі - гэта адпачынак з шармам: багатая 'экскурсія', адпачынак на вытанчаным Лазурным беразе, вядомых музеях, гастранамічных правінцыях і замках Луары. Кухня, вінныя і гарналыжныя курорты - усё пра Францыю: туры, цэны, гасцініцы і славутасці.",
          Name: "Францыя",
          Places: [
            {
              Name: "Трыумфальная арка",
              Description:
                "Трыумфальная арка Напалеон асабіста аддаў загад на яе будаўніцтва: так імператар збіраўся увекавечыць перамогі сваёй« Вялікай арміі ». Вышыня помніка 50 метраў.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/triumfalnaya-arka-1%201.jpg",
            },
            {
              Name: "Музей Орсе",
              Description:
                "Музей Орсе У мінулым будынак музея выконвала функцыі парыжскага вакзала. Спачатку станцыю закрылі, а памяшканні закансервавалі, пазней прайшла рэканструкцыя. Адна з самых вялікіх у свеце калекцый выяўленчага мастацтва стала даступная да агляду ў 1986 годзе.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/muzey-orse%201.jpg",
            },
            {
              Name: "Блакітны бераг",
              Description:
                "Блакітны бераг Іншая назва - Французская Рыўера, участак Міжземнаморскага ўзбярэжжа ад горада Тулон да мяжы з Італіяй. Адно з лепшых месцаў у свеце для адпачынку.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/lazurny-bereg%201.jpg",
            },
            {
              Name: "Біржавая плошча",
              Description:
                "Біржавая плошчу (Бардо) Сімвал горада Бардо і яго галоўная славутасць. Архітэктурны ансамбль складаецца з двух працяглых будынкаў, пабудаваных у стылі барока, і прылеглых да іх пабудоў.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/birzhevaya-ploshad%201.jpg",
            },
            {
              Name: "Сэнт-Шапель",
              Description:
                "Сэнт-Шапель (Парыж) Капэла пабудавана на востраве сіце ў Парыжы. Хоць будынак адносіцца да гатычным стылі, яно« паветраную »і« лёгкае ».",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/birzhevaya-ploshad%201.jpg",
            },
            {
              Name: "Cобор Парыжскай Божай Маці",
              Description:
                "Гатычны каталіцкі храм, апеты ў творы Гюго - яшчэ адзін знак Парыжа і Францыі.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/France/sobor-parizhskoy-bogomateri%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/canberra%201.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/jzAoQm.jpg",
      videoUrl: "https://www.youtube.com/watch?v=W8M_RqBL0mQ",
      currency: "AUD",
      timeZone: "Australia/Canberra",
      localizations: {
        RU: {
          capital: "Канберра",
          description:
            "Австралия — солнечный континент антиподов с удивительными животными. Дайвинг на Большом Барьерном рифе, экскурсии в Аделаиду, Брисбен и Мельбурн, достопримечательности Сиднея и деревни аборигенов — все об Австралии: виза, фото, туры и карты.",
          name: "Австралия",
          places: [
            {
              name: "Большой Барьерный риф",
              description:
                "Природный комплекс, состоящий почти из тысячи островов и трех тысяч коралловых рифов, видно даже из космоса — он занимает территорию в 350 км².",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/bolshoy-barierniy-rif%201.jpg",
            },
            {
              name: "Королевский ботанический сад Сиднея",
              description:
                "Расположен в деловом районе Сиднея – зеленый уголок природы среди небоскребов. Площадь сада составляет 30 га. Земля в этом месте не является плодородной и не подходит для продовольственных культур. Властями Австралии принято решение коллекционировать здесь растения со всей страны.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/korolevskiy-sad-sidneya%201.jpg",
            },
            {
              name: "Каторжное поселение Порт-Артур",
              description:
                "Входит в список 11 каторжных поселений Австралии, построенных Британией. Все они составляют единый объект наследия ЮНЕСКО. Порт-Артур находится в Тасмании.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/katorzhnoe-poselenie-port-artur%201.jpg",
            },
            {
              name: "Здание королевы Виктории",
              description:
                "Грандиозное здание торгового центра. Его размеры впечатляют – 190 метров в длину, 30 метров в ширину. Здание в романском стиле построено на месте городского рынка в 1918 году.",
              imageURL:
                "https://github.com/YaroslavTrefilov/keeper-of-images/blob/master/images/Australia/zdanie-korolevy-viktorii%201.jpg",
            },
            {
              name: "Порт-Джэксон",
              description:
                "Одна из самых крупных бухт в мире. Именно в этой местности началось заселение Австралии колонизаторами, и до сих пор она имеет большое значение для страны.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/port-dzhekson%201.jpg",
            },
            {
              name: "Тасмания",
              description:
                "Островной штат Австралии, расположенный к югу от материка, знаменит парками и заповедниками девственной дикой природы.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/tasmaniya%201.jpg",
            },
          ],
        },
        EN: {
          capital: "Canberra",
          description:
            "Australia is a sunny continent of antipodes with amazing animals. Diving on the Great Barrier Reef, excursions to Adelaide, Brisbane and Melbourne, Sydney sights and Aboriginal villages - everything about Australia: visa, photos, tours and maps.",
          name: "Australia",
          places: [
            {
              name: "Great Barrier Reef",
              description:
                "The natural complex, consisting of almost a thousand islands and three thousand coral reefs, can be seen even from space - it covers an area of ​​350 km².",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/bolshoy-barierniy-rif%201.jpg",
            },
            {
              name: "Royal Botanic Gardens of Sydney",
              description:
                "Located in the business district of Sydney, a green corner of nature among skyscrapers. The garden is 30 hectares. The land in this place is not fertile and is not suitable for food crops. The Australian authorities decided to collect plants from all over the country here.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/korolevskiy-sad-sidneya%201.jpg",
            },
            {
              name: "Port Arthur convict settlement",
              description:
                "Included in the list of 11 Australian convict settlements built by Britain. All of them constitute a single UNESCO heritage site. Port Arthur is located in Tasmania.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/katorzhnoe-poselenie-port-artur%201.jpg",
            },
            {
              name: "Queen Victoria Building",
              description:
                "An imposing shopping center building. Its dimensions are impressive - 190 meters long, 30 meters wide. The Romanesque building was built on the site of the city market in 1918.",
              imageURL:
                "https://github.com/YaroslavTrefilov/keeper-of-images/blob/master/images/Australia/zdanie-korolevy-viktorii%201.jpg",
            },
            {
              name: "Port Jackson",
              description:
                "One of the largest bays in the world. It was in this area that the colonialists began to settle in Australia, and it is still of great importance for the country.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/port-dzhekson%201.jpg",
            },
            {
              name: "Tasmania",
              description:
                "The island state of Australia, located south of the mainland, is famous for its parks and wilderness reserves.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/tasmaniya%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Канбера",
          Description:
            "Аўстралія - ​​сонечны кантынент антыподаў з дзіўнымі жывёламі. Дайвінг на Вялікі Бар'ерны рыфе, экскурсіі ў Адэлаіду, Брысбэн і Мэльбурн, славутасці Сіднэя і вёскі першабытнікаў - усё пра Аўстраліі: віза, фота, туры і карты.",
          Name: "Аўстралія",
          Places: [
            {
              Name: "Вялікі Бар'ерны рыф",
              Description:
                "Прыродны комплекс, які складаецца амаль з тысячы астравоў і трох тысяч каралавых рыфаў, відаць нават з космасу - ён займае тэрыторыю ў 350 км².",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/bolshoy-barierniy-rif%201.jpg",
            },
            {
              Name: "Каралеўскі батанічны сад Сіднэя",
              Description:
                "Размешчаны ў дзелавым раёне Сіднэя - зялёны куток прыроды сярод хмарачосаў. Плошча саду складае 30 га. Зямля ў гэтым месцы не з'яўляецца ўрадлівай і ня падыходзіць для харчовых культур. Уладамі Аўстраліі прынята рашэнне калекцыянаваць тут расліны з усёй краіны.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/korolevskiy-sad-sidneya%201.jpg",
            },
            {
              Name: "катаржныя паселішча Порт-Артур",
              Description:
                "Уваходзіць у спіс 11 катаржных паселішчаў Аўстраліі, пабудаваных Брытаніяй. Усе яны складаюць адзіны аб'ект спадчыны ЮНЕСКА. Порт-Артур знаходзіцца ў Тасманіі.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/katorzhnoe-poselenie-port-artur%201.jpg",
            },
            {
              Name: "Будынак каралевы Вікторыі",
              Description:
                "Грандыёзнае будынак гандлёвага цэнтра. Яго памеры ўражваюць - 190 метраў у даўжыню, 30 метраў у шырыню. Будынак у раманскім стылі пабудавана на месцы гарадзкога рынку ў 1918 годзе.",
              ImageURL:
                "https://github.com/YaroslavTrefilov/keeper-of-images/blob/master/images/Australia/zdanie-korolevy-viktorii%201.jpg",
            },
            {
              Name: "Порт-Джэксан",
              Description:
                "Адна з самых буйных бухт ў свеце. Менавіта ў гэтай мясцовасці пачалося засяленне Аўстраліі каланізатарамі, і да гэтага часу яна мае вялікае значэнне для краіны.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/port-dzhekson%201.jpg",
            },
            {
              Name: "Тасманія",
              Description:
                "Астраўной штат Аўстраліі, размешчаны на поўдзень ад мацерыка, знакаміты паркамі і запаведнікамі цнатлівай дзікай прыроды.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Australia/tasmaniya%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/cairo%201.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/Egypt_Desert_Sky_511464_1920x1080.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=jnfwoGw3fnU&ab_channel=Alux.com",
      currency: "ZAR",
      timeZone: "Africa/Cairo",
      localizations: {
        RU: {
          capital: "Каир",
          description:
            "Достоинства Египта известны каждому: качественный пляжный отдых круглый год на Средиземном и Красном морях, разбавленный отличным дайвингом, плюс разнообразная «экскурсионка»: пирамиды, Сфинкс и Луксор. Все о Египте от Хургады до Шарма: туры, отели, цены, погода.",
          name: "Египет",
          places: [
            {
              name: "Пирамида Хеопса",
              description:
                "Самая большая из пирамид, усыпальница фараона Хуфу (Хеопса) и его династии. Сооружение строили более 20 лет и завершили к 2260 г. до н.э. Высота конструкции – 146,5 м., она состоит из 2,3 млн. прямоугольных каменных блоков. Великая пирамида является центральным сооружением комплекса в Гизе.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/piramida-heopsa%201.jpg",
            },
            {
              name: "Большой Сфинкс",
              description:
                "Статуя гигантского льва с человеческим лицом 73 м. в длину и 21 м. в высоту. Внутри статуя является пустотелой. Подобные сооружения служили для казней и жертвоприношений, поэтому египтяне называют Большого Сфинкса «царем/отцом ужаса». Еще он символизировал возмездие и катастрофу, которое согласно древним верованиям, должна прийти с неба. ",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/bolshoj-sfinks%201.jpg",
            },
            {
              name: "Карнакский храм",
              description:
                "Главное святилище древнего Египта эпохи Нового Царства (XVI-XI вв. до н.э.) Когда-то храм был резиденцией, сокровищницей и административным центром столицы г. Фивы.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/karnakskiy-hram%201.jpg",
            },
            {
              name: "Долина царей",
              description:
                "Место захоронения многих египетских фараонов и знати недалеко от Луксора. Усыпальницы с целью защиты оснащались хитрыми ловушками, а входы в них маскировались, чтобы скрыть сокровищницы от глаз грабителей.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/dolina-tsarej%201.jpg",
            },
            {
              name: "Колоссы Мемнона",
              description:
                "Представляют собой каменные 20-ти метровые статуи – остатки храма Аменхотепа III. Само здание не сохранилось. В древности эти колонны охраняли вход в святилище.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/kolossy-memnona%201.jpg",
            },
            {
              name: "Голубая дыра в Дахабе",
              description:
                "Так называется подводный провал круглой формы у курорта Дахаб. Глубина дыры составляет более 130 метров, на расстоянии 50 метров от поверхности находится туннель, который соединяется с Красным морем.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/golubaya-dyra-egipet%201.jpg",
            },
          ],
        },
        EN: {
          capital: "Cairo",
          description:
            "The advantages of Egypt are known to everyone: quality beach holidays all year round on the Mediterranean and Red Seas, diluted with excellent diving, plus a variety of excursions : pyramids, Sphinx and Luxor. Everything about Egypt from Hurghada to Sharm: tours, hotels, prices , weather. ",
          name: "Egypt",
          places: [
            {
              name: "Pyramid of Cheops",
              description:
                "The largest of the pyramids, the tomb of Pharaoh Khufu (Cheops) and his dynasty. The building was built over 20 years and was completed by 2260 BC. The height of the structure is 146.5 m., it consists of 2, 3 million rectangular stone blocks. The Great Pyramid is the centerpiece of the Giza complex. ",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/piramida-heopsa%201.jpg",
            },
            {
              name: "Great Sphinx",
              description:
                "The statue of a giant lion with a human face is 73 meters long and 21 meters high. The inside of the statue is hollow. Similar structures were used for executions and sacrifices, which is why the Egyptians call the Great Sphinx the king / father of horror. symbolized retribution and catastrophe, which, according to ancient beliefs, should come from heaven. ",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/bolshoj-sfinks%201.jpg",
            },
            {
              name: "Karnak Temple",
              description:
                "The main sanctuary of ancient Egypt during the New Kingdom (XVI-XI centuries BC). The temple was once the residence, treasury and administrative center of the capital city of Thebes.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/karnakskiy-hram%201.jpg",
            },
            {
              name: "Valley of the Kings",
              description:
                "The burial place of many Egyptian pharaohs and nobles near Luxor. The tombs were equipped with cunning traps for protection, and the entrances to them were camouflaged to hide the treasures from the eyes of robbers.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/dolina-tsarej%201.jpg",
            },
            {
              name: "Colossi of Memnon",
              description:
                "These are 20-meter stone statues - the remains of the temple of Amenhotep III. The building itself has not survived. In ancient times, these columns guarded the entrance to the sanctuary.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/kolossy-memnona%201.jpg",
            },
            {
              name: "Blue Hole in Dahab",
              description:
                "This is the name of a round underwater sinkhole near the Dahab resort. The depth of the hole is more than 130 meters, at a distance of 50 meters from the surface there is a tunnel that connects to the Red Sea.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/golubaya-dyra-egipet%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Каір",
          Description:
            "Добрыя якасці Егіпта вядомыя кожнаму: якасны пляжны адпачынак круглы год на Міжземным і Чырвоным морах, разведзены выдатным дайвінгам, плюс разнастайная« экскурсионка »: піраміды, Сфінкс і Луксор. Усе пра Егіпет ад Хургады да Шарма: туры, гатэлі, цэны , надвор'е. ",
          Name: "Егіпет",
          Places: [
            {
              Name: "Піраміда Хеопса",
              Description:
                "Самая вялікая з пірамід, пахавальня фараона Хуфу (Хеопса) і яго дынастыі. Збудаванне будавалі больш за 20 гадоў і завяршылі да 2260 г. да н.э. Вышыня канструкцыі - 146,5 м., Яна складаецца з 2, 3 млн. прастакутных каменных блокаў. Вялікая піраміда з'яўляецца цэнтральным збудаваннем комплексу ў Гізе. ",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/piramida-heopsa%201.jpg",
            },
            {
              Name: "Вялікі Сфінкс",
              Description:
                "Статуя гіганцкага льва з чалавечым тварам 73 м. У даўжыню і 21 м. У вышыню. Унутры статуя з'яўляецца пустотелой. Падобныя збудаванні служылі для пакаранняў смерцю і ахвярапрынашэнняў, таму егіпцяне называюць Вялікага сфінкса« царом / бацькам жаху ». Яшчэ ён сімвалізаваў адплата і катастрофу, якое паводле старажытных вераванняў, павінна прыйсці з неба. ",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/bolshoj-sfinks%201.jpg",
            },
            {
              Name: "Карнакский храм",
              Description:
                "Галоўнае сьвятыню старажытнага Егіпта эпохі Новага царства (XVI-XI стст. Да н.э.) Калісьці храм быў рэзідэнцыяй, скарбніцай і адміністрацыйным цэнтрам сталіцы г. Фівы.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/karnakskiy-hram%201.jpg",
            },
            {
              Name: "Даліна цароў",
              Description:
                "Месца пахавання многіх егіпецкіх фараонаў і шляхты недалёка ад Луксора. Магільнага з мэтай абароны абсталёўваліся хітрымі пасткамі, а ўваходы ў іх маскіраваліся, каб схаваць скарбніцы ад вачэй рабаўнікоў.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/dolina-tsarej%201.jpg",
            },
            {
              Name: "Калосы Мэмнана",
              Description:
                "Ўяўляюць сабой каменныя 20-ці метровыя статуі - рэшткі храма Аменхатэпа III. Сам будынак не захавалася. У старажытнасці гэтыя калоны ахоўвалі ўваход у сьвятыні.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/kolossy-memnona%201.jpg",
            },
            {
              Name: "Блакітная дзірка ў Дахабе",
              Description:
                "Так называецца падводны правал круглай формы ў курорта Дахаб. Глыбіня дзіркі складае больш за 130 метраў, на адлегласці 50 метраў ад паверхні знаходзіцца тунэль, які злучаецца з Чырвоным морам.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Egypt/golubaya-dyra-egipet%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/tokyo.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/a3a8b1e57e1de41b9ad5b3852be09e63.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=URDXZSJZ2ME&ab_channel=RachelandJun",
      currency: "JPY",
      timeZone: "Asia/Tokyo",
      localizations: {
        RU: {
          capital: "Токио",
          description:
            "Страна восходящего солнца Япония — кладезь утонченной экзотики. Суперсовременный Токио и живописная провинция, снежная шапка Фудзи и сакура в цвету, великолепные пляжи островов Окинава и древние памятники синтоизма — все о Японии: фото, карта, туры, цены и отзывы.",
          name: "Япония",
          places: [
            {
              name: "Храм Фусими-инари",
              description:
                "Одним из исторических символов Японии считается Храм Фусими-Инари или Святилище из тысячи алых ворот, посвященное богине рисового плодородия.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-1-Fushimi-inari-shrine-e1492919577704%201.jpg",
            },
            {
              name: "Парк Джигокудани",
              description:
                "В долине реки Ёкою на высоте 850 метров над уровнем море расположен уникальный парк снежных обезьян Джигокудани, известный среди путешественников. Японские макаки демонстрируют оригинальное поведение.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-7-Snow-monkeys-in-Nagano-e1492920643818%201.jpg",
            },
            {
              name: "Гора Фудзи",
              description:
                "Cвященная гора Фудзи, Величественный горный пик возносится к небесам на высоту 3776 метров. Многие пилигримы осуществляют подъем на гору Фудзи.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japa%D1%84n/Japan-9-Fuji-mountain-e1492921025677%201.jpg",
            },
            {
              name: "Город Нара",
              description:
                "Достопримечательности Японии – это не только храмы и замки, но и целые города. К одним из них относится Нара или Город Оленей – кладезь архитектурных памятников и шедевров культуры и искусства.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-11-Nara-e1492921414241%201.jpg",
            },
            {
              name: "Парк Мира в Хиросиме",
              description:
                "Парк Мира в Хиросиме. Страна восходящего солнца в послевоенное время – это новые достопримечательности Японии. Наиболее известная среди них – Парк Мира в Хиросиме, посвященный памяти жертв атомной бомбы.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-13-Hiroshima-Peace-Memorial-Park-e1492921762831%201.jpg",
            },
            {
              name: "Храм Тодай-дзи",
              description:
                "В Наре, городе национального наследия Японии, сосредоточена масса буддийских храмов, ключевым из которых является храм Тодайдзи. Это важнейший символ города, священное место многомиллионного паломничества, где ежедневные службы начались ещё в 8 веке и продолжаются по сей день.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/17-Todai-ji-Temple-e1560261039895%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Токіо",
          Description:
            "Краіна ўзыходзячага сонца Японія - скарбніца вытанчанай экзотыкі. Суперсучасны Токіо і жывапісная правінцыя, снежная шапка Фудзі і сакура ў колеры, пышныя пляжы выспаў Акінава і старажытныя помнікі сінтаізм - усё пра Японію: фота, карта, туры, цэны і водгукі . ",
          Name: "Японія",
          Places: [
            {
              Name: "Храм Фусими-Інара",
              Description:
                "Адным з гістарычных сімвалаў Японіі лічыцца Храм Фусими-Інара або Свяцілішча з тысячы пунсовых брамы, прысвечанае багіні рысавага урадлівасці.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-1-Fushimi-inari-shrine-e1492919577704%201.jpg",
            },
            {
              Name: "Парк Джигокудани",
              Description:
                "У даліне ракі Ёкою на вышыні 850 метраў над узроўнем мора размешчаны унікальны парк снежных малпаў Джигокудани, вядомы сярод падарожнікаў. Японскія макакі дэманструюць арыгінальнае паводзіны.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-7-Snow-monkeys-in-Nagano-e1492920643818%201.jpg",
            },
            {
              Name: "Гара Фуджы",
              Description:
                "Cвященная гара Фуджы, Велічны горны пік ўзносіцца да нябёсаў на вышыню 3776 метраў. Многія пілігрымы ажыццяўляюць ўздым на гару Фудзі.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japa%D1%84n/Japan-9-Fuji-mountain-e1492921025677%201.jpg",
            },
            {
              Name: "Горад Нара",
              Description:
                "Славутасці Японіі - гэта не толькі храмы і замкі, але і цэлыя гарады. Да адных з іх адносіцца Нара або Горад Аленяў - скарбніца архітэктурных помнікаў і шэдэўраў культуры і мастацтва.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-11-Nara-e1492921414241%201.jpg",
            },
            {
              Name: "Парк Свету ў Хірасіме",
              Description:
                "Парк Свету ў Хірасіме. Краіна ўзыходзячага сонца ў пасляваенны час - гэта новыя славутасці Японіі. Найбольш вядомая сярод іх - Парк Свету ў Хірасіме, прысвечаны памяці ахвяр атамнай бомбы.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-13-Hiroshima-Peace-Memorial-Park-e1492921762831%201.jpg",
            },
            {
              Name: "Храм Тода-дзі",
              Description:
                "У Наре, горадзе нацыянальнай спадчыны Японіі, засяроджаная маса будыйскіх храмаў, ключавым з якіх з'яўляецца храм Тодайдзи. Гэта найважнейшы сімвал горада, святое месца шматмільённага паломніцтва, дзе штодзённыя службы пачаліся яшчэ ў 8 стагоддзі і працягваюцца па гэты дзень.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/17-Todai-ji-Temple-e1560261039895%201.jpg",
            },
          ],
        },
        EN: {
          capital: "Tokyo",
          description:
            "The land of the rising sun Japan is a treasure trove of sophisticated exoticism. Supermodern Tokyo and the picturesque province, the Fuji snow cap and sakura in bloom, the magnificent beaches of the Okinawa islands and the ancient monuments of Shintoism - all about Japan: photos, map, tours, prices and reviews . ",
          name: "Japan",
          places: [
            {
              name: "Fushimi-Inari Shrine",
              description:
                "One of the historical symbols of Japan is the Fushimi-Inari Temple, or the Thousand Scarlet Gates Shrine, dedicated to the goddess of rice fertility.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-1-Fushimi-inari-shrine-e1492919577704%201.jpg",
            },
            {
              name: "Jigokudani Park",
              description:
                "In the valley of the Yokoyu River, 850 meters above sea level, there is a unique Jigokudani Snow Monkey Park, famous among travelers. Japanese macaques exhibit original behavior.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-7-Snow-monkeys-in-Nagano-e1492920643818%201.jpg",
            },
            {
              name: "Mount Fuji",
              description:
                "Sacred Mount Fuji, the majestic mountain peak rises to the skies at a height of 3776 meters. Many pilgrims climb Mount Fuji.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japa%D1%84n/Japan-9-Fuji-mountain-e1492921025677%201.jpg",
            },
            {
              name: "Nara City",
              description:
                "The sights of Japan are not only temples and castles, but also entire cities. One of them is Nara or the City of Deer - a storehouse of architectural monuments and masterpieces of culture and art.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-11-Nara-e1492921414241%201.jpg",
            },
            {
              name: "Hiroshima Peace Park",
              description:
                "Hiroshima Peace Park. The Land of the Rising Sun in the post-war period are new attractions in Japan. The most famous of them is the Hiroshima Peace Park, dedicated to the memory of the victims of the atomic bomb.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/Japan-13-Hiroshima-Peace-Memorial-Park-e1492921762831%201.jpg",
            },
            {
              name: "Todai-ji Temple",
              description:
                "Nara, Japan's national heritage city, is home to many Buddhist temples, the key of which is Todaiji Temple. This is the most important symbol of the city, a sacred place of multi-million dollar pilgrimage, where daily services began in the 8th century and continue to this day.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Japan/17-Todai-ji-Temple-e1560261039895%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/mexico%201.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/unnamed.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=xwTShmfBwvg&ab_channel=101Facts",
      currency: "MXN",
      timeZone: "America/Mexico_City",
      localizations: {
        RU: {
          capital: "Мехико",
          description:
            "Мексика — пестрая смесь испанской, индейской и карибской культур. Отдых на лучших пляжах Канкуна и Ривьера-Майя, древние памятники загадочных цивилизаций и дайвинг на острове Косумель, текила, отличная кухня и зажигательные диско — все о Мексике: туры, цены, отели.",
          name: "Мексика",
          places: [
            {
              name: "Чичен-Ица",
              description:
                "Основанный в VII веке н.э. священный город одного из племён майя – Ица находится в ста двадцати километрах от столицы полуострова Юкатан. Архитектурное богатство древнего поселения составляют девятиступенчатый Храм Кукулькана и два небольших храма – Воинов и Ягуаров.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/chichen-itsa%201.jpg",
            },
            {
              name: "Кафедральный собор",
              description:
                "Главный католический храм мексиканской столицы построен на месте бывшего ацтекского святилища, посвящённого богу войны — Уицилопочтли.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/kafedralnyiy-sobor-mehiko%201.jpg",
            },
            {
              name: "Национальный музей антропологии",
              description:
                "Один из богатейших музеев Мексики находится в парке Чапультепек (Мехико). Он состоит из двух крупных отделов – археологического и этнографического. Экспозиция музея представлена экспонатами доколумбовой эпохи",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/nacionalnyj-muzej-antropologii%201.jpg",
            },
            {
              name: "Медный каньон",
              description:
                "Главный национальный парк страны получил своё название из-за мха, растущего на склонах полутора километрового каньона и отливающего издали медью.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/mednyj-kanon%201.jpg",
            },
            {
              name: "Пирамиды Теотиуакан",
              description:
                "Старейший город западного полушария, дата основания которого вызывает вопросы даже у опытных археологов, находится в пятидесяти километрах от Мехико.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/teotiuakane%201.jpg",
            },
            {
              name: "Пещера кристаллов гигантов",
              description:
                "Огромные гипсовые кристаллы начали формироваться в пещере, расположенной рядом с городом Чихуахуа, около двадцати шести миллионов лет назад.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/peschera-kristallov-gigantov%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Мехіка",
          Description:
            "Мексіка - пярэстая сумесь іспанскай, індзейскай і карыбскай культур. Адпачынак на лепшых пляжах Канкуна і Рыўера-Майя, старажытныя помнікі загадкавых цывілізацый і дайвінг на востраве Косумель, тэкіла, выдатная кухня і запальныя дыска - усё аб Мексіцы: туры, цэны, гатэлі. ",
          Name: "Мексіка",
          Places: [
            {
              Name: "Чычэн-Іца",
              Description:
                "Заснаваны ў VII стагоддзі н.э. святы горад аднаго з плямёнаў майя - Іца знаходзіцца ў ста дваццаці кіламетрах ад сталіцы паўвострава Юкатан. Архітэктурнае багацце старажытнага паселішча складаюць девятиступенчатый Храм Кукулькана і два невялікіх храма - Воінаў і Ягуараў.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/chichen-itsa%201.jpg",
            },
            {
              Name: "Кафедральны сабор",
              Description:
                "Галоўны каталіцкі храм мексіканскай сталіцы пабудаваны на месцы былога ацтэкскай сьвятыні, прысвечанага богу вайны - Уицилопочтли.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/kafedralnyiy-sobor-mehiko%201.jpg",
            },
            {
              Name: "Нацыянальны музей антрапалогіі",
              Description:
                "Адзін з найбагацейшых музеяў Мексікі знаходзіцца ў парку Чапультепек (Мехіка). Ён складаецца з двух буйных аддзелаў - археалагічнага і этнаграфічнага. Экспазіцыя музея прадстаўлена экспанатамі дакалумбавай эпохі",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/nacionalnyj-muzej-antropologii%201.jpg",
            },
            {
              Name: "Медны каньён",
              Description:
                "Галоўны нацыянальны парк краіны атрымаў сваю назву з-за моху, які расце на схілах паўтары кіламетровага каньёна і адліваць здалёк меддзю.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/mednyj-kanon%201.jpg",
            },
            {
              Name: "Піраміды Тэатыўакан",
              Description:
                "Найстарэйшы горад заходняга паўшар'я, дата заснавання якога выклікае пытанні нават у дасведчаных археолагаў, знаходзіцца ў пяцідзесяці кіламетрах ад Мехіка.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/teotiuakane%201.jpg",
            },
            {
              Name: "Пячора крышталяў гігантаў",
              Description:
                "Вялізныя гіпсавыя крышталі пачалі фармавацца ў пячоры, размешчанай побач з горадам Чыхуахуа, каля дваццаці шасці мільёнаў гадоў таму.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/peschera-kristallov-gigantov%201.jpg",
            },
          ],
        },
        EN: {
          capital: "Mexico City",
          description:
            "Mexico is a motley mixture of Spanish, Indian and Caribbean cultures. Rest on the best beaches of Cancun and Riviera Maya, ancient monuments of mysterious civilizations and diving on the island of Cozumel, tequila, excellent cuisine and fiery disco - all about Mexico: tours, prices, hotels. ",
          name: "Mexico",
          places: [
            {
              name: "Chichen Itza",
              description:
                "Founded in the 7th century AD, the sacred city of one of the Mayan tribes - Itza, is located one hundred and twenty kilometers from the capital of the Yucatan Peninsula. The architectural wealth of the ancient settlement consists of the nine-level Temple of Kukulkan and two small temples - Warriors and Jaguars.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/chichen-itsa%201.jpg",
            },
            {
              name: "Cathedral",
              description:
                "The main Catholic church in the Mexican capital was built on the site of a former Aztec sanctuary dedicated to the god of war, Huitzilopochtli.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/kafedralnyiy-sobor-mehiko%201.jpg",
            },
            {
              name: "National Museum of Anthropology",
              description:
                "One of the richest museums in Mexico is located in the Chapultepec Park (Mexico City). It consists of two large departments - archaeological and ethnographic. The exposition of the museum is represented by exhibits of the pre-Columbian era",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/nacionalnyj-muzej-antropologii%201.jpg",
            },
            {
              name: "Copper Canyon",
              description:
                "The main national park of the country got its name from the moss growing on the slopes of a one and a half kilometer canyon and casting copper from a distance.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/mednyj-kanon%201.jpg",
            },
            {
              name: "Pyramids of Teotihuacan",
              description:
                "The oldest city in the Western Hemisphere, whose founding date raises questions even among experienced archaeologists, is located fifty kilometers from Mexico City.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/teotiuakane%201.jpg",
            },
            {
              name: "Giant Crystal Cave",
              description:
                "Huge gypsum crystals began to form in a cave near Chihuahua City about twenty-six million years ago.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Mexico/peschera-kristallov-gigantov%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/bern%201.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/1093978.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=2_768fvqWEY&ab_channel=101Facts",
      currency: "CHF",
      timeZone: "Europe/Berlin",
      localizations: {
        RU: {
          capital: "Берн",
          description:
            " Швейцария — направление для ценителей безупречности во всем. Лучшие горнолыжные курорты Альп, безукоризненный сервис в высококлассных отелях и отличная «экскурсионка» по старинным городам и замкам. От Цюриха до Женевы — все о Швейцарии: карта, виза, туры, фото.",
          name: "Швейцария",
          places: [
            {
              name: "Шильонский замок",
              description:
                "Расположенный в фантастическом месте на восточной стороне Женевского озера, обрамленный скалистыми горам, Шиольнский замок является одной из главных достопримечательностей Швейцарии.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Chillon-1%201.jpg",
            },
            {
              name: "Охраняемая зона Юнгфрау — Алетч",
              description:
                "Практически нетронутая территория, если не считать троп и нескольких живописных горных хижин, регион Jungfrau-Aletsch в Швейцарских Альпах — это самая большая ледниковая зона в Западной Европе.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Villa_Cassel%201.jpg",
            },
            {
              name: "Пик Маттерхорн",
              description:
                "Именно здесь, в небольшой деревеньке Церматт, любители природы начинают свои маршруты в великолепное королевство Швейцарских Альп!",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/swiss-zermatt-1024x619%201.jpg",
            },
            {
              name: "Старый город Берна",
              description:
                "Расположенный на холме и окруженный с трех сторон рекой Ааре, средневековый Берн сохранил шарм былого времени, с его площадями из песчаника, часовой башней и многочисленными аркадами, обрамляющими улицы.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Bern6%201.jpg",
            },
            {
              name: "Террасные виноградники Лаво",
              description:
                "Живописные террасные виноградники Лаво  расположены вдоль берега Женевского озера. Обрамленные средневековыми каменными стенами, они простираются на 30 км и являются самым известным винодельческим регионом в Швейцарии.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Lavaux-vineyards-Switzerland-Lake-Geneva%201.jpg",
            },
            {
              name: "Ретийская железная дорога",
              description:
                "Железнодорожные пути Albula и Bernina проходят сквозь впечатляющие пейзажи, через десятки туннелей, галерей, виадуков и мостов. Отправляясь из городов Хур, Ст-Моритц или Давос.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Bernina-express%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Берн",
          Description:
            "Швейцарыя - кірунак для знатакоў бездакорнасці ва ўсім. Лепшыя гарналыжныя курорты Альпаў, бездакорны сэрвіс у высакакласных гатэлях і выдатная« экскурсионка »па старадаўніх гарадах і замках. Ад Цюрыха да Жэневы - усё аб Швейцарыі: карта, віза, туры, фота. ",
          Name: "Швейцарыя",
          Places: [
            {
              Name: "Шильонский замак",
              Description:
                "Размешчаны ў фантастычным месцы на ўсходнім баку Жэнеўскага возера, апраўлены скалістымі горах, Шиольнский замак з'яўляецца адной з галоўных славутасцяў Швейцарыі.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Chillon-1%201.jpg",
            },
            {
              Name: "Ахаваная зона Юнгфрау - Алетч",
              Description:
                "Практычна некранутая тэрыторыя, калі не лічыць сцежак і некалькіх маляўнічых горных хацін, рэгіён Jungfrau-Aletsch ў Швайцарскіх Альпах - гэта самая вялікая ледавіковая зона ў Заходняй Еўропе.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Villa_Cassel%201.jpg",
            },
            {
              Name: "Пік Маттерхорн",
              Description:
                "Менавіта тут, у невялікай вёсачцы Церматт, аматары прыроды пачынаюць свае маршруты ў пышнае каралеўства Швейцарскіх Альпаў!",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/swiss-zermatt-1024x619%201.jpg",
            },
            {
              Name: "Стары горад Берна",
              Description:
                "Размешчаны на ўзгорку і акружаны з трох бакоў ракой Аарэ, сярэднявечны Бэрн захаваў шарм мінуўшчыны часу, з яго плошчамі з пяшчаніку, гадзінны вежай і шматлікімі аркадамі, якія атачаюць вуліцы.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Bern6%201.jpg",
            },
            {
              Name: "Террасная вінаграднікі Лаво",
              Description:
                "Маляўнічыя террасные вінаграднікі Лаво размешчаны ўздоўж берага Жэнеўскага возера. Абрамленні сярэднявечнымі каменнымі сценамі, яны распасціраюцца на 30 км і з'яўляюцца самым вядомым вінаробным рэгіёнам у Швейцарыі.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Lavaux-vineyards-Switzerland-Lake-Geneva%201.jpg",
            },
            {
              Name: "Рэтыйскіх чыгунка",
              Description:
                "Чыгуначныя шляхі Albula і Bernina праходзяць скрозь ўражлівыя пейзажы, праз дзесяткі тунэляў, галерэй, віядукам і мастоў. Адпраўляючыся з гарадоў Хур, Ст-Моритц або Давос.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Bernina-express%201.jpg",
            },
          ],
        },
        EN: {
          capital: "Bern",
          description:
            "Switzerland is a destination for connoisseurs of perfection in everything. The best ski resorts of the Alps, impeccable service in upscale hotels and an excellent excursion to ancient cities and castles. From Zurich to Geneva - everything about Switzerland: map, visa, tours, a photo.",
          name: "Switzerland",
          places: [
            {
              name: "Chillon Castle",
              description:
                "Located in a fantastic location on the eastern side of Lake Geneva, framed by rocky mountains, Shioln Castle is one of the main attractions in Switzerland.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Chillon-1%201.jpg",
            },
            {
              name: "Protected area Jungfrau - Aletsch",
              description:
                "Virtually untouched, apart from trails and a few picturesque mountain huts, the Jungfrau-Aletsch region in the Swiss Alps is the largest glacial zone in Western Europe.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Villa_Cassel%201.jpg",
            },
            {
              name: "Matterhorn Peak",
              description:
                "It is here, in the small village of Zermatt, that nature lovers start their routes to the magnificent kingdom of the Swiss Alps!",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/swiss-zermatt-1024x619%201.jpg",
            },
            {
              name: "Bern's Old Town",
              description:
                "Perched on a hill and surrounded on three sides by the Aare River, medieval Bern retains the charm of its old days, with its sandstone squares, clock tower and numerous arcades lining the streets.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Bern6%201.jpg",
            },
            {
              name: "Lavaux Terraced Vineyards",
              description:
                "The picturesque terraced vineyards of Lavaux are located along the shores of Lake Geneva. Framed by medieval stone walls, they stretch for 30 km and are the most famous wine region in Switzerland.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Lavaux-vineyards-Switzerland-Lake-Geneva%201.jpg",
            },
            {
              name: "Rhaetian Railway",
              description:
                "The Albula and Bernina railway tracks pass through impressive landscapes, through dozens of tunnels, galleries, viaducts and bridges. Departing from the cities of Chur, St Moritz or Davos.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/Switzerland/Bernina-express%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/washington%202.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/scale_1200%201.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=98H5AN_vfOY&ab_channel=touropia",
      currency: "USD",
      timeZone: "America/New_York",
      localizations: {
        RU: {
          capital: "Вашингтон",
          description:
            "В настоящее время США привлекает туристов своими Национальными парками, парками развлечений, фестивалями, центрами азартных игр, полями для гольфа, историческими строениями и памятниками, отелями, музеями, галереями, отдыхом на природе, спа, ресторанами и спортивными мероприятиями.",
          name: "США",
          places: [
            {
              name: "Лас-Вегас",
              description:
                "Город наполнен множеством казино и отелей. Нескончаемые концерты и световые шоу не дают заскучать туристам круглые сутки. Приезжая сюда, будьте готовы не спать с ночи до утра.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-9-Las-Vegas-e1490932161771%201.jpg",
            },
            {
              name: "Гранд-Каньон",
              description:
                "Располагается на территории одноименного национального парка в штате Аризона. В давние времена здесь проживали индейцы различных племен. На дне каньона протекает река Колорадо. Туристы могут устроить сплав по реке на плотах. Данный объект входит в список ЮНЕСКО и его можно смело включить в список самых красивых мест в мире.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-10-Grand-Canyon-e1490932337697%201.jpg",
            },
            {
              name: "Дамба Гувера",
              description:
                "Дамба является одной из самых больших гидроэлектростанций США. Высота бетонной конструкции составляет 221 метр.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-12-Hoover-Dam-e1490932813178%201.jpg",
            },
            {
              name: "Йеллоустонский парк",
              description:
                "Туристы, оказавшиеся в парке, смогут увидеть красивейшие местные озера, реки и каньоны. Озера, находящиеся в жерле супервулкана Кальдера",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-13-Yellowstone-National-Park-e1490933233234%201.jpg",
            },
            {
              name: "Шоссе 66",
              description:
                "Шоссе, протянувшееся на 4 тысячи километров через 8 американских штатов и соединившее могучий Чикаго с солнечным и беззаботным Лос-Анджелесом.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/27-Highway_66_Chicago_and_Los_Angeles-e1561666268905%201.jpg",
            },
            {
              name: "Рашмор",
              description:
                "Рашмор – самая знаменитая гора в США. Известна она тем, что в ее граните выбиты лица четырех президентов государства.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-15-Mount-Rushmore-e1490933889252%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Вашынгтон",
          Description:
            "У цяперашні час ЗША прыцягвае турыстаў сваімі Нацыянальнымі паркамі, паркамі забаў, фестывалямі, цэнтрамі азартных гульняў, палямі для гольфа, гістарычнымі будынкамі і помнікамі, гатэлямі, музеямі, галерэямі, адпачынкам на прыродзе, спа, рэстаранамі і спартыўнымі мерапрыемствамі. ",
          Name: "ЗША",
          Places: [
            {
              Name: "Лас-Вегас",
              Description:
                "Горад напоўнены мноствам казіно і гатэляў. Бясконцыя канцэрты і светлавыя шоу не даюць засумаваць турыстам круглыя ​​суткі. Прыязджаючы сюды, будзьце гатовыя не спаць з ночы да раніцы.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-9-Las-Vegas-e1490932161771%201.jpg",
            },
            {
              Name: "Гранд-Каньён",
              Description:
                "Размяшчаецца на тэрыторыі аднайменнага нацыянальнага парку ў штаце Арызона. У даўнія часы тут пражывалі індзейцы розных плямёнаў. На дне каньёна працякае рака Каларада. Турысты могуць зладзіць сплаў па рацэ на плытах. Дадзены аб'ект уваходзіць у спіс ЮНЕСКА і яго можна смела ўключыць у спіс самых прыгожых месцаў у свеце. ",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-10-Grand-Canyon-e1490932337697%201.jpg",
            },
            {
              Name: "Дамба Гувера",
              Description:
                "Дамба з'яўляецца адной з самых вялікіх гідраэлектрастанцый ЗША. Вышыня бетоннай канструкцыі складае 221 метр.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-12-Hoover-Dam-e1490932813178%201.jpg",
            },
            {
              Name: "Елаўстонскі парк",
              Description:
                "Турысты, якія апынуліся ў парку, змогуць ўбачыць найпрыгажэйшыя мясцовыя азёры, рэкі і каньёны. Азёры, якія знаходзяцца ў жарало супервулкана Кальдера",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-13-Yellowstone-National-Park-e1490933233234%201.jpg",
            },
            {
              Name: "Шаша 66",
              Description:
                "Шаша, якое працягнулася на 4 тысячы кіламетраў праз 8 амерыканскіх штатаў і якое спалучыла магутны Чыкага з сонечным і бесклапотным Лос-Анджэлесам.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/27-Highway_66_Chicago_and_Los_Angeles-e1561666268905%201.jpg",
            },
            {
              Name: "Рашмор",
              Description:
                "Рашмор - самая знакамітая гара ў ЗША. Вядомая яна тым, што ў яе граніце выбітыя асобы чатырох прэзідэнтаў дзяржавы.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-15-Mount-Rushmore-e1490933889252%201.jpg",
            },
          ],
        },
        EN: {
          capital: "Washington",
          description:
            "The US currently attracts tourists with its National Parks, Amusement Parks, Festivals, Gambling Centers, Golf Courses, Historic Buildings and Monuments, Hotels, Museums, Galleries, Outdoor Activities, Spas, Restaurants, and Sports Events. ",
          name: "USA",
          places: [
            {
              name: "Las Vegas",
              description:
                "The city is filled with many casinos and hotels. Endless concerts and light shows keep tourists busy around the clock. When you come here, be prepared to stay awake from night to morning.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-9-Las-Vegas-e1490932161771%201.jpg",
            },
            {
              name: "Grand Canyon",
              description:
                "Located on the territory of the national park of the same name in the state of Arizona. In ancient times, Indians of various tribes lived here. The Colorado River flows at the bottom of the canyon. Tourists can arrange rafting down the river. This object is included in the UNESCO list and it can be safely be included in the list of the most beautiful places in the world. ",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-10-Grand-Canyon-e1490932337697%201.jpg",
            },
            {
              name: "Hoover Dam",
              description:
                "The dam is one of the largest hydroelectric power plants in the United States. The height of the concrete structure is 221 meters.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-12-Hoover-Dam-e1490932813178%201.jpg",
            },
            {
              name: "Yellowstone Park",
              description:
                "Tourists who find themselves in the park will be able to see the most beautiful local lakes, rivers and canyons. Lakes located in the mouth of the supervolcano Caldera",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-13-Yellowstone-National-Park-e1490933233234%201.jpg",
            },
            {
              name: "Route 66",
              description:
                "A highway stretching for 4 thousand kilometers across 8 American states and connecting mighty Chicago with sunny and carefree Los Angeles.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/27-Highway_66_Chicago_and_Los_Angeles-e1561666268905%201.jpg",
            },
            {
              name: "Rushmore",
              description:
                "Rushmore is the most famous mountain in the USA. It is famous for the fact that the faces of four presidents of the state are carved into its granite.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/USA/USA-15-Mount-Rushmore-e1490933889252%201.jpg",
            },
          ],
        },
      },
    },
    {
      _id: {
        $oid: "60270368f347c8267c02a528",
      },
      firstImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/London%201.jpg",
      secondImageUrl:
        "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/2019World_Beautiful_Tower_Bridge_under_the_blue_sky__London._Great_Britain_131271_23.jpg",
      videoUrl:
        "https://www.youtube.com/watch?v=0kXCPo7c63I&ab_channel=RyanShirley",
      currency: "GBP",
      timeZone: "Europe/London",
      localizations: {
        RU: {
          capital: "Лондон",
          description:
            "Объединенное Королевство уже давно привлекает туристов своими неповторимыми достопримечательностями, уникальной культурой и веками сложенной истории. Добродушие населения, удивительная атмосфера, а также неповторимые пейзажи вдохновляют путешественников и заставляют вернуться.",
          name: "Великобритания",
          places: [
            {
              name: "Букингемский дворец",
              description:
                "Букингемский дворец — резиденция королевы Великобритании. С XIX века это место считается постоянным для проведения официальных приемов. Кроме того, здесь проживает британская королевская династия.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/%D0%B1%D1%83%D0%BA%D0%B5%D0%BD%D0%B3%D0%B5%D0%BC%D1%81%D0%BA%D0%B8%D0%B9%20%D0%B4%D0%B2%D0%BE%D1%80%D0%B5%D1%86%201.jpg",
            },
            {
              name: "Биг-Бен",
              description:
                "Если спросить местного жителя, какая достопримечательность в Великобритании считается самой популярной, он без промедления назовет это величественное сооружение.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/big%20ben%201.jpg",
            },
            {
              name: "Стоунхендж",
              description:
                "Стоунхендж — самая большая загадка человечества. Название этой достопримечательности Великобритании означает каменное кольцо. Мегалитическое сооружение из камней внесено в список Всемирного наследия, строилось оно на протяжении 300 лет.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/stonehenge%201.jpg",
            },
            {
              name: "Музей викингов",
              description:
                "Музей викингов стоит обязательно посетить по приезду в Йорк. Это место пользуется популярностью у любителей старины и эпохи нормандского завоевания.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/viking-museum-norway%201.jpg",
            },
            {
              name: "Корабельный док Портсмута",
              description:
                "Корабельный док Портсмута славится обилием важных авианосцев, среди которых стоит выделить авианосцы «Прославленный», «принц Уэльский» и «Королева Елизавета». Здесь можно забраться внутрь старинных кораблей, побывать в каютах, половить рыбу с борта корабля, забраться на мачту в роли юнги.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/block_20994%201.jpg",
            },
            {
              name: "Трафальгарская площадь",
              description:
                "Трафальгарская площадь — национальное достояние Великобритании. Сюда приезжают те, кто хочет отдохнуть от городской суеты и полюбоваться великолепными фонтанами.",
              imageURL:
                "https://github.com/YaroslavTrefilov/keeper-of-images/blob/master/images/great%20britan/block_20990%201.jpg",
            },
          ],
        },
        BE: {
          Capital: "Лондан",
          Description:
            "Аб'яднанае Каралеўства ўжо даўно прыцягвае турыстаў сваімі непаўторнымі славутасцямі, унікальнай культурай і стагоддзямі складзенай гісторыі. Дабразычлівасць насельніцтва, дзіўная атмасфера, а таксама непаўторныя пейзажы натхняюць падарожнікаў і прымушаюць вярнуцца.",
          Name: "Вялікабрытанія",
          Places: [
            {
              Name: "Букінгемскі палац",
              Description:
                "Букінгемскі палац - рэзідэнцыя каралевы Вялікабрытаніі. З XIX стагоддзя гэта месца лічыцца пастаянным для правядзення афіцыйных прыёмаў. Акрамя таго, тут пражывае брытанская каралеўская дынастыя.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/%D0%B1%D1%83%D0%BA%D0%B5%D0% BD% D0% B3% D0% B5% D0% BC% D1% 81% D0% BA% D0% B8% D0% B9% 20% D0% B4% D0% B2% D0% BE% D1% 80% D0% B5% D1% 86% 201.jpg ",
            },
            {
              Name: "Біг-Бен",
              Description:
                "Калі спытаць мясцовага жыхара, нейкая славутасць ў Вялікабрытаніі лічыцца самай папулярнай, ён без прамаруджання назаве гэта велічнае збудаванне.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/big%20ben%201.jpg",
            },
            {
              Name: "Стоўнхэндж",
              Description:
                "Стоўнхэндж - самая вялікая загадка чалавецтва. Назва гэтай славутасці Вялікабрытаніі азначае каменнае кольца. Мегалітычныя збудаванне з камянёў ўнесена ў спіс Сусветнай спадчыны, будавалася яно на працягу 300 гадоў.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/stonehenge%201.jpg",
            },
            {
              Name: "Музей вікінгаў",
              Description:
                "Музей вікінгаў варта абавязкова наведаць па прыездзе ў Ёрк. Гэта месца карыстаецца папулярнасцю ў аматараў даўніны і эпохі нармандскага заваёвы.",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/viking-museum-norway%201.jpg",
            },
            {
              Name: "Карабельны док Портсмута",
              Description:
                "Карабельны док Портсмута славіцца багаццем важных авіяносцаў, сярод якіх варта вылучыць авіяносцы« Славуты »,« прынц Валійскі »і« Каралева Лізавета ». Тут можна забрацца ўнутр старадаўніх караблёў, пабываць у каютах, палавіць рыбу з борта карабля, забрацца на мачту ў ролі юнгі. ",
              ImageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/block_20994%201.jpg",
            },
            {
              Name: "Трафальгарская плошча",
              Description:
                "Трафальгарская плошчу - нацыянальны набытак Вялікабрытаніі. Сюды прыязджаюць тыя, хто хоча адпачыць ад гарадской мітусні і палюбавацца пышнымі фантанамі.",
              ImageURL:
                "https://github.com/YaroslavTrefilov/keeper-of-images/blob/master/images/great%20britan/block_20990%201.jpg",
            },
          ],
        },
        EN: {
          capital: "London",
          description:
            "The United Kingdom has long attracted tourists with its unique attractions, unique culture and centuries of history. The good nature of the population, amazing atmosphere, and unique landscapes inspire travelers and make them come back.",
          name: "UK",
          places: [
            {
              name: "Buckingham Palace",
              description:
                "Buckingham Palace is the residence of the Queen of Great Britain. Since the 19th century, this place has been considered a permanent place for holding official receptions. It is also home to the British royal dynasty.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/%D0%B1%D1%83%D0%BA%D0%B5%D0% BD% D0% B3% D0% B5% D0% BC% D1% 81% D0% BA% D0% B8% D0% B9% 20% D0% B4% D0% B2% D0% BE% D1% 80% D0% B5% D1% 86% 201.jpg ",
            },
            {
              name: "Big Ben",
              description:
                "If you ask a local who is the most popular attraction in the UK, he will immediately name this magnificent structure.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/big%20ben%201.jpg",
            },
            {
              name: "Stonehenge",
              description:
                "Stonehenge is the greatest mystery of mankind. The name of this landmark in Great Britain means a stone ring. The megalithic structure of stones is included in the World Heritage List, it was built over 300 years.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/stonehenge%201.jpg",
            },
            {
              name: "Viking Museum",
              description:
                "The Viking Museum is a must-see upon arrival in York. This place is popular with lovers of antiquity and the Norman era.",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/viking-museum-norway%201.jpg",
            },
            {
              name: "Portsmouth Ship Dock",
              description:
                "The Portsmouth ship dock is famous for the abundance of important aircraft carriers, among which it is worth highlighting the aircraft carriers Illustrious , Prince of Wales and  Queen Elizabeth.  to the mast as a cabin boy. ",
              imageURL:
                "https://raw.githubusercontent.com/YaroslavTrefilov/keeper-of-images/master/images/great%20britan/block_20994%201.jpg",
            },
            {
              name: "Trafalgar Square",
              description:
                "Trafalgar Square is a national treasure of Great Britain. Those who want to take a break from the bustle of the city and admire the magnificent fountains come here.",
              imageURL:
                "https://github.com/YaroslavTrefilov/keeper-of-images/blob/master/images/great%20britan/block_20990%201.jpg",
            },
          ],
        },
      },
    },
  ],
};

// Reducer
const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return {
        ...state,
        countries: [...state.countries, action.payload]
      };
    default:
      return state;
  };
};

export default countryReducer;

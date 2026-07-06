// src/data/menu.js

export const menuData = {
  hrana: {
    title: { mk: "Храна", en: "Food" },
    subCategories: {
      pojadok: {
        title: { mk: "Појадок", en: "Breakfast" },
        items: [
          {
            id: "omlet",
            name: { mk: "Омлет", en: "Omelette" },
            price: 120,
            description: { mk: "3 јајца", en: "3 eggs" },
            image: "horizontal1.png"
          },
          {
            id: "sky_pojadok",
            name: { mk: "Скај појадок за двајца", en: "Sky breakfast for two" },
            price: 600,
            description: { mk: "комплет лепиња, кајмак, јајца на око, пршут, сланина, овчо сирење, панцероти, крем и џем", en: "set of buns, kajmak, sunny-side-up eggs, prosciutto, bacon, sheep cheese, pancettini, cream, and jam" },
            image: "caesar.jpg"
          },
          {
            id: "dodatoci_pojadok",
            name: { mk: "Додатоци", en: "Add-ons" },
            price: 40,
            description: { mk: "кашкавал 50гр., сирење 50гр., сланина 30гр., печурки 50гр.", en: "yellow cheese 50g, white cheese 50g, bacon 30g, mushrooms 50g" },
            image: "greek-salad.jpg"
          }
        ]
      },
      ladni_zakuski: {
        title: { mk: "Ладни закуски", en: "Cold snacks" },
        items: [
          {
            id: "ovco_sirenje",
            name: { mk: "Овчо сирење", en: "Sheep cheese" },
            price: 170,
            description: { mk: "100гр.", en: "100g." }
          },
          {
            id: "bieno_sirenje",
            name: { mk: "Биено сирење", en: "Beaten cheese" },
            price: 190,
            description: { mk: "100гр.", en: "100g." }
          },
          {
            id: "piperka_pavlaka",
            name: { mk: "Пиперка во павлака", en: "Pepper in sour cream" },
            price: 170,
            description: { mk: "100гр.", en: "100g." }
          },
          {
            id: "sirenje_slanina",
            name: { mk: "Сирење роловано во сланина", en: "Cheese rolled in bacon" },
            price: 270,
            description: { mk: "сирење 100гр., сланина 50гр.", en: "cheese 100g., bacon 50g." }
          }
        ]
      },
      topli_zakuski: {
        title: { mk: "Топли закуски", en: "Hot snacks" },
        items: [
          {
            id: "pileski_prsti",
            name: { mk: "Пилешки прсти", en: "Chicken fingers" },
            price: 300,
            description: { mk: "350гр.", en: "350g." }
          },
          {
            id: "pileski_krilca",
            name: { mk: "Пилешки крилца", en: "Chicken wings" },
            price: 300,
            description: { mk: "350гр.", en: "350g." }
          },
          {
            id: "furnarini",
            name: { mk: "Фурнарини", en: "Furnarini" },
            price: 150,
            description: { mk: "тесто 200гр., 1 јајце, сусам 10гр.", en: "dough 200g, 1 egg, sesame 10g" }
          },
          {
            id: "furnarini_kaskaval",
            name: { mk: "Фурнарини со кашкавал", en: "Furnarini with cheese" },
            price: 200,
            description: { mk: "тесто 200гр., 1 јајце, сусам 10гр., кашкавал 50гр.", en: "dough 200g, 1 egg, sesame 10g, yellow cheese 50g" }
          },
          {
            id: "pomfrit",
            name: { mk: "Помфрит", en: "French fries" },
            price: 130,
            description: { mk: "300гр.", en: "300g." }
          },
          {
            id: "pomfrit_sirenje",
            name: { mk: "Помфрит со сирење", en: "French fries with cheese" },
            price: 170,
            description: { mk: "помфрит 300гр., сирење 50гр.", en: "french fries 300g, white cheese 50g" }
          },
          {
            id: "piroska",
            name: { mk: "Похована пирошка", en: "Fried piroshka" },
            price: 180,
            description: { mk: "300гр.", en: "300g." },
            image: "choco-cake.jpg"
          },
          {
            id: "zdenka",
            name: { mk: "Похована зденка", en: "Fried melted cheese" },
            price: 200,
            description: { mk: "120гр.", en: "120g." }
          },
          {
            id: "pecurki",
            name: { mk: "Печурки на скара", en: "Grilled mushrooms" },
            price: 180,
            description: { mk: "250гр.", en: "250g." }
          },
          {
            id: "tikvicki",
            name: { mk: "Тиквички", en: "Zucchini" },
            price: 200,
            description: { mk: "200гр.", en: "200g." }
          },
          {
            id: "lepinja_kajmak",
            name: { mk: "Лепиња со кајмак", en: "Bun with kajmak" },
            price: 240,
            description: { mk: "", en: "" }
          },
          {
            id: "pohovan_kaskaval",
            name: { mk: "Похован кашкавал", en: "Fried yellow cheese" },
            price: 210,
            description: { mk: "100гр.", en: "100g." }
          }
        ]
      },
      salati: {
        title: { mk: "Салати", en: "Salads" },
        items: [
          {
            id: "sky_salata",
            name: { mk: "Скај салата", en: "Sky salad" },
            price: 300,
            description: { mk: "марула 50гр., павлака 50гр., печен сусам 20гр., мајонез 20гр., кашкавал 40гр., шунка 50гр., пармезан 20гр.", en: "lettuce 50g, sour cream 50g, roasted sesame 20g, mayo 20g, yellow cheese 40g, ham 50g, parmesan 20g" }
          },
          {
            id: "sopska_salata",
            name: { mk: "Шопска салата", en: "Shopska salad" },
            price: 210,
            description: { mk: "домат 100гр., краставица 100гр., сирење 70гр., маслинки 20гр.", en: "tomato 100g, cucumber 100g, white cheese 70g, olives 20g" }
          },
          {
            id: "grcka_salata",
            name: { mk: "Грчка салата", en: "Greek salad" },
            price: 220,
            description: { mk: "домат 100гр., краставица 80гр., сирење 70гр., маслинки 20гр., кромид 30гр.", en: "tomato 100g, cucumber 80g, white cheese 70g, olives 20g, onion 30g" }
          },
          {
            id: "makedonska_salata",
            name: { mk: "Македонска салата", en: "Macedonian salad" },
            price: 220,
            description: { mk: "домат 150гр., пиперка 10гр., кромид 30гр., магдонос 10гр.", en: "tomato 150g, pepper 10g, onion 30g, parsley 10g" }
          },
          {
            id: "cezar_salata",
            name: { mk: "Цезар салата", en: "Caesar salad" },
            price: 300,
            description: { mk: "марула 50гр., шери 50гр., пилешки стек 100гр., кашкавал 50гр., пармезан 20гр., тартар сос 30гр.", en: "lettuce 50g, cherry tomatoes 50g, chicken steak 100g, yellow cheese 50g, parmesan 20g, tartar sauce 30g" }
          },
          {
            id: "vitaminska_salata",
            name: { mk: "Витаминска салата", en: "Vitamin salad" },
            price: 180,
            description: { mk: "цвекло 70гр., морков 70гр., зелка 70гр.", en: "beetroot 70g, carrot 70g, cabbage 70g" }
          }
        ]
      },
      daski: {
        title: { mk: "Даски", en: "Platters" },
        items: [
          {
            id: "pohovana_daska",
            name: { mk: "Похована даска", en: "Fried platter" },
            price: 1000,
            description: { mk: "пилешки прсти 350гр., пирошка 250гр., зденка 100гр., кашкавал 120гр., печирки 100гр., похован кромид 40гр., похован компир 40гр.", en: "chicken fingers 350g, piroshka 250g, melted cheese 100g, yellow cheese 120g, mushrooms 100g, fried onion 40g, fried potato 40g" }
          },
          {
            id: "ladna_daska",
            name: { mk: "Ладна даска", en: "Cold platter" },
            price: 900,
            description: { mk: "шунка 100гр., врат 150гр., кулен 100гр., чајна 80гр., сирење 150гр., кашкавал 150гр.", en: "ham 100g, pork neck 150g, kulen 100g, smoked sausage 80g, white cheese 150g, yellow cheese 150g" }
          },
          {
            id: "mesana_skara",
            name: { mk: "Мешана скара", en: "Mixed grill" },
            price: 1500,
            description: { mk: "ребро 350гр., пилешки стек 300гр., свинско каре 350гр., шарска плескавица 400гр., тенок колбас 300гр.", en: "pork rib 350g, chicken steak 300g, pork loin 350g, Shara burger 400g, thin sausage 300g" }
          }
        ]
      },
      testenini: {
        title: { mk: "Тестенини", en: "Pasta" },
        items: [
          {
            id: "karbonara",
            name: { mk: "Карбонара", en: "Carbonara" },
            price: 300,
            description: { mk: "тестенини 200гр., крема за готвење 200гр., сланина 100гр., пармезан 50гр.", en: "pasta 200g, cooking cream 200g, bacon 100g, parmesan 50g" }
          },
          {
            id: "bolonjeze",
            name: { mk: "Болоњезе", en: "Bolognese" },
            price: 300,
            description: { mk: "тестенини 200гр., болоњезе сос 200гр., мелено месо 100гр.", en: "pasta 200g, bolognese sauce 200g, minced meat 100g" }
          }
        ]
      },
      sendvici: {
        title: { mk: "Сендвичи", en: "Sandwiches" },
        items: [
          {
            id: "sky_burger",
            name: { mk: "Скај бургер", en: "Sky burger" },
            price: 270,
            description: { mk: "лепче 150гр., плескавица 150гр., помфрит 50гр., 1 јајце печено, чедар + кајмак, корнишони", en: "bun 150g, burger patty 150g, french fries 50g, 1 fried egg, cheddar + kajmak, pickles" }
          },
          {
            id: "hamburger",
            name: { mk: "Хамбургер", en: "Hamburger" },
            price: 220,
            description: { mk: "лепче 150гр., плескавица 150гр., помфрит 50гр.", en: "bun 150g, burger patty 150g, french fries 50g" }
          },
          {
            id: "chicken_burger",
            name: { mk: "Чикен бургер", en: "Chicken burger" },
            price: 220,
            description: { mk: "лепче 150гр., пилешки стек 150гр., помфрит 50гр.", en: "bun 150g, chicken steak 150g, french fries 50g" }
          },
          {
            id: "cheeseburger",
            name: { mk: "Чизбургер", en: "Cheeseburger" },
            price: 250,
            description: { mk: "лепче 150гр., плескавица 150гр., помфрит 50гр., кашкавал 50гр.", en: "bun 150g, burger patty 150g, french fries 50g, yellow cheese 50g" }
          },
          {
            id: "crispy_burger",
            name: { mk: "Криспи бургер", en: "Crispy burger" },
            price: 250,
            description: { mk: "лепче 150гр., похован стек 150гр., помфрит 50гр.", en: "bun 150g, fried steak 150g, french fries 50g" }
          },
          {
            id: "giro",
            name: { mk: "Гиро", en: "Gyro" },
            price: 220,
            description: { mk: "", en: "" }
          }
        ]
      },
      pastrmajlii: {
        title: { mk: "Пастрмајлии", en: "Pastrmajlii" },
        items: [
          {
            id: "svinska_mala",
            name: { mk: "Свинска мала", en: "Small pork" },
            price: 220,
            description: { mk: "тесто 200гр., свинско месо 150гр.", en: "dough 200g, pork meat 150g" }
          },
          {
            id: "svinska_golema",
            name: { mk: "Свинска голема", en: "Large pork" },
            price: 290,
            description: { mk: "тесто 300гр., свинско месо 220гр.", en: "dough 300g, pork meat 220g" }
          },
          {
            id: "pileska_mala",
            name: { mk: "Пилешка мала", en: "Small chicken" },
            price: 220,
            description: { mk: "тесто 200гр., пилешки стек 150гр.", en: "dough 200g, chicken steak 150g" }
          },
          {
            id: "pileska_golema",
            name: { mk: "Пилешка голема", en: "Large chicken" },
            price: 290,
            description: { mk: "тесто 300гр., пилешки стек 220гр.", en: "dough 300g, chicken steak 220g" }
          },
          {
            id: "dimena_mala",
            name: { mk: "Димена мала", en: "Small smoked" },
            price: 270,
            description: { mk: "тесто 200гр., димено месо 150гр.", en: "dough 200g, smoked meat 150g" }
          },
          {
            id: "dimena_golema",
            name: { mk: "Димена голема", en: "Large smoked" },
            price: 350,
            description: { mk: "тесто 300гр., димено месо 220гр.", en: "dough 300g, smoked meat 220g" }
          },
          {
            id: "dodatoci_pastrmajlija",
            name: { mk: "Додатоци", en: "Add-ons" },
            price: 40,
            description: { mk: "кашкавал, јајце", en: "yellow cheese, egg" }
          }
        ]
      },
      pici: {
        title: { mk: "Пици", en: "Pizzas" },
        items: [
          {
            id: "sky_pica",
            name: { mk: "Скај пица", en: "Sky pizza" },
            price: "350/650",
            description: { mk: "доматен сос, кашкавал, врат, сланина, пиперка", en: "tomato sauce, yellow cheese, pork neck, bacon, pepper" }
          },
          {
            id: "kapricioza",
            name: { mk: "Капричиоза", en: "Capricciosa" },
            price: "300/550",
            description: { mk: "доматен сос, кашкавал, шунка, печурка", en: "tomato sauce, yellow cheese, ham, mushrooms" }
          },
          {
            id: "margarita",
            name: { mk: "Маргарита", en: "Margherita" },
            price: "280/500",
            description: { mk: "доматен сос, кашкавал", en: "tomato sauce, yellow cheese" }
          },
          {
            id: "napolitana",
            name: { mk: "Наполитана", en: "Napoletana" },
            price: "290/520",
            description: { mk: "доматен сос, кашкавал, печурки", en: "tomato sauce, yellow cheese, mushrooms" }
          },
          {
            id: "dijavola",
            name: { mk: "Дијавола", en: "Diavola" },
            price: "350/600",
            description: { mk: "доматен сос, кашкавал, кулен", en: "tomato sauce, yellow cheese, kulen" }
          },
          {
            id: "kvatro_formadzi",
            name: { mk: "Кватро формаџи", en: "Quattro Formaggi" },
            price: "350/650",
            description: { mk: "доматен сос, кашкавал, пармезан, сино сирење", en: "tomato sauce, yellow cheese, parmesan, blue cheese" }
          },
          {
            id: "vege_pica",
            name: { mk: "Веге пица", en: "Veggie pizza" },
            price: "300/550",
            description: { mk: "доматен сос, кашкавал, домат, пиперка, печурки, маслинки", en: "tomato sauce, yellow cheese, tomato, pepper, mushrooms, olives" }
          }
        ]
      },
      glavni_jadenja: {
        title: { mk: "Главни јадења", en: "Main dishes" },
        items: [
          {
            id: "pilesko_bel_sos",
            name: { mk: "Пилешко во бел сос", en: "Chicken in white sauce" },
            price: 310,
            description: { mk: "пилешки стек 150гр., хопла, печурки, соја сос, помфрит гарнир", en: "chicken steak 150g, cooking cream, mushrooms, soy sauce, french fries garnish" }
          },
          {
            id: "pilesko_kari_sos",
            name: { mk: "Пилешко во кари сос", en: "Chicken in curry sauce" },
            price: 300,
            description: { mk: "пилешки стек 150гр., хопла, кари сос, помфрит гарнир", en: "chicken steak 150g, cooking cream, curry sauce, french fries garnish" }
          },
          {
            id: "pileski_stek",
            name: { mk: "Пилешки стек", en: "Chicken steak" },
            price: 260,
            description: { mk: "300гр.", en: "300g." }
          },
          {
            id: "pleskavica",
            name: { mk: "Плескавица", en: "Burger patty" },
            price: 260,
            description: { mk: "200гр.", en: "200g." }
          },
          {
            id: "sarska_pleskavica",
            name: { mk: "Шарска плескавица", en: "Shara burger" },
            price: 320,
            description: { mk: "400гр.", en: "400g." }
          },
          {
            id: "pleskavica_testo_kajmak",
            name: { mk: "Плескавица во тесто со кајмак", en: "Burger in dough with kajmak" },
            price: 370,
            description: { mk: "тесто 200гр., мелено месо 200гр., кајмак, кашкавал", en: "dough 200g, minced meat 200g, kajmak, yellow cheese" }
          },
          {
            id: "pileski_uvijac",
            name: { mk: "Пилешки увијач", en: "Rolled stuffed chicken" },
            price: 300,
            description: { mk: "200гр.", en: "200g." }
          },
          {
            id: "svinski_uvijac",
            name: { mk: "Свински увијач", en: "Rolled stuffed pork" },
            price: 300,
            description: { mk: "200гр.", en: "200g." }
          },
          {
            id: "rebro",
            name: { mk: "Ребро", en: "Pork rib" },
            price: 320,
            description: { mk: "350гр.", en: "350g." }
          },
          {
            id: "rebro_furna",
            name: { mk: "Ребро во фурна", en: "Oven-baked pork rib" },
            price: 1200,
            description: { mk: "1кг.", en: "1kg." }
          },
          {
            id: "svinska_vesalica",
            name: { mk: "Свинска вешалица", en: "Pork loin" },
            price: 350,
            description: { mk: "300гр.", en: "300g." }
          },
          {
            id: "dimena_vesalica",
            name: { mk: "Димена вешалица", en: "Smoked pork loin" },
            price: 380,
            description: { mk: "250гр.", en: "250g." }
          },
          {
            id: "tenok_kolbas",
            name: { mk: "Тенок колбас", en: "Thin sausage" },
            price: 300,
            description: { mk: "250гр.", en: "250g." }
          }
        ]
      },
      riba: {
        title: { mk: "Риба", en: "Fish" },
        items: [
          {
            id: "krap",
            name: { mk: "Крап", en: "Carp" },
            price: 1000,
            description: { mk: "1кг.", en: "1kg." }
          },
          {
            id: "pastrmka",
            name: { mk: "Пастрмка", en: "Trout" },
            price: 1000,
            description: { mk: "1кг.", en: "1kg." }
          }
        ]
      },
      deserti: {
        title: { mk: "Десерти", en: "Desserts" },
        items: [
          {
            id: "nutela_palacinka",
            name: { mk: "Нутела палачинка", en: "Nutella crepe" },
            price: 180,
            description: { mk: "", en: "" }
          },
          {
            id: "palacinka",
            name: { mk: "Палачинка", en: "Crepe" },
            price: 120,
            description: { mk: "", en: "" }
          },
          {
            id: "sladoled_torta",
            name: { mk: "Сладолед торта", en: "Ice cream cake" },
            price: 220,
            description: { mk: "Чизкејк, Кукис, Тирамису, Чоколадна", en: "Cheesecake, Cookies, Tiramisu, Chocolate" }
          }
        ]
      },
      apetisani: {
        title: { mk: "Апетисани", en: "Nuts & Snacks" },
        items: [
          {
            id: "badem",
            name: { mk: "Бадем", en: "Almonds" },
            price: 180,
            description: { mk: "100гр.", en: "100g." }
          },
          {
            id: "lesnik",
            name: { mk: "Лешник", en: "Hazelnuts" },
            price: 180,
            description: { mk: "100гр.", en: "100g." }
          },
          {
            id: "fstak",
            name: { mk: "Ф'стак", en: "Pistachios" },
            price: 200,
            description: { mk: "100гр.", en: "100g." }
          },
          {
            id: "miks_apetisani",
            name: { mk: "Микс", en: "Mixed nuts" },
            price: 200,
            description: { mk: "100гр.", en: "100g." }
          }
        ]
      }
    }
  },
  pice: {
    title: { mk: "Пијалоци", en: "Drinks" },
    subCategories: {
      voda: {
        title: { mk: "Вода", en: "Water" },
        items: [
          { id: "rosa_330", name: { mk: "Роса", en: "Rosa" }, price: 80, description: { mk: "330мл.", en: "330ml." } },
          { id: "rosa_750", name: { mk: "Роса", en: "Rosa" }, price: 140, description: { mk: "750мл.", en: "750ml." } },
          { id: "rosa_gazirana_330", name: { mk: "Роса газирана", en: "Rosa sparkling" }, price: 80, description: { mk: "330мл.", en: "330ml." } },
          { id: "rosa_gazirana_750", name: { mk: "Роса газирана", en: "Rosa sparkling" }, price: 140, description: { mk: "750мл.", en: "750ml." } }
        ]
      },
      kafe_topli: {
        title: { mk: "Кафе и топли напитоци", en: "Coffee and hot drinks" },
        items: [
          { id: "espresso", name: { mk: "Еспресо", en: "Espresso" }, price: 90, description: { mk: "", en: "" } },
          { id: "macchiato", name: { mk: "Макијато", en: "Macchiato" }, price: 100, description: { mk: "", en: "" } },
          { id: "cappuccino", name: { mk: "Капучино", en: "Cappuccino" }, price: 110, description: { mk: "", en: "" } },
          { id: "freddo_espresso", name: { mk: "Фредо еспресо", en: "Freddo espresso" }, price: 150, description: { mk: "", en: "" } },
          { id: "freddo_cappuccino", name: { mk: "Фредо капучино", en: "Freddo cappuccino" }, price: 170, description: { mk: "", en: "" } },
          { id: "latte", name: { mk: "Лате", en: "Latte" }, price: 120, description: { mk: "", en: "" } },
          { id: "nescafe", name: { mk: "Нескафе", en: "Nescafe" }, price: 130, description: { mk: "", en: "" } },
          { id: "caj", name: { mk: "Чај", en: "Tea" }, price: 80, description: { mk: "", en: "" } },
          { id: "toplo_cokolado", name: { mk: "Топло чоколадо", en: "Hot chocolate" }, price: 130, description: { mk: "", en: "" } }
        ]
      },
      bezalkoholni: {
        title: { mk: "Безалкохолни пијалоци", en: "Non-alcoholic drinks" },
        items: [
          { id: "coca_cola", name: { mk: "Кока кола", en: "Coca Cola" }, price: 100, description: { mk: "250мл.", en: "250ml." } },
          { id: "fanta", name: { mk: "Фанта", en: "Fanta" }, price: 100, description: { mk: "250мл.", en: "250ml." } },
          { id: "schweppes", name: { mk: "Швепс", en: "Schweppes" }, price: 100, description: { mk: "250мл.", en: "250ml." } },
          { id: "sprite", name: { mk: "Спрајт", en: "Sprite" }, price: 100, description: { mk: "250мл.", en: "250ml." } },
          { id: "tonic", name: { mk: "Тоник", en: "Tonic" }, price: 100, description: { mk: "250мл.", en: "250ml." } },
          { id: "negaziran_sok", name: { mk: "Негазиран сок", en: "Non-carbonated juice" }, price: 120, description: { mk: "200мл.", en: "200ml." } },
          { id: "red_bull", name: { mk: "Ред бул", en: "Red Bull" }, price: 250, description: { mk: "330мл.", en: "330ml." } }
        ]
      },
      pivo: {
        title: { mk: "Пиво", en: "Beer" },
        items: [
          { id: "skopsko", name: { mk: "Скопско", en: "Skopsko" }, price: 120, description: { mk: "500мл.", en: "500ml." } },
          { id: "skopsko_smooth", name: { mk: "Скопско смут", en: "Skopsko Smooth" }, price: 120, description: { mk: "500мл.", en: "500ml." } },
          { id: "heineken", name: { mk: "Хајнекен", en: "Heineken" }, price: 150, description: { mk: "500мл.", en: "500ml." } }
        ]
      },
      alkohol: {
        title: { mk: "Алкохолни пијалоци", en: "Alcoholic drinks" },
        items: [
          { id: "rakija_zolta", name: { mk: "Ракија жолта Тиквеш", en: "Tikvesh yellow rakia" }, price: 110, description: { mk: "40мл.", en: "40ml." } },
          { id: "uzo", name: { mk: "Узо", en: "Ouzo" }, price: 100, description: { mk: "40мл.", en: "40ml." } },
          { id: "vodka_smirnoff", name: { mk: "Вотка Смирноф", en: "Smirnoff Vodka" }, price: 150, description: { mk: "40мл.", en: "40ml." } },
          { id: "gin_tanqueray", name: { mk: "Џин Танкерај", en: "Tanqueray Gin" }, price: 250, description: { mk: "40мл.", en: "40ml." } },
          { id: "gin_tonic", name: { mk: "Џин тоник", en: "Gin tonic" }, price: 220, description: { mk: "200мл.", en: "200ml." } },
          { id: "tequila", name: { mk: "Текила", en: "Tequila" }, price: 120, description: { mk: "40мл.", en: "40ml." } },
          { id: "rum", name: { mk: "Рум", en: "Rum" }, price: 120, description: { mk: "40мл.", en: "40ml." } },
          { id: "cognac", name: { mk: "Коњак", en: "Cognac" }, price: 130, description: { mk: "40мл.", en: "40ml." } },
          { id: "hennessy", name: { mk: "Хенеси В.С.", en: "Hennessy V.S." }, price: 350, description: { mk: "40мл.", en: "40ml." } },
          { id: "johnnie_walker", name: { mk: "Џони Вокер", en: "Johnnie Walker" }, price: 250, description: { mk: "40мл.", en: "40ml." } },
          { id: "johnnie_black", name: { mk: "Џони Блек", en: "Johnnie Walker Black" }, price: 350, description: { mk: "40мл.", en: "40ml." } },
          { id: "jb", name: { mk: "Џи-Би", en: "J&B" }, price: 250, description: { mk: "40мл.", en: "40ml." } },
          { id: "jack_daniels", name: { mk: "Џек Даниелс", en: "Jack Daniel's" }, price: 300, description: { mk: "40мл.", en: "40ml." } },
          { id: "jameson", name: { mk: "Џејмисон", en: "Jameson" }, price: 250, description: { mk: "40мл.", en: "40ml." } },
          { id: "macallan", name: { mk: "Макалан 12", en: "Macallan 12" }, price: 400, description: { mk: "40мл.", en: "40ml." } },
          { id: "glenfiddich", name: { mk: "Гленфидик 12", en: "Glenfiddich 12" }, price: 300, description: { mk: "40мл.", en: "40ml." } },
          { id: "glenlivet", name: { mk: "Гленливет", en: "Glenlivet" }, price: 300, description: { mk: "40мл.", en: "40ml." } },
          { id: "glenmorangie", name: { mk: "Гленморанж", en: "Glenmorangie" }, price: 350, description: { mk: "40мл.", en: "40ml." } }
        ]
      },
      likeri: {
        title: { mk: "Ликери", en: "Liqueurs" },
        items: [
          { id: "jeger", name: { mk: "Јегер", en: "Jägermeister" }, price: 200, description: { mk: "40мл.", en: "40ml." } },
          { id: "pelinkovac", name: { mk: "Пелинковац", en: "Pelinkovac" }, price: 130, description: { mk: "40мл.", en: "40ml." } },
          { id: "martini", name: { mk: "Мартини", en: "Martini" }, price: 200, description: { mk: "60мл.", en: "60ml." } },
          { id: "baileys", name: { mk: "Бејлис", en: "Baileys" }, price: 200, description: { mk: "40мл.", en: "40ml." } }
        ]
      },
      vino: {
        title: { mk: "Вино", en: "Wine" },
        items: [
          { id: "aleksandrija_200", name: { mk: "Александрија", en: "Alexandria" }, price: 220, description: { mk: "200мл.", en: "200ml." } },
          { id: "aleksandrija_750", name: { mk: "Александрија", en: "Alexandria" }, price: 900, description: { mk: "750мл.", en: "750ml." } },
          { id: "traminec_200", name: { mk: "Траминец", en: "Traminec" }, price: 220, description: { mk: "200мл.", en: "200ml." } },
          { id: "traminec_750", name: { mk: "Траминец", en: "Traminec" }, price: 900, description: { mk: "750мл.", en: "750ml." } },
          { id: "temjanika_200", name: { mk: "Темјаника", en: "Temjanika" }, price: 220, description: { mk: "200мл.", en: "200ml." } },
          { id: "temjanika_750", name: { mk: "Темјаника", en: "Temjanika" }, price: 900, description: { mk: "750мл.", en: "750ml." } },
          { id: "aleksandrija_cuvee_200", name: { mk: "Александрија куве", en: "Alexandria Cuvee" }, price: 270, description: { mk: "200мл.", en: "200ml." } },
          { id: "aleksandrija_cuvee_750", name: { mk: "Александрија куве", en: "Alexandria Cuvee" }, price: 1200, description: { mk: "750мл.", en: "750ml." } },
          { id: "tga_za_jug_200", name: { mk: "Т'га за југ", en: "T'ga za jug" }, price: 220, description: { mk: "200мл.", en: "200ml." } },
          { id: "tga_za_jug_750", name: { mk: "Т'га за југ", en: "T'ga za jug" }, price: 900, description: { mk: "750мл.", en: "750ml." } },
          { id: "luda_mara_temjanika", name: { mk: "Луда мара Темјаника", en: "Luda Mara Temjanika" }, price: 1200, description: { mk: "750мл.", en: "750ml." } },
          { id: "luda_mara_vranec", name: { mk: "Луда мара Вранец", en: "Luda Mara Vranec" }, price: 1200, description: { mk: "750мл.", en: "750ml." } },
          { id: "luda_mara_belo", name: { mk: "Луда мара бело куве", en: "Luda Mara White Cuvee" }, price: 1200, description: { mk: "750мл.", en: "750ml." } },
          { id: "luda_mara_crveno", name: { mk: "Луда мара црвено куве", en: "Luda Mara Red Cuvee" }, price: 1200, description: { mk: "750мл.", en: "750ml." } }
        ]
      }
    }
  }
};
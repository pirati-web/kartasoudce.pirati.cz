<template>
  <div>
    <div class="pb-8 md:pb-24 lg:pb-48">
      <div class="lead flex items-center">
        <img
          :srcset="
            require('~/static/img/justicni_areal.jpg?resize&sizes[]=320&sizes[]=640&sizes[]=1024&sizes[]=2048')
              .srcSet
          "
          class="lead-media"
        />
        <small class="lead-media-attribution"
          >Justiční areál v brněnských Štýřicích. Autor fotografie:
          <a
            href="https://commons.wikimedia.org/wiki/User:Bazi"
            class="underline"
            >Martin Strachoň</a
          ></small
        >
        <div
          class="container px-4 md:px-8 md:pt-8 hero flex flex-col items-center text-center text-white"
        >
          <h1 class="hero-title">
            Statistiky soudce
          </h1>
          <div class="hero-cite">
            <!-- <img
              :srcset="
                require('~/static/img/jakub_michalek.jpg?resize&sizes[]=192&sizes[]=320&sizes[]=640&sizes[]=1024')
                  .srcSet
              "
              class="hero-cite-face"
            />-->
            <cite class="hero-cite-claim">
              „Statistiky soudce mají zajistit transparentnější justici, aby měla veřejnost přehled o základních informacích o soudcích a o jejich činnosti a výsledcích.“
              </cite>
            <p class="hero-cite-author">
              Jakub Michálek, místopředseda ústavně právního výboru PSP ČR
            </p>
          </div>
          <a
            v-smooth-scroll="{ offset: 0, duration: 1000 }"
            href="#about"
            class="lead-showmore"
          >
            <i class="fa fa-arrow-circle-down"></i>
          </a>
        </div>
      </div>
      <div id="about" class="bg-brand-blackmid text-white">
        <section
          class="container container-resp text-center pt-8 pb-8 lg:pt-16 lg:pb-16"
        >
          <h1 class="head-super text-3xl md:text-5xl">O webu statistiky soudce</h1>
          <p class="md:text-xl">
            Veřejné statistiky soudce mají zajistit, aby veřejnost měla základní
            informace o jednotlivých soudcích a jejich činnosti, jak si stojí, a
            to i v porovnání s ostatními soudci v rámci jedné agendy jednoho
            soudu. K dispozici jsou základní údaje o daném soudci, statistiky o
            rychlosti jeho rozhodování, jím vydaná významná rozhodnutí a i
            případná kárná rozhodnutí o jeho osobě.
          </p>
        </section>
      </div>
      <div class="container container-resp flex-grow py-4 md:py-8">

        <div class="flex flex-row">
          <no-ssr>
            <aside v-if="$mq === 'xl'" class="w-1/4 block pt-12">
              <affix class="toc" relative-element-selector="#profile-sections">
                <scrollactive :offset="80">
                  <ul class="profile-navbar">
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#why-we-need"
                        >Proč to potřebujeme</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#what-it-looks-like-today"
                        >Jak to vypadá dnes</a
                      >
                    </li>                    
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#how-we-want-it"
                        >Jak to chceme my</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <NuxtLink class="scrollactive-item" to="/prototyp">Prototyp statistik soudce</NuxtLink>
                    </li>                    
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#faq"
                        >Časté dotazy (FAQ)</a>
                    </li>
                  </ul>
                </scrollactive>
              </affix>
            </aside>
          </no-ssr>
          <content
            id="profile-sections"
            class="xl:border-l border-brand-graylight xl:mt-10 xl:pl-8 xl:w-3/4"
          >
            <section class="profile-section">
              <h1 id="why-we-need" class="profile-section-headline">
                Proč to potřebujeme?
              </h1>

              <h2 class="profile-section-subsubheadline">K čemu to je?</h2>
              <p>
                Veřejná karta soudce má zajistit, aby veřejnost měla základní
                informace o jednotlivých soudcích a jejich činnosti, o tom, jak si
                stojí, a to i v porovnání s ostatními soudci v rámci jedné agendy
                jednoho soudu. K dispozici jsou základní údaje o daném soudci,
                statistiky o rychlosti jeho rozhodování, jím vydaná významná
                rozhodnutí a i případná kárná rozhodnutí o jeho osobě. Dále by
                součástí mohlo být i pravidelné hodnocení výkonnosti soudce, jeho
                majetkové přiznání a veřejných diář schůzek se stranami řízení či
                jejich zástupci.
              </p>
              <h2 class="profile-section-subsubheadline">
                Nebude sledování rychlosti vyřizování věcí na úkor kvality rozhodnutí?
              </h2>
              <p>
                Každý soudce funguje pod určitým časovým tlakem, aby rozhodoval o
                věcech účastníků řízení v rozumné době. Sledování rychlosti by
                rozhodně na úkor kvality rozhodnutí být nemělo. Cílem sledování je
                spíše nacházet výrazné excesy v rychlosti rozhodování.
              </p>
              <h2 class="profile-section-subsubheadline">
                Existuje měření délek řízení v zahraničí?
              </h2>
              <p>
               Ano. Například v Německu existuje tzv. systém výpočtu personálních požadavků soudních orgánů (německá zkratka PEBB§Y), který určuje, kolik času
               je potřeba pro každou činnost, aby bylo možné určit potřebný počet soudců, státních zástupců a soudních úředníků. Výpočetní systém PEBB§Y
               je založen na vzorci pro průměrnou dobu zpracování určité činnosti vyjádřenou v minutách. Každému typu činnosti je pak přiřažena určitá minutová
               dotace.
             </p>
              <h2 class="profile-section-subsubheadline">
                Proč není měřena míra rušení rozhodnutí nadřízeným soudem?
              </h2>
              <p>
                Vzhledem k tzv. sendvičovému efektu, o kterém píše právní vědec David
                Kosař, kdy jsou vzhledem k vývoji po Sametové revoluci okresní a
                obvodní soudy a Ústavní soud obsazeny převážně soudci jmenovanými až
                po roce 1989 a na odvolacích krajských a především vrchních soudech a
                Nejvyšším soudě jsou soudci jmenovaní ještě za minulého režimu, nemá
                metrika míry rušení rozhodnutí odvolacím soudem výpovědní hodnotu.
                Často se totiž stává, že odvolací soud (krajský nebo vrchní) a
                dovolací Nejvyšší soud zruší rozhodnutí prvostupňového soudu, avšak
                Ústavní soud poté zruší tato rušící rozhodnutí.
              </p>              
            </section>
            <section class="profile-section">
              <h1 id="what-it-looks-like-today" class="profile-section-headline">
                Jak to vypadá dnes
              </h1>

              <h2 class="profile-section-subsubheadline">K čemu to je?</h2>
              <p>
                Veřejná karta soudce má zajistit, aby veřejnost měla základní
                informace o jednotlivých soudcích a jejich činnosti, o tom, jak si
                stojí, a to i v porovnání s ostatními soudci v rámci jedné agendy
                jednoho soudu. K dispozici jsou základní údaje o daném soudci,
                statistiky o rychlosti jeho rozhodování, jím vydaná významná
                rozhodnutí a i případná kárná rozhodnutí o jeho osobě. Dále by
                součástí mohlo být i pravidelné hodnocení výkonnosti soudce, jeho
                majetkové přiznání a veřejných diář schůzek se stranami řízení či
                jejich zástupci.
              </p>
              <h2 class="profile-section-subsubheadline">
                Nebude sledování rychlosti vyřizování věcí na úkor kvality rozhodnutí?
              </h2>
              <p>
                Každý soudce funguje pod určitým časovým tlakem, aby rozhodoval o
                věcech účastníků řízení v rozumné době. Sledování rychlosti by
                rozhodně na úkor kvality rozhodnutí být nemělo. Cílem sledování je
                spíše nacházet výrazné excesy v rychlosti rozhodování.
              </p>
              <h2 class="profile-section-subsubheadline">
                Existuje měření délek řízení v zahraničí?
              </h2>
              <p>
               Ano. Například v Německu existuje tzv. systém výpočtu personálních požadavků soudních orgánů (německá zkratka PEBB§Y), který určuje, kolik času
               je potřeba pro každou činnost, aby bylo možné určit potřebný počet soudců, státních zástupců a soudních úředníků. Výpočetní systém PEBB§Y
               je založen na vzorci pro průměrnou dobu zpracování určité činnosti vyjádřenou v minutách. Každému typu činnosti je pak přiřažena určitá minutová
               dotace.
             </p>
              <h2 class="profile-section-subsubheadline">
                Proč není měřena míra rušení rozhodnutí nadřízeným soudem?
              </h2>
              <p>
                Vzhledem k tzv. sendvičovému efektu, o kterém píše právní vědec David
                Kosař, kdy jsou vzhledem k vývoji po Sametové revoluci okresní a
                obvodní soudy a Ústavní soud obsazeny převážně soudci jmenovanými až
                po roce 1989 a na odvolacích krajských a především vrchních soudech a
                Nejvyšším soudě jsou soudci jmenovaní ještě za minulého režimu, nemá
                metrika míry rušení rozhodnutí odvolacím soudem výpovědní hodnotu.
                Často se totiž stává, že odvolací soud (krajský nebo vrchní) a
                dovolací Nejvyšší soud zruší rozhodnutí prvostupňového soudu, avšak
                Ústavní soud poté zruší tato rušící rozhodnutí.
              </p>              
            </section>
            <section class="profile-section">
              <h1 id="how-we-want-it" class="profile-section-headline">
                Jak to chceme my
              </h1>

              <h2 class="profile-section-subsubheadline">K čemu to je?</h2>
              <p>
                Veřejná karta soudce má zajistit, aby veřejnost měla základní
                informace o jednotlivých soudcích a jejich činnosti, o tom, jak si
                stojí, a to i v porovnání s ostatními soudci v rámci jedné agendy
                jednoho soudu. K dispozici jsou základní údaje o daném soudci,
                statistiky o rychlosti jeho rozhodování, jím vydaná významná
                rozhodnutí a i případná kárná rozhodnutí o jeho osobě. Dále by
                součástí mohlo být i pravidelné hodnocení výkonnosti soudce, jeho
                majetkové přiznání a veřejných diář schůzek se stranami řízení či
                jejich zástupci.
              </p>
              <h2 class="profile-section-subsubheadline">
                Nebude sledování rychlosti vyřizování věcí na úkor kvality rozhodnutí?
              </h2>
              <p>
                Každý soudce funguje pod určitým časovým tlakem, aby rozhodoval o
                věcech účastníků řízení v rozumné době. Sledování rychlosti by
                rozhodně na úkor kvality rozhodnutí být nemělo. Cílem sledování je
                spíše nacházet výrazné excesy v rychlosti rozhodování.
              </p>
              <h2 class="profile-section-subsubheadline">
                Existuje měření délek řízení v zahraničí?
              </h2>
              <p>
               Ano. Například v Německu existuje tzv. systém výpočtu personálních požadavků soudních orgánů (německá zkratka PEBB§Y), který určuje, kolik času
               je potřeba pro každou činnost, aby bylo možné určit potřebný počet soudců, státních zástupců a soudních úředníků. Výpočetní systém PEBB§Y
               je založen na vzorci pro průměrnou dobu zpracování určité činnosti vyjádřenou v minutách. Každému typu činnosti je pak přiřažena určitá minutová
               dotace.
             </p>
              <h2 class="profile-section-subsubheadline">
                Proč není měřena míra rušení rozhodnutí nadřízeným soudem?
              </h2>
              <p>
                Vzhledem k tzv. sendvičovému efektu, o kterém píše právní vědec David
                Kosař, kdy jsou vzhledem k vývoji po Sametové revoluci okresní a
                obvodní soudy a Ústavní soud obsazeny převážně soudci jmenovanými až
                po roce 1989 a na odvolacích krajských a především vrchních soudech a
                Nejvyšším soudě jsou soudci jmenovaní ještě za minulého režimu, nemá
                metrika míry rušení rozhodnutí odvolacím soudem výpovědní hodnotu.
                Často se totiž stává, že odvolací soud (krajský nebo vrchní) a
                dovolací Nejvyšší soud zruší rozhodnutí prvostupňového soudu, avšak
                Ústavní soud poté zruší tato rušící rozhodnutí.
              </p>              
            </section>
            <section class="profile-section">
              <h1 id="faq" class="profile-section-headline">Často kladené otázky</h1>
              <h2 class="profile-section-subsubheadline">K čemu to je?</h2>
              <p>
                Veřejná karta soudce má zajistit, aby veřejnost měla základní
                informace o jednotlivých soudcích a jejich činnosti, o tom, jak si
                stojí, a to i v porovnání s ostatními soudci v rámci jedné agendy
                jednoho soudu. K dispozici jsou základní údaje o daném soudci,
                statistiky o rychlosti jeho rozhodování, jím vydaná významná
                rozhodnutí a i případná kárná rozhodnutí o jeho osobě. Dále by
                součástí mohlo být i pravidelné hodnocení výkonnosti soudce, jeho
                majetkové přiznání a veřejných diář schůzek se stranami řízení či
                jejich zástupci.
              </p>
              <h2 class="profile-section-subsubheadline">
                Nebude sledování rychlosti vyřizování věcí na úkor kvality rozhodnutí?
              </h2>
              <p>
                Každý soudce funguje pod určitým časovým tlakem, aby rozhodoval o
                věcech účastníků řízení v rozumné době. Sledování rychlosti by
                rozhodně na úkor kvality rozhodnutí být nemělo. Cílem sledování je
                spíše nacházet výrazné excesy v rychlosti rozhodování.
              </p>
              <h2 class="profile-section-subsubheadline">
                Existuje měření délek řízení v zahraničí?
              </h2>
              <p>
               Ano. Například v Německu existuje tzv. systém výpočtu personálních požadavků soudních orgánů (německá zkratka PEBB§Y), který určuje, kolik času
               je potřeba pro každou činnost, aby bylo možné určit potřebný počet soudců, státních zástupců a soudních úředníků. Výpočetní systém PEBB§Y
               je založen na vzorci pro průměrnou dobu zpracování určité činnosti vyjádřenou v minutách. Každému typu činnosti je pak přiřažena určitá minutová
               dotace.
             </p>
              <h2 class="profile-section-subsubheadline">
                Proč není měřena míra rušení rozhodnutí nadřízeným soudem?
              </h2>
              <p>
                Vzhledem k tzv. sendvičovému efektu, o kterém píše právní vědec David
                Kosař, kdy jsou vzhledem k vývoji po Sametové revoluci okresní a
                obvodní soudy a Ústavní soud obsazeny převážně soudci jmenovanými až
                po roce 1989 a na odvolacích krajských a především vrchních soudech a
                Nejvyšším soudě jsou soudci jmenovaní ještě za minulého režimu, nemá
                metrika míry rušení rozhodnutí odvolacím soudem výpovědní hodnotu.
                Často se totiž stává, že odvolací soud (krajský nebo vrchní) a
                dovolací Nejvyšší soud zruší rozhodnutí prvostupňového soudu, avšak
                Ústavní soud poté zruší tato rušící rozhodnutí.
              </p>

              <h2 class="profile-section-subsubheadline">
                Bylo by součástí karty soudce i pravidelné hodnocení soudců?
              </h2>
              <p>
                Pravidelné hodnocení soudců by mělo být prováděno malou skupinou lidí,
                kteří na to mají dostatek času, kvalifikace a tréninku, aby tuto
                činnost mohli provádět dobře. Vhodnou platformou na tuto činnost by
                byla Rada pro soudnictví. Teze poslance Michálka k Radě pro soudnictví
                jsou dostupné <a
                  href="https://drive.google.com/file/d/1bHGQQaw0jz6bPSyD0x5_BJYCOAH069OS/view"
                  class="underline"
                  >zde</a>.
              </p>
              <h2 class="profile-section-subsubheadline">
                Proč neuděláte veřejnou kartu i jiných ústavních činitelů, např.
                politiků?
              </h2>
              <p>
                U politiků to již prakticky existuje. Například každý z poslanců má
                profil na webu
                <a href="https://www.psp.cz/sqw/detail.sqw?id=6477">psp.cz</a>, kde je
                zveřejněna jeho fotografie, datum narození a sledována jeho aktivita.
              </p>

              <h2 class="profile-section-subsubheadline">
                Neporušujete práva účastníků řízení a nemůže karta soudce vést k
                diskriminaci např. na základě pohlaví, rasy či věku?
              </h2>
              <p>
                Vytváříme grafy vzešlé z dostatečného množství dat, přičemž z nich
                nelze vyčíst nic o osobních údajích účastníků řízení.
              </p>

              <h2 class="profile-section-subsubheadline">
                Proč uvádíte rok narození a fotografii soudce?
              </h2>
              <p>
                Rok narození uvádíme, aby byl soudce dostatečně určitě identifikován a
                aby byl znám jeho věk, přičemž rok narození není pro soudce jakožto
                ústavního činitele údajem neúměrně zasahujícím do jeho soukromí. Tento
                údaj považujeme za nezbytný pro splnění úkolu prováděného ve veřejném
                zájmu ve smyslu
                <a
                  href="https://eur-lex.europa.eu/legal-content/CS/TXT/HTML/?uri=CELEX:32016R0679&from=CS#d1e1880-1-1"
                  class="underline"
                  >čl. 6 odst. 1 písm. e) GDPR</a
                >. Navíc se jedná o zpřesňující údaj, který usnadní např. vyhledání
                soudce v obchodním rejstříku.


            <p class="pt-2">

                Fotografie je uvedena pouze u soudců, kteří vykonávají či v minulosti vykonávali funkcionářskou funkci, tedy byli předsedou
                nebo místopředsedou soudu.
              </p>

              <h2
                id="important-decision-methodology"
                class="profile-section-subsubheadline"
              >
                Metodika významných rozhodnutí
              </h2>
              <p>
                U daného soudce by byla možnost zobrazit si více filtrů rozhodnutí:
              </p>
              <ul class="list-disc list-outside ml-5 my-4">
                <li>všechna anonymizovaná rozhodnutí daného soudce,</li>
                <li>
                  významná rozhodnutí po právní či společenské stránce (viz dále),
                </li>
                <li>
                  rozhodnutí, u kterých byly shledány excesy rozhodnutím nadřízeného
                  soudu, které nebylo později zrušeno,
                </li>
                <li>
                  příp. nejlépe hodnocená rozhodnutí v reputačním systému.
                </li>
              </ul>
              <p>
                Významným rozhodnutím se myslí rozhodnutí významné po stránce právní
                či společenské (typicky významné kauzy veřejných činitelů, které se
                objevují v médiích). Za významné může rozhodnutí označit rozhodující
                soudce, kterýkoli jiný soudce působící na daném soudu včetně předsedy
                soudu, tiskový mluvčí soudu a dále předsedové soudů nebo senátů
                vyšších instancí. Významným rozhodnutím z právních důvodů je také
                rozhodnutí, které bylo publikováno v úřední sbírce rozhodnutí. Přesné
                vymezení minimální množiny významných rozhodnutí je uvedeno v
                Instrukci Ministerstva spravedlnosti ze dne 20. června 2002, č. j.
                20/2002-SM, kterou se upravuje postup při evidenci a zařazování
                rozhodnutí okresních, krajských a vrchních soudů do systému
                elektronické evidence soudní judikatury, která ovšem není zcela
                naplňována, viz šetření
                <a
                  href="https://www.ochrance.cz/fileadmin/user_upload/ESO/4292-15-JHO-vysledky_vyzkumu__849056_.pdf"
                  target="_blank"
                  rel="noopener"
                  class="underline"
                  >ombudsmanky</a
                >
                a měla by být za tímto účelem novelizována.
              </p>
              <p class="pt-2">
                K diskuzi je, že by vedle uvedeného systému měly možnost označit
                rozhodnutí za společensky významné rovněž osoby, které by se
                zaregistrovaly do připraveného systému (například hvězdičkou) tak,
                jako je to v proprietárních databázích judikatury. Tím by vznikl
                reputační systém v databázi, ať už navázaný na citování nebo hodnocení
                uživateli. Aktivní možnost hvězdičkovat by mohla být omezena např.
                pouze na registrované uživatele z řad právnických profesí (tj. zejména
                advokáty, soudce, státní zástupce a jejich koncipienty či asistenty).
              </p>

              <p class="pt-2">
                Cílem zveřejňování významných rozhodnutí není pouze hodnocení práce
                soudců, ale i informace občanům, aby rozsudky neměli pouze
                zprostředkovaně z médií.
              </p>

              <h2 id="data-methodology" class="profile-section-subsubheadline">
                Metodika použití dat pro grafy
              </h2>
              <p>
                Doba řízení se započítává, pokud nastanou následující události, po
                kterých se řízení dostává do dispozice soudce: zahájení řízení, tedy v
                okamžiku podání obžaloby, obživnutí věci typicky následující po
                zrušujícím rozhodnutí odvolacího soudu, pokračování řízení poté, co
                bylo přerušeno a vrácení spisu z jiného soudu. Zároveň však platí, že
                se doba řízení přestává započítávat poté, kdy bylo řízení přerušeno,
                bylo vydáno rozhodnutí, byla věc vyřízena, došlo k odeslání spisu na
                jiný soud, byla věc skončena či došlo k pravomocnému ukončení věci.
                Tyto typy událostí byly vybrány tak, aby se co nejvěrněji zachytila
                doba, kdy má soudce věc "na stole", přičemž se vycházelo ze způsobu
                zápisu jednotlivých událostí do databáze. Nezapočítávala se ta řízení,
                u kterých bezprostředně po zahájení řízení následovalo v řádu jednotek
                dnů vydání rozhodnutí, a to z důvodu, že se se vší pravděpodobností
                jedná o trestní příkazy, které vzhledem k jejich odlišnému stylu
                projednání nezapočítáváme, aby nezkreslily výsledek. Dále jsme
                nezapočítali taková řízení, na kterých se podílelo více soudců.
                Omezili jsme se pouze na řízení, která začala po 1. 1. 2013 a skončila
                před 31. 12. 2018.
              </p>
              <p class="pt-2">
                Protože Ministerstvo spravedlnosti nezveřejňuje data, na základě
                kterých by šlo porovnávat soudce v rámci specializací, měli jsme tedy
                možnost pracovat s daty toliko obecně v rámci agendy T, tedy trestních
                věcech.
              </p>
            </section>
          </content>
        </div>      

      </div>
    </div>
  </div>
</template>

<style lang="postcss">
@import '~/assets/css/headings.css';

.lead {
  position: relative;
  min-height: calc(100vh - 4rem);

  @screen md {
    min-height: calc(100vh - 7rem);
  }
}

.lead:before {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1) 150%);
}

.lead-media {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  object-fit: cover;
}

.lead-media-attribution {
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  color: #fff;
  text-shadow: 0 0 6px rgba(0, 0, 0, 1);

  @apply text-xs;

  @screen md {
    @apply text-sm;
  }
}

.lead-showmore {
  font-size: 3rem;
  position: absolute;
  display: inline-block;
  width: 3rem;
  height: 3rem;
  line-height: 3rem;
  left: 50%;
  bottom: 4rem;
  margin-left: -1.5rem;
  color: #fff;
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;

  @media (max-height: 705px) {
    display: none;
  }
}

.lead-showmore:hover {
  opacity: 1;
}

.hero {
  z-index: 1;

  @screen md {
    margin-top: -9rem;
  }
}

.hero-title {
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.9);

  @apply head-super text-4xl;

  @screen md {
    @apply text-7xl mb-16;
  }
}

.hero-cite {
  @apply max-w-4xl;

  text-shadow: 0 2px 8px rgba(0, 0, 0, 1);
}

.hero-cite-claim {
  @apply font-body font-black not-italic text-xl leading-tight;

  @screen md {
    @apply text-3xl;
  }
}

.hero-cite-author {
  @apply mt-2 text-lg font-medium;

  @screen md {
    @apply text-xl;
  }
}

.hero-cite-face {
  display: block;
  margin: auto;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
  border: 2px #fff solid;

  @apply w-32 h-32 rounded-full mb-4 mt-4;
}

.toc {
  width: 300px;
}

.profile-navbar {
  @apply text-right pr-8;
}

.profile-navbar-item {
  @apply head-super text-3xl;
}

.profile-navbar-item:not(:first-child) {
  @apply mt-4;
}

.scrollactive-item {
  @apply text-brand-graysemidark block;

  transition: padding 0.3s ease-in-out;
}

.scrollactive-item.is-active {
  @apply text-brand-blacksemi pb-4;
}

.profile-navbar-item:not(:first-child) .scrollactive-item.is-active {
  @apply pt-4;
}

.profile-section {
  @apply w-full;
}
.profile-section:not(:last-of-type) {
  @apply mb-24;
}

.profile-section-headline {
  @apply head-super text-3xl mb-8;
}

.profile-section-subheadline {
  @apply head-main text-2xl mb-4 mt-10;
}

.profile-section-subsubheadline {
  @apply head-main text-xl mt-6;
}

.profile-section-note {
  @apply text-lg;
}

.personal-data-item {
  @apply flex flex-col mb-2;
}

.personal-data-label {
  @apply head-main;
}

@screen md {
  .testimonials {
    min-height: calc(100vh - 7rem);
  }

  .profile-section-headline {
    @apply text-5xl;
  }

  .profile-section-subheadline {
    @apply head-main text-3xl mb-4;
  }

  .profile-section-subsubheadline {
    @apply head-main text-2xl;
  }

  .profile-section-note {
    @apply mb-8;
  }

  .personal-data-item {
    @apply flex-row;
  }

  .personal-data-label {
    @apply w-2/5;
  }

  .personal-data-value {
    @apply w-3/5;
  }
}

.decision + .decision {
  @apply mt-8;
}

.chart {
  max-width: 90vw;
}

.chart + .chart {
  @apply mt-16;

  @screen md {
    @apply mt-48;
  }
}
</style>

<script>

export default {
  components: {

  },
  methods: {
    scrollToMainContent() {}
  }
}
</script>

<template>
  <div>
    <div class="pb-8 md:pb-24 lg:pb-48">
      <div id="about" class="bg-brand-blackmid text-white">
        <section
          class="container container-resp text-center pt-8 pb-8 lg:pt-16 lg:pb-16"
        >
          <h1 class="head-super text-3xl md:text-5xl">Prototyp statistiky soudce</h1>
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
                      <a class="scrollactive-item" href="#personal-data"
                        >Osobní údaje</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#major-decisions"
                        >Významná rozhodnutí</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#decision-speed"
                        >Rychlost rozhodování</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#disciplinary-offenses"
                        >Kárná řízení</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#published-works"
                        >Publikační činnost</a
                      >
                    </li>
                    <li class="profile-navbar-item">
                      <a class="scrollactive-item" href="#salary">Plat</a>
                    </li>
                    <li class="profile-navbar-item" style="padding-top:2em">
                      <NuxtLink class="scrollactive-item" to="/"><i class="fa fa-arrow-circle-left"></i> Zpět na úvod</NuxtLink>
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
            <section id="personal-data" class="profile-section text-xl">
              <h1 class="profile-section-headline">Osobní údaje</h1>
              <div class="flex flex-col-reverse lg:flex-row">
                <div class="lg:w-2/3">
                  <div class="personal-data-item">
                    <div class="personal-data-label">Jméno a příjmení:</div>
                    <div class="personal-data-value">
                      JUDr. Helena Králová
                    </div>
                  </div>
                  <div class="personal-data-item">
                    <div class="personal-data-label">Rok narození:</div>
                    <div class="personal-data-value">
                      1951
                    </div>
                  </div>
                  <div class="personal-data-item">
                    <div class="personal-data-label">Působiště:</div>
                    <div class="personal-data-value">
                      1990 - současnost   OS pro Prahu 1 <br>
                      1996 - 2002 místopředsedkyně <br>
                      1979 – 1988    OS Karlovy Vary <br>
                      1975 - 1979    OS Cheb
                  </div>
                  </div>
                  <div class="personal-data-item">
                    <div class="personal-data-label">Soudcem od roku:</div>
                    <div class="personal-data-value">1975 (OS Cheb)</div>
                  </div>
                  <div class="personal-data-item">
                    <div class="personal-data-label">Jmenování:</div>
                    <div class="personal-data-value">
                      1990; na návrh ministra JUDr. Richtera (OF), projednala
                      Česká národní rada,
                      <a
                        href="http://www.psp.cz/eknih/1990cnr/tisky/t0072_00.htm"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        >tisk 72</a
                      >
                    </div>
                  </div>
                  <div class="personal-data-item">
                    <div class="personal-data-label">Vzdělání:</div>
                    <div class="personal-data-value">
                      Právnická fakulta UK v Praze
                    </div>
                  </div>
                  <div class="personal-data-item">
                    <div class="personal-data-label">Členství v KSČ:
                      <p class="profile-section-note" style="font-weight:normal; font-size:60%;padding-right:1em">
                        <i class="fa fa-info-circle" /> Ústavní soud v nálezu ze dne 8. 11. 2011, sp. zn. IV. ÚS 1642/11 rozhodl, že členství soudců v bývalé KSČ je veřejná informace
                      </p>
                    </div>
                    <div class="personal-data-value">
                      Před rokem 1989 byla členkou KSČ. Vystoupila v lednu 1990. 
                    </div>
                  </div>
                </div>
                <div class="lg:w-1/3 pb-4 lg:pb-0 lg:pl-4">
                  <img
                    :srcset="
                      require('~/static/img/kralova.jpg?resize&sizes[]=192&sizes[]=320&sizes[]=640&sizes[]=1024')
                        .srcSet
                    "
                    alt="JUDr. Helena Králová, Zdroj: ČTK/Zehl Igor"
                    class="rounded max-w-full"
                  />
                  <p class="text-sm pt-1">Zdroj: ČTK/Zehl Igor</p>                  
                  <p class="profile-section-note" style="font-weight:normal; font-size:60%">
                    <i class="fa fa-info-circle" /> Fotografie je uvedena pouze u soudců, kteří vykonávají či v minulosti vykonávali 
              funkcionářskou funkci, tedy byli předsedou nebo místopředsedou soudu.
                  </p>

                </div>
              </div>
              <p class="profile-section-note mt-8">
                <i class="fa fa-question-circle" /> Lze tyto informace
                zveřejňovat? Přečtěte si
                <a
                  href="https://github.com/pirati-byro/spisy-jm/blob/master/21523-prosba_o_pripominky_UOOU_karta%20soudce/02-odpoved/priloha_696901364_0_g568082.pdf"
                  rel="noopener"
                  target="_blank"
                  class="underline"
                  >vyjádření předsedkyně Úřadu pro ochranu osobních údajů</a
                >.
              </p>
            </section>

            <section class="profile-section">
              <h1 id="major-decisions" class="profile-section-headline">
                Významná rozhodnutí
              </h1>

              <p>
                <i class="fa fa-info-circle" /> Co je a co není významné
                rozhodnutí posuzujeme
                <a
                  v-smooth-scroll="{ offset: 0, duration: 1000 }"
                  href="#important-decision-methodology"
                  class="underline"
                  >dle metodiky</a
                >.
              </p>


              <h2 class="profile-section-subheadline">
                Ústavním soudem potvrzená či ve sbírce rozhodnutí publikovaná
                rozhodnutí
              </h2>

              <Decision
                year="2007"
                title="rozsudek OS Praha 1 ze dne 6. 3. 2007, sp. zn. 3 T 51/2006"
                note="Rozhodnutí potvrzeno Ústavním soudem v usnesení sp. zn. IV.ÚS 3121/07"
              >
                <ul class="list-disc list-outside ml-5">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1PvDHJ5AsXodbqH6j6tz4kJ0gdydmNozr/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >text rozsudku</a
                    >
                  </li>
                </ul>
              </Decision>


              <h2 class="profile-section-subheadline">
                Další významná rozhodnutí
              </h2>

              <Decision
                year="2014"
                title="Kauza armádního areálu v Břevnově – sp. zn. 3 T 93/2014"
              >
                <ul
                  class="list-disc list-outside ml-5"
                  status="pravomocně skončeno"
                  proceedingsLink="http://infosoud.justice.cz/InfoSoud/public/search.do?type=spzn&typSoudu=os&krajOrg=MSPHAAB&org=OSPHA01&cisloSenatu=3&druhVec=T&bcVec=93&rocnik=2014&spamQuestion=23&agendaNc=CIVIL"
                >
                  <li>
                    <a
                      href="https://drive.google.com/file/d/18mPFplSAQW9VetWj2wUSvq1cAlgahHpQ/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >rozsudek OS Praha 1 ze dne 21. 8. 2017</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1EWfron9qK8a00t6QVxDGRNVOwy8K5DFi/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >rozsudek MS Praha ze dne 1. 3. 2018</a
                    >
                  </li>
                </ul>
              </Decision>
              <Decision
                year="2012"
                title="Kauza velvyslance v Austrálii – porušení povinnosti při správě cizího majetku – sp. zn. 3 T 73/2012"
                proceedingsLink="http://infosoud.justice.cz/InfoSoud/public/search.do?type=spzn&typSoudu=os&krajOrg=MSPHAAB&org=OSPHA01&cisloSenatu=3&druhVec=T&bcVec=73&rocnik=2012&spamQuestion=23&agendaNc=CIVIL"
              >
                <ul class="list-disc list-outside ml-5">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/18QLswUjz1Om5b4NL_26-nC-DR69Dajal/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek OS Praha 1 ze dne 3. 9. 2013</a
                    >
                    - statní zástupce se neodvolal
                  </li>
                </ul>
              </Decision>
              <Decision
                year="1997"
                title="Případ vydírání ze strany devíti pražských taxikářů v kauze Thorges"
              >
                <ul class="list-disc list-outside ml-5">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1det8KQxtRhUuQNqDCWWTPk8YUVBPID84/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >odsuzující rozsudek OS Praha 1 ze dne 20. 6. 2002, sp.
                      zn. 8 T 162/97</a
                    >
                    (J. C.)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1vQ8q8GfiNGVLURlwp3vm2jMXq7_if4ej/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >odsuzující rozsudek OS Praha 1 ze dne 25. 2. 2004, sp.
                      zn. 3 T 92/2002</a
                    >
                    (J. M.)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1drJNuuKvr5CRUTsxdolYCo_1LPf2yrp8/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >odsuzující rozsudek OS Praha 1 ze dne 2. 12. 2004, , sp.
                      zn. 3 T 41/2004</a
                    >
                    (J. S., M. B., J. H.)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1hFEG1DEqMdNu_TgLYb977x0PVUAYyMvj/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 11. 5. 2005</a
                    >
                    (J. H., J. S., M. B.)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1GaoFzQ52inBotPCF76f2BLTboPzB0SNf/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >odsuzující a zprošťující rozsudek OS Praha 1 ze dne 13.
                      10. 2005, sp. zn. 3 T 41/2004</a
                    >
                    (J. S., J. H., M. B.)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1LuBJbmerc8ed48wk7Z9Kcox-gszG84aY/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 26. 1. 2006</a
                    >
                    (J. S., J. H.)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1-LFKFvgwJOTDxW7diI03MHpdeX9Xw1C9/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zproštění J. S. a J. H. a odsouzení J. S. rozsudkem OS
                      Praha 1 ze dne 13. 4. 2006, sp. zn. 3 T 34/2006</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1wwEnQvxSz1gtKa6UYnroiPvkJIw05rfQ/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >změňující usnesení MS Praha ze dne 2. 11. 2006 (J. S.)</a
                    >
                    &mdash; snížení trestu
                  </li>
                </ul>
              </Decision>

              <h2 class="profile-section-subheadline">
                Kauzy, kdy bylo rozhodnutí opakovaně rušeno nadřízeným soudem
              </h2>
              <p class="profile-section-note">
                Opakované rušení rozhodnutí odvolacím soudem indikuje, že nebyl
                respektován závazný právní názor odvolacího soudu. Přitom dle
                <a
                  href="https://www.zakonyprolidi.cz/cs/1961-141?text=trestn%C3%AD+%C5%99%C3%A1d#p264"
                  class="underline"
                  >§ 264 odst. 1</a
                >
                trestního řádu soud, jemuž věc byla vrácena k novému projednání
                a rozhodnutí, je vázán právním názorem, který vyslovil ve svém
                rozhodnutí odvolací soud, a je povinen provést úkony a doplnění,
                jejichž provedení odvolací soud nařídil.
              </p>

              <Decision
                year="2014"
                title="Kauza Nagyová – Vojenské zpravodajství – sp. zn. 3 T 35/2014"
                proceedings-link="http://infosoud.justice.cz/InfoSoud/public/search.do;jsessionid=FJeq2WGPsLqFODvs7Mqmf_U6UaTIW-sbDMedlzDs.infosoud01?type=spzn&typSoudu=os&krajOrg=MSPHAAB&org=OSPHA01&cisloSenatu=3&druhVec=T&bcVec=35&rocnik=2014&spamQuestion=23&agendaNc=CIVIL"
              >
                <ul class="list-disc list-outside ml-5">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1E1MSX68szzg5wsFIcFMsPrjqJvwwpCdh/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >trestní příkaz OS Praha 1 ze dne 27. 6. 2014</a
                    >
                    (Nagyová)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1Tr4GOw8fjfqy4YO7LYFD3H4hY3tP9tBQ/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >usnesení OS Praha 1 o postoupení ze dne 27. 6. 2014</a
                    >
                    (Páleník, Kovanda)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1FBhAKlrYWE300x6rGv8TVmpCt0fHTNHc/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >usnesení OS Praha 1 o zastavení trestního stíhání ze dne
                      27. 6. 2014</a
                    >
                    (Pohůnek)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1MJTj20tA6Qs3pREGww_00QVX-njYQIyL/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 3. 9. 2014</a
                    >
                    (Páleník, Kovanda)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1kIeytuLKwns6elEmFyMNR08jUP3DPPvc/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 3. 9. 2014</a
                    >
                    (Pohůnek)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1Oa0VeGqU0RyHiJ1GvbQ2VRZP6idjNaMM/view?usp=sharing"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek OS Praha 1 ze dne 29. 5. 2015</a
                    >
                    (Nagyová, Páleník, Kovanda, Pohůnek)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/14P-n_lHfJRm-lkjT8DEUZVNkmW8in3nI/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 30. 3. 2016</a
                    >
                    (Nagyová, Páleník, Kovanda, Pohůnek)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/17Zo5l_R9JRIzxjixXrkyCWY7XDj5ZC-N/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek OS Praha 1 ze dne 17. 6. 2016</a
                    >
                    (Nagyová, Páleník, Kovanda, Pohůnek)
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1oLnLYKarjCf8nwJGjiLIDfL0N8UdFuci/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 23. 12. 2016</a
                    >
                    (Nagyová, Páleník, Kovanda, Pohůnek) &mdash;
                    <strong
                      >rozhodnutí bylo zrušeno jako nezákonné a MS Praha zároveň
                      nařídil, aby byla věc projednána jiným soudcem</strong
                    >
                  </li>
                </ul>
              </Decision>
              <Decision
                year="2011"
                title="Kauza generálního sekretáře MZV – sp. zn. 3 T 91/2011"
                proceedings-link="http://infosoud.justice.cz/InfoSoud/public/search.do?type=spzn&typSoudu=os&krajOrg=MSPHAAB&org=OSPHA01&cisloSenatu=3&druhVec=T&bcVec=91&rocnik=2011&spamQuestion=23&agendaNc=CIVIL"
              >
                <ul class="list-disc list-outside ml-5">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1O_EDSvVY36XZCbdzvjHGHTccaGUFEKLm/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek OS Praha 1 ze dne 13. 11. 2013</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1VEPVzZwVwnFsjkaM36Q033UA7CgQvax-/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 19. 6. 2014</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1LUsScnqH3qRWHsg4bqQlRWft2v2cLPyd/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek OS Praha 1 ze dne 23. 10. 2014</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1P6sacjfwMHYO7kDJt2-yLO-Kp4v5d1cz/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 15. 4. 2015</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1fh1vOdLiMh3W8CgOTvpEgzsCoIieP2Qt/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek OS Praha 1 ze dne 26. 8. 2015</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1jcagZWX1F4y9DFHiKAHh5FrntBI-wc9a/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení MS Praha ze dne 7. 1. 2016</a
                    >
                    &mdash; <strong
                      >rozhodnutí bylo zrušeno jako nezákonné a MS Praha zároveň
                      nařídil, aby byla věc projednána jiným soudcem</strong
                    >
                  </li>
                </ul>
              </Decision>
              <Decision
                year="2010"
                title="Kauza bývalých manažerů ČEPRO – sp. zn. 3 T 41/2010"
                proceedings-link="http://infosoud.justice.cz/InfoSoud/public/search.do?type=spzn&typSoudu=os&krajOrg=MSPHAAB&org=OSPHA01&cisloSenatu=3&druhVec=T&bcVec=41&rocnik=2010&spamQuestion=23&agendaNc=CIVIL"
              >
                <ul class="list-disc list-outside ml-5">
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1yhJs0jP_49GKdxbahauNXyWrk6UJI1y-/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zastavení trestního stíhání</a
                    >
                    a
                    <a
                      href="https://drive.google.com/file/d/1tX_2n4EnFl-K9GDaPiOZ1kf8Puir1akl/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek</a
                    >
                    OS Praha 1 ze dne 18. 11. 2013, sp. zn. 3 T 41/2010
                  </li>
                  <li>
                    zamítnutí
                    <a
                      href="https://drive.google.com/file/d/1VTu-fLkaqOCzk8EWYC8xKZOgA8MLIFna/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >stížnosti</a
                    >
                    i
                    <a
                      href="https://drive.google.com/file/d/1H9ip1zTJXEswLEnZHYmaC8KM69WQtLz-/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >odvolání</a
                    >
                    státního zástupce MS Praha ze dne 20. 3. 2014
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1zV9JU2UGZXS3Buj7cGG-Ez4s48Dxsa70/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení Nejvyššího soudu ze dne 15. 7. 2015</a
                    >
                  </li>
                  <li>
                    opětovné
                    <a
                      href="https://drive.google.com/file/d/1FV0SaAM9dy29XmujEI8xE73Qu4_KoALH/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zastavení trestního stíhání</a
                    >
                    a
                    <a
                      href="https://drive.google.com/file/d/1DEZvw64XRhmbdAUuHmS0yq4une472Ge-/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek</a
                    >
                    OS Praha 1 ze dne 18. 12. 2015
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1naa5d6qcgAA1EMQvstnVr4c0YvYY2r85/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení o zastavení trestního stíhání</a
                    >
                    a
                    <a
                      href="https://drive.google.com/file/d/1bNZaFBx1PJ7JZcJxEKXTKcXqvloPzN45/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušení zprošťujícího rozsudku</a
                    >
                    MS Praha ze dne 31. 5. 2016
                  </li>
                  <li>
                    opětovné
                    <a
                      href="https://drive.google.com/file/d/1L3XbaItrKYUK3t54DRSDnDlp-ZYtcl3D/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zastavení trestního stíhání</a
                    >
                    a
                    <a
                      href="https://drive.google.com/file/d/1aEziwu-_PfVweQaSx2oE5T9CVaaiIY49/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zprošťující rozsudek</a
                    >
                    OS Praha 1 ze dne 23. 9. 2016
                  </li>
                  <li>
                    opětovné
                    <a
                      href="https://drive.google.com/file/d/1Rw2Mav_W5RxdIoa06uEvnXsu-f9IY45Y/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >zrušující usnesení o zastavení trestního stíhání</a
                    >
                    a
                    <a
                      href="https://drive.google.com/file/d/1xa7mkTm5kYJTLTSeVp8iA4Wl_ZmdPx0P/view"
                      target="_blank"
                      rel="noopener"
                      class="underline"
                      >opětovné zrušení zprošťujícího rozsudku</a
                    >
                    MS Praha ze dne 4. 4. 2017 &mdash; <strong
                      >rozhodnutí bylo zrušeno jako nezákonné a MS Praha zároveň
                      nařídil, aby byla věc projednána jiným soudcem</strong
                    >
                  </li>
                </ul>
              </Decision>
            </section>
            <section class="profile-section">
              <h1 id="decision-speed" class="profile-section-headline">
                Rychlost rozhodování
              </h1>

              <p class="profile-section-note">
                <i class="fa fa-info-circle" /> V případě, že jsou v řízení
                průtahy, lze podat stížnost podle
                <a
                  href="https://www.zakonyprolidi.cz/cs/2002-6#p164"
                  class="underline"
                  >§ 164</a
                >
                zákona o soudech a soudcích, případně lze podat návrh na určení
                lhůty k provedení procesního úkonu podle
                <a
                  href="https://www.zakonyprolidi.cz/cs/2002-6#p174"
                  class="underline"
                  >§ 174</a
                >
                zákona o soudech a soudcích.
              </p>
              <div
                class="flex flex-col flex-no-wrap items-center justify-center content-center"
              >
                <ProcessingDuration id="processing-duration" class="chart" />
                <AverageDecisionDuration
                  id="avg-decision-duration"
                  class="chart"
                />
                <LongestDecisionTime id="longest-decision-time" class="chart" />
                <DecisionTimeHistogram
                  id="decision-time-histogram"
                  class="chart"
                />
              </div>
            </section>
            <section class="profile-section">
              <h1 id="disciplinary-offenses" class="profile-section-headline">
                Kárná řízení
              </h1>
              <p class="profile-section-note">
                <i class="fa fa-info-circle" /> V sekci kárná řízení jsou
                uváděna pouze taková kárná rozhodnutí, která ukládají kárné
                opatření a nedošlo k jejich zahlazení dle
                <a
                  href="https://www.zakonyprolidi.cz/cs/2002-7#p24"
                  class="underline"
                  >§ 24</a
                >
                zákona o řízení ve věcech soudců a státních zástupců.
              </p>
              <DisciplinaryOffense
                year="2018"
                link="https://drive.google.com/file/d/1FiaNP3oT3BkQhFhxLRxuclKJmP8k2W14/view"
              >
                <a
                  href="https://drive.google.com/file/d/1FiaNP3oT3BkQhFhxLRxuclKJmP8k2W14/view"
                  target="_blank"
                  rel="noopener"
                  class="underline"
                  ><strong class="head-main text-xl"
                    >sp. zn. 16 Kss 7/2017</strong
                  ></a
                >
                &mdash; na základě kárné žaloby ministra spravedlnosti JUDr.
                Roberta Pelikána, Ph.D., uznána Nejvyšším správním soudem
                vinnou, že z nedbalosti v rozporu se závaznými právními názory
                odvolacího soudu hodnotila důkazy způsobem jsoucím v extrémním
                rozporu s rozumným myšlením, za což jí bylo uloženo kárné
                opatření ve formě snížení platu o 15 % na dobu 1 roku.
              </DisciplinaryOffense>
            </section>            
            <section class="profile-section">
              <h1 id="published-works" class="profile-section-headline">
                Publikační činnost
              </h1>

              <h2 class="profile-section-subheadline">Závěrečné práce</h2>

              <PublishedWork
                year="1981"
                title="Úhrnný trest"
                type="Rigorózní práce"
                summary-caption="Zobrazit závěry práce"
                summary-link="https://drive.google.com/file/d/16lLDwSsZ9Va3fW2ewFGYJYGsuG6bPJKU/view"
              ></PublishedWork>
            </section>
            <section class="profile-section">
              <h1 id="salary" class="profile-section-headline">
                Plat
              </h1>

              <div class="flex flex-col sm:flex-row">
                <h2 class="head-super text-2xl">2018</h2>
                <div class="sm:pl-8 text-lg">
                  <p>
                    Platová základna <strong>84.234 Kč</strong> x platový
                    koeficient <strong>1,51</strong> =
                    <strong>127.200 Kč/měsíc</strong>
                  </p>
                  <p class="pt-4 sm:pt-0">
                    V březnu 2018 uloženo kárné opatření 15% snížení platu na
                    dobu 1 roku.
                  </p>
                </div>
              </div>

              <p class="profile-section-note pt-8">
                <i class="fa fa-info-circle" /> Platová základna vychází ze sdělení Ministerstva práce a sociálních věcí <a
                        href="https://www.zakonyprolidi.cz/cs/2017-439"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        > č. 439/2017 Sb.</a
                      >
                 a

                platový koeficient vychází z <a
                        href="https://www.zakonyprolidi.cz/cs/1995-236#p28"
                        target="_blank"
                        rel="noopener"
                        class="underline"
                        > § 28 odst. 1 zákona č. 236/1995 Sb.</a>
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
import Decision from '~/components/Decision.vue'
import DisciplinaryOffense from '~/components/DisciplinaryOffense.vue'
import PublishedWork from '~/components/PublishedWork.vue'

import AverageDecisionDuration from '~/components/AverageDecisionDuration.vue'
import DecisionTimeHistogram from '~/components/DecisionTimeHistogram.vue'
import LongestDecisionTime from '~/components/LongestDecisionTime.vue'
import ProcessingDuration from '~/components/ProcessingDuration.vue'

export default {
  components: {
    AverageDecisionDuration,
    Decision,
    DecisionTimeHistogram,
    DisciplinaryOffense,
    LongestDecisionTime,
    ProcessingDuration,
    PublishedWork
  },
  methods: {
    scrollToMainContent() {}
  }
}
</script>
